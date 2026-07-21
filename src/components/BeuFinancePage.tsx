import React, { useState } from "react";
import { useApp } from "./AppContext";
import { LineChart, Landmark, TrendingUp, ShieldAlert, BookOpen, Globe2, ArrowLeft, Check, Send, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function BeuFinancePage() {
  const { t, navigateTo, language } = useApp();

  // State for Beu Finance Form
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    serviceType: "Unified Payments API",
    volume: "Under 100k Birr / month",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.companyName.trim() || !formData.phone.trim()) {
      setValidationError(
        language === "en"
          ? "Please provide your name, company name, and a contact phone number."
          : "እባክዎ ስምዎን፣ የኩባንያ ስምዎን እና ስልክ ቁጥርዎን ያስገቡ።"
      );
      return;
    }

    setValidationError("");
    setIsSubmitting(true);

    // Simulate secure network transaction ledger insert
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      companyName: "",
      phone: "",
      serviceType: "Unified Payments API",
      volume: "Under 100k Birr / month",
      message: "",
    });
    setIsSubmitted(false);
  };

  const services = [
    {
      icon: <LineChart className="h-6 w-6 text-[#FFD700]" />,
      title: t("financeFocus1Title"),
      desc: t("financeFocus1Desc"),
      features: language === "en"
        ? ["Visual representation of expenses and income", "Export tax spreadsheets & fiscal statements", "Historical growth forecasting models", "SME ledger book integrations"]
        : ["የወጪ እና ገቢ ምስላዊ መግለጫ", "የግብር ሰነዶችን እና የፋይናንስ መግለጫዎችን ማዘጋጀት", "የታሪካዊ እድገት ትንበያ ሞዴሎች", "የአነስተኛ እና መካከለኛ ኢንተርፕራይዞች የሂሳብ መዛግብት ውህደት"],
    },
    {
      icon: <Globe2 className="h-6 w-6 text-[#FFD700]" />,
      title: t("financeFocus2Title"),
      desc: t("financeFocus2Desc"),
      features: language === "en"
        ? ["Instant Telebirr receipt confirmation loops", "Secure CBE Birr automated checking hooks", "Local debit card payment processors", "Robust unified documentation APIs"]
        : ["ቅጽበታዊ የቴሌብር ክፍያ ማረጋገጫዎች", "ደህንነታቸው የተጠበቀ የሲቢኢ ብር አውቶማቲክ ክፍያዎች", "የአገር ውስጥ ዴቢት ካርድ መክፈያ ዘዴዎች", "ጠንካራ የተዋሃዱ የሰነድ APIዎች"],
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#FFD700]" />,
      title: t("financeFocus3Title"),
      desc: t("financeFocus3Desc"),
      features: language === "en"
        ? ["Real-time local stock index trackers", "Custom portfolio yield calculations", "Direct automated capital distribution", "Ethiopian capital market compliant structures"]
        : ["የአገር ውስጥ አክሲዮን ኢንዴክሶች ቀጥታ መከታተያ", "የፖርትፎሊዮ ትርፍ ስሌቶች", "ቀጥተኛ አውቶማቲክ ካፒታል ክፍፍል", "ከኢትዮጵያ ካፒታል ገበያ ህጎች ጋር የሚስማማ"],
    },
    {
      icon: <Landmark className="h-6 w-6 text-[#FFD700]" />,
      title: t("financeFocus4Title"),
      desc: t("financeFocus4Desc"),
      features: language === "en"
        ? ["Secured micro-loan tracking algorithms", "Offline ledger synchronization protocols", "Flexible saving pool architectures", "Localized compliance auditing modules"]
        : ["ደህንነታቸው የተጠበቀ የብድር ክትትል ስልተ-ቀመሮች", "ያለ ኢንተርኔት መዝገቦችን የማመሳሰል ዘዴዎች", "ተለዋዋጭ የቁጠባ አደረጃጀቶች", "የአገር ውስጥ የኦዲት ማሟያ ሞጁሎች"],
    },
    {
      icon: <BookOpen className="h-6 w-6 text-[#FFD700]" />,
      title: t("financeFocus5Title"),
      desc: t("financeFocus5Desc"),
      features: language === "en"
        ? ["Double-entry SME accounting automation", "Direct local tax estimation reports", "Payroll calculations and automated banking slips", "Dynamic ledger reconciliation engines"]
        : ["ድርብ-ግቤት ለአነስተኛና መካከለኛ ንግዶች ሂሳብ አያያዝ", "ቀጥተኛ የአገር ውስጥ ግብር ግምት ሪፖርቶች", "የደመወዝ ስሌት እና አውቶማቲክ የባንክ ወረቀቶች", "ተለዋዋጭ የሂሳብ መግለጫ ማጣቀሻዎች"],
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-[#FFD700]" />,
      title: t("financeFocus6Title"),
      desc: t("financeFocus6Desc"),
      features: language === "en"
        ? ["AI anomaly detection routing engines", "Block suspicious receipt screenshots", "Continuous transaction volume logs", "Multi-factor enterprise authorization gateways"]
        : ["በአርቴፊሻል ኢንተለጀንስ የሚመራ ያልተለመዱ እንቅስቃሴዎች መፈለጊያ", "አጠራጣሪ ክፍያዎችን እና ስክሪንሾቶችን ማገድ", "ቀጣይነት ያለው የግብይት መጠን መዝገቦች", "የባለብዙ-ደረጃ ኢንተርፕራይዝ ማረጋገጫ ዘዴዎች"],
    },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-[85vh] py-16 px-4 sm:px-6 lg:px-8" id="beu-finance-page">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb Back Navigation */}
        <button
          onClick={() => navigateTo("/subsidiaries")}
          className="flex items-center space-x-2 text-xs font-semibold text-gray-500 hover:text-[#FFD700] transition-colors mb-8 cursor-pointer"
          id="btn-back-subs-finance"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{language === "en" ? "Back to Subsidiaries" : "ወደ ቅርንጫፎች ተመለስ"}</span>
        </button>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 rounded-full bg-[#FFD700]/5 border border-[#FFD700]/10 px-4 py-1.5 mb-6"
            id="finance-page-badge"
          >
            <LineChart className="h-3.5 w-3.5 text-[#FFD700]" />
            <span className="text-xs font-semibold tracking-wider text-[#FFD700] uppercase">Beu Finance</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-4xl font-extrabold sm:text-5xl tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent"
            id="finance-page-title"
          >
            {t("financeTagline")}
          </motion.h1>
          <p className="mt-4 font-sans text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {t("financeDesc")}
          </p>
          <div className="mt-4 h-1 w-12 bg-[#FFD700] mx-auto rounded-full" />
        </div>

        {/* Detailed offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" id="finance-detailed-grid">
          {services.map((serv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 hover:border-[#FFD700]/50 transition-all duration-300 flex flex-col justify-between group"
              id={`finance-item-${idx}`}
            >
              <div>
                <div className="inline-flex items-center justify-center rounded-xl bg-white/[0.02] p-3 border border-white/[0.08] text-[#FFD700] mb-6">
                  {serv.icon}
                </div>
                <h3 className="font-sans text-xl font-extrabold text-white tracking-tight group-hover:text-[#FFD700] transition-colors">
                  {serv.title}
                </h3>
                <p className="mt-2.5 font-sans text-xs md:text-sm leading-relaxed text-gray-400">
                  {serv.desc}
                </p>

                {/* Sub Bullet Grid */}
                <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
                  {serv.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start space-x-2.5">
                      <div className="mt-1 flex-shrink-0 p-0.5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700]">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="font-sans text-xs text-gray-300 leading-normal">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Beu Finance Partnership Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent overflow-hidden"
          id="beu-finance-interactive-form-section"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left promo box: Slogan & Values */}
            <div className="lg:col-span-5 p-8 md:p-12 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-transparent flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 rounded-full bg-[#FFD700]/10 px-3.5 py-1 border border-[#FFD700]/20">
                  <Sparkles className="h-3 w-3 text-[#FFD700] fill-[#FFD700] animate-pulse" />
                  <span className="font-mono text-[10px] font-bold text-[#FFD700] uppercase tracking-wider">
                    {language === "en" ? "Financially Ahead" : "በፋይናንስ ሁሌም ቀዳሚ"}
                  </span>
                </div>
                
                <h2 className="font-sans text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {language === "en" 
                    ? "Let's make your company ahead of others." 
                    : "የእርስዎን ድርጅት ከሌሎች ቀዳሚ እናድርገው።"}
                </h2>
                
                <p className="font-sans text-sm text-gray-400 leading-relaxed">
                  {language === "en"
                    ? "Integrate with Ethiopia's premium fintech core. Secure transaction pipelines, custom stock indices, or automated double-entry SME books, we engineer robust solutions tailored for compliance."
                    : "ከኢትዮጵያ ምርጥ የፋይናንስ ቴክኖሎጂ ጋር ይገናኙ። አስተማማኝ የክፍያ መንገዶች፣ የቁጠባ ክትትል ወይም የሂሳብ አያያዝ ስርዓቶች፣ ደህንነቱ የተጠበቀ መፍትሄ እንገነባለን።"}
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    { title: "Compliant Frameworks", desc: "Built with regional regulations in mind" },
                    { title: "Direct Bank Integrations", desc: "Telebirr, CBE Birr, and CBE APIs" },
                    { title: "High-Load Security", desc: "Secure multi-factor auth protocols" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="mt-1 flex-shrink-0 p-0.5 rounded-full bg-[#FFD700]/10 text-[#FFD700]">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <h4 className="font-sans text-xs font-bold text-gray-200">{item.title}</h4>
                        <p className="font-sans text-[11px] text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-white/5 font-sans text-xs text-gray-500">
                {language === "en" 
                  ? "Beu Finance, structuring secure digital capital" 
                  : "ቤዩ ፋይናንስ፣ አስተማማኝ የዲጂታል ካፒታል ግንባታ"}
              </div>
            </div>

            {/* Right side: Interactive Form Container */}
            <div className="lg:col-span-7 p-8 md:p-12 bg-black/30">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="finance-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="beu-finance-lead-form"
                  >
                    <div>
                      <h3 className="font-sans text-xl font-bold text-white mb-1">
                        {language === "en" ? "Configure Partnership Setup" : "የአጋርነት ውቅረትን ይጀምሩ"}
                      </h3>
                      <p className="font-sans text-xs text-gray-400">
                        {language === "en" 
                          ? "Submit your company financial parameters to request developer API keys." 
                          : "የገንቢ ኤፒአይ (API) ቁልፎችን ለመጠየቅ የድርጅትዎን መረጃ ያስገቡ።"}
                      </p>
                    </div>

                    {validationError && (
                      <div className="flex items-center space-x-2 text-xs font-semibold text-rose-400 bg-rose-500/5 border border-rose-500/10 p-3 rounded-lg" id="val-err-fin">
                        <AlertCircle className="h-4 w-4" />
                        <span>{validationError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "Your Name / Title *" : "ስምዎ እና ማዕረግዎ *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Dawit T."
                          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all"
                        />
                      </div>

                      {/* Company Name */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "Company / Institution Name *" : "የኩባንያ ወይም ተቋም ስም *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g. National Trading Corp"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Number */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "Contact Phone Number *" : "የማነጋገሪያ ስልክ ቁጥር *"}
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +251 912 ..."
                          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all"
                        />
                      </div>

                      {/* Service of Interest */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "Service of Interest" : "የሚፈልጉት የፋይናንስ አገልግሎት"}
                        </label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full bg-[#0E0E0E] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all cursor-pointer"
                        >
                          <option value="Unified Payments API" className="bg-neutral-900 text-white">Unified Payments API (Telebirr/CBE)</option>
                          <option value="Stock Yield Index" className="bg-neutral-900 text-white">Capital Market Portfolio Tracker</option>
                          <option value="Double-Entry SME" className="bg-neutral-900 text-white">SME Double-Entry Ledger Book</option>
                          <option value="Micro-Saving Suite" className="bg-neutral-900 text-white">Micro-Loans & Savings Trackers</option>
                          <option value="AI Fraud Mitigation" className="bg-neutral-900 text-white">AI Fraud & Screenshot Checker</option>
                        </select>
                      </div>
                    </div>

                    {/* Estimated volume */}
                    <div className="space-y-1.5">
                      <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {language === "en" ? "Estimated Monthly Transaction Volume" : "የሚጠበቀው ወርሃዊ የግብይት መጠን"}
                      </label>
                      <select
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full bg-[#0E0E0E] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all cursor-pointer"
                      >
                        <option value="Under 100k Birr / month" className="bg-neutral-900 text-white">Under 100,000 Birr / month</option>
                        <option value="100k - 1M Birr / month" className="bg-neutral-900 text-white">100,000 - 1,000,000 Birr / month</option>
                        <option value="1M - 10M Birr / month" className="bg-neutral-900 text-white">1,000,000 - 10,000,000 Birr / month</option>
                        <option value="Over 10M Birr / month" className="bg-neutral-900 text-white">Over 10,000,000 Birr / month</option>
                      </select>
                    </div>

                    {/* Special requirements */}
                    <div className="space-y-1.5">
                      <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {language === "en" ? "Integration Details / Message" : "የማዋሃድ ዝርዝሮች ወይም መልዕክት"}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={language === "en" ? "Describe your system ledger, existing database, or API queries..." : "የእርስዎን የሂሳብ መዝገብ ወይም ኤፒአይ (API) ፍላጎት ያብራሩ..."}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all resize-none"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 rounded-lg bg-[#FFD700] disabled:bg-gray-700 disabled:text-gray-400 px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_15px_rgba(255,215,0,0.15)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      id="btn-submit-finance-form"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>{language === "en" ? "Securing channel..." : "ደህንነቱ የተጠበቀ ግንኙነት በመፍጠር ላይ..."}</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>
                            {language === "en" ? "Submit Partnership Request" : "የአጋርነት ጥያቄን አስገባ"}
                          </span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="finance-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6 flex flex-col items-center justify-center"
                    id="finance-success-message"
                  >
                    <div className="h-16 w-16 rounded-full bg-[#FFD700]/10 border-2 border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                      <Check className="h-8 w-8 stroke-[2.5]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-sans text-2xl font-extrabold text-white">
                        {language === "en" ? "Partnership Proposal Initiated!" : "የአጋርነት ጥያቄ በተሳካ ሁኔታ ተልኳል!"}
                      </h3>
                      <p className="font-mono text-xs text-[#FFD700] tracking-wider uppercase font-bold">
                        {language === "en" ? "Let's make your company ahead of others." : "ድርጅትዎን ከሌሎች ቀዳሚ እናደርገዋለን።"}
                      </p>
                      <p className="font-sans text-sm text-gray-400 max-w-md mx-auto pt-2">
                        {language === "en"
                          ? `Thank you, ${formData.name}. Our financial technology team has logged the parameters for ${formData.companyName} and will reach out to ${formData.phone} with compliance guidelines for the ${formData.serviceType} suite.`
                          : `እናመሰግናለን ${formData.name}። የእኛ የፋይናንስ ቴክኖሎጂ ቡድን የ ${formData.companyName} መረጃዎችን መዝግቧል፤ በ ${formData.phone} በመደወል ለ ${formData.serviceType} ምርት የማዋሃጃ መንገዶችን ያሳውቅዎታል።`}
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center space-x-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-5 py-2.5 text-xs font-bold text-white transition-all cursor-pointer"
                        id="btn-finance-reset"
                      >
                        <span>{language === "en" ? "Submit Another Setup" : "ሌላ አዲስ ጥያቄ አስገባ"}</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
