import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "motion/react";
import { ArrowRight, Lock, PencilRuler, Palette, MonitorSmartphone, Rocket, Bell } from "lucide-react";
import { useApp } from "./AppContext";
import SectionHeading from "./SectionHeading";
import { REQUEST_PREFILL_KEY } from "../data/explorer";
import { sampleSites, ResponsiveSite } from "./MockSite";

type Bilingual = { en: string; am: string };

// The four moves every website goes through; the preview acts each one out
const STAGES: { id: string; icon: typeof Rocket; ms: number; title: Bilingual; desc: Bilingual }[] = [
  {
    id: "plan",
    icon: PencilRuler,
    ms: 3200,
    title: { en: "Sketch the structure", am: "መዋቅሩን መንደፍ" },
    desc: { en: "We map your goals, pages and content before a single pixel.", am: "ከአንድም ፒክሰል በፊት ግቦችዎን፣ ገጾችን እና ይዘትን እናቅዳለን።" },
  },
  {
    id: "design",
    icon: Palette,
    ms: 3200,
    title: { en: "Apply your brand", am: "ብራንድዎን መተግበር" },
    desc: { en: "Colors, type and imagery that feel unmistakably yours.", am: "በግልጽ የእርስዎ የሆኑ ቀለሞች፣ ፊደላት እና ምስሎች።" },
  },
  {
    id: "build",
    icon: MonitorSmartphone,
    ms: 5000,
    title: { en: "Fit every screen", am: "ለሁሉም ስክሪን ማስማማት" },
    desc: { en: "Coded to adapt perfectly, from phone to desktop.", am: "ከስልክ እስከ ኮምፒውተር በትክክል እንዲስማማ የተገነባ።" },
  },
  {
    id: "launch",
    icon: Rocket,
    ms: 5200,
    title: { en: "Go live and grow", am: "ማስጀመር እና ማደግ" },
    desc: { en: "Fast, secure and easy to find on Google from day one.", am: "ከመጀመሪያው ቀን ፈጣን፣ ደህንነቱ የተጠበቀ እና በGoogle በቀላሉ የሚገኝ።" },
  },
];

// What each sample site "receives" the moment it goes live
const LIVE_EVENTS: Record<string, Bilingual> = {
  clinic: { en: "New appointment booked", am: "አዲስ ቀጠሮ ተይዟል" },
  hotel: { en: "New reservation for 2 nights", am: "ለ2 ምሽት አዲስ ቦታ ተይዟል" },
  store: { en: "New order for 2 bags of coffee", am: "ለ2 ከረጢት ቡና አዲስ ትዕዛዝ" },
};

const SCORES: { value: number; label: Bilingual }[] = [
  { value: 98, label: { en: "Performance", am: "ፍጥነት" } },
  { value: 100, label: { en: "SEO", am: "SEO" } },
  { value: 97, label: { en: "Accessibility", am: "ተደራሽነት" } },
];

function ScoreRing({ value, label, delay }: { value: number; label: string; delay: number }) {
  const r = 15;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative h-11 w-11">
        <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
          <circle cx="18" cy="18" r={r} fill="none" stroke="rgba(52,211,153,0.15)" strokeWidth="3" />
          <motion.circle
            cx="18"
            cy="18"
            r={r}
            fill="none"
            stroke="#34d399"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            animate={{ strokeDashoffset: c * (1 - value / 100) }}
            transition={{ duration: 1.1, delay, ease: "easeOut" }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-[11px] font-bold text-emerald-300">{value}</span>
      </div>
      <span className="font-sans text-[9px] text-gray-400">{label}</span>
    </div>
  );
}

