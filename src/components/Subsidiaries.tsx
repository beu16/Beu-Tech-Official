import { useApp } from "./AppContext";
import {
  Zap,
  QrCode,
  LineChart,
  Code2,
  GraduationCap,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Terminal,
  Layers,
  Building2,
  Smartphone,
  Cpu,
  Wifi,
  Lock,
} from "lucide-react";
import { motion } from "motion/react";

export default function Subsidiaries() {
  const { navigateTo, language } = useApp();

  const subsidiaries = [
    {
      id: "verify",
      name: "Beu Verify",
      tagline: language === "en" ? "Multi-Bank & Digital Wallet Verification Engine" : "የባንክ እና ዲጂታል ዋሌት ክፍያ ማረጋገጫ",
      coreThought: language === "en"
        ? "Protecting businesses from payment fraud with instant cross-verification across Telebirr, CBE Birr, Abyssinia, Awash, Dashen, and M-PESA."
        : "ንግዶችን ከሐሰተኛ የክፍያ ደረሰኞች በመጠበቅ በቴሌብር፣ ሲቢኢ ብር፣ አቢሲንያ፣ አዋሽ፣ ዳሸን እና ኤም-ፔሳ ላይ ቅጽበታዊ ማረጋገጫ ይሰጣል።",
      route: "/beu-verify" as const,
      icon: <Zap className="h-6 w-6 text-[#FFD700] fill-current" />,
      badges: ["Telebirr", "CBE Birr", "Abyssinia", "Awash", "Dashen", "M-PESA"],
      highlightColor: "from-amber-500/10 via-[#FFD700]/5 to-transparent",
      accentGlow: "rgba(255, 215, 0, 0.15)",
      renderVisual: () => (
        <div className="relative h-28 w-full rounded-xl bg-[#050505] border border-white/10 p-3 overflow-hidden flex flex-col justify-between group-hover:border-[#FFD700]/40 transition-colors">
          {/* Animated scanning laser line */}
          <motion.div
            animate={{ top: ["5%", "85%", "5%"] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent z-20 shadow-[0_0_12px_#FFD700]"
          />

          {/* Top telemetry bar */}
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
            <div className="flex items-center space-x-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-semibold">LIVE VERIFICATION</span>
            </div>
            <span className="text-gray-500">0.18s LATENCY</span>
          </div>

          {/* Simulated receipt ticket */}
          <div className="relative z-10 flex items-center justify-between my-auto bg-white/[0.03] border border-white/5 rounded-lg px-2.5 py-1.5">
            <div className="flex items-center space-x-2">
              <div className="p-1 rounded bg-[#FFD700]/10 text-[#FFD700]">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono font-bold text-white tracking-wider">
                  TXN #9A842-ET
                </div>
                <div className="text-[9px] text-gray-400">
                  Telebirr • CBE Birr • Abyssinia
                </div>
              </div>
            </div>

            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-bold text-emerald-300"
            >
              <CheckCircle2 className="h-3 w-3 text-emerald-400" />
              <span>VERIFIED</span>
            </motion.div>
          </div>

          {/* Bottom security watermark */}
          <div className="flex items-center justify-between text-[9px] text-gray-500 font-mono">
            <span>ANTI-FRAUD AI GATEWAY</span>
            <span className="text-[#FFD700]">100% ACCURATE</span>
          </div>
        </div>
      ),
    },
    {
      id: "digital",
      name: "Beu Digital",
      tagline: language === "en" ? "Commercial & Merchant Operating Systems" : "የንግድ እና ነጋዴዎች ኦፕሬቲንግ ሲስተም",
      coreThought: language === "en"
        ? "Transforming retail and hospitality through contactless QR menus, smart POS registers, and real-time merchant analytics."
        : "የችርቻሮ እና የሆቴል ዘርፎችን በዘመናዊ QR ሜኑዎች፣ ስማርት POS እና ቅጽበታዊ የንግድ ትንታኔዎች ያዘምናል::",
      route: "/beu-digital" as const,
      icon: <QrCode className="h-6 w-6 text-[#FFD700]" />,
      badges: ["Smart POS", "Digital QR", "Inventory AI", "Analytics"],
      highlightColor: "from-blue-500/10 via-[#FFD700]/5 to-transparent",
      accentGlow: "rgba(59, 130, 246, 0.15)",
      renderVisual: () => (
        <div className="relative h-28 w-full rounded-xl bg-[#050505] border border-white/10 p-3 overflow-hidden flex items-center justify-between group-hover:border-blue-500/40 transition-colors">
          {/* Animated Background Pulse Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-60" />

          {/* Left Mini QR Code Matrix with Scanning Reticle */}
          <div className="relative z-10 p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <QrCode className="h-12 w-12 text-[#FFD700]" />
            {/* Corner glowing reticles */}
            <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-[#FFD700]" />
            <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-[#FFD700]" />
            <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-[#FFD700]" />
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-[#FFD700]" />
          </div>

          {/* Right Live Merchant Terminal Analytics */}
          <div className="relative z-10 flex-1 ml-3 flex flex-col justify-between h-full py-0.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span className="text-blue-400 font-semibold flex items-center gap-1">
                <Smartphone className="h-3 w-3" /> SMART MERCHANT POS
              </span>
              <span className="text-emerald-400 font-mono">+18.4%</span>
            </div>

            <div className="my-auto bg-white/[0.03] border border-white/5 rounded-lg p-1.5 flex items-center justify-between">
              <div>
                <div className="text-[9px] text-gray-400">DAILY SALES</div>
                <div className="text-xs font-mono font-bold text-white">
                  3,480.00 ETB
                </div>
              </div>

              {/* Animated mini chart bar representation */}
              <div className="flex items-end space-x-1 h-6">
                {[40, 70, 55, 90, 65, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [`${h}%`, `${Math.min(100, h + 15)}%`, `${h}%`] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                    className="w-1.5 bg-[#FFD700] rounded-t-sm opacity-80"
                  />
                ))}
              </div>
            </div>

            <div className="text-[9px] font-mono text-gray-500 flex justify-between">
              <span>AUTO ORDER SYNC</span>
              <span className="text-gray-400">ACTIVE POS #04</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "finance",
      name: "Beu Finance",
      tagline: language === "en" ? "Fintech Core & Payment Gateway Infrastructure" : "የፋይናንስ ቴክኖሎጂ እና የክፍያ መንገድ መሰረተ-ልማት",
      coreThought: language === "en"
        ? "Empowering developers and financial institutions with unified payment gateway APIs and automated reconciliation hooks."
        : "ለአልሚዎች እና ፋይናንስ ተቋማት አንድ ወጥ የክፍያ ኤፒአይ (APIs) እና አውቶሜትድ የሂሳብ ማገናኛዎችን ያቀርባል።",
      route: "/beu-finance" as const,
      icon: <LineChart className="h-6 w-6 text-[#FFD700]" />,
      badges: ["Unified API", "Auto Reconciliation", "Ledger Sync", "Security Core"],
      highlightColor: "from-emerald-500/10 via-[#FFD700]/5 to-transparent",
      accentGlow: "rgba(16, 185, 129, 0.15)",
      renderVisual: () => (
        <div className="relative h-28 w-full rounded-xl bg-[#050505] border border-white/10 p-3 overflow-hidden flex flex-col justify-between group-hover:border-emerald-500/40 transition-colors">
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 z-10">
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <Activity className="h-3 w-3" /> PAYMENT GATEWAY API
            </span>
            <span className="text-gray-500">256-BIT ENCRYPTION</span>
          </div>

          {/* Animated Fintech Data Flow Pipeline */}
          <div className="relative z-10 my-auto py-2 flex items-center justify-between">
            {/* Node 1 */}
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center">
              <Building2 className="h-4 w-4 text-[#FFD700]" />
              <span className="text-[8px] font-mono text-gray-400 mt-0.5">BANKS</span>
            </div>

            {/* Connecting animated beam */}
            <div className="relative flex-1 mx-2 h-0.5 bg-white/10 overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent shadow-[0_0_8px_#FFD700]"
              />
            </div>

            {/* Node 2 - Core Engine */}
            <div className="p-2 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/40 flex flex-col items-center">
              <Cpu className="h-4 w-4 text-[#FFD700]" />
              <span className="text-[8px] font-mono text-[#FFD700] mt-0.5 font-bold">BEU API</span>
            </div>

            {/* Connecting animated beam */}
            <div className="relative flex-1 mx-2 h-0.5 bg-white/10 overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear", delay: 0.9 }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_#10B981]"
              />
            </div>

            {/* Node 3 */}
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center">
              <Lock className="h-4 w-4 text-emerald-400" />
              <span className="text-[8px] font-mono text-gray-400 mt-0.5">LEDGER</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-gray-500 z-10">
            <span>99.99% UPTIME</span>
            <span className="text-emerald-400">AUTOMATED SETTLEMENT</span>
          </div>
        </div>
      ),
    },
    {
      id: "develop",
      name: "Beu Develop",
      tagline: language === "en" ? "High-Load Custom Software & Cloud Engineering" : "ከፍተኛ አቅም ያለው የሶፍትዌር እና ክላውድ ምህንድስና",
      coreThought: language === "en"
        ? "Architecting mission-critical enterprise web platforms, mobile applications, and scalable microservice backends."
        : "ለከፍተኛ ድርጅታዊ አገልግሎቶች አስተማማኝ ዌብሳይቶችን፣ ሞባይል አፕሊኬሽኖችን እና ዘመናዊ የክላውድ ሲስተሞችን ይገነባል።",
      route: "/beu-develop" as const,
      icon: <Code2 className="h-6 w-6 text-[#FFD700]" />,
      badges: ["Custom Apps", "Microservices", "Cloud Scaling", "High Availability"],
      highlightColor: "from-purple-500/10 via-[#FFD700]/5 to-transparent",
      accentGlow: "rgba(168, 85, 247, 0.15)",
      renderVisual: () => (
        <div className="relative h-28 w-full rounded-xl bg-[#050505] border border-white/10 p-3 overflow-hidden flex flex-col justify-between group-hover:border-purple-500/40 transition-colors">
          {/* Header IDE window controls */}
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-purple-400 font-semibold flex items-center gap-1">
                <Terminal className="h-3 w-3" /> ARCHITECTURE
              </span>
            </div>
            <span className="text-gray-500">CLOUD NODE #01</span>
          </div>

          {/* Animated Command Prompt Lines */}
          <div className="my-auto bg-black/80 rounded-lg p-2 font-mono text-[10px] border border-white/5 space-y-1">
            <div className="text-gray-300 flex items-center space-x-1">
              <span className="text-purple-400">$</span>
              <span>deploy --env=enterprise --cluster=addis</span>
            </div>
            <div className="text-emerald-400 flex items-center justify-between">
              <span className="flex items-center space-x-1">
                <span>✓</span>
                <span>Microservices active</span>
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-1.5 h-3 bg-[#FFD700] inline-block"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-gray-500">
            <span>DOCKER • KUBERNETES • GO</span>
            <span className="text-purple-400">SCALABLE ARCHITECTURE</span>
          </div>
        </div>
      ),
    },
    {
      id: "education",
      name: "Beu Education",
      tagline: language === "en" ? "Academic Digital Campus & Cashless Systems" : "የትምህርት ተቋማት ዲጂታል እና የካሽለስ ሲስተም",
      coreThought: language === "en"
        ? "Modernizing schools and universities with integrated tuition payment gateways, student portals, and parent alerts."
        : "ትምህርት ቤቶችን እና ዩኒቨርሲቲዎችን በዲጂታል የትምህርት ክፍያ፣ የተማሪዎች ፖርታል እና የወላጅ መከታተያዎች ያዘምናል::",
      route: "/beu-education" as const,
      icon: <GraduationCap className="h-6 w-6 text-[#FFD700]" />,
      badges: ["Cashless Campus", "Tuition Gateway", "Student Portal", "Parent SMS"],
      highlightColor: "from-rose-500/10 via-[#FFD700]/5 to-transparent",
      accentGlow: "rgba(244, 63, 94, 0.15)",
      renderVisual: () => (
        <div className="relative h-28 w-full rounded-xl bg-[#050505] border border-white/10 p-3 overflow-hidden flex flex-col justify-between group-hover:border-rose-500/40 transition-colors">
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
            <span className="text-rose-400 font-semibold flex items-center gap-1">
              <GraduationCap className="h-3.5 w-3.5" /> DIGITAL CAMPUS HUB
            </span>
            <span className="text-emerald-400 font-mono">100% CASHLESS</span>
          </div>

          {/* Student Tuition Reconciliation Progress Bar */}
          <div className="my-auto bg-white/[0.03] border border-white/5 rounded-lg p-2">
            <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
              <span className="text-gray-300">TUITION RECONCILIATION</span>
              <span className="text-[#FFD700] font-bold">100% PAID</span>
            </div>

            <div className="relative w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-rose-500 via-[#FFD700] to-emerald-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-gray-500">
            <span>AUTOMATED PARENT SMS</span>
            <span className="text-gray-300">INSTANT RECEIPT SYNC</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative bg-[#0A0A0A] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" id="subsidiaries-showcase">
      {/* Background ambient light reflections */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FFD700]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 rounded-full bg-white/[0.03] px-4 py-1.5 border border-white/[0.08] mb-4 shadow-[0_0_15px_rgba(255,215,0,0.05)]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#FFD700] animate-pulse" />
            <span className="font-sans text-xs font-semibold tracking-wider text-[#FFD700] uppercase">
              {language === "en" ? "Core Ecosystem" : "ዋናው ሥርዓተ-ምህዳር"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent"
            id="subsidiaries-heading"
          >
            {language === "en" ? "Powering Core Pillars of Ethiopia's Tech Economy" : "የኢትዮጵያን የቴክኖሎጂ ኢኮኖሚ ዋና መሠረቶች እንገነባለን"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-sans text-sm md:text-base text-gray-400 leading-relaxed"
          >
            {language === "en"
              ? "Beu Tech operates specialized subsidiaries engineered to solve targeted infrastructural, commercial, and financial challenges with high-availability systems."
              : "ቤዩ ቴክ የተወሰኑ የመሰረተ-ልማት፣ የንግድ እና የፋይናንስ ፈተናዎችን በከፍተኛ ደረጃ ለመፍታት የተቀረጹ ልዩ ቅርንጫፍ ኩባንያዎችን ያስተዳድራል።"}
          </motion.p>
        </div>

        {/* Core Idea Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="subsidiaries-grid">
          {subsidiaries.map((sub, idx) => (
            <motion.div
              key={sub.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: idx * 0.09 }}
              whileHover={{ y: -8 }}
              onClick={() => navigateTo(sub.route)}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0E0E0E] p-7 cursor-pointer hover:border-[#FFD700]/50 transition-all duration-300 overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_22px_45px_rgba(255,215,0,0.12)]"
              id={`subsidiary-card-${sub.id}`}
            >
              {/* Background gradient highlight */}
              <div className={`absolute inset-0 bg-gradient-to-b ${sub.highlightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              {/* Glowing top line accent */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700]/0 group-hover:via-[#FFD700] to-transparent transition-all duration-500" />

              <div>
                {/* Header Icon + Name */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-3.5">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex items-center justify-center p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:bg-[#FFD700]/10 group-hover:border-[#FFD700]/30 transition-all duration-300 shadow-inner"
                    >
                      {sub.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-sans text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300 flex items-center gap-1.5">
                        {sub.name}
                      </h3>
                      <p className="font-sans text-xs text-[#FFD700] font-medium tracking-wide mt-0.5">
                        {sub.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Animated Interactive Visual Module */}
                <div className="my-4">
                  {sub.renderVisual()}
                </div>

                {/* Core Thought text */}
                <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed mt-4">
                  {sub.coreThought}
                </p>

                {/* Badges / Tech Highlights */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {sub.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-md border border-white/[0.06] bg-white/[0.02] text-gray-400 group-hover:text-gray-200 group-hover:border-white/15 transition-colors"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-gray-300 group-hover:text-[#FFD700] transition-colors">
                <span>{language === "en" ? "Explore Division" : "ዘርፉን ይመልከቱ"}</span>
                <div className="flex items-center justify-center p-1.5 rounded-lg bg-white/[0.03] group-hover:bg-[#FFD700]/20 transition-all duration-300 group-hover:translate-x-1.5">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Ecosystem Architecture Hub Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 5 * 0.09 }}
            whileHover={{ y: -8 }}
            onClick={() => navigateTo("/subsidiaries")}
            className="group relative flex flex-col justify-between rounded-2xl border border-[#FFD700]/30 bg-gradient-to-b from-[#121212] via-[#0D0D0D] to-black p-7 cursor-pointer hover:border-[#FFD700] transition-all duration-300 overflow-hidden shadow-[0_10px_35px_rgba(255,215,0,0.08)]"
            id="subsidiary-card-hub"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFD700]/15 via-transparent to-transparent opacity-80 pointer-events-none" />

            <div>
              <div className="flex items-center space-x-3.5 mb-5">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="p-3.5 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700]"
                >
                  <Layers className="h-6 w-6 animate-pulse" />
                </motion.div>
                <div>
                  <h3 className="font-sans text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300">
                    {language === "en" ? "Full Ecosystem Hub" : "ሙሉ የሥርዓተ-ምህዳር ማዕከል"}
                  </h3>
                  <p className="font-sans text-xs text-[#FFD700] font-medium tracking-wide mt-0.5">
                    {language === "en" ? "Interactive Flow & Structure" : "በይነተገናኝ የፍሰት መዋቅር"}
                  </p>
                </div>
              </div>

              {/* Animated Interactive Network Grid Graphic */}
              <div className="my-4 h-28 w-full rounded-xl bg-[#050505] border border-[#FFD700]/20 p-3 overflow-hidden flex flex-col justify-between relative">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#FFD700]">
                  <span className="flex items-center gap-1">
                    <Wifi className="h-3 w-3 animate-ping" /> INTERCONNECTED HUB
                  </span>
                  <span>5 SUBSIDIARIES</span>
                </div>

                {/* Animated mesh nodes */}
                <div className="relative my-auto flex items-center justify-around z-10">
                  {["Verify", "Digital", "Finance", "Develop", "Edu"].map((node, nIdx) => (
                    <motion.div
                      key={nIdx}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: nIdx * 0.3 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFD700] shadow-[0_0_10px_#FFD700]" />
                      <span className="text-[8px] font-mono text-gray-300 mt-1">{node}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[9px] font-mono text-gray-400">
                  <span>UNIFIED DATA PROTOCOL</span>
                  <span className="text-[#FFD700]">EXPLORE MAP →</span>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed mt-4">
                {language === "en"
                  ? "Explore the full interconnected corporate structure, live flow map, and strategic integration points of all Beu Tech holdings."
                  : "የሁሉንም የቤዩ ቴክ ኩባንያዎች የተሳሰረ መዋቅር፣ ቀጥታ የፍሰት ካርታ እና የስትራቴጂክ ትስስር ነጥቦችን በዝርዝር ይመልከቱ።"}
              </p>
            </div>

            <div className="mt-7 pt-4 border-t border-[#FFD700]/20 flex items-center justify-between text-xs font-bold text-[#FFD700]">
              <span>{language === "en" ? "Open Interactive Ecosystem Map" : "በይነተገናኝ ካርታውን ይክፈቱ"}</span>
              <div className="flex items-center justify-center p-1.5 rounded-lg bg-[#FFD700]/20 transition-all duration-300 group-hover:translate-x-1.5">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
