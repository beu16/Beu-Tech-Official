import { useState } from "react";
import { useApp } from "./AppContext";
import RoadmapModal from "./RoadmapModal";
import TeamShowcase from "./TeamShowcase";
import SectionHeading from "./SectionHeading";
import { Target, Heart, Shield, Award, Zap, ArrowRight, Landmark } from "lucide-react";
import { motion } from "motion/react";

export default function AboutPage() {
  const { t, language, navigateTo } = useApp();
  const [showRoadmap, setShowRoadmap] = useState(false);

  const values = [
    { icon: Target, title: t("aboutValue1Title"), desc: t("aboutValue1Desc") },
    { icon: Shield, title: t("aboutValue2Title"), desc: t("aboutValue2Desc") },
    { icon: Heart, title: t("aboutValue3Title"), desc: t("aboutValue3Desc") },
    { icon: Award, title: t("aboutValue4Title"), desc: t("aboutValue4Desc") },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-[80vh] pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 lg:px-8" id="about-page">
      <div className="mx-auto max-w-7xl">
        {/* Page header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-3">
            <span className="h-px w-6 bg-[#FFD700]/60" />
            <span className="font-sans text-xs font-semibold tracking-[0.2em] text-[#FFD700] uppercase">
              {language === "en" ? "About Us" : "ስለ እኛ"}
            </span>
            <span className="h-px w-6 bg-[#FFD700]/60" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
            id="about-title"
          >
            {language === "en" ? "About Beu Tech" : "ስለ ቤዩ ቴክ"}
          </motion.h1>
        </div>

        {/* Story + Mission / Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20 sm:mb-28" id="about-story-split">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5"
            id="about-story-content"
          >
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {t("aboutStoryTitle")}
            </h2>
            <p className="font-sans text-base leading-relaxed text-gray-300">{t("aboutStoryText1")}</p>
            <p className="font-sans text-base leading-relaxed text-gray-400">{t("aboutStoryText2")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/[0.02] divide-y divide-white/[0.06]"
            id="about-mission-panel"
          >
            <div className="p-7">
              <h3 className="font-sans text-lg font-bold text-white flex items-center space-x-2.5">
                <Target className="h-5 w-5 text-[#FFD700]" />
                <span>{t("aboutMissionTitle")}</span>
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-gray-400">{t("aboutMissionText")}</p>
            </div>
            <div className="p-7">
              <h3 className="font-sans text-lg font-bold text-white flex items-center space-x-2.5">
                <Zap className="h-5 w-5 text-[#FFD700]" />
                <span>{t("aboutVisionTitle")}</span>
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-gray-400">{t("aboutVisionText")}</p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-20 sm:mb-28" id="about-values-section">
          <SectionHeading eyebrow={language === "en" ? "What Guides Us" : "የሚመሩን"} title={t("aboutValuesTitle")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" id="about-values-grid">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#FFD700]/40 transition-colors duration-300"
                  id={`value-card-${idx}`}
                >
                  <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-sans text-base font-bold text-white">{val.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-gray-400">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-24" id="about-team-section">
          <TeamShowcase />
        </div>

        {/* Rooted at home: Ethiopia Digital 2030 */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6" id="about-roots">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700]">
              <Landmark className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-sans text-base font-bold text-white">
                {language === "en" ? "Rooted at home" : "መሰረታችን እቤት ነው"}
              </h3>
              <p className="mt-1 font-sans text-sm text-gray-400 max-w-2xl">
                {language === "en"
                  ? "Everything we build abroad starts with what we learn at home. We actively contribute to Ethiopia's Digital Transformation Strategy 2030."
                  : "በውጭ የምንገነባው ሁሉ እቤት ከምንማረው ይጀምራል። ለኢትዮጵያ ዲጂታል ትራንስፎርሜሽን ስትራቴጂ 2030 በንቃት አስተዋጽኦ እናደርጋለን።"}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowRoadmap(true)}
            className="shrink-0 inline-flex items-center justify-center space-x-2 rounded-lg border border-white/15 bg-white/[0.03] px-5 py-2.5 text-xs font-bold text-white hover:border-[#FFD700]/50 hover:text-[#FFD700] transition-colors"
            id="ethiopia-2030-static-text"
          >
            <span>{language === "en" ? "Our 2030 commitment" : "የ2030 ቁርጠኝነታችን"}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <RoadmapModal open={showRoadmap} onClose={() => setShowRoadmap(false)} />

        {/* Closing CTA */}
        <div className="rounded-2xl border border-[#FFD700]/25 bg-[#FFD700]/[0.04] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left" id="about-cta">
          <div>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {language === "en" ? "Have a system in mind?" : "በአእምሮዎ ያለ ስርዓት አለ?"}
            </h2>
            <p className="mt-2 font-sans text-sm sm:text-base text-gray-400">
              {language === "en"
                ? "Tell us what your organization needs. We'll come back with a clear plan and quote."
                : "ድርጅትዎ የሚፈልገውን ይንገሩን። ግልጽ እቅድ እና ዋጋ ይዘን እንመለሳለን።"}
            </p>
          </div>
          <button
            onClick={() => navigateTo("/solutions")}
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center space-x-2 rounded-lg bg-[#FFD700] px-7 py-3.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,215,0,0.25)] transition-all duration-300 hover:bg-[#FFE033] active:scale-[0.98]"
            id="about-cta-btn"
          >
            <span>{language === "en" ? "Request Your System" : "ስርዓትዎን ይጠይቁ"}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
