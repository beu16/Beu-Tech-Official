import { useApp } from "./AppContext";
import { Zap, QrCode, LineChart, Code2, ArrowRight, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

export default function SubsidiariesPage() {
  const { t, navigateTo, language } = useApp();

  const companies = [
    {
      id: "verify",
      name: "Beu Verify",
      tagline: t("verifyTagline"),
      desc: t("verifyDesc"),
      route: "/beu-verify" as const,
      icon: <Zap className="h-6 w-6 text-[#FFD700] fill-current" />,
      color: "border-white/10 hover:border-[#FFD700]/50 shadow-[0_0_25px_rgba(255,215,0,0.03)]",
    },
    {
      id: "digital",
      name: "Beu Digital",
      tagline: t("digitalTagline"),
      desc: t("digitalDesc"),
      route: "/beu-digital" as const,
      icon: <QrCode className="h-6 w-6 text-[#FFD700]" />,
      color: "border-white/10 hover:border-[#FFD700]/50",
    },
    {
      id: "finance",
      name: "Beu Finance",
      tagline: t("financeTagline"),
      desc: t("financeDesc"),
      route: "/beu-finance" as const,
      icon: <LineChart className="h-6 w-6 text-[#FFD700]" />,
      color: "border-white/10 hover:border-[#FFD700]/50",
    },
    {
      id: "develop",
      name: "Beu Develop",
      tagline: t("developTagline"),
      desc: t("developDesc"),
      route: "/beu-develop" as const,
      icon: <Code2 className="h-6 w-6 text-[#FFD700]" />,
      color: "border-white/10 hover:border-[#FFD700]/50",
    },
    {
      id: "education",
      name: "Beu Education",
      tagline: t("educationTagline"),
      desc: t("educationDesc"),
      route: "/beu-education" as const,
      icon: <GraduationCap className="h-6 w-6 text-[#FFD700]" />,
      color: "border-white/10 hover:border-[#FFD700]/50",
    },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-[80vh] py-16 px-4 sm:px-6 lg:px-8" id="subsidiaries-page">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-4xl font-extrabold sm:text-5xl tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent"
            id="subs-page-title"
          >
            {language === "en" ? "Our Holdings & Companies" : "የእኛ ድርጅቶች እና ቅርንጫፎች"}
          </motion.h1>
          <p className="mt-4 font-sans text-sm md:text-base text-gray-400 leading-relaxed">
            {language === "en"
              ? "Discover the specialized technology firms powering different sectors of the Ethiopian digital economy."
              : "የኢትዮጵያን ዲጂታል ኢኮኖሚ በተለያዩ ዘርፎች የሚደግፉ ልዩ የቴክኖሎጂ ኩባንያዎቻችንን እዚህ ያግኙ።"}
          </p>
          <div className="mt-3 h-1 w-12 bg-[#FFD700] mx-auto rounded-full" />
        </div>

        {/* Interactive Ecosystem Hierarchy Diagram */}
        <div className="mb-20 rounded-3xl border border-white/[0.05] bg-gradient-to-b from-[#0E0E0E] to-black p-6 md:p-10 relative overflow-hidden" id="distribution-hub">
          {/* Background grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <h3 className="font-sans text-xs font-bold text-gray-500 uppercase tracking-widest text-center mb-10">
            {language === "en" ? "Interactive Ecosystem Flow Map" : "በይነተገናኝ የሥርዓተ-ምህዳር ፍሰት ካርታ"}
          </h3>

          <div className="relative max-w-2xl mx-auto flex flex-col items-center">
            {/* Center Top: BEU TECH (Root) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-20 flex flex-col items-center bg-[#121212] border-2 border-[#FFD700] rounded-2xl px-10 py-5 text-center shadow-[0_0_30px_rgba(255,215,0,0.15)] group cursor-default"
            >
              {/* Pulse ring */}
              <div className="absolute -inset-1 rounded-2xl bg-[#FFD700]/10 animate-ping opacity-60 pointer-events-none" />
              <Zap className="h-8 w-8 text-[#FFD700] fill-current mb-2 animate-bounce" />
              <h4 className="font-sans text-lg font-black text-white tracking-widest uppercase">
                BEU TECH
              </h4>
              <p className="font-mono text-[9px] text-[#FFD700] uppercase tracking-widest mt-1">
                {language === "en" ? "Parent Holding & Core Engine" : "ዋናው መሪ እና አቅራቢ ኩባንያ"}
              </p>
            </motion.div>

            {/* Connecting SVG lines radiating from BEU TECH to 5 subsidiaries */}
            <div className="w-full h-24 relative mt-2 pointer-events-none hidden md:block">
              <svg className="absolute inset-0 w-full h-full text-white/5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 96">
                {/* Lines from center-top (300, 0) to 5 bottom points */}
                <g stroke="rgba(255, 215, 0, 0.12)" strokeWidth="1.5" fill="none">
                  <path d="M 300,0 L 60,96" />
                  <path d="M 300,0 L 180,96" />
                  <path d="M 300,0 L 300,96" />
                  <path d="M 300,0 L 420,96" />
                  <path d="M 300,0 L 540,96" />
                </g>

                {/* Animated light pulses flowing down */}
                <g stroke="#FFD700" strokeWidth="2.5" fill="none">
                  {/* Verify pulse */}
                  <motion.path
                    d="M 300,0 L 60,96"
                    initial={{ strokeDasharray: "12 120", strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -132 }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                  />
                  {/* Digital pulse */}
                  <motion.path
                    d="M 300,0 L 180,96"
                    initial={{ strokeDasharray: "12 100", strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -112 }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "linear", delay: 0.3 }}
                  />
                  {/* Finance pulse */}
                  <motion.path
                    d="M 300,0 L 300,96"
                    initial={{ strokeDasharray: "12 100", strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -112 }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "linear", delay: 0.6 }}
                  />
                  {/* Develop pulse */}
                  <motion.path
                    d="M 300,0 L 420,96"
                    initial={{ strokeDasharray: "12 120", strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -132 }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 0.9 }}
                  />
                  {/* Education pulse */}
                  <motion.path
                    d="M 300,0 L 540,96"
                    initial={{ strokeDasharray: "12 120", strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -132 }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 1.2 }}
                  />
                </g>
              </svg>
            </div>

            {/* Downward line for mobile */}
            <div className="w-0.5 h-12 bg-gradient-to-b from-[#FFD700] to-[#FFD700]/10 md:hidden mt-2 animate-pulse" />

            {/* Grid of the 5 Subsidiaries receiving power */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full mt-4 md:mt-0 relative z-10">
              {[
                { 
                  name: "BEU VERIFY", 
                  icon: <Zap className="h-5 w-5 text-[#FFD700]" />, 
                  tag: language === "en" ? "Security & Fraud Check" : "የግብይት ደህንነት ቁጥጥር", 
                  desc: "Telemetry payment verification",
                  id: "verify",
                  route: "/beu-verify" as const
                },
                { 
                  name: "BEU DIGITAL", 
                  icon: <QrCode className="h-5 w-5 text-[#FFD700]" />, 
                  tag: language === "en" ? "Hospitality & Retail POS" : "የችርቻሮ እና ሆቴል POS", 
                  desc: "Frontline restaurant software",
                  id: "digital",
                  route: "/beu-digital" as const
                },
                { 
                  name: "BEU FINANCE", 
                  icon: <LineChart className="h-5 w-5 text-[#FFD700]" />, 
                  tag: language === "en" ? "Fintech Engines" : "የፋይናንስ መድረኮች", 
                  desc: "Ledgers & API aggregators",
                  id: "finance",
                  route: "/beu-finance" as const
                },
                { 
                  name: "BEU DEVELOP", 
                  icon: <Code2 className="h-5 w-5 text-[#FFD700]" />, 
                  tag: language === "en" ? "Custom Code & MVP" : "የሶፍትوير ልማት", 
                  desc: "Scalable tailor-made engineering",
                  id: "develop",
                  route: "/beu-develop" as const
                },
                { 
                  name: "BEU EDUCATION", 
                  icon: <GraduationCap className="h-5 w-5 text-[#FFD700]" />, 
                  tag: language === "en" ? "EdTech Solutions" : "የትምህርት ስርዓቶች", 
                  desc: "University & college systems",
                  id: "education",
                  route: "/beu-education" as const
                }
              ].map((sub, sIdx) => (
                <motion.div
                  key={sIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + sIdx * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.03, borderColor: "#FFD700" }}
                  onClick={() => navigateTo(sub.route)}
                  className="flex flex-col items-center text-center p-5 rounded-2xl border border-white/5 bg-[#080808]/90 hover:bg-black hover:shadow-[0_0_20px_rgba(255,215,0,0.08)] transition-all cursor-pointer group"
                >
                  <div className="h-10 w-10 rounded-full bg-[#FFD700]/5 border border-[#FFD700]/25 flex items-center justify-center text-[#FFD700] mb-3 group-hover:bg-[#FFD700]/20 group-hover:scale-110 transition-all">
                    {sub.icon}
                  </div>
                  <h5 className="font-sans text-xs font-black text-white tracking-widest">
                    {sub.name}
                  </h5>
                  <span className="font-sans text-[8px] text-[#FFD700] uppercase font-bold tracking-wider mt-1.5 leading-tight block">
                    {sub.tag}
                  </span>
                  
                  {/* Subtle power reception status light */}
                  <div className="mt-4 flex items-center space-x-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[7px] text-emerald-400 font-bold uppercase tracking-widest">DISTRIBUTED ACTIVE</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="subs-directory-grid">
          {companies.map((company, idx) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`rounded-3xl border bg-gradient-to-b from-white/[0.07] to-transparent p-8 md:p-10 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden ${company.color}`}
              id={`subs-page-card-${company.id}`}
            >
              {/* Subtle hover background highlight */}
              <div className="absolute top-0 right-0 h-16 w-16 bg-[#FFD700]/3 rounded-full blur-xl group-hover:bg-[#FFD700]/8 transition-all" />

              <div>
                {/* Header Icon Frame */}
                <div className="inline-flex items-center justify-center rounded-2xl bg-white/[0.02] p-4 border border-white/[0.08] text-[#FFD700]">
                  {company.icon}
                </div>

                <h2 className="mt-6 font-sans text-2xl font-extrabold text-white group-hover:text-[#FFD700] transition-colors duration-300">
                  {company.name}
                </h2>
                
                <p className="mt-2.5 font-sans text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {company.tagline}
                </p>

                <p className="mt-4 font-sans text-xs md:text-sm leading-relaxed text-gray-400">
                  {company.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => navigateTo(company.route)}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-[#FFD700] hover:text-[#FFC400] transition-colors"
                  id={`btn-explore-${company.id}`}
                >
                  <span>
                    {company.id === "verify" 
                      ? (language === "en" ? "Launch Website" : "ድረ-ገጽ ክፈት")
                      : (language === "en" ? "View Offerings" : "ዝርዝር አገልግሎቶችን ይመልከቱ")
                    }
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
