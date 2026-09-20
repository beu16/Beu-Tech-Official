import { useState } from "react";
import { useApp } from "./AppContext";
import { 
  Lock, 
  ArrowRight,
  CheckCircle2,
  Award,
  Cpu,
  Landmark
} from "lucide-react";
import { motion } from "motion/react";

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
    taglineEn: "Executive Vision & Strategic Innovation",
    taglineAm: "አለም አቀፍ ስትራቴጂ እና የኩባንያው ራዕይ",
    summaryEn: "Leading Beu Tech with visionary direction, driving technological excellence, ecosystem expansion, and transformative digital solutions across Africa and international markets.",
    summaryAm: "ከፍተኛ ጥራት ያላቸውን የዲጂታል ቴክኖሎጂዎች፣ አለም አቀፍ ስትራቴጂ እና የቢዝነስ እድገትን በመምራት ላይ ያሉ ዋና መሪ።",
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
    taglineEn: "Capital Allocation & Fiscal Governance",
    taglineAm: "የካፒታል ስትራቴጂ እና የፋይናንስ አስተዳደር",
    summaryEn: "Directing treasury operations, cross-border fintech compliance, and capital allocation frameworks that guarantee fiscal stability and sustainable scaling.",
    summaryAm: "የኩባንያውን ካፒታል፣ የፊንቴክ የደህንነት ደንቦች እና ቀጣይነት ያለው የኢኮኖሚ እድገት በብቃት የሚያስተዳድሩ።",
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
    taglineEn: "Enterprise Cloud & Systems Architecture",
    taglineAm: "የደመና ሲስተሞች እና የሶፍትዌር ምህንድስና",
    summaryEn: "Overseeing distributed cloud infrastructure, microservices architecture, and enterprise-grade transaction engines built for high-throughput reliability.",
    summaryAm: "ዘመናዊ የሶፍትዌር ምህንድስና፣ የደመና ኮምፒውቲንግ እና አለም አቀፍ ደረጃቸውን የጠበቁ ሲስተሞችን የሚያስተባብሩ።",
    specializations: ["Distributed Systems", "Cloud Security", "Enterprise Architecture"],
    accentColor: "#FBBF24",
    glowColor: "rgba(251, 191, 36, 0.35)",
    icon: Cpu,
  },
];

interface TeamShowcaseProps {
  isStandalonePage?: boolean;
}

