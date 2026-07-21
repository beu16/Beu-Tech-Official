import { useApp } from "./AppContext";
import { Target, Users, Landmark, Heart, Shield, Award, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function AboutPage() {
  const { t, language } = useApp();

  const values = [
    {
      icon: <Target className="h-6 w-6 text-[#FFD700]" />,
      title: t("aboutValue1Title"),
      desc: t("aboutValue1Desc"),
    },
    {
      icon: <Shield className="h-6 w-6 text-[#FFD700]" />,
      title: t("aboutValue2Title"),
      desc: t("aboutValue2Desc"),
    },
    {
      icon: <Heart className="h-6 w-6 text-[#FFD700]" />,
      title: t("aboutValue3Title"),
      desc: t("aboutValue3Desc"),
    },
    {
      icon: <Award className="h-6 w-6 text-[#FFD700]" />,
      title: t("aboutValue4Title"),
      desc: t("aboutValue4Desc"),
    },
  ];

  const team = [
    {
      name: language === "en" ? "Daniel G." : "ዳንኤል ጂ.",
      role: language === "en" ? "Founder & CEO" : "መስራች እና ዋና ስራ አስፈፃሚ",
      initial: "D",
    },
    {
      name: language === "en" ? "Dawit H." : "ዳዊት ኤች.",
      role: language === "en" ? "Chief Technology Officer" : "ዋና የቴክኖሎጂ ኦፊሰር",
      initial: "D",
    },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-[80vh] py-16 px-4 sm:px-6 lg:px-8" id="about-page">
      <div className="mx-auto max-w-7xl">
        {/* Banner Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 rounded-full bg-[#FFD700]/5 border border-[#FFD700]/10 px-4 py-1.5 mb-6"
            id="about-badge"
          >
            <Users className="h-3.5 w-3.5 text-[#FFD700]" />
            <span className="text-xs font-semibold tracking-wider text-[#FFD700] uppercase">
              {language === "en" ? "Holding Company" : "ይዞታ ኩባንያ"}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-4xl font-extrabold sm:text-5xl tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent"
            id="about-title"
          >
            {language === "en" ? "About Beu Tech" : "ስለ ቤዩ ቴክ"}
          </motion.h1>
          <div className="mt-3 h-1 w-12 bg-[#FFD700] mx-auto rounded-full" />
        </div>
 
        {/* Story Section Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24" id="about-story-split">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
            id="about-story-content"
          >
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white flex items-center space-x-3">
              <Landmark className="h-6 w-6 text-[#FFD700]" />
              <span>{t("aboutStoryTitle")}</span>
            </h2>
            <div className="h-0.5 w-12 bg-[#FFD700] rounded-full" />
            <p className="font-sans text-sm md:text-base leading-relaxed text-gray-400">
              {t("aboutStoryText1")}
            </p>
            <p className="font-sans text-sm md:text-base leading-relaxed text-gray-400">
              {t("aboutStoryText2")}
            </p>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between group relative overflow-hidden"
            id="about-mission-panel"
          >
            {/* Mission Card */}
            <div className="mb-8">
              <h3 className="font-sans text-xl font-extrabold text-white flex items-center space-x-2">
                <Target className="h-5 w-5 text-[#FFD700]" />
                <span>{t("aboutMissionTitle")}</span>
              </h3>
              <p className="mt-3 font-sans text-sm md:text-base leading-relaxed text-gray-400">
                {t("aboutMissionText")}
              </p>
            </div>
 
            {/* Vision Card */}
            <div className="border-t border-white/5 pt-8">
              <h3 className="font-sans text-xl font-extrabold text-white flex items-center space-x-2">
                <Zap className="h-5 w-5 text-[#FFD700] fill-[#FFD700]" />
                <span>{t("aboutVisionTitle")}</span>
              </h3>
              <p className="mt-3 font-sans text-sm md:text-base leading-relaxed text-gray-400">
                {t("aboutVisionText")}
              </p>
            </div>
          </motion.div>
        </div>
 
        {/* Values Grid */}
        <div className="mb-24" id="about-values-section">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white">
              {t("aboutValuesTitle")}
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-[#FFD700] mx-auto rounded-full" />
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" id="about-values-grid">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 hover:border-[#FFD700]/50 transition-all duration-300"
                id={`value-card-${idx}`}
              >
                <div className="inline-flex items-center justify-center rounded-xl bg-white/[0.02] p-3 border border-white/[0.08] text-[#FFD700]">
                  {val.icon}
                </div>
                <h3 className="mt-5 font-sans text-lg font-bold text-white tracking-tight">
                  {val.title}
                </h3>
                <p className="mt-2.5 font-sans text-sm leading-relaxed text-gray-400">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
 
        {/* Team Grid */}
        <div className="mb-12" id="about-team-section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white">
              {t("aboutTeamTitle")}
            </h2>
            <p className="mt-3 font-sans text-sm text-gray-400">
              {t("aboutTeamSubtitle")}
            </p>
            <div className="mt-3 h-0.5 w-12 bg-[#FFD700] mx-auto rounded-full" />
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto" id="about-team-grid">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 text-center hover:border-[#FFD700]/50 transition-all group"
                id={`team-card-${idx}`}
              >
                {/* Monogram profile photo block */}
                <div className="relative mx-auto h-20 w-20 rounded-full bg-gradient-to-tr from-[#FFD700] to-[#FFA500] p-[2px] mb-4 shadow-[0_0_15px_rgba(255,215,0,0.15)] group-hover:scale-105 transition-transform duration-300">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0F0F0F]">
                    <span className="font-sans text-2xl font-black text-[#FFD700]">
                      {member.initial}
                    </span>
                  </div>
                </div>
                <h3 className="font-sans text-base font-bold text-white group-hover:text-[#FFD700] transition-colors">
                  {member.name}
                </h3>
                <p className="mt-1 font-sans text-xs text-gray-500 font-medium tracking-wide">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
