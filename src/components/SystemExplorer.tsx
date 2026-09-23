import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { useApp } from "./AppContext";
import { explorerTree, ExplorerOption, ExplorerQuestion, REQUEST_PREFILL_KEY } from "../data/explorer";
import { solutions } from "../data/solutions";
import { SolutionPreview } from "./Previews";

interface Edge {
  id: string;
  d: string;
  // On the visitor's chosen path (drawn bright)
  chosen: boolean;
  // Newest branches (carry a travelling spark)
  live: boolean;
}

// Layout position ignoring CSS transforms, so entrance animations don't skew the branches
function offsetWithin(el: HTMLElement, container: HTMLElement) {
  let x = 0;
  let y = 0;
  let cur: HTMLElement | null = el;
  while (cur && cur !== container) {
    x += cur.offsetLeft;
    y += cur.offsetTop;
    cur = cur.offsetParent as HTMLElement | null;
  }
  return { x, y, w: el.offsetWidth, h: el.offsetHeight };
}

const isWide = () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches;

export default function SystemExplorer() {
  const { language, navigateTo } = useApp();
  const en = language === "en";
  const reduce = useReducedMotion();

  // Selected option id for each answered question
  const [path, setPath] = useState<string[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [wide, setWide] = useState(isWide);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodes = useRef(new Map<string, HTMLElement>());

  // Questions currently on screen, and the final pick (if any)
  const levels: ExplorerQuestion[] = [explorerTree];
  let picked: ExplorerOption | undefined;
  path.forEach((id, i) => {
    picked = levels[i]?.options.find((o) => o.id === id);
    if (picked?.next) levels.push(picked.next);
  });
  const solution = picked?.solutionId ? solutions.find((s) => s.id === picked!.solutionId) : undefined;

  const register = (id: string) => (el: HTMLElement | null) => {
    if (el) nodes.current.set(id, el);
    else nodes.current.delete(id);
  };

  // Picking an answer prunes everything after it; tapping the current answer again reopens that question
  const choose = (level: number, id: string) => {
    const reopening = path[level] === id;
    setPath((prev) => (prev[level] === id ? prev.slice(0, level) : [...prev.slice(0, level), id]));
    if (isWide() || reopening) return;
    const option = levels[level].options.find((o) => o.id === id);
    const targetId = option?.next ? `explorer-level-${level + 1}` : "explorer-result";
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }, 800); // after the other answers have folded away
  };

  const computeEdges = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const horizontal = isWide();
    setWide(horizontal);
    const out: Edge[] = [];

    const link = (fromId: string, toId: string, chosen: boolean, live: boolean) => {
      const a = nodes.current.get(fromId);
      const b = nodes.current.get(toId);
      if (!a || !b) return;
      const p = offsetWithin(a, container);
      const q = offsetWithin(b, container);
      let d: string;
      if (horizontal) {
        // Smooth S-curve from the right edge of the answer to the left edge of each branch
        const x1 = p.x + p.w, y1 = p.y + p.h / 2, x2 = q.x, y2 = q.y + q.h / 2, mx = (x1 + x2) / 2;
        d = `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
      } else {
        // Tree-style elbow down the left side on narrow screens
        const x1 = p.x + 22, y1 = p.y + p.h, x2 = q.x, y2 = q.y + q.h / 2, r = 10;
        d = x2 < x1 + r
          ? `M ${x1} ${y1} L ${x1} ${q.y}` // target sits directly below: drop straight into it
          : `M ${x1} ${y1} L ${x1} ${y2 - r} Q ${x1} ${y2} ${x1 + r} ${y2} L ${x2} ${y2}`;
      }
      out.push({ id: `${fromId}->${toId}`, d, chosen, live });
    };

    path.forEach((id, level) => {
      const isLast = level === path.length - 1;
      const nextLevel = levels[level + 1];
      if (nextLevel) nextLevel.options.forEach((o) => link(id, o.id, path.includes(o.id), isLast));
      else if (solution) link(id, "result", true, true);
    });
    setEdges(out);
    // levels and solution are derived from path
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, language]);

  useLayoutEffect(() => {
    computeEdges();
    // Once more after fonts/previews settle
    const t1 = setTimeout(computeEdges, 380);
    const t2 = setTimeout(computeEdges, 800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [computeEdges]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const ro = new ResizeObserver(() => computeEdges());
    ro.observe(container);
    return () => ro.disconnect();
  }, [computeEdges]);

  const requestSystem = () => {
    if (!solution) return;
    try {
      sessionStorage.setItem(REQUEST_PREFILL_KEY, solution.id);
    } catch {
      // Storage unavailable; the form just starts on its default
    }
    navigateTo("/solutions");
  };

  const stepLabels = en ? ["About you", "Your first need", "Your system"] : ["ስለ እርስዎ", "የመጀመሪያ ፍላጎትዎ", "ስርዓትዎ"];
  const activeStep = solution ? 2 : path.length;

  return (
    <div>
      {/* Progress + restart */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <ol className="flex items-center gap-2 sm:gap-3">
          {stepLabels.map((label, i) => (
            <li key={label} className="flex items-center gap-2 sm:gap-3">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full border text-[11px] font-bold transition-colors duration-300 ${
                  i < activeStep || (solution && i === 2)
                    ? "border-[#FFD700] bg-[#FFD700] text-black"
                    : i === activeStep
                      ? "border-[#FFD700] text-[#FFD700]"
                      : "border-white/15 text-gray-600"
                }`}
              >
                {i < activeStep || (solution && i === 2) ? <Check className="h-3.5 w-3.5" /> : i + 1}
              </span>
              <span className={`hidden sm:inline font-sans text-xs font-semibold ${i <= activeStep ? "text-gray-200" : "text-gray-600"}`}>
                {label}
              </span>
              {i < stepLabels.length - 1 && <span className={`h-px w-6 sm:w-10 ${i < activeStep ? "bg-[#FFD700]/60" : "bg-white/10"}`} />}
            </li>
          ))}
        </ol>
        {path.length > 0 && (
          <button
            onClick={() => setPath([])}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-gray-400 hover:border-white/25 hover:text-white transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>{en ? "Start over" : "እንደገና ይጀምሩ"}</span>
          </button>
        )}
      </div>

      <div
        ref={containerRef}
        className="relative flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-x-16 lg:gap-y-0 lg:items-center"
        id="system-explorer"
      >
        {/* Animated branches */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
          {edges.map((e) => (
            <motion.path
              key={e.id}
              d={e.d}
              fill="none"
              stroke="#FFD700"
              strokeOpacity={e.chosen ? 0.75 : e.live ? 0.45 : 0.15}
              strokeWidth={e.chosen ? 1.75 : 1.25}
              strokeLinecap="round"
              initial={{ pathLength: reduce ? 1 : 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          ))}
        </svg>
        {/* Sparks travelling along the newest branches */}
        {!reduce &&
          edges
            .filter((e) => e.live)
            .map((e, i) => (
              <span
                key={`spark-${e.id}`}
                className="branch-spark pointer-events-none absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-[#FFD700] shadow-[0_0_10px_#FFD700]"
                style={{ offsetPath: `path("${e.d}")`, animationDelay: `${0.7 + i * 0.25}s` }}
              />
            ))}

        {/* Question columns */}
        {levels.map((q, level) => {
          const chosen = path[level];
          return (
            <motion.div
              key={level === 0 ? "root" : path.slice(0, level).join("/")}
              initial={{ opacity: 0, x: level === 0 ? 0 : -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: level === 0 ? 0 : 0.3 }}
              className={`relative ${level > 0 ? "ml-10 lg:ml-0 scroll-mt-44" : "scroll-mt-24"}`}
              id={`explorer-level-${level}`}
            >
              <div className="mb-4">
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FFD700]/80">
                  {en ? `Question ${level + 1} of 2` : `ጥያቄ ${level + 1} ከ 2`}
                </div>
                <h3 className="mt-1.5 font-sans text-lg font-bold text-white">{q.question[language]}</h3>
              </div>
              <div className="flex flex-col gap-3">
                <AnimatePresence initial={false}>
                  {q.options
                    // On phones the answers you didn't pick fold away; the tree grows downward
                    .filter((opt) => wide || chosen === undefined || chosen === opt.id)
                    .map((opt, idx) => {
                      const Icon = opt.icon;
                      const isChosen = chosen === opt.id;
                      const dimmed = chosen !== undefined && !isChosen;
                      return (
                        <motion.button
                          key={opt.id}
                          layout="position"
                          ref={register(opt.id)}
                          onClick={() => choose(level, opt.id)}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: dimmed ? 0.45 : 1, x: 0 }}
                          exit={{ opacity: 0, height: 0, marginTop: -12, paddingTop: 0, paddingBottom: 0, borderWidth: 0 }}
                          transition={{ duration: 0.35, delay: level === 0 ? idx * 0.08 : 0.45 + idx * 0.1 }}
                          whileHover={{ opacity: 1 }}
                          whileTap={{ scale: 0.98 }}
                          className={`group relative z-10 flex min-h-[64px] items-center gap-3 overflow-hidden rounded-xl border p-3.5 text-left transition-colors duration-300 ${
                            isChosen
                              ? "border-[#FFD700]/60 bg-[#FFD700]/[0.08]"
                              : "border-white/10 bg-[#0E0E0E] hover:border-[#FFD700]/40"
                          }`}
                          aria-pressed={isChosen}
                        >
                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                              isChosen ? "border-[#FFD700]/50 bg-[#FFD700] text-black" : "border-[#FFD700]/20 bg-[#FFD700]/10 text-[#FFD700]"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block font-sans text-sm font-bold text-white">{opt.label[language]}</span>
                            <span className="block font-sans text-xs text-gray-500 truncate">{opt.hint[language]}</span>
                          </span>
                          {isChosen ? (
                            wide ? (
                              <Check className="h-4 w-4 shrink-0 text-[#FFD700]" />
                            ) : (
                              <span className="flex shrink-0 items-center gap-1 rounded-full border border-[#FFD700]/30 px-2 py-1 font-sans text-[11px] font-semibold text-[#FFD700]">
                                <RotateCcw className="h-3 w-3" />
                                {en ? "Change" : "ቀይር"}
                              </span>
                            )
                          ) : (
                            <ArrowRight className="h-4 w-4 shrink-0 text-gray-600 transition-transform group-hover:translate-x-0.5 group-hover:text-[#FFD700]" />
                          )}
                        </motion.button>
                      );
                    })}
                </AnimatePresence>
              </div>
              {level === 0 && path.length === 0 && (
                <motion.p
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                  className="mt-4 font-sans text-xs text-gray-500"
                >
                  {en ? "Pick one to begin →" : "ለመጀመር አንዱን ይምረጡ →"}
                </motion.p>
              )}
            </motion.div>
          );
        })}

        {/* Placeholder for the next question (wide screens only) */}
        {levels.length === 1 && (
          <div className="hidden lg:flex h-full min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-white/10 p-6 text-center font-sans text-sm text-gray-600">
            {en ? "Your answer opens the next question" : "መልስዎ ቀጣዩን ጥያቄ ይከፍታል"}
          </div>
        )}

        {/* Result: the system that fits */}
        {solution ? (
          <motion.div
            key={solution.id}
            ref={register("result")}
            initial={{ opacity: 0, x: -12, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.5 }}
            className="relative z-10 ml-10 lg:ml-0 scroll-mt-44 rounded-2xl border border-[#FFD700]/40 bg-[#0E0E0E] p-5 sm:p-6 shadow-[0_0_40px_rgba(255,215,0,0.08)]"
            id="explorer-result"
          >
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              {en ? "A great place to start" : "ለመጀመር ምርጥ ቦታ"}
            </div>
            <h3 className="mt-1.5 font-sans text-xl font-extrabold text-white">{solution.title[language]}</h3>
            <p className="mt-1 font-sans text-sm text-gray-400">{solution.tagline[language]}</p>
            <div className="mt-4">
              <SolutionPreview id={solution.id} en={en} title={solution.title[language]} />
            </div>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
              {solution.features[language].map((f) => (
                <li key={f} className="flex items-start gap-2 font-sans text-xs text-gray-300">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FFD700]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col sm:flex-row gap-2">
              <button
                onClick={requestSystem}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#FFD700] px-5 py-3 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,215,0,0.25)] hover:bg-[#FFE033] transition-colors"
              >
                <span>{en ? "Request This System" : "ይህንን ስርዓት ይጠይቁ"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigateTo("/solutions")}
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-bold text-white hover:border-white/30 transition-colors"
              >
                {en ? "See everything" : "ሁሉንም ይመልከቱ"}
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="hidden lg:flex h-full min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-white/10 p-6 text-center font-sans text-sm text-gray-600">
            {en ? "Your system appears here" : "ስርዓትዎ እዚህ ይታያል"}
          </div>
        )}
      </div>
    </div>
  );
}