export default function TeamShowcase({ isStandalonePage = false }: TeamShowcaseProps) {
  const { language, navigateTo } = useApp();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentMember = TEAM_MEMBERS[selectedIndex];

  return (
    <section 
      className={`relative w-full overflow-hidden text-white ${
        isStandalonePage ? "min-h-screen py-16 sm:py-24" : "py-12 sm:py-20"
      }`}
      id="team-showcase-section"
    >
      {/* Dynamic Geometric & Atmospheric Brand Backdrop (NO PHOTOGRAPHS) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Animated Radial Spotlight attuned to the active executive */}
        <motion.div 
          animate={{
            background: [
              `radial-gradient(circle at 50% 25%, ${currentMember.accentColor}18 0%, transparent 60%)`,
              `radial-gradient(circle at 50% 35%, ${currentMember.accentColor}25 0%, transparent 70%)`,
              `radial-gradient(circle at 50% 25%, ${currentMember.accentColor}18 0%, transparent 60%)`,
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />

        {/* Executive Cyber-Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)`,
            backgroundSize: "64px 64px"
          }}
        />

        {/* Ambient Top Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-b from-[#FFD700]/10 via-[#FFD700]/3 to-transparent blur-3xl pointer-events-none" />

        {/* Subtle Geometric Concentric Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-[#FFD700]/[0.05] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Framing Container with Corner Brackets from the video */}
        <div 
          className="relative mx-auto rounded-3xl border border-white/10 bg-[#0A0D14]/80 backdrop-blur-2xl p-6 sm:p-10 lg:p-14 shadow-2xl shadow-black/90"
          id="team-showcase-frame"
        >
          {/* 4 Corner L-Brackets from the video */}
          <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-[#FFD700] rounded-tl-sm pointer-events-none shadow-[0_0_10px_#FFD700]" />
          <div className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-[#FFD700] rounded-tr-sm pointer-events-none shadow-[0_0_10px_#FFD700]" />
          <div className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-[#FFD700] rounded-bl-sm pointer-events-none shadow-[0_0_10px_#FFD700]" />
          <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-[#FFD700] rounded-br-sm pointer-events-none shadow-[0_0_10px_#FFD700]" />

          {/* Top Frame Bar */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08] text-xs font-mono">
            <div className="flex items-center space-x-2.5">
              <span className="h-2 w-2 rounded-full bg-[#FFD700] animate-pulse" />
              <span className="tracking-widest uppercase font-bold text-[#FFD700] font-sans text-xs">
                {language === "en" ? "Executive Leadership" : "የስራ አመራር ቦርድ"}
              </span>
            </div>

            <div className="flex items-center space-x-3 text-gray-400">
              <span className="inline-flex items-center space-x-1.5 text-[11px] font-sans tracking-wide text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                <Lock className="h-3 w-3 text-[#FFD700]" />
                <span>{language === "en" ? "Governance & Board" : "የስራ አመራር ቦርድ"}</span>
              </span>
            </div>
          </div>

          {/* Header Typography */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center rounded-full bg-[#FFD700]/10 border border-[#FFD700]/25 px-4 py-1.5 mb-4">
              <span className="text-xs font-bold tracking-widest text-[#FFD700] uppercase font-sans">
                {language === "en" ? "Executive Board" : "የስራ አመራር ቦርድ"}
              </span>
            </div>

            <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {language === "en" ? "Guiding Technological Excellence" : "ቴክኖሎጂንና ፈጠራን የሚመራ አመራር"}
            </h2>
            <p className="mt-4 font-sans text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {language === "en" 
                ? "Led by CEO & Founder Biniyam Haile alongside our executive officers, driving high-impact innovation, scalable cloud infrastructure, and sustainable growth across East Africa."
                : "በዋና ስራ አስፈፃሚ እና መስራች ቢንያም ኃይሌ እና በስራ አመራር ቦርዱ የሚመራ፣ አስተማማኝ የዲጂታል ሲስተሞች፣ ዘመናዊ የቴክኖሎጂ ፈጠራ እና ቀጣይነት ያለው እድገት።"}
            </p>
          </div>

          {/* Executive Leadership Grid - Balanced 3 Columns Fitting All 3 Leaders */}
          <div className="mb-12" id="team-cards-deck">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto py-2" id="team-cards-grid">
              {TEAM_MEMBERS.map((member, idx) => {
                const isSelected = idx === selectedIndex;
                const role = language === "en" ? member.roleEn : member.roleAm;
                const tagline = language === "en" ? member.taglineEn : member.taglineAm;
                const IconComponent = member.icon;

                return (
                  <motion.div
                    key={member.id}
                    onClick={() => setSelectedIndex(idx)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    whileHover={{ y: -6 }}
                    animate={{
                      scale: isSelected ? 1.02 : 1,
                      y: isSelected ? -4 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className={`relative w-full h-[420px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 select-none flex flex-col justify-between p-6 ${
                      isSelected 
                        ? "border-2 border-[#FFD700] shadow-[0_0_35px_rgba(255,215,0,0.35)] ring-1 ring-[#FFD700]/50 z-20" 
                        : "border border-white/10 hover:border-[#FFD700]/40 z-10"
                    }`}
                    style={{
                      background: `radial-gradient(circle at 50% 10%, ${member.accentColor}15 0%, #0B0E17 70%, #06080D 100%)`
                    }}
                  >
                    {/* Background Subtle Accent Pattern */}
                    <div 
                      className="absolute inset-0 opacity-[0.03] pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(#FFD700 1px, transparent 1px)`,
                        backgroundSize: "20px 20px"
                      }}
                    />

                    {/* Top Card Badge / Index */}
                    <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-gray-300 text-[11px]">
                        0{idx + 1}
                      </span>
                      
                      {member.isCeo ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#FFD700] text-black font-sans font-extrabold text-[10px] tracking-wide shadow-md">
                          <span>FOUNDER</span>
                        </span>
                      ) : (
                        isSelected && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/10 text-[#FFD700] border border-[#FFD700]/30 font-sans font-bold text-[10px]">
                            <span>Active</span>
                          </span>
                        )
                      )}
                    </div>

                    {/* Center Luxury Monogram & Executive Crest */}
                    <div className="relative z-10 flex flex-col items-center justify-center my-auto py-2">
                      <div className="relative mb-4">
                        {/* Outer Glow Ring */}
                        <div 
                          className="absolute -inset-2 rounded-full blur-md opacity-40 transition-opacity duration-300"
                          style={{ background: member.accentColor }}
                        />

                        {/* Monogram Seal */}
                        <div className={`relative h-20 w-20 sm:h-24 sm:w-24 rounded-full p-[2px] shadow-2xl transition-transform duration-300 ${
                          isSelected ? "scale-110" : "scale-100"
                        }`}
                        style={{
                          background: `linear-gradient(135deg, ${member.accentColor} 0%, #FFA500 50%, #4A3500 100%)`
                        }}
                        >
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#080B11] border border-black/80">
                            <span 
                              className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tighter"
                              style={{ color: member.accentColor }}
                            >
                              {member.monogram}
                            </span>
                          </div>
                        </div>

                        {/* Crest Icon Mini Badge */}
                        <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-black border border-[#FFD700]/60 flex items-center justify-center text-[#FFD700] shadow-md">
                          <IconComponent className="h-3.5 w-3.5" />
                        </div>
                      </div>

                      {/* Name in Bold High-Contrast Display */}
                      <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-white tracking-tight text-center drop-shadow-md">
                        {member.name}
                      </h3>

                      {/* Authority Badge */}
                      <div className="mt-2 flex items-center justify-center w-full">
                        <div className="inline-flex items-center justify-center text-center px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] font-sans text-[11px] sm:text-xs font-semibold tracking-normal whitespace-nowrap shadow-sm">
                          <span className="text-center">{role}</span>
                        </div>
                      </div>

                      {/* Tagline */}
                      <p className="mt-2.5 text-xs text-gray-300 text-center line-clamp-1 font-sans opacity-90 max-w-[220px] mx-auto">
                        {tagline}
                      </p>
                    </div>

                    {/* Bottom Action Area */}
                    <div className="relative z-10 pt-2 border-t border-white/[0.08]">
                      <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3">
                        {member.specializations.slice(0, 2).map((spec, sIdx) => (
                          <span 
                            key={sIdx}
                            className="text-[10px] font-sans px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-gray-300"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateTo("/contact");
                        }}
                        className={`w-full py-2 px-3 rounded-full text-xs font-sans font-bold transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer ${
                          isSelected 
                            ? "bg-[#FFD700] text-black shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:bg-white" 
                            : "bg-white/10 text-white hover:bg-[#FFD700] hover:text-black border border-white/15"
                        }`}
                      >
                        <span>{language === "en" ? "Connect Directly" : "አግኙን"}</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Active Leader Spotlight & Executive Summary Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4 text-left">
              {/* Executive Monogram Circle */}
              <div 
                className="h-12 w-12 rounded-full p-[2px] flex-shrink-0 shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${currentMember.accentColor}, #B8860B)`
                }}
              >
                <div className="h-full w-full rounded-full bg-[#080B11] flex items-center justify-center font-bold text-sm" style={{ color: currentMember.accentColor }}>
                  {currentMember.monogram}
                </div>
              </div>

              <div>
                <div className="text-sm font-bold text-white font-sans flex items-center space-x-2">
                  <span>{currentMember.name}</span>
                  <CheckCircle2 className="h-4 w-4 text-[#FFD700]" />
                  {currentMember.isCeo && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/40 font-mono">
                      FOUNDER & CEO
                    </span>
                  )}
                </div>
                <div className="text-xs text-[#FFD700] font-sans mt-0.5">
                  {language === "en" ? currentMember.roleEn : currentMember.roleAm} • {language === "en" ? currentMember.taglineEn : currentMember.taglineAm}
                </div>
                <p className="text-xs text-gray-400 font-sans mt-1 max-w-xl line-clamp-2">
                  {language === "en" ? currentMember.summaryEn : currentMember.summaryAm}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs w-full md:w-auto justify-end">
              <button 
                onClick={() => navigateTo("/contact")}
                className="w-full md:w-auto px-5 py-2.5 rounded-full bg-[#FFD700] text-black font-bold hover:bg-white transition-all shadow-md flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>{language === "en" ? "Schedule Executive Consultation" : "ቀጠሮ ይያዙ"}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Subtle Bottom Watermark Tag from Video */}
          <div className="mt-8 pt-4 flex items-center justify-between text-[11px] text-gray-500 font-sans border-t border-white/[0.05]">
            <span>© 2026 Beu Tech. All rights reserved.</span>
            <span className="font-mono text-[#FFD700]/70">@beutech</span>
          </div>

        </div>

      </div>
    </section>
  );
}
