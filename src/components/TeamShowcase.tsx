import { useEffect, useRef, useState } from "react";
import { useApp } from "./AppContext";
import { ArrowRight, Award, Cpu, Landmark, Plus } from "lucide-react";
import { motion, AnimatePresence, useInView, useAnimationControls, useReducedMotion } from "motion/react";

export interface TeamMember {
  id: string;
  name: string;
  roleEn: string;
  roleAm: string;
  badgeEn: string;
  badgeAm: string;
  monogram: string;
  isCeo?: boolean;
  taglineEn: string;
  taglineAm: string;
  summaryEn: string;
  summaryAm: string;
  specializations: string[];
  accentColor: string;
  glowColor: string;
  icon: typeof Award;
  // Optional portrait, e.g. "/team/biniyam.jpg" in public/. Shown with a gold duotone; the crest is used when absent.
  photo?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "biniyam",
    name: "Biniyam Haile",
    roleEn: "CEO & Founder",
    roleAm: "ዋና ስራ አስፈፃሚ እና መስራች",
    badgeEn: "Founder & Chief Executive",
    badgeAm: "መስራች እና ዋና ስራ አስፈፃሚ",
    monogram: "BH",
    isCeo: true,
    taglineEn: "Vision, strategy and client partnerships",
    taglineAm: "ራዕይ፣ ስትራቴጂ እና የደንበኞች አጋርነት",
    summaryEn: "Founded Beu Tech and sets its direction. Works closely with every client, from the first conversation to launch, to make sure each system solves a real problem.",
    summaryAm: "ቤዩ ቴክን የመሰረቱ እና አቅጣጫውን የሚወስኑ። እያንዳንዱ ስርዓት እውነተኛ ችግር እንዲፈታ ከመጀመሪያው ውይይት እስከ ማስጀመሪያው ከእያንዳንዱ ደንበኛ ጋር በቅርበት ይሰራሉ።",
    specializations: ["Executive Strategy", "Ecosystem Vision", "Global Growth"],
    accentColor: "#FFD700",
    glowColor: "rgba(255, 215, 0, 0.4)",
    icon: Award,
  },
  {
    id: "daniel",
    name: "Daniel",
    roleEn: "Chief Financial Officer",
    roleAm: "ዋና የፋይናንስ ኦፊሰር",
    badgeEn: "Chief Financial Officer",
    badgeAm: "ዋና የፋይናንስ ኦፊሰር",
    monogram: "D",
    isCeo: false,
    taglineEn: "Finance, planning and governance",
    taglineAm: "ፋይናንስ፣ እቅድ እና አስተዳደር",
    summaryEn: "Oversees finance, planning and compliance. Keeps the company on solid ground and makes sure every project is clearly and fairly budgeted.",
    summaryAm: "ፋይናንስን፣ እቅድን እና የህግ ተገዢነትን ይቆጣጠራሉ። ኩባንያው ጠንካራ መሰረት ላይ እንዲቆም እና እያንዳንዱ ፕሮጀክት ግልጽ እና ፍትሃዊ በጀት እንዲኖረው ያደርጋሉ።",
    specializations: ["Capital Strategy", "Fintech Governance", "Fiscal Architecture"],
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.35)",
    icon: Landmark,
  },
  {
    id: "dawit",
    name: "Dawit",
    roleEn: "Chief Technology Officer",
    roleAm: "ዋና የቴክኖሎጂ ኦፊሰር",
    badgeEn: "Chief Technology Officer",
    badgeAm: "ዋና የቴክኖሎጂ ኦፊሰር",
    monogram: "D",
    isCeo: false,
    taglineEn: "Engineering and architecture",
    taglineAm: "ምህንድስና እና የስርዓት አርክቴክቸር",
    summaryEn: "Leads engineering, from cloud infrastructure to code quality. Makes sure every system we deliver is fast, secure and built to last.",
    summaryAm: "ከደመና መሰረተ ልማት እስከ የኮድ ጥራት ምህንድስናን ይመራሉ። የምናስረክበው እያንዳንዱ ስርዓት ፈጣን፣ ደህንነቱ የተጠበቀ እና ዘላቂ እንዲሆን ያደርጋሉ።",
    specializations: ["Distributed Systems", "Cloud Security", "Enterprise Architecture"],
    accentColor: "#FBBF24",
    glowColor: "rgba(251, 191, 36, 0.35)",
    icon: Cpu,
  },
];

