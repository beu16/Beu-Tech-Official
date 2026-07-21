import { useState, useEffect } from "react";
import { useApp } from "./AppContext";
import { Zap, Shield, FileText, Check, QrCode, ArrowUpRight, Code2, LineChart, Cpu, Database, Settings, Terminal, Coffee, GraduationCap, BookOpen } from "lucide-react";
import { motion } from "motion/react";

export default function Subsidiaries() {
  const { t, navigateTo, language } = useApp();

  // Code typing effect state for Beu Develop Visual
  const [typedCode, setTypedCode] = useState("");
  const codeSnippet = `const beuTech = {
  mission: "Digitize Ethiopia",
  subsidiaries: ["Verify", "Digital", "Finance", "Develop"],
  stack: ["React", "Node", "PostgreSQL"],
  deploy: () => "Production Ready"
};`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedCode((prev) => prev + codeSnippet.charAt(index));
      index++;
      if (index >= codeSnippet.length) {
        setTimeout(() => {
          setTypedCode("");
          index = 0;
        }, 3000); // Wait 3s and restart
      }
    }, 40);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <section className="relative bg-[#0A0A0A] py-24 px-4 sm:px-6 lg:px-8" id="subsidiaries-showcase">
      {/* Ambient gradient backgrounds */}
      <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-[#FFD700]/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-0 w-[500px] h-[500px] bg-[#FFD700]/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            id="subsidiaries-heading"
          >
            {language === "en" ? "Our Specialized Subsidiaries" : "የእኛ ልዩ ቅርንጫፍ ኩባንያዎች"}
          </motion.h2>
          <div className="mt-3 h-1 w-16 bg-[#FFD700] mx-auto rounded-full" />
        </div>

        {/* Alternate Subsidiary Cards */}
        <div className="space-y-32" id="subsidiaries-list">
          
          {/* SUBSIDIARY 1: Beu Verify */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16" id="subsidiary-beu-verify">
            {/* Content (Left) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <div className="inline-flex items-center space-x-2 text-[#FFD700] mb-4">
                <Zap className="h-5 w-5 fill-[#FFD700]" />
                <span className="font-sans text-xs font-bold tracking-widest uppercase">
                  {t("verifyTitle")}
                </span>
              </div>
              <h3 className="font-sans text-3xl font-extrabold text-white tracking-tight sm:text-4xl leading-[1.15]" id="verify-headline">
                {t("verifyTagline")}
              </h3>
              <p className="mt-6 font-sans text-sm md:text-base leading-relaxed text-gray-400">
                {t("verifyDesc")}
              </p>

              {/* Grid Features */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4" id="verify-features-grid">
                {[
                  { title: t("verifyFeature1Title"), desc: t("verifyFeature1Desc"), icon: <Zap className="h-4 w-4 text-[#FFD700]" /> },
                  { title: t("verifyFeature2Title"), desc: t("verifyFeature2Desc"), icon: <Shield className="h-4 w-4 text-[#FFD700]" /> },
                  { title: t("verifyFeature3Title"), desc: t("verifyFeature3Desc"), icon: <FileText className="h-4 w-4 text-[#FFD700]" /> },
                  { title: t("verifyFeature4Title"), desc: t("verifyFeature4Desc"), icon: <Check className="h-4 w-4 text-[#FFD700]" /> },
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 rounded-xl border border-white/[0.03] bg-white/[0.01]">
                    <div className="mt-1 flex-shrink-0 p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-bold text-white">{feat.title}</h4>
                      <p className="mt-1 font-sans text-xs text-gray-500 leading-normal">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={() => navigateTo("/beu-verify")}
                  className="inline-flex items-center space-x-2 rounded-lg bg-[#FFD700]/10 hover:bg-[#FFD700]/20 border border-[#FFD700]/30 px-6 py-3 text-sm font-bold text-[#FFD700] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
                  id="btn-beu-verify"
                >
                  <span>{t("verifyCta")}</span>
                </button>
              </div>
            </motion.div>

            {/* Visual Screen Animation (Right) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative w-full max-w-md h-[340px] rounded-3xl border border-white/[0.06] bg-[#0E0E0E] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden group">
                {/* Border Hover Accent */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-tr from-[#FFD700]/0 to-[#FFD700]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Visual phone screen container */}
                <div className="relative w-[220px] h-[300px] rounded-2.5xl border border-white/10 bg-[#070707] p-3 flex flex-col justify-between overflow-hidden shadow-2xl">
                  {/* Speaker & notch */}
                  <div className="w-16 h-3 bg-white/10 rounded-full mx-auto mb-2" />
                  
                  {/* Screen Content */}
                  <div className="flex-grow flex flex-col justify-center items-center relative">
                    <div className="w-full border border-dashed border-white/5 bg-white/[0.02] rounded-xl p-3 flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Scanning Line overlay */}
                      <motion.div
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-0 right-0 h-0.5 bg-[#FFD700] shadow-[0_0_8px_#FFD700] pointer-events-none z-10"
                      />

                      <QrCode className="h-20 w-20 text-gray-600 animate-pulse" />
                      
                      {/* Scanning Green status check mark pops in */}
                      <motion.div
                        animate={{
                          scale: [0.7, 1.1, 1],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-[#0A0A0A]/90 flex flex-col items-center justify-center"
                      >
                        <div className="h-12 w-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-2">
                          <Check className="h-6 w-6 stroke-[3]" />
                        </div>
                        <span className="font-mono text-[10px] text-emerald-400 font-bold tracking-widest uppercase">
                          VERIFIED
                        </span>
                        <span className="font-sans text-[8px] text-gray-500 mt-1">
                          Ref: TXN9832749
                        </span>
                      </motion.div>
                    </div>

                    <div className="w-full mt-3 space-y-1.5">
                      <div className="h-2 w-2/3 bg-white/5 rounded" />
                      <div className="h-2 w-full bg-white/5 rounded" />
                    </div>
                  </div>

                  {/* Bottom bar */}
                  <div className="w-16 h-1 bg-white/10 rounded-full mx-auto mt-2" />
                </div>

                {/* Floating telemetry lines around */}
                <div className="absolute top-8 left-8 p-3 rounded-lg border border-white/[0.03] bg-white/[0.01] pointer-events-none">
                  <span className="font-mono text-[9px] text-[#FFD700]">Telebirr Guard</span>
                  <div className="h-1 w-10 bg-emerald-500 rounded mt-1 animate-pulse" />
                </div>
                <div className="absolute bottom-8 right-8 p-3 rounded-lg border border-white/[0.03] bg-white/[0.01] pointer-events-none">
                  <span className="font-mono text-[9px] text-[#FFD700]">ETB 99/mo</span>
                  <div className="h-1 w-12 bg-amber-500 rounded mt-1 animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* SUBSIDIARY 2: Beu Digital */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16" id="subsidiary-beu-digital">
            {/* Content (Right) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <div className="inline-flex items-center space-x-2 text-[#FFD700] mb-4">
                <QrCode className="h-5 w-5 fill-[#FFD700]/10" />
                <span className="font-sans text-xs font-bold tracking-widest uppercase">
                  {t("digitalTitle")}
                </span>
              </div>
              <h3 className="font-sans text-3xl font-extrabold text-white tracking-tight sm:text-4xl leading-[1.15]" id="digital-headline">
                {t("digitalTagline")}
              </h3>
              <p className="mt-6 font-sans text-sm md:text-base leading-relaxed text-gray-400">
                {t("digitalDesc")}
              </p>

              {/* Products Table */}
              <div className="mt-8 overflow-hidden rounded-xl border border-white/[0.05] bg-white/[0.01] backdrop-blur-md" id="digital-products-table">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.05] bg-white/[0.02]">
                      <th className="py-3 px-4 font-sans text-xs font-semibold tracking-wider text-[#FFD700] uppercase">
                        {t("productColName")}
                      </th>
                      <th className="py-3 px-4 font-sans text-xs font-semibold tracking-wider text-gray-400 uppercase">
                        {t("productColDesc")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.03]">
                    {[
                      { title: t("pmsTitle"), desc: t("pmsDesc") },
                      { title: t("foodTitle"), desc: t("foodDesc") },
                      { title: t("qrTitle"), desc: t("qrDesc") },
                      { title: t("koksTitle"), desc: t("koksDesc") },
                      { title: t("customTitle"), desc: t("customDesc") },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                        <td className="py-3 px-4 font-sans text-xs md:text-sm font-bold text-white whitespace-nowrap">
                          {row.title}
                        </td>
                        <td className="py-3 px-4 font-sans text-xs text-gray-400">
                          {row.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => navigateTo("/beu-digital")}
                  className="inline-flex items-center space-x-2 rounded-lg bg-[#FFD700]/10 hover:bg-[#FFD700]/20 border border-[#FFD700]/30 px-6 py-3 text-sm font-bold text-[#FFD700] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
                  id="btn-beu-digital"
                >
                  <span>{t("digitalCta")}</span>
                </button>
              </div>
            </motion.div>

            {/* Visual (Left) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative w-full max-w-md h-[340px] rounded-3xl border border-white/[0.06] bg-[#0E0E0E] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden group">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-tr from-[#FFD700]/0 to-[#FFD700]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* QR scan table visual */}
                <div className="relative w-[280px] h-[220px] flex items-center justify-center">
                  
                  {/* The Restaurant Table base */}
                  <div className="absolute bottom-4 left-0 right-0 h-16 rounded-xl border border-white/5 bg-gradient-to-t from-black to-white/[0.02]" />

                  {/* QR menu card stand on table */}
                  <div className="relative w-[110px] h-[130px] rounded-xl border border-white/10 bg-[#090909] p-2 flex flex-col items-center justify-between shadow-2xl">
                    <span className="font-sans text-[7px] text-gray-400 font-bold uppercase tracking-widest">
                      SCAN TO ORDER
                    </span>
                    {/* Pulsing QR code */}
                    <div className="relative p-1.5 rounded-lg border border-white/5 bg-white/[0.01]">
                      <QrCode className="h-12 w-12 text-[#FFD700]" />
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 border border-[#FFD700] rounded-lg"
                      />
                    </div>
                    <span className="font-mono text-[6px] text-gray-500">BEU QR MENU</span>
                  </div>

                  {/* Phone scanning overlays from right top */}
                  <div className="absolute -top-4 -right-2 w-[110px] h-[200px] rounded-2xl border border-white/20 bg-black/90 p-2 shadow-2xl rotate-[-12deg] flex flex-col justify-between">
                    <div className="w-8 h-1.5 bg-white/15 rounded-full mx-auto" />
                    
                    {/* Menu popping out with smooth animation */}
                    <div className="flex-grow flex flex-col items-center justify-center p-1">
                      <motion.div
                        animate={{
                          y: [5, 0, 5],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-lg p-1.5 text-center flex flex-col items-center"
                      >
                        <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-[#FFD700] to-[#FFA500] flex items-center justify-center text-black mb-1">
                          <Coffee className="h-3 w-3 stroke-[2.5]" />
                        </div>
                        <span className="font-sans text-[8px] text-[#FFD700] font-extrabold block">
                          Sidama Macchiato
                        </span>
                        <span className="font-sans text-[6px] text-gray-400 block mt-0.5">
                          ETB 85.00
                        </span>
                      </motion.div>
                    </div>

                    <div className="w-8 h-1 bg-white/15 rounded-full mx-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* SUBSIDIARY 3: Beu Finance */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16" id="subsidiary-beu-finance">
            {/* Content (Left) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <div className="inline-flex items-center space-x-2 text-[#FFD700] mb-4">
                <LineChart className="h-5 w-5" />
                <span className="font-sans text-xs font-bold tracking-widest uppercase">
                  {t("financeTitle")}
                </span>
              </div>
              <h3 className="font-sans text-3xl font-extrabold text-white tracking-tight sm:text-4xl leading-[1.15]" id="finance-headline">
                {t("financeTagline")}
              </h3>
              <p className="mt-6 font-sans text-sm md:text-base leading-relaxed text-gray-400">
                {t("financeDesc")}
              </p>

              {/* Focus list */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4" id="finance-focus-grid">
                {[
                  { title: t("financeFocus1Title"), desc: t("financeFocus1Desc") },
                  { title: t("financeFocus2Title"), desc: t("financeFocus2Desc") },
                  { title: t("financeFocus3Title"), desc: t("financeFocus3Desc") },
                  { title: t("financeFocus4Title"), desc: t("financeFocus4Desc") },
                  { title: t("financeFocus5Title"), desc: t("financeFocus5Desc") },
                  { title: t("financeFocus6Title"), desc: t("financeFocus6Desc") },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col p-4 rounded-xl border border-white/[0.03] bg-white/[0.01]">
                    <h4 className="font-sans text-sm font-bold text-white flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="mt-1 font-sans text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={() => navigateTo("/beu-finance")}
                  className="inline-flex items-center space-x-2 rounded-lg bg-[#FFD700]/10 hover:bg-[#FFD700]/20 border border-[#FFD700]/30 px-6 py-3 text-sm font-bold text-[#FFD700] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
                  id="btn-beu-finance"
                >
                  <span>{t("financeCta")}</span>
                </button>
              </div>
            </motion.div>

            {/* Visual (Right) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative w-full max-w-md h-[340px] rounded-3xl border border-white/[0.06] bg-[#0E0E0E] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden group">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-tr from-[#FFD700]/0 to-[#FFD700]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Financial floating Birr and graphs */}
                <div className="w-full h-full flex flex-col justify-between p-4 relative">
                  {/* Floating Birr text logo */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FFD700]/20 bg-[#FFD700]/5 text-2xl font-black text-[#FFD700] shadow-xl z-20"
                  >
                    ብር
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [10, -10, 10],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-16 left-12 flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/[0.01] text-xs font-semibold text-gray-400 shadow-xl"
                  >
                    ETB
                  </motion.div>

                  {/* The interactive Chart Stage */}
                  <div className="flex-grow flex items-end justify-between h-[180px] border-b border-white/10 px-6 pb-2 relative">
                    {/* Animated Lines/Bars */}
                    {[
                      { height: "40%", delay: 0 },
                      { height: "65%", delay: 0.2 },
                      { height: "55%", delay: 0.4 },
                      { height: "85%", delay: 0.1 },
                      { height: "70%", delay: 0.3 },
                      { height: "95%", delay: 0.5 },
                    ].map((bar, idx) => (
                      <div key={idx} className="w-[12%] h-full flex items-end justify-center">
                        <motion.div
                          initial={{ height: "0%" }}
                          whileInView={{ height: bar.height }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: bar.delay, ease: "easeOut" }}
                          className="w-full rounded-t-lg bg-gradient-to-t from-[#FFD700]/20 via-[#FFD700]/60 to-[#FFD700] group-hover:shadow-[0_0_15px_#FFD700] transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Footer data labels */}
                  <div className="flex items-center justify-between text-[10px] font-sans text-gray-500 font-bold tracking-wider mt-4">
                    <span>Q1 ANALYTICS</span>
                    <span className="text-emerald-400">+12.4% ARR Growth</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* SUBSIDIARY 4: Beu Develop */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16" id="subsidiary-beu-develop">
            {/* Content (Right) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <div className="inline-flex items-center space-x-2 text-[#FFD700] mb-4">
                <Code2 className="h-5 w-5" />
                <span className="font-sans text-xs font-bold tracking-widest uppercase">
                  {t("developTitle")}
                </span>
              </div>
              <h3 className="font-sans text-3xl font-extrabold text-white tracking-tight sm:text-4xl leading-[1.15]" id="develop-headline">
                {t("developTagline")}
              </h3>
              <p className="mt-6 font-sans text-sm md:text-base leading-relaxed text-gray-400">
                {t("developDesc")}
              </p>

              {/* Grid of services */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4" id="develop-services-grid">
                {[
                  { title: t("devService1Title"), desc: t("devService1Desc") },
                  { title: t("devService2Title"), desc: t("devService2Desc") },
                  { title: t("devService3Title"), desc: t("devService3Desc") },
                  { title: t("devService4Title"), desc: t("devService4Desc") },
                  { title: t("devService5Title"), desc: t("devService5Desc") },
                  { title: t("devService6Title"), desc: t("devService6Desc") },
                ].map((serv, idx) => (
                  <div key={idx} className="flex flex-col p-4 rounded-xl border border-white/[0.03] bg-white/[0.01]">
                    <h4 className="font-sans text-sm font-bold text-white flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]" />
                      <span>{serv.title}</span>
                    </h4>
                    <p className="mt-1 font-sans text-xs text-gray-500 leading-relaxed">{serv.desc}</p>
                  </div>
                ))}
              </div>

              {/* Tech stack animated icons */}
              <div className="mt-8 pt-6 border-t border-white/5" id="tech-stack-row">
                <h4 className="font-sans text-xs font-semibold tracking-wider text-gray-400 uppercase mb-4">
                  {t("techStackTitle")}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {["React", "Node.js", "Python", "Flutter", "PostgreSQL", "MongoDB", "AWS", "Docker", "TypeScript", "Next.js"].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg border border-white/[0.05] bg-white/[0.01] font-mono text-[11px] text-gray-300 font-medium hover:border-[#FFD700]/30 hover:text-[#FFD700] hover:bg-[#FFD700]/5 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => navigateTo("/beu-develop")}
                  className="inline-flex items-center space-x-2 rounded-lg bg-[#FFD700]/10 hover:bg-[#FFD700]/20 border border-[#FFD700]/30 px-6 py-3 text-sm font-bold text-[#FFD700] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
                  id="btn-beu-develop"
                >
                  <span>{t("developCta")}</span>
                </button>
              </div>
            </motion.div>

            {/* Visual (Left) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative w-full max-w-md h-[340px] rounded-3xl border border-white/[0.06] bg-[#0E0E0E] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden group">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-tr from-[#FFD700]/0 to-[#FFD700]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Code typing console */}
                <div className="w-full h-full rounded-2xl border border-white/10 bg-[#050505] p-4 font-mono text-[11px] leading-relaxed text-[#FFD700]/90 flex flex-col justify-between select-none">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-[9px] text-gray-500">beu-develop.ts</span>
                  </div>

                  <div className="flex-grow flex flex-col justify-start">
                    <span className="text-gray-400 block">// Code typing animation</span>
                    <pre className="whitespace-pre-wrap text-emerald-400/80 mt-2 font-mono">
                      {typedCode}
                      <span className="inline-block h-3.5 w-1.5 bg-[#FFD700] ml-0.5 animate-pulse align-middle" />
                    </pre>
                  </div>

                  {/* Transforms into beautiful app preview mockup on bottom right */}
                  <motion.div
                    animate={{
                      opacity: [0.1, 0.9, 0.1],
                      scale: [0.95, 1, 0.95],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="mt-2 border border-[#FFD700]/20 bg-[#FFD700]/5 rounded-lg p-2.5 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <Terminal className="h-4 w-4 text-[#FFD700]" />
                      <span className="text-[10px] text-white font-bold">Build Successful</span>
                    </div>
                    <span className="text-[9px] text-emerald-400">STATUS: ACTIVE</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* SUBSIDIARY 5: Beu Education */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16" id="subsidiary-beu-education">
            {/* Content (Left) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <div className="inline-flex items-center space-x-2 text-[#FFD700] mb-4">
                <GraduationCap className="h-5 w-5" />
                <span className="font-sans text-xs font-bold tracking-widest uppercase">
                  {t("educationTitle")}
                </span>
              </div>
              <h3 className="font-sans text-3xl font-extrabold text-white tracking-tight sm:text-4xl leading-[1.15]" id="education-headline">
                {t("educationTagline")}
              </h3>
              <p className="mt-6 font-sans text-sm md:text-base leading-relaxed text-gray-400">
                {t("educationDesc")}
              </p>

              {/* Grid of features */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4" id="education-features-grid">
                {[
                  { 
                    title: language === "en" ? "Full University System" : "የዩኒቨርሲቲ አስተዳደር ስርዓት", 
                    desc: language === "en" ? "End-to-end management from registrations to student affairs." : "ምዝገባን፣ ኮርሶችን እና የተማሪዎችን ሁኔታ ከመጀመሪያ እስከ መጨረሻ መቆጣጠሪያ።" 
                  },
                  { 
                    title: language === "en" ? "Grade Report Systems" : "የውጤት ሪፖርት ማሳያ ስርዓት", 
                    desc: language === "en" ? "Secure transcripts, GPAs, and real-time report generation." : "አስተማማኝ የውጤት ዝርዝሮች፣ የGPA ስሌቶች እና ፈጣን ሪፖርቶች።" 
                  },
                  { 
                    title: language === "en" ? "College Management" : "የኮሌጅ ማስተዳደሪያ መፍትሄ", 
                    desc: language === "en" ? "Tailored software supporting vocational schools and medium colleges." : "ለቴክኒክና ሙያ ትምህርት ቤቶች እና መካከለኛ ኮሌጆች የተዘጋጀ ብጁ ሶፍትዌር።" 
                  },
                  { 
                    title: language === "en" ? "Instant Parent Portals" : "የወላጆች መከታተያ መድረክ", 
                    desc: language === "en" ? "Live grading feeds, attendance records, and direct school notices." : "ቀጥታ የውጤት መግለጫዎች፣ የተማሪዎች የደህንነት እና የክትትል መረጃዎች።" 
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 rounded-xl border border-white/[0.03] bg-white/[0.01]">
                    <div className="mt-1 flex-shrink-0 p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                      <BookOpen className="h-4 w-4 text-[#FFD700]" />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-bold text-white">{item.title}</h4>
                      <p className="mt-1 font-sans text-xs text-gray-500 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={() => navigateTo("/beu-education")}
                  className="inline-flex items-center space-x-2 rounded-lg bg-[#FFD700]/10 hover:bg-[#FFD700]/20 border border-[#FFD700]/30 px-6 py-3 text-sm font-bold text-[#FFD700] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
                  id="btn-beu-education"
                >
                  <span>{t("educationCta")}</span>
                </button>
              </div>
            </motion.div>

            {/* Visual (Right) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative w-full max-w-md h-[340px] rounded-3xl border border-white/[0.06] bg-[#0E0E0E] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden group">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-tr from-[#FFD700]/0 to-[#FFD700]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Beautiful Student Report Card Interface */}
                <div className="w-full h-full rounded-2xl border border-white/10 bg-[#070707] p-5 flex flex-col justify-between overflow-hidden shadow-2xl relative">
                  {/* Student profile bar */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#FFD700] to-amber-500 flex items-center justify-center text-black font-black text-xs">
                        AM
                      </div>
                      <div>
                        <h4 className="font-sans text-xs font-bold text-white">Alula Michael</h4>
                        <span className="font-mono text-[9px] text-gray-500">ID: BEU-UR-7642</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-mono text-[8px] text-emerald-400 font-bold">
                      CGPA: 3.89
                    </span>
                  </div>

                  {/* Semester Grades Ledger */}
                  <div className="flex-grow py-4 space-y-2">
                    <span className="font-sans text-[9px] font-bold text-gray-500 uppercase tracking-widest block">
                      Current Semester Reports
                    </span>
                    
                    {[
                      { course: "SWE-4201: Distributed Systems", grade: "A+", points: "4.0" },
                      { course: "SWE-4202: Advanced Database Systems", grade: "A", points: "4.0" },
                      { course: "SWE-4203: Cloud Infrastructure & DevOps", grade: "A-", points: "3.75" },
                      { course: "MGT-3102: Tech Entrepreneurship", grade: "A+", points: "4.0" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] transition-colors">
                        <span className="font-sans text-[10px] text-gray-300 font-medium truncate max-w-[200px]">
                          {item.course}
                        </span>
                        <div className="flex items-center space-x-3">
                          <span className="font-mono text-[10px] text-[#FFD700] font-black">{item.grade}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Smart university branding stamp */}
                  <div className="border-t border-white/5 pt-3 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <BookOpen className="h-3.5 w-3.5 text-gray-500" />
                      <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest font-black">
                        BEU EDUCATION ENGINE v1.4
                      </span>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-[#FFD700] animate-pulse shadow-[0_0_8px_#FFD700]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
