import { useApp } from "./AppContext";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import GlobeBackground from "./GlobeBackground";

export default function Hero() {
  const { t, navigateTo, language } = useApp();
  const trustPoints = language === "en"
    ? ["Weekly working demos", "Payment and system integrations", "Support across time zones"]
    : ["ሳምንታዊ የሚሰራ ማሳያ", "የክፍያ እና የሌሎች ስርዓቶች ትስስር", "በሁሉም የሰዓት ዞኖች ድጋፍ"];

  return (
    <section
      className="relative flex min-h-[calc(100svh-4rem)] sm:min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] pt-10 pb-14 sm:pt-20 sm:pb-24 px-4 md:px-8 text-center"
      id="hero-section"
    >
      {/* Rising dotted planet with live data arcs, faint dot texture, and a fade into the next section */}
      <GlobeBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0A0A0A]" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center">
        {/* Availability pill */}
        <motion.button
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigateTo("/contact")}
          className="group mb-8 inline-flex items-center space-x-2 rounded-full border border-[#FFD700]/25 bg-[#FFD700]/5 px-4 py-2 text-xs font-semibold text-[#FFD700] hover:border-[#FFD700]/50 hover:bg-[#FFD700]/10 transition-colors"
          id="hero-availability-pill"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          <span>{language === "en" ? "Now taking on new projects" : "አዳዲስ ፕሮጀክቶችን እየተቀበልን ነው"}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </motion.button>

        {/* Headline: what we do */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-sans text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05] text-balance"
          id="hero-title"
        >
          {language === "en" ? (
            <>We Build the <span className="bg-gradient-to-b from-[#FFE55C] to-[#FFC400] bg-clip-text text-transparent">Software</span> Your Business Needs</>
          ) : (
            <>ድርጅትዎ የሚፈልገውን <span className="bg-gradient-to-b from-[#FFE55C] to-[#FFC400] bg-clip-text text-transparent">ሶፍትዌር</span> እንገነባለን</>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-gray-400 sm:text-lg"
          id="hero-subtext"
        >
          {t("heroSubtitle")}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center w-full sm:w-auto"
          id="hero-actions"
        >
          <button
            onClick={() => navigateTo("/solutions")}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-lg bg-[#FFD700] px-7 py-3.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,215,0,0.25)] transition-all duration-300 hover:bg-[#FFE033] hover:shadow-[0_0_28px_rgba(255,215,0,0.4)] active:scale-[0.98]"
            id="hero-cta-explore"
          >
            <span>{t("exploreCompanies")}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => navigateTo("/contact")}
            className="w-full sm:w-auto flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07] active:scale-[0.98]"
            id="hero-cta-contact"
          >
            <span>{t("startProject")}</span>
          </button>
        </motion.div>

        {/* Trust line */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-500"
        >
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center space-x-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#FFD700]/80" />
              <span>{point}</span>
            </li>
          ))}
        </motion.ul>
      </div>

    </section>
  );
}