// Pointy-top hexagon, the same shape as the Beu Tech logo mark
const HEX_POINTS = "50,3 91,26.5 91,73.5 50,97 9,73.5 9,26.5";

// Order on the stage: founder in the middle, flanked by the officers
const STAGE_ORDER = ["daniel", "biniyam", "dawit"];

// Glowing brand-shaped crest used until a portrait photo is added
function HexCrest({ text, lit, large }: { text: string; lit: boolean; large: boolean }) {
  const size = large ? 150 : 124;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Slowly turning outer ring */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        <polygon points={HEX_POINTS} fill="none" stroke="#FFD700" strokeOpacity={lit ? 0.35 : 0.1} strokeWidth="0.6" strokeDasharray="1.5 3" />
      </motion.svg>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={`crest-${text}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <polygon
          points={HEX_POINTS}
          fill={`url(#crest-${text})`}
          stroke="#FFD700"
          strokeOpacity={lit ? 0.9 : 0.25}
          strokeWidth="2"
          strokeLinejoin="round"
          style={{ transition: "stroke-opacity 1s", filter: lit ? "drop-shadow(0 0 10px rgba(255,215,0,0.55))" : "none" }}
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center font-sans font-black tracking-tight bg-gradient-to-b from-[#FFF3B0] to-[#FFC400] bg-clip-text text-transparent transition-opacity duration-1000"
        style={{ fontSize: size * 0.3, opacity: lit ? 1 : 0.35 }}
      >
        {text}
      </span>
    </div>
  );
}

// A volumetric stage light falling from the top of a card, with drifting dust
// Flicker patterns for an old stage bulb: stuttering on at first, then brief hiccups later
const POWER_ON = { opacity: [0, 0.9, 0.15, 1, 0.35, 0.85, 1] };
const HICCUPS = [
  { opacity: [1, 0.2, 0.95, 0.35, 1] },
  { opacity: [1, 0.45, 1, 0.1, 0.8, 1] },
  { opacity: [1, 0.3, 1] },
];

function Spotlight({ on, delay }: { on: boolean; delay: number }) {
  const controls = useAnimationControls();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!on) return;
    if (reduce) {
      controls.set({ opacity: 1 });
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;
    // Every 40 to 75 seconds this bulb stutters briefly, independently of the others
    const scheduleHiccup = () => {
      timer = setTimeout(async () => {
        if (cancelled) return;
        if (!document.hidden) {
          const pattern = HICCUPS[Math.floor(Math.random() * HICCUPS.length)];
          await controls.start({ ...pattern, transition: { duration: 0.7 + Math.random() * 0.4, ease: "linear" } });
        }
        scheduleHiccup();
      }, 40000 + Math.random() * 35000);
    };
    controls
      .start({ ...POWER_ON, transition: { duration: 1.1, delay, ease: "linear" } })
      .then(() => !cancelled && scheduleHiccup());
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [on, delay, reduce, controls]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      initial={{ opacity: 0 }}
      animate={controls}
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 rounded-b-full bg-[#FFE680] shadow-[0_0_30px_8px_rgba(255,215,0,0.45)]" />
      <div
        className="absolute left-1/2 top-0 h-[85%] w-[130%] -translate-x-1/2 blur-md"
        style={{
          clipPath: "polygon(44% 0, 56% 0, 100% 100%, 0 100%)",
          background: "linear-gradient(to bottom, rgba(255,215,0,0.26), rgba(255,215,0,0.06) 60%, transparent 90%)",
        }}
      />
      {Array.from({ length: 7 }, (_, i) => (
        <span
          key={i}
          className="team-dust absolute h-[3px] w-[3px] rounded-full bg-[#FFE680]"
          style={{ left: `${30 + ((i * 37) % 40)}%`, top: `${25 + ((i * 23) % 45)}%`, animationDelay: `${i * 0.9}s` }}
        />
      ))}
    </motion.div>
  );
}

function LeaderCard({
  member,
  index,
  lit,
  open,
  onToggle,
}: {
  // The project has no @types/react, so JSX `key` must be declared for custom components
  key?: string;
  member: TeamMember;
  index: number;
  lit: boolean;
  open: boolean;
  onToggle: () => void;
}) {
  const { language, navigateTo } = useApp();
  const en = language === "en";
  const featured = !!member.isCeo;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={lit ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative w-[82%] shrink-0 snap-center sm:w-[60%] md:w-auto ${featured ? "md:-mt-10" : "md:mt-6"}`}
      onMouseEnter={() => window.matchMedia("(hover: hover)").matches && !open && onToggle()}
      onMouseLeave={() => window.matchMedia("(hover: hover)").matches && open && onToggle()}
    >
      <div
        className={`relative h-[460px] md:h-auto md:aspect-[3/4] overflow-hidden rounded-[1.75rem] border transition-colors duration-500 ${
          featured ? "border-[#FFD700]/35" : "border-white/10"
        } bg-[radial-gradient(ellipse_at_50%_0%,#1a150a_0%,#0b0b0b_55%,#070707_100%)]`}
      >
        <Spotlight on={lit} delay={0.2 + index * 0.35} />

        {/* Portrait: real photo when provided, otherwise the brand crest */}
        {member.photo ? (
          <>
            <img
              src={member.photo}
              alt={member.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 brightness-90 transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[#FFB800] mix-blend-color opacity-40" />
          </>
        ) : (
          <div className="absolute inset-x-0 top-[13%] md:top-[20%] flex justify-center origin-top scale-[0.8] md:scale-100">
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index }}>
              <HexCrest text={member.monogram} lit={lit} large={featured} />
            </motion.div>
          </div>
        )}

        {/* Name plate */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent px-6 pb-6 pt-24">
          {featured && (
            <span className="mb-3 inline-block rounded-full bg-[#FFD700] px-2.5 py-0.5 font-sans text-[10px] font-extrabold uppercase tracking-wider text-black">
              {en ? "Founder" : "መስራች"}
            </span>
          )}
          <h3 className={`font-sans font-extrabold tracking-tight text-white ${featured ? "text-3xl" : "text-2xl"}`}>{member.name}</h3>
          <p className="mt-1 font-sans text-sm font-semibold text-[#FFD700]">{en ? member.roleEn : member.roleAm}</p>
          <p className="mt-1 font-sans text-xs text-gray-400">{en ? member.taglineEn : member.taglineAm}</p>
        </div>

        {/* Profile that slides up on hover (desktop) or tap (touch) */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/95 to-black/70 p-6 backdrop-blur-sm"
            >
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FFD700]/80">
                {en ? member.badgeEn : member.badgeAm}
              </div>
              <h3 className="mt-2 font-sans text-2xl font-extrabold text-white">{member.name}</h3>
              <p className="mt-3 font-sans text-[13px] sm:text-sm leading-relaxed text-gray-300">{en ? member.summaryEn : member.summaryAm}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {member.specializations.map((spec) => (
                  <span key={spec} className="rounded-full border border-white/15 px-2.5 py-1 font-sans text-[11px] text-gray-300">
                    {spec}
                  </span>
                ))}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateTo("/contact");
                }}
                className="mt-5 inline-flex items-center gap-2 self-start py-2 font-sans text-sm font-semibold text-[#FFD700] hover:text-white transition-colors"
              >
                <span>{en ? "Talk to our team" : "ቡድናችንን ያነጋግሩ"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tap target for touch screens / keyboard */}
        <button
          onClick={onToggle}
          aria-expanded={open}
          aria-label={`${member.name}: ${en ? "view profile" : "መገለጫ ይመልከቱ"}`}
          className={`absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* Mirror-floor reflection on wide screens */}
      <div className="pointer-events-none mx-auto mt-2 hidden h-10 w-[85%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.14),transparent_70%)] blur-md md:block" />
    </motion.article>
  );
}

export default function TeamShowcase() {
  const { language } = useApp();
  const en = language === "en";
  const stageRef = useRef<HTMLDivElement>(null);
  // Lights switch on once the stage scrolls into view
  const lit = useInView(stageRef, { once: true, amount: 0.3 });
  const [openId, setOpenId] = useState<string | null>(null);
  const [active, setActive] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Founder in the middle on wide screens; first on phones (the carousel starts there)
  const ordered = STAGE_ORDER.map((id) => TEAM_MEMBERS.find((m) => m.id === id)!).filter(Boolean);

  // Start the phone carousel on the founder
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || window.matchMedia("(min-width: 768px)").matches) return;
    const founder = el.children[1] as HTMLElement | undefined;
    if (founder) el.scrollLeft = founder.offsetLeft - (el.clientWidth - founder.clientWidth) / 2;
  }, []);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement;
      if (Math.abs(c.offsetLeft + c.clientWidth / 2 - center) < Math.abs((el.children[best] as HTMLElement).offsetLeft + (el.children[best] as HTMLElement).clientWidth / 2 - center)) best = i;
    });
    setActive(best);
  };

  return (
    <section className="relative w-full text-white" id="team-showcase-section">
      {/* Dark stage backdrop with a haze line on the horizon */}
      <div className="pointer-events-none absolute inset-x-0 top-40 bottom-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,215,0,0.06),transparent_60%)]" />

      <div className="relative">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-3">
            <span className="h-px w-6 bg-[#FFD700]/60" />
            <span className="font-sans text-xs font-semibold tracking-[0.2em] text-[#FFD700] uppercase">{en ? "Leadership" : "አመራር"}</span>
            <span className="h-px w-6 bg-[#FFD700]/60" />
          </div>
          <h2 className="mt-4 font-sans text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-balance">
            {en ? (
              <>
                The People <span className="bg-gradient-to-b from-[#FFE55C] to-[#FFC400] bg-clip-text text-transparent">Behind</span> Beu Tech
              </>
            ) : (
              <>
                ከቤዩ ቴክ <span className="bg-gradient-to-b from-[#FFE55C] to-[#FFC400] bg-clip-text text-transparent">ጀርባ</span> ያሉት ሰዎች
              </>
            )}
          </h2>
          <p className="mt-5 font-sans text-base text-gray-400 leading-relaxed text-balance">
            {en
              ? "A team led by its founder. The people you meet on the first call are the people who build your system."
              : "በመስራቹ የሚመራ ቡድን። በመጀመሪያው ጥሪ የሚያገኟቸው ሰዎች ስርዓትዎን የሚገነቡት ናቸው።"}
          </p>
        </div>

        <div ref={stageRef}>
          <div
            ref={scrollerRef}
            onScroll={onScroll}
            className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[9%] pb-4 sm:px-[20%] md:mx-0 md:grid md:grid-cols-3 md:items-start md:gap-6 md:overflow-visible md:px-0 lg:gap-8"
          >
            {ordered.map((member, i) => (
              <LeaderCard
                key={member.id}
                member={member}
                index={i}
                lit={lit}
                open={openId === member.id}
                onToggle={() => setOpenId((cur) => (cur === member.id ? null : member.id))}
              />
            ))}
          </div>

          {/* Carousel position on phones */}
          <div className="mt-4 flex justify-center gap-2 md:hidden">
            {ordered.map((m, i) => (
              <span key={m.id} className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-[#FFD700]" : "w-1.5 bg-white/20"}`} />
            ))}
          </div>
          <p className="mt-3 text-center font-sans text-xs text-gray-600 md:hidden">
            {en ? "Swipe to meet the team · tap + for the full profile" : "ቡድኑን ለማግኘት ያንሸራትቱ · ለሙሉ መገለጫ + ይንኩ"}
          </p>
        </div>
      </div>
    </section>
  );
}
