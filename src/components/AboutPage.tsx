import { useApp } from "./AppContext";
import TeamShowcase from "./TeamShowcase";
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
  ArrowRight,
  Server,
  Activity,
  Compass,
  Laptop,
  Clock,
  Lock,
  Briefcase
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

  const teamPillars = [
    {
      icon: <Code2 className="h-5 w-5 text-[#FFD700]" />,
      title: language === "en" ? "Global Software Engineering" : "አለም አቀፍ የሶፍትዌር ምህንድስና",
      desc: language === "en" 
        ? "Architecting high-speed web platforms, mobile apps, and custom enterprise software for organizations worldwide."
        : "በዓለም ዙሪያ ላሉ ተቋማት ፈጣን የዌብ፣ የሞባይል እና የድርጅት ሶፍትዌሮችን ማልማት እና ማስተዳደር።"
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-[#FFD700]" />,
      title: language === "en" ? "Cross-Border Fintech & Security" : "አለም አቀፍ ፊንቴክ እና የደህንነት ቁጥጥር",
      desc: language === "en"
        ? "Real-time payment verification, multi-currency protocols, and automated anti-fraud fraud detection algorithms."
        : "የክፍያ ደረሰኝ ማረጋገጫ፣ የብዙ ገንዘብ ምንዛሪ ስርዓት እና አስተማማኝ የባንክ ደረጃ ደህንነት።"
    },
    {
      icon: <Layers className="h-5 w-5 text-[#FFD700]" />,
      title: language === "en" ? "Product Design & Architecture" : "የምርት ዲዛይን እና ሲስተም አርክቴክቸር",
      desc: language === "en"
        ? "Engineering intuitive, accessible, and multi-lingual digital experiences tailored for international markets."
        : "ለዓለም አቀፍ እና ለአገር ውስጥ ተጠቃሚዎች ምቹ የሆኑ ሁለት ቋንቋ ተናጋሪ ዲጂታል አሰራሮችን ማዘጋጀት።"
    },
    {
      icon: <Headphones className="h-5 w-5 text-[#FFD700]" />,
      title: language === "en" ? "24/7 Follow-The-Sun Operations" : "24/7 አለም አቀፍ ኦፕሬሽንስ እና ድጋፍ",
      desc: language === "en"
        ? "Continuous global monitoring, enterprise client onboarding, and round-the-clock technical maintenance."
        : "የ24 ሰዓት ቀጣይነት ያለው የቴክኒክ ክትትል፣ ደንበኞች ድጋፍ እና አስተማማኝ የሲስተም አሰራር።"
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
            className="inline-flex items-center rounded-full bg-[#FFD700]/5 border border-[#FFD700]/15 px-4 py-1.5 mb-6 shadow-[0_0_15px_rgba(255,215,0,0.1)]"
            id="about-badge"
          >
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
 
        {/* Executive Leadership Section */}
        <div className="mb-24" id="about-team-section">
          <TeamShowcase isStandalonePage={false} />
        </div>

          {/* Web Development & High Standards Section */}
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-b from-[#111722] via-[#0A0E15] to-[#070A0F] p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-16" id="web-development-section">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center space-x-2 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 px-3.5 py-1 mb-3">
                <Laptop className="h-3.5 w-3.5 text-[#FFD700]" />
                <span className="text-[11px] font-bold tracking-wider text-[#FFD700] uppercase">
                  {language === "en" ? "Web Development" : "የዌብ ልማት"}
                </span>
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {language === "en" 
                  ? "We Develop Websites With High Quality & Standards" 
                  : "ከፍተኛ ጥራት እና ደረጃ ያላቸውን ዌብሳይቶች እናዘጋጃለን"}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                {language === "en" 
                  ? "We engineer modern, fast, and responsive websites crafted with precision, clean architecture, and the highest industry standards."
                  : "በዘመናዊ ቴክኖሎጂ፣ ፈጣን አሰራር እና አስተማማኝ ጥራት ደረጃቸውን የጠበቁ ዌብሳይቶችን እንገነባለን።"}
              </p>
            </div>

            {/* 4 Professional Capability Pillars - Clean & Direct */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FFD700]/30 transition-colors">
                <div className="flex items-center space-x-3 mb-2.5">
                  <div className="p-2.5 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700]">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h4 className="font-sans text-base font-bold text-white">
                    {language === "en" ? "High Performance & Speed" : "ከፍተኛ ፍጥነት እና ብቃት"}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {language === "en" 
                    ? "Lightning-fast loading times, optimized code, and seamless responsiveness across all screen sizes and devices."
                    : "ፈጣን የመጫን ፍጥነት፣ የተስተካከለ ኮድ እና በሁሉም ስክሪኖች ላይ ምቹ አሰራር።"}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FFD700]/30 transition-colors">
                <div className="flex items-center space-x-3 mb-2.5">
                  <div className="p-2.5 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700]">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h4 className="font-sans text-base font-bold text-white">
                    {language === "en" ? "Modern Clean Architecture" : "ዘመናዊ እና ንጹህ የምህንድስና ስነ-ስርዓት"}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {language === "en" 
                    ? "Built on robust, scalable frontend frameworks and clean codebases designed for longevity and easy maintenance."
                    : "በዘመናዊ የቴክኖሎጂ መሰረቶች ላይ የተገነባ፣ ለቀጣይ አስተማማኝ አገልግሎት የተዘጋጀ።"}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FFD700]/30 transition-colors">
                <div className="flex items-center space-x-3 mb-2.5">
                  <div className="p-2.5 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="font-sans text-base font-bold text-white">
                    {language === "en" ? "Security & Industry Standards" : "ጥብቅ ደህንነት እና ደረጃዎች"}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {language === "en" 
                    ? "Enterprise-grade security, data protection best practices, accessibility standards, and reliable cloud hosting."
                    : "የተሟላ የደህንነት ጥበቃ፣ የውሂብ ደህንነት እና አስተማማኝ የደመና ቴክኖሎጂ።"}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FFD700]/30 transition-colors">
                <div className="flex items-center space-x-3 mb-2.5">
                  <div className="p-2.5 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700]">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h4 className="font-sans text-base font-bold text-white">
                    {language === "en" ? "End-to-End Quality Delivery" : "ሁለንተናዊ ጥራት እና ድጋፍ"}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {language === "en" 
                    ? "From custom UI/UX design and features to multi-currency payments, automated testing, and dedicated support."
                    : "ከተጠቃሚ ምቹ ዲዛይን እስከ ክፍያ ስርዓቶች እና አስተማማኝ ቀጣይነት ያለው እገዛ።"}
                </p>
              </div>
            </div>

            {/* Bottom Proof Bar & CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>{language === "en" ? "High Performance & Speed" : "ከፍተኛ ፍጥነት"}</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>{language === "en" ? "Clean & Maintainable Code" : "ንጹህ ኮድ"}</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>{language === "en" ? "Rigorous Quality Standards" : "ከፍተኛ ጥራት"}</span>
                </span>
              </div>

              <button
                onClick={() => navigateTo("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-[#FFD700] text-black font-sans text-xs sm:text-sm font-bold hover:bg-[#FFA500] transition-colors shrink-0 shadow-lg cursor-pointer"
                id="discuss-web-project-btn"
              >
                <span>{language === "en" ? "Start Your Project" : "ፕሮጀክትዎን ይጀምሩ"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Collective Talent & Department Pillars Section */}
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 sm:p-10 shadow-2xl relative overflow-hidden" id="team-pillars-section">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 px-3.5 py-1 mb-3">
                <span className="text-[11px] font-bold tracking-wider text-[#FFD700] uppercase">
                  {language === "en" ? "Our Multi-Disciplinary Core" : "የጋራ የስራ ክፍሎች"}
                </span>
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
                {language === "en" ? "Driven by Innovation & Global Standards" : "በፈጠራ እና አለም አቀፍ ደረጃ የሚመራ"}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400">
                {language === "en"
                  ? "Our cross-functional teams build, verify, and maintain next-generation digital products and systems for clients worldwide."
                  : "የተለያዩ የስራ ክፍሎቻችን በአገር ውስጥ እና በአለም አቀፍ ደረጃ አስተማማኝ ዲጂታል ምርቶችን ያዘጋጃሉ እንዲሁም ያስተዳድራሉ።"}
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
                <span>{language === "en" ? "100% In-House Engineering" : "100% የራስ ውስጥ ምህንድስና"}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300 text-xs sm:text-sm">
                <Globe className="h-4 w-4 text-[#FFD700] shrink-0" />
                <span>{language === "en" ? "Worldwide Client Delivery" : "አለም አቀፍ አገልግሎት አሰጣጥ"}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300 text-xs sm:text-sm">
                <ShieldCheck className="h-4 w-4 text-blue-400 shrink-0" />
                <span>{language === "en" ? "Enterprise SOC2 & ISO Standards" : "አለም አቀፍ የደህንነት ደረጃዎች"}</span>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}

