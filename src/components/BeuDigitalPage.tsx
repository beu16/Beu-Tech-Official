import React, { useState } from "react";
import { useApp } from "./AppContext";
import { QrCode, Laptop, ShoppingCart, Coffee, Cpu, Check, ArrowLeft, Send, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function BeuDigitalPage() {
  const { t, navigateTo, language } = useApp();

  // State for Beu Digital Request Form
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    product: "Hotel PMS",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.businessName.trim() || !formData.phone.trim()) {
      setValidationError(
        language === "en" 
          ? "Please provide your name, business name, and a valid phone number." 
          : "እባክዎ ስምዎን፣ የንግድ ስምዎን እና ስልክ ቁጥርዎን ያስገቡ።"
      );
      return;
    }

    setValidationError("");
    setIsSubmitting(true);

    // Simulated cloud secure lead insertion
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      businessName: "",
      phone: "",
      product: "Hotel PMS",
      message: "",
    });
    setIsSubmitted(false);
  };

  const products = [
    {
      icon: <Laptop className="h-6 w-6 text-[#FFD700]" />,
      title: t("pmsTitle"),
      desc: t("pmsDesc"),
      details: language === "en"
        ? ["Cloud-based guest registration & check-in", "Automated billing, taxes, and service charges", "Housekeeping scheduling & tracking", "Comprehensive management reporting & night audits"]
        : ["በደመና (Cloud) ላይ የተመሠረተ የእንግዳ ምዝገባ እና መግቢያ", "አውቶማቲክ ክፍያ፣ ግብሮች እና የአገልግሎት ክፍያዎች", "የጽዳት መርሐግብር እና ክትትል", "አጠቃላይ የአስተዳደር ሪፖርቶች እና የምሽት ኦዲት"],
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-[#FFD700]" />,
      title: t("foodTitle"),
      desc: t("foodDesc"),
      details: language === "en"
        ? ["Instant kitchen display screen routing", "Waiter order submission application", "Direct consumer online order links", "Real-time menu item availability updates"]
        : ["የወጥ ቤት ማሳያ ማያ ገጽ ትዕዛዝ ማስተላለፍ", "የአስተናጋጅ ትዕዛዝ ማቅረቢያ መተግበሪያ", "የቀጥታ የመስመር ላይ ትዕዛዝ አገናኞች", "የምግብ ዝርዝር መረጃ ቅጽበታዊ ዝመናዎች"],
    },
    {
      icon: <QrCode className="h-6 w-6 text-[#FFD700]" />,
      title: t("qrTitle"),
      desc: t("qrDesc"),
      details: language === "en"
        ? ["Contactless browsing - just scan", "Subtle layout fits perfectly on dining tables", "Instant pricing adjustments", "No physical menus to clean or reprint"]
        : ["ያለ ንክኪ ምናሌዎችን መመልከት - ስካን ብቻ", "በምግብ ጠረጴዛዎች ላይ በትክክል የሚስማማ ዘመናዊ ቅርፅ", "ፈጣን የዋጋ ማስተካከያዎች", "አካላዊ ሜኑዎችን ማተም ሳያስፈልግ"],
    },
    {
      icon: <Coffee className="h-6 w-6 text-[#FFD700]" />,
      title: t("koksTitle"),
      desc: t("koksDesc"),
      details: language === "en"
        ? ["Dedicated for cafes & fine dining eateries", "Robust ingredient inventory monitoring", "Staff clock-ins & attendance records", "Full transaction auditing and analytics"]
        : ["ለካፌዎች እና ለሬስቶራንቶች ተስማሚ POS", "ጠንካራ የግብዓት ዕቃዎች ክምችት ቁጥጥር", "የሰራተኞች የስራ ሰዓት ምዝገባ", "የግብይት ኦዲት እና ትንታኔዎች"],
    },
    {
      icon: <Cpu className="h-6 w-6 text-[#FFD700]" />,
      title: t("customTitle"),
      desc: t("customDesc"),
      details: language === "en"
        ? ["Fully tailored system architectures", "Custom integrations with existing enterprise databases", "Direct technical consulting", "Continuous local testing & deployment cycles"]
        : ["ሙሉ በሙሉ ለእርስዎ የተዘጋጁ የስርዓት አወቃቀሮች", "ከነባር የድርጅት የውሂብ ጎታዎች ጋር ብጁ ውህደቶች", "ቀጥተኛ የቴክኒክ ምክር", "ቀጣይነት ያለው የአገር ውስጥ ሙከራ እና ዝርጋታ"],
    },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-[85vh] py-16 px-4 sm:px-6 lg:px-8" id="beu-digital-page">
      <div className="mx-auto max-w-7xl">
        {/* Navigation Breadcrumb */}
        <button
          onClick={() => navigateTo("/subsidiaries")}
          className="flex items-center space-x-2 text-xs font-semibold text-gray-500 hover:text-[#FFD700] transition-colors mb-8 cursor-pointer"
          id="btn-back-subs-digital"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{language === "en" ? "Back to Subsidiaries" : "ወደ ቅርንጫፎች ተመለስ"}</span>
        </button>

        {/* Page Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 rounded-full bg-[#FFD700]/5 border border-[#FFD700]/10 px-4 py-1.5 mb-6"
            id="digital-page-badge"
          >
            <QrCode className="h-3.5 w-3.5 text-[#FFD700]" />
            <span className="text-xs font-semibold tracking-wider text-[#FFD700] uppercase">Beu Digital</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-4xl font-extrabold sm:text-5xl tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent"
            id="digital-page-title"
          >
            {t("digitalTagline")}
          </motion.h1>
          <p className="mt-4 font-sans text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {t("digitalDesc")}
          </p>
          <div className="mt-4 h-1 w-12 bg-[#FFD700] mx-auto rounded-full" />
        </div>

        {/* Products detailed grid */}
        <div className="space-y-10" id="digital-products-detail-list">
          {products.map((prod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 md:p-10 hover:border-[#FFD700]/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              id={`prod-detail-${idx}`}
            >
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center justify-center rounded-xl bg-white/[0.02] p-3 border border-white/[0.08] text-[#FFD700]">
                  {prod.icon}
                </div>
                <h2 className="font-sans text-2xl font-extrabold text-white tracking-tight">
                  {prod.title}
                </h2>
                <p className="font-sans text-sm md:text-base leading-relaxed text-gray-400">
                  {prod.desc}
                </p>
              </div>

              <div className="lg:col-span-7 bg-black/40 rounded-2xl border border-white/5 p-6 md:p-8" id={`prod-bullet-container-${idx}`}>
                <h3 className="font-sans text-xs font-bold tracking-wider text-gray-500 uppercase mb-4">
                  {language === "en" ? "CORE SYSTEM FEATURES" : "ዋና ዋና የስርዓት ባህሪያት"}
                </h3>
                <ul className="space-y-3.5 font-sans text-xs md:text-sm text-gray-300">
                  {prod.details.map((detail, bidx) => (
                    <li key={bidx} className="flex items-start space-x-3">
                      <div className="mt-1 flex-shrink-0 p-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        <Check className="h-3 w-3 stroke-[2.5]" />
                      </div>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Beu Digital Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent overflow-hidden"
          id="beu-digital-interactive-form-section"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left promo box: Slogan & Values */}
            <div className="lg:col-span-5 p-8 md:p-12 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-transparent flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 rounded-full bg-[#FFD700]/10 px-3.5 py-1 border border-[#FFD700]/20">
                  <Sparkles className="h-3 w-3 text-[#FFD700] fill-[#FFD700] animate-pulse" />
                  <span className="font-mono text-[10px] font-bold text-[#FFD700] uppercase tracking-wider">
                    {language === "en" ? "Digitally Ahead" : "በዲጂታል ሁሌም ቀዳሚ"}
                  </span>
                </div>
                
                <h2 className="font-sans text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {language === "en" 
                    ? "Let's make your company ahead of others." 
                    : "የእርስዎን ድርጅት ከሌሎች ቀዳሚ እናድርገው።"}
                </h2>
                
                <p className="font-sans text-sm text-gray-400 leading-relaxed">
                  {language === "en"
                    ? "Experience Ethiopia's premier digital infrastructure. Tell us about your operations, and we'll engineer the perfect tailored system to elevate your market standing."
                    : "የኢትዮጵያን ምርጥ የዲጂታል መሠረተ ልማት ይለማመዱ። ስለ ንግድ ስራዎ ይንገሩን እና ወደ ላቀ ደረጃ የሚያሸጋግርዎትን ልዩ ስርዓት እንገነባለን።"}
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    { title: "Tailored Engineering", desc: "No templates, custom fit" },
                    { title: "24/7 Local Support", desc: "Always available on ground" },
                    { title: "Proven SME Growth", desc: "Digitized 100+ businesses" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="mt-1 flex-shrink-0 p-0.5 rounded-full bg-emerald-500/10 text-emerald-400">
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
                  ? "Beu Digital Operations, pioneering commercial infrastructure" 
                  : "ቤዩ ዲጂታል፣ የንግድ መሠረተ ልማት ፈጠራ"}
              </div>
            </div>

            {/* Right side: Interactive Form Container */}
            <div className="lg:col-span-7 p-8 md:p-12 bg-black/30">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="digital-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="beu-digital-lead-form"
                  >
                    <div>
                      <h3 className="font-sans text-xl font-bold text-white mb-1">
                        {language === "en" ? "Configure Your Solution" : "የዲጂታል መፍትሄዎን ያዋቅሩ"}
                      </h3>
                      <p className="font-sans text-xs text-gray-400">
                        {language === "en" 
                          ? "Submit your operational parameters to request a system demo." 
                          : "የስርዓት ማሳያ (Demo) ለመጠየቅ የንግድ ስራ መረጃዎችን ያስገቡ።"}
                      </p>
                    </div>

                    {validationError && (
                      <div className="flex items-center space-x-2 text-xs font-semibold text-rose-400 bg-rose-500/5 border border-rose-500/10 p-3 rounded-lg" id="val-err">
                        <AlertCircle className="h-4 w-4" />
                        <span>{validationError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "Your Full Name *" : "ሙሉ ስምዎ *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Daniel G."
                          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all"
                        />
                      </div>

                      {/* Business Name */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "Business / Brand Name *" : "የድርጅት ወይም ብራንድ ስም *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. Sheraton Addis Cafe"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Number */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "Phone Number *" : "ስልክ ቁጥር *"}
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +251 911 ..."
                          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all"
                        />
                      </div>

                      {/* Product of Interest */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "Product of Interest" : "የሚፈልጉት የዲጂታል ምርት"}
                        </label>
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full bg-[#0E0E0E] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all cursor-pointer"
                        >
                          <option value="Hotel PMS" className="bg-neutral-900 text-white">Hotel PMS System (Hotel PMS)</option>
                          <option value="Food Ordering App" className="bg-neutral-900 text-white">Food Delivery & Order POS</option>
                          <option value="QR Table Menu" className="bg-neutral-900 text-white">Contactless QR Menu</option>
                          <option value="KOKS POS Cafe" className="bg-neutral-900 text-white">KOKS Cafe POS</option>
                          <option value="Custom System Architecture" className="bg-neutral-900 text-white">Custom Digitization Suite</option>
                        </select>
                      </div>
                    </div>

                    {/* Special requirements */}
                    <div className="space-y-1.5">
                      <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {language === "en" ? "Special System Requirements / Message" : "ልዩ የስርዓት ፍላጎቶች ወይም መልዕክት"}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={language === "en" ? "Describe your scaling targets, or table count..." : "የጠረጴዛዎችን ብዛት፣ ወይም የንግድ አላማዎን ያብራሩ..."}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all resize-none"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 rounded-lg bg-[#FFD700] disabled:bg-gray-700 disabled:text-gray-400 px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_15px_rgba(255,215,0,0.15)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      id="btn-submit-digital-form"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>{language === "en" ? "Configuring system..." : "ስርዓቱን በማዘጋጀት ላይ..."}</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>
                            {language === "en" ? "Launch Digital Setup Request" : "የዲጂታል ማዋቀሪያ ጥያቄን ላክ"}
                          </span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="digital-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6 flex flex-col items-center justify-center"
                    id="digital-success-message"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <Check className="h-8 w-8 stroke-[2.5]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-sans text-2xl font-extrabold text-white">
                        {language === "en" ? "Request Inserted Securely!" : "ጥያቄዎ በተሳካ ሁኔታ ገብቷል!"}
                      </h3>
                      <p className="font-mono text-xs text-[#FFD700] tracking-wider uppercase font-bold">
                        {language === "en" ? "Let's make your company ahead of others." : "ድርጅትዎን ከሌሎች ቀዳሚ እናደርገዋለን።"}
                      </p>
                      <p className="font-sans text-sm text-gray-400 max-w-md mx-auto pt-2">
                        {language === "en"
                          ? `Thank you, ${formData.name}. Our digital engineer will call your team back at ${formData.phone} shortly to present the specialized ${formData.product} system blueprint.`
                          : `እናመሰግናለን ${formData.name}። የእኛ ዲጂታል መሀንዲስ የተመረጠውን ${formData.product} የስርዓት ረቂቅ ለእርስዎ ለማቅረብ በ ${formData.phone} በቅርቡ ያነጋግርዎታል።`}
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center space-x-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-5 py-2.5 text-xs font-bold text-white transition-all cursor-pointer"
                        id="btn-digital-reset"
                      >
                        <span>{language === "en" ? "Submit Another System Request" : "ሌላ አዲስ ጥያቄ አስገባ"}</span>
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

