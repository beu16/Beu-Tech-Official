import { useEffect, useState, useRef } from "react";
import { useApp } from "./AppContext";
import { Zap, ArrowDown, Globe, ShieldCheck, Cpu, ArrowRight, X, Sparkles, CheckCircle2, Activity, Layers, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Hero() {
  const { t, navigateTo, language } = useApp();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showRoadmapModal, setShowRoadmapModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse move tracking for glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);



  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[90vh] md:min-h-[95vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] py-16 px-4 md:px-8 text-center"
      id="hero-section"
    >
      {/* Interactive Mouse-Follow Spotlight Glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-40 md:opacity-50"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 215, 0, 0.08), transparent 70%)`,
        }}
        id="hero-mouse-spotlight"
      />

      {/* Dynamic Animated Background Elements (Orbs & Nebulas) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Orb 1: Dynamic Golden Nebula */}
        <motion.div
          animate={{
            x: [-80, 80, -80],
            y: [-40, 40, -40],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#FFD700]/12 via-[#FFD700]/4 to-transparent blur-3xl opacity-80"
        />

        {/* Orb 2: Secondary Amber Glow */}
        <motion.div
          animate={{
            x: [80, -80, 80],
            y: [40, -40, 40],
            scale: [1.15, 0.9, 1.15],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-16 right-16 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#FFD700]/6 via-amber-500/3 to-transparent blur-3xl opacity-60"
        />

        {/* Orb 3: Central Deep Pulse */}
        <motion.div
          animate={{
            scale: [0.95, 1.1, 0.95],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(rgba(255,215,0,0.04)_0%,transparent_70%)] blur-2xl"
        />
      </div>

      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Continuing Digital Heartbeat Pulse Line */}
      <div className="absolute inset-x-0 top-[28%] sm:top-[32%] md:top-[35%] h-32 sm:h-40 md:h-52 w-full pointer-events-none overflow-hidden select-none z-10 opacity-60 sm:opacity-75 md:opacity-85">
        <svg className="w-full h-full text-transparent" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heartbeat-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.05" />
              <stop offset="15%" stopColor="#FFD700" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
              <stop offset="85%" stopColor="#FFD700" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0.05" />
            </linearGradient>
            <filter id="heartbeat-glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Dim constant background reference line */}
          <path
            d="M 0,60 L 150,60 L 160,50 L 170,60 L 180,60 L 190,15 L 200,105 L 210,50 L 220,65 L 230,60 L 450,60 L 460,50 L 470,60 L 480,60 L 490,15 L 500,105 L 510,50 L 520,65 L 530,60 L 750,60 L 760,50 L 770,60 L 780,60 L 790,15 L 800,105 L 810,50 L 820,65 L 830,60 L 1050,60 L 1060,50 L 1070,60 L 1080,60 L 1090,15 L 1100,105 L 1110,50 L 1120,65 L 1130,60 L 1200,60"
            fill="none"
            stroke="rgba(255, 215, 0, 0.12)"
            strokeWidth="1.5"
          />

          {/* Beautiful glowing animated flowing pulse path */}
          <motion.path
            d="M 0,60 L 150,60 L 160,50 L 170,60 L 180,60 L 190,15 L 200,105 L 210,50 L 220,65 L 230,60 L 450,60 L 460,50 L 470,60 L 480,60 L 490,15 L 500,105 L 510,50 L 520,65 L 530,60 L 750,60 L 760,50 L 770,60 L 780,60 L 790,15 L 800,105 L 810,50 L 820,65 L 830,60 L 1050,60 L 1060,50 L 1070,60 L 1080,60 L 1090,15 L 1100,105 L 1110,50 L 1120,65 L 1130,60 L 1200,60"
            fill="none"
            stroke="url(#heartbeat-gradient)"
            strokeWidth="3"
            filter="url(#heartbeat-glow)"
            initial={{ strokeDasharray: "250 1000", strokeDashoffset: 1200 }}
            animate={{ strokeDashoffset: -1200 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear"
            }}
          />
        </svg>
      </div>

      {/* Core Hero Content */}
      <div className="relative z-20 flex max-w-4xl flex-col items-center justify-center">
        {/* Clean Floating Golden Moving Text Marquee (Ultra Clear, Smooth Right to Left) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => setShowRoadmapModal(true)}
          className="mb-8 w-full max-w-2xl mx-auto overflow-hidden select-none cursor-pointer group py-2"
          id="ethiopia-2030-marquee-text"
        >
          {/* Smooth GPU-Accelerated Marquee Track */}
          <div className="relative w-full overflow-hidden whitespace-nowrap">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
              className="inline-flex space-x-12 font-sans text-xs sm:text-sm font-black tracking-widest text-[#FFD700] uppercase transform-gpu will-change-transform antialiased group-hover:text-amber-300 transition-colors"
            >
              <div className="inline-flex items-center space-x-12 shrink-0">
                <span className="flex items-center space-x-3">
                  <span className="text-emerald-400 text-base">✦</span>
                  <span className="font-sans font-black tracking-widest">WORKING TOWARD ETHIOPIAN 2030 DIGITAL TRANSFORMATION</span>
                </span>
                <span className="flex items-center space-x-3">
                  <span className="text-emerald-400 text-base">✦</span>
                  <span className="font-sans font-black tracking-widest">WORKING TOWARD ETHIOPIAN 2030 DIGITAL TRANSFORMATION</span>
                </span>
              </div>
              <div className="inline-flex items-center space-x-12 shrink-0">
                <span className="flex items-center space-x-3">
                  <span className="text-emerald-400 text-base">✦</span>
                  <span className="font-sans font-black tracking-widest">WORKING TOWARD ETHIOPIAN 2030 DIGITAL TRANSFORMATION</span>
                </span>
                <span className="flex items-center space-x-3">
                  <span className="text-emerald-400 text-base">✦</span>
                  <span className="font-sans font-black tracking-widest">WORKING TOWARD ETHIOPIAN 2030 DIGITAL TRANSFORMATION</span>
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Futuristic Glowing Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mb-6 flex flex-col items-center justify-center select-none"
          id="glowing-new-age-container"
        >
          {/* Enhanced Ambient Glow Background Layer */}
          <motion.div 
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 0.95, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-14 -z-10 rounded-full bg-gradient-to-r from-[#FFD700]/15 via-[#FFD700]/30 to-[#FFD700]/10 opacity-85 blur-3xl" 
          />
          
          <h1 
            className="font-sans text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-none relative filter drop-shadow-[0_0_35px_rgba(255,215,0,0.55)] drop-shadow-[0_0_65px_rgba(255,215,0,0.35)]"
            id="glowing-new-age-text"
          >
            <span className="bg-gradient-to-b from-white via-[#FFFEEF] to-[#FFD700] bg-clip-text text-transparent">
              Welcome To The New Age
            </span>
          </h1>

          {/* Elegant subline underline glow effect */}
          <motion.div 
            animate={{
              width: ["12rem", "18rem", "12rem"],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mt-6 h-[2.5px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent shadow-[0_0_15px_#FFD700,0_0_30px_#FFD700]" 
          />
        </motion.div>

        {/* Hero Subtext & Company Uplift Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-2xl"
          id="hero-subtext-container"
        >
          <p className="font-sans text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl" id="hero-subtext">
            {t("heroSubtitle")}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
          id="hero-actions"
        >
          {/* Main Solid CTA */}
          <button
            onClick={() => navigateTo("/subsidiaries")}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-lg bg-[#FFD700] px-8 py-3.5 text-base font-bold text-black shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] active:scale-[0.98]"
            id="hero-cta-explore"
          >
            <span>{t("exploreCompanies")}</span>
            <Zap className="h-4 w-4 fill-current text-black" />
          </button>

          {/* Outlined Secondary CTA */}
          <button
            onClick={() => navigateTo("/contact")}
            className="w-full sm:w-auto flex items-center justify-center rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-base font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:border-white/40 active:scale-[0.98]"
            id="hero-cta-contact"
          >
            <span>{t("startProject")}</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 flex flex-col items-center space-y-1 cursor-pointer pointer-events-auto"
        onClick={() => {
          const nextSection = document.getElementById("subsidiaries-showcase");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        id="scroll-indicator"
      >
        <span className="font-sans text-xs font-medium tracking-widest text-gray-500 uppercase">
          {t("scrollIndicator")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#FFD700]"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>

      {/* Interactive Ethiopia Digital Strategy 2030 Modal */}
      <AnimatePresence>
        {showRoadmapModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl rounded-3xl border border-emerald-500/40 bg-[#0E0E0E] p-6 sm:p-8 text-left shadow-[0_0_80px_rgba(16,185,129,0.25)] overflow-hidden"
            >
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setShowRoadmapModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Landmark className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                      ETHIOPIA DIGITAL STRATEGY 2030
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[9px] font-bold">
                      GOVERNMENT ALIGNED
                    </span>
                  </div>
                  <h3 className="font-sans text-xl sm:text-2xl font-black text-white mt-1">
                    Powering Ethiopia's 2030 Digital Economy
                  </h3>
                </div>
              </div>

              {/* Modal Content / Pillars Grid */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                Beu Tech actively advances Ethiopia's National Digital Transformation Strategy 2030 through specialized infrastructure across fraud prevention, merchant digitalization, fintech unification, and high-load software engineering.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* Pillar 1 */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center space-x-2.5 mb-2 text-[#FFD700]">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="font-sans text-sm font-bold text-white">01. Multi-Bank Verification</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-normal">
                    Protecting national commerce with instant cross-verification across Telebirr, CBE Birr, Abyssinia, Awash, Dashen, and M-PESA.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center space-x-2.5 mb-2 text-[#FFD700]">
                    <Activity className="h-5 w-5" />
                    <span className="font-sans text-sm font-bold text-white">02. Merchant Digitalization</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-normal">
                    Replacing paper registers with contactless QR ordering, smart POS systems, and real-time merchant inventory analytics.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center space-x-2.5 mb-2 text-[#FFD700]">
                    <Cpu className="h-5 w-5" />
                    <span className="font-sans text-sm font-bold text-white">03. Unified Payment Gateway</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-normal">
                    Providing Ethiopian developers with secure 256-bit APIs for automated reconciliation and ledger synchronization.
                  </p>
                </div>

                {/* Pillar 4 */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center space-x-2.5 mb-2 text-[#FFD700]">
                    <Layers className="h-5 w-5" />
                    <span className="font-sans text-sm font-bold text-white">04. Campus Cashless Systems</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-normal">
                    Modernizing academic institutions with digital student portals, parent SMS alerts, and cashless tuition settlement.
                  </p>
                </div>
              </div>

              {/* Progress Bar & Footer Action */}
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-full sm:w-auto flex-1">
                  <div className="flex justify-between text-xs font-mono text-emerald-400 mb-1.5">
                    <span>NATIONAL ROADMAP ALIGNMENT</span>
                    <span className="font-bold">78% COMPLETED</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 via-[#FFD700] to-amber-500 w-[78%]" />
                  </div>
                </div>

                <button
                  onClick={() => {
                    setShowRoadmapModal(false);
                    navigateTo("/subsidiaries");
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#FFD700] hover:bg-amber-400 text-black font-extrabold text-xs flex items-center justify-center space-x-2 transition-all shadow-md shrink-0"
                >
                  <span>Explore All Divisions</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
