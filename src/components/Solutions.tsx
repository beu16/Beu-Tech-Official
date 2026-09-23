import { useApp } from "./AppContext";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { ownProduct } from "../data/solutions";
import SystemExplorer from "./SystemExplorer";
import SectionHeading from "./SectionHeading";

// Three concentric rings; the first `level` are lit. Visualizes the widening scope.
export function RingMark({ level }: { level: 1 | 2 | 3 }) {
  return (
    <svg className="h-7 w-7 shrink-0" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="12.5" stroke="#FFD700" strokeOpacity={level >= 3 ? 0.9 : 0.15} strokeWidth="1.5" />
      <circle cx="14" cy="14" r="8" stroke="#FFD700" strokeOpacity={level >= 2 ? 0.9 : 0.15} strokeWidth="1.5" />
      <circle cx="14" cy="14" r="3.5" fill="#FFD700" />
    </svg>
  );
}

export function TierLabel({ level, label }: { level: 1 | 2 | 3; label: string }) {
  return (
    <div className="flex items-center space-x-3 mb-5">
      <RingMark level={level} />
      <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gray-400">{label}</span>
      <span className="h-px flex-1 bg-white/[0.06]" />
    </div>
  );
}

export default function Solutions() {
  const { navigateTo, language } = useApp();
  const en = language === "en";

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="solutions-showcase">
      {/* Slowly turning concentric rings: the "grow outward" motif */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[640px] w-[640px] opacity-60" aria-hidden="true">
        <motion.svg
          viewBox="0 0 200 200"
          className="h-full w-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="100" cy="100" r="98" fill="none" stroke="#FFD700" strokeOpacity="0.06" strokeDasharray="1 5" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#FFD700" strokeOpacity="0.07" strokeDasharray="2 6" />
          <circle cx="100" cy="100" r="42" fill="none" stroke="#FFD700" strokeOpacity="0.08" />
        </motion.svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={en ? "What We Build" : "የምንገነባው"}
          title={en ? "Let's Find Your System" : "ስርዓትዎን እንፈልግ"}
          subtitle={
            en
              ? "Answer two quick questions. We'll show you where to start, and everything else can grow from there."
              : "ሁለት አጭር ጥያቄዎችን ይመልሱ። ከየት መጀመር እንዳለብዎ እናሳይዎታለን። ሌላው ሁሉ ከዚያ ሊያድግ ይችላል።"
          }
          id="solutions-heading"
        />

        <SystemExplorer />

        {/* Quiet exits: full catalog and our own product */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => navigateTo("/solutions")}
            className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] px-5 py-4 text-left hover:border-white/15 transition-colors"
          >
            <p className="font-sans text-sm text-gray-400">
              <span className="font-semibold text-white">{en ? "Prefer to browse?" : "ማሰስ ይመርጣሉ?"}</span>{" "}
              {en ? "See every system we build, side by side." : "የምንገነባቸውን ሁሉንም ስርዓቶች በአንድ ላይ ይመልከቱ።"}
            </p>
            <ArrowRight className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-[#FFD700]" />
          </button>
          <a
            href={ownProduct.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] px-5 py-4 hover:border-white/15 transition-colors"
            id="solution-card-verify"
          >
            <div className="flex items-center gap-3">
              <span className="flex shrink-0 items-center space-x-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{en ? "Live" : "ስራ ላይ"}</span>
              </span>
              <p className="font-sans text-sm text-gray-400">
                <span className="font-semibold text-white">{en ? "Also from our team, Beu Verify." : "ከቡድናችን ደግሞ ቤዩ ቬሪፋይ።"}</span>{" "}
                {en ? "Our own payment verification platform." : "የራሳችን የክፍያ ማረጋገጫ መድረክ።"}
              </p>
            </div>
            <ExternalLink className="h-4 w-4 shrink-0 text-gray-400 group-hover:text-[#FFD700]" />
          </a>
        </div>
      </div>
    </section>
  );
}
