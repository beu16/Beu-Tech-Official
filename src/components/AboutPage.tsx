import { useApp } from "./AppContext";
import { 
  Target, 
  Users, 
  Landmark, 
  Heart, 
  Shield, 
  Award, 
  Zap,
  Code2,
  Cpu,
  ShieldCheck,
  Layers,
  Sparkles,
  Headphones,
  CheckCircle2,
  Globe,
  Building2,
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";

export default function AboutPage() {
  const { t, language, navigateTo } = useApp();

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
      name: "Daniel G.",
      role: language === "en" ? "CEO & Founder" : "መስራች እና ዋና ስራ አስፈፃሚ",
      tag: language === "en" ? "Executive & Vision" : "ዋና አመራር እና ራዕይ",
      skills: language === "en" ? ["Ecosystem Vision", "Fintech Strategy", "Strategic Partnerships", "Capital Growth"] : ["የስራ ራዕይ", "የፋይናንስ ስትራቴጂ", "ሽርክና", "የንግድ እድገት"],
      initial: "D"
    },
    {
      name: "Dawit K.",
      role: language === "en" ? "Chief Technology Officer" : "ዋና የቴክኖሎጂ ኦፊሰር",
      tag: language === "en" ? "Tech & Infrastructure" : "ቴክኖሎጂ እና መሰረተ-ልማት",
      skills: language === "en" ? ["Cloud Infrastructure", "Cybersecurity", "Database Scaling", "System Reliability"] : ["የደመና መዋቅር", "ሳይበር ደህንነት", "ዳታቤዝ", "የሲስተም አስተማማኝነት"],
      initial: "D"
    },
  ];

  const teamPillars = [
    {
      icon: <Code2 className="h-5 w-5 text-[#FFD700]" />,
      title: language === "en" ? "Software Engineering" : "የሶፍትዌር ምህንድስና",
      desc: language === "en" 
        ? "Building high-speed web, mobile, and custom enterprise tools tailored to Ethiopian commerce."
        : "ለኢትዮጵያ ገበያ የተመቻቹ ፈጣን የዌብ፣ ሞባይል እና የንግድ ሶፍትዌሮችን መገንባት።"
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-[#FFD700]" />,
      title: language === "en" ? "Fintech & Security" : "ፊንቴክ እና የደህንነት ቁጥጥር",
      desc: language === "en"
        ? "Real-time payment receipt verification and bank-level protection protocols."
        : "የክፍያ ደረሰኝ ማረጋገጫ እና አስተማማኝ የባንክ ደረጃ የደህንነት ስርዓት።"
    },
    {
      icon: <Layers className="h-5 w-5 text-[#FFD700]" />,
      title: language === "en" ? "UI/UX & Product Design" : "ዲዛይን እና የተጠቃሚ ምቾት",
      desc: language === "en"
        ? "Designing intuitive, bilingual digital workflows that empower local businesses."
        : "ለአካባቢው ነጋዴዎች ምቹ የሆኑ ሁለት ቋንቋ ተናጋሪ ዲጂታል አሰራሮችን ማዘጋጀት።"
    },
    {
      icon: <Headphones className="h-5 w-5 text-[#FFD700]" />,
      title: language === "en" ? "Operations & 24/7 Support" : "ኦፕሬሽንስ እና 24/7 ድጋፍ",
      desc: language === "en"
        ? "Dedicated on-the-ground onboarding, technical assistance, and continuous maintenance."
        : "ቀጥተኛ የቴክኒክ ድጋፍ፣ ስልጠና እና ቀጣይነት ያለው የሲስተም ክትትል።"
    }
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-[80vh] py-16 px-4 sm:px-6 lg:px-8" id="about-page">
      <div className="mx-auto max-w-7xl">
        {/* Banner Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 rounded-full bg-[#FFD700]/5 border border-[#FFD700]/15 px-4 py-1.5 mb-6 shadow-[0_0_15px_rgba(255,215,0,0.1)]"
            id="about-badge"
          >
            <Users className="h-3.5 w-3.5 text-[#FFD700]" />
            <span className="text-xs font-semibold tracking-wider text-[#FFD700] uppercase">
              {language === "en" ? "Beu Tech" : "ቤዩ ቴክ"}
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
            <p className="font-sans text-sm md:text-base leading-relaxed text-gray-300">
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
            className="lg:col-span-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between group relative overflow-hidden transition-all duration-300"
            id="about-mission-panel"
          >
            {/* Mission Card */}
            <div className="mb-8">
              <h3 className="font-sans text-xl font-extrabold text-white flex items-center space-x-2">
                <Target className="h-5 w-5 text-[#FFD700]" />
                <span>{t("aboutMissionTitle")}</span>
              </h3>
              <p className="mt-3 font-sans text-sm md:text-base leading-relaxed text-gray-300">
                {t("aboutMissionText")}
              </p>
            </div>
 
            {/* Vision Card */}
            <div className="border-t border-white/10 pt-8">
              <h3 className="font-sans text-xl font-extrabold text-white flex items-center space-x-2">
                <Zap className="h-5 w-5 text-[#FFD700] fill-[#FFD700]" />
                <span>{t("aboutVisionTitle")}</span>
              </h3>
              <p className="mt-3 font-sans text-sm md:text-base leading-relaxed text-gray-300">
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
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 hover:border-[#FFD700]/50 transition-all duration-300 relative group overflow-hidden shadow-lg"
                id={`value-card-${idx}`}
              >
                <div className="inline-flex items-center justify-center rounded-xl bg-white/[0.04] p-3 border border-white/[0.1] text-[#FFD700] group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(255,215,0,0.15)]">
                  {val.icon}
                </div>
                <h3 className="mt-5 font-sans text-lg font-bold text-white tracking-tight group-hover:text-[#FFD700] transition-colors">
                  {val.title}
                </h3>
                <p className="mt-2.5 font-sans text-sm leading-relaxed text-gray-400">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
 
        {/* Leadership Team Section */}
        <div className="mb-20" id="about-team-section">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {t("aboutTeamTitle")}
            </h2>
            <p className="mt-3 font-sans text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              {t("aboutTeamSubtitle")}
            </p>
            <div className="mt-3 h-0.5 w-12 bg-[#FFD700] mx-auto rounded-full shadow-[0_0_10px_#FFD700]" />
          </div>

          {/* Executive Leaders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16" id="about-team-grid">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-[#0D1117] p-7 text-center hover:border-[#FFD700]/40 transition-all duration-300 relative flex flex-col justify-between shadow-xl backdrop-blur-sm group"
                id={`team-card-${idx}`}
              >
                <div>
                  {/* Department Tag */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 border border-white/10 text-gray-300 group-hover:border-amber-400/40 group-hover:text-[#FFD700] transition-colors">
                      {member.tag}
                    </span>
                  </div>

                  {/* Monogram profile avatar */}
                  <div className="relative mx-auto h-20 w-20 mb-5">
                    <div className="relative h-full w-full rounded-full bg-gradient-to-tr from-[#FFD700] to-[#FFA500] p-[2px] shadow-[0_0_20px_rgba(255,215,0,0.2)] group-hover:scale-105 transition-transform duration-300">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0F0F0F]">
                        <span className="font-sans text-2xl font-black text-[#FFD700]">
                          {member.initial}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-sans text-xl font-extrabold tracking-wide text-white group-hover:text-[#FFD700] transition-colors">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-sans text-sm font-semibold text-gray-300">
                    {member.role}
                  </p>
                </div>

                {/* Skills/Focus pills */}
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5 justify-center">
                  {member.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 group-hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Collective Talent & Department Pillars Section */}
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 sm:p-10 shadow-2xl relative overflow-hidden" id="team-pillars-section">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center space-x-2 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 px-3.5 py-1 mb-3">
                <Sparkles className="h-3.5 w-3.5 text-[#FFD700]" />
                <span className="text-[11px] font-bold tracking-wider text-[#FFD700] uppercase">
                  {language === "en" ? "Our Multi-Disciplinary Core" : "የጋራ የስራ ክፍሎች"}
                </span>
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
                {language === "en" ? "Driven by Innovation & Local Talent" : "በአገር በቀል እውቀት እና ፈጠራ የሚመራ"}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400">
                {language === "en"
                  ? "Our cross-functional teams build, verify, and maintain Ethiopia's next-generation digital products."
                  : "የተለያዩ የስራ ክፍሎቻችን የኢትዮጵያን ቀጣይ ትውልድ ዲጂታል ምርቶች ያዘጋጃሉ፣ ይቆጣጠራሉ እንዲሁም ያስተዳድራሉ።"}
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {teamPillars.map((pillar, pIdx) => (
                <div 
                  key={pIdx}
                  className="rounded-2xl border border-white/10 bg-black/40 p-5 hover:border-[#FFD700]/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center justify-center rounded-xl bg-white/5 p-2.5 border border-white/10 mb-3 text-[#FFD700] group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>
                    <h4 className="font-sans text-sm font-bold text-white group-hover:text-[#FFD700] transition-colors mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Collective Highlights Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-center">
              <div className="flex items-center justify-center space-x-2 text-gray-300 text-xs sm:text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{language === "en" ? "100% In-House Development" : "100% የራስ ውስጥ ልማት"}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300 text-xs sm:text-sm">
                <Building2 className="h-4 w-4 text-[#FFD700] shrink-0" />
                <span>{language === "en" ? "Addis Ababa, Ethiopia HQ" : "አዲስ አበባ፣ ኢትዮጵያ"}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300 text-xs sm:text-sm">
                <Globe className="h-4 w-4 text-blue-400 shrink-0" />
                <span>{language === "en" ? "Global Standards & Security" : "አለም አቀፍ ደረጃ እና ደህንነት"}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