export default function WebsiteShowcase() {
  const { language, navigateTo } = useApp();
  const en = language === "en";
  const reduce = useReducedMotion();
  // The story only plays while the section is on screen, so visitors see it from the start
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.35 });

  const [siteIndex, setSiteIndex] = useState(0);
  // Visitors who prefer less motion get the finished result and can step through by hand
  const [stage, setStage] = useState(reduce ? 3 : 0);
  const [phone, setPhone] = useState(false);
  const [run, setRun] = useState(0);
  const site = sampleSites[siteIndex];
  const current = STAGES[stage];

  // Advance through the stages; after launch, move on to the next sample site
  useEffect(() => {
    if (reduce || !inView) return;
    const id = setTimeout(() => {
      if (stage === STAGES.length - 1) {
        setStage(0);
        setSiteIndex((i) => (i + 1) % sampleSites.length);
      } else {
        setStage(stage + 1);
      }
    }, current.ms);
    return () => clearTimeout(id);
  }, [stage, run, reduce, inView, current.ms]);

  // During "Fit every screen" the frame shrinks to a phone and back
  useEffect(() => {
    setPhone(false);
    if (current.id !== "build" || !inView) return;
    const shrink = setTimeout(() => setPhone(true), 700);
    const grow = setTimeout(() => setPhone(false), current.ms - 900);
    return () => {
      clearTimeout(shrink);
      clearTimeout(grow);
    };
  }, [stage, run, inView, current.id, current.ms]);

  const jump = (i: number) => {
    setStage(i);
    setRun((r) => r + 1);
  };

  const requestWebsite = () => {
    try {
      sessionStorage.setItem(REQUEST_PREFILL_KEY, "website");
    } catch {
      // Storage unavailable; the form just starts on its default
    }
    navigateTo("/solutions");
  };

  const wire = current.id === "plan";
  const live = current.id === "launch";
  const address = live
    ? site.url
    : current.id === "plan"
      ? `${site.url.split(".")[0]} · wireframe`
      : `staging.${site.url}`;

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-t border-white/[0.05] bg-[#0A0A0A] py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="website-showcase">
      {/* Blueprint grid behind the stage */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,215,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.06)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_60%_55%,black_10%,transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={en ? "Websites" : "ድረገጾች"}
          title={en ? "From First Sketch to a Website That Sells" : "ከመጀመሪያ ንድፍ እስከ የሚሸጥ ድረገጽ"}
          subtitle={
            en
              ? "Watch how we build one. Planned around your goals, designed for your brand, fitted to every screen and launched to bring you customers."
              : "እንዴት እንደምንገነባ ይመልከቱ። በግቦችዎ ዙሪያ የታቀደ፣ ለብራንድዎ የተነደፈ፣ ለሁሉም ስክሪን የተስማማ እና ደንበኞችን ለማምጣት የሚጀመር።"
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-6 lg:gap-12 items-center">
          {/* Steps: vertical list on wide screens */}
          <ol className="hidden lg:flex flex-col gap-2">
            {STAGES.map((s, i) => {
              const Icon = s.icon;
              const active = i === stage;
              return (
                <li key={s.id}>
                  <button
                    onClick={() => jump(i)}
                    className={`w-full rounded-xl border p-4 text-left transition-colors ${
                      active ? "border-[#FFD700]/40 bg-[#FFD700]/[0.05]" : "border-transparent hover:bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                          active ? "border-[#FFD700] bg-[#FFD700] text-black" : i < stage ? "border-[#FFD700]/40 text-[#FFD700]" : "border-white/10 text-gray-500"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="font-mono text-[10px] font-bold tracking-widest text-gray-500">0{i + 1}</div>
                        <div className={`font-sans text-sm font-bold ${active ? "text-white" : "text-gray-400"}`}>{s.title[language]}</div>
                      </div>
                    </div>
                    <AnimatePresence initial={false}>
                      {active && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 pl-11 font-sans text-sm leading-relaxed text-gray-400">{s.desc[language]}</p>
                          {!reduce && inView && (
                            <div className="mt-3 ml-11 h-0.5 overflow-hidden rounded-full bg-white/10">
                              <motion.div
                                key={`${stage}-${run}-${siteIndex}`}
                                className="h-full bg-[#FFD700]"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: s.ms / 1000, ease: "linear" }}
                              />
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Steps: segmented progress on phones and tablets */}
          <div className="lg:hidden">
            <div className="grid grid-cols-4 gap-1.5">
              {STAGES.map((s, i) => (
                <button key={s.id} onClick={() => jump(i)} className="py-2 text-left" aria-label={s.title[language]}>
                  <div className="h-1 overflow-hidden rounded-full bg-white/10">
                    {i < stage && <div className="h-full w-full bg-[#FFD700]/60" />}
                    {i === stage && (
                      <motion.div
                        key={`${stage}-${run}-${siteIndex}`}
                        className="h-full bg-[#FFD700]"
                        initial={{ width: reduce ? "100%" : "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: reduce ? 0 : s.ms / 1000, ease: "linear" }}
                      />
                    )}
                  </div>
                  <div className={`mt-1.5 font-mono text-[10px] font-bold ${i === stage ? "text-[#FFD700]" : "text-gray-600"}`}>0{i + 1}</div>
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="mt-2"
              >
                <div className="font-sans text-base font-bold text-white">{current.title[language]}</div>
                <p className="mt-1 font-sans text-sm text-gray-400">{current.desc[language]}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* The stage */}
          <div className="relative">
            <div className="relative flex h-[440px] items-center justify-center">
              <motion.div
                animate={{ width: phone ? 196 : "100%", borderRadius: phone ? 30 : 14 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="relative flex h-full flex-col overflow-hidden border border-white/10 bg-[#141414] shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
              >
                {/* Window chrome: browser bar, or a notch in phone shape */}
                <div className="relative flex h-9 shrink-0 items-center gap-2 border-b border-white/[0.06] px-3">
                  <AnimatePresence initial={false} mode="wait">
                    {phone ? (
                      <motion.span
                        key="notch"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mx-auto h-4 w-16 rounded-full bg-black"
                      />
                    ) : (
                      <motion.div key="bar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex w-full items-center gap-2">
                        <div className="flex gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-white/15" />
                          <span className="h-2 w-2 rounded-full bg-white/15" />
                          <span className="h-2 w-2 rounded-full bg-white/15" />
                        </div>
                        <div className="mx-auto flex max-w-[65%] items-center gap-1.5 rounded-md bg-white/[0.05] px-2.5 py-0.5 font-mono text-[10px] text-gray-400 truncate">
                          {live && <Lock className="h-2.5 w-2.5 shrink-0 text-emerald-400" />}
                          <span className="truncate">{address}</span>
                        </div>
                        <div className="w-8" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* The site itself, re-keyed per sample so it rebuilds from the wireframe */}
                <div className="relative min-h-0 flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={site.id}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <ResponsiveSite site={site} en={en} wire={wire} />
                    </motion.div>
                  </AnimatePresence>

                  {/* Plan: a 12-column layout grid laid over the wireframe */}
                  <AnimatePresence>
                    {wire && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="pointer-events-none absolute inset-0 grid grid-cols-6 sm:grid-cols-12 gap-2 px-[5%]"
                      >
                        {Array.from({ length: 12 }, (_, i) => (
                          <div key={i} className={`bg-[#FFD700]/[0.07] ${i >= 6 ? "hidden sm:block" : ""}`} />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Floating context chips per stage */}
              <AnimatePresence mode="wait">
                {current.id === "design" && (
                  <motion.div
                    key="palette"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/80 px-3 py-2 backdrop-blur"
                  >
                    {[site.accent, site.text, site.card].map((color) => (
                      <span key={color} className="h-4 w-4 rounded-full border border-white/20" style={{ background: color }} />
                    ))}
                    <span className="ml-1 font-serif text-sm text-white">Aa</span>
                    <span className="font-sans text-[10px] text-gray-400">{en ? "Brand kit applied" : "የብራንድ ኪት ተተግብሯል"}</span>
                  </motion.div>
                )}
                {current.id === "build" && (
                  <motion.div
                    key="responsive"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/80 px-3 py-2 backdrop-blur"
                  >
                    <MonitorSmartphone className="h-4 w-4 text-[#FFD700]" />
                    <span className="font-mono text-[10px] text-gray-300">{phone ? "390 px" : "1280 px"}</span>
                    <span className="font-sans text-[10px] text-emerald-400">{en ? "Responsive ✓" : "ተስማሚ ✓"}</span>
                  </motion.div>
                )}
                {live && (
                  <motion.div
                    key="scores"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-black/85 px-3.5 py-2.5 backdrop-blur"
                  >
                    <div className="mb-1.5 font-sans text-[9px] font-semibold uppercase tracking-widest text-gray-500">
                      {en ? "Launch checks" : "የማስጀመሪያ ፍተሻ"}
                    </div>
                    <div className="flex gap-3">
                      {SCORES.map((sc, i) => (
                        <div key={sc.label.en}>
                          <ScoreRing value={sc.value} label={sc.label[language]} delay={0.5 + i * 0.15} />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Go-live moment: the first customer arrives */}
              <AnimatePresence>
                {live && (
                  <motion.div
                    key={`toast-${site.id}`}
                    initial={{ opacity: 0, x: 24, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 24 }}
                    transition={{ delay: 1.4, type: "spring", stiffness: 260, damping: 22 }}
                    className="absolute right-3 top-12 flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/85 px-3 py-2.5 shadow-xl backdrop-blur"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300">
                      <Bell className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <div className="font-sans text-[11px] font-bold text-white">{LIVE_EVENTS[site.id][language]}</div>
                      <div className="font-sans text-[10px] text-gray-500">{en ? "just now" : "አሁን"}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sample switcher */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <span className="font-sans text-xs text-gray-600">{en ? "Sample" : "ናሙና"}</span>
              {sampleSites.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setSiteIndex(i);
                    jump(0);
                  }}
                  className={`rounded-full border px-3.5 py-2 font-sans text-xs font-semibold transition-colors ${
                    i === siteIndex ? "border-[#FFD700]/50 bg-[#FFD700]/10 text-[#FFD700]" : "border-white/10 text-gray-400 hover:text-white"
                  }`}
                >
                  {s.tab[language]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <button
            onClick={requestWebsite}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFD700] px-7 py-3.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,215,0,0.25)] transition-colors hover:bg-[#FFE033] active:scale-[0.98]"
          >
            <span>{en ? "Start Your Website" : "ድረገጽዎን ይጀምሩ"}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-center font-sans text-xs text-gray-500">
            {en
              ? "Every site is mobile friendly, ready for search, available in any language, able to take payments and easy to update."
              : "እያንዳንዱ ድረገጽ ለሞባይል ተስማሚ፣ ለፍለጋ ዝግጁ፣ በማንኛውም ቋንቋ የሚገኝ፣ ክፍያ የሚቀበል እና በቀላሉ የሚሻሻል ነው።"}
          </p>
        </div>
      </div>
    </section>
  );
}
