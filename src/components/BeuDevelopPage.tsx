import React, { useState } from "react";
import { useApp } from "./AppContext";
import { Code2, Laptop, Smartphone, Terminal, Palette, HelpCircle, ArrowLeft, Check, Server, RefreshCw, Send, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function BeuDevelopPage() {
  const { t, navigateTo, language } = useApp();

  // State for Beu Develop Form
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    projectType: "Custom Web Application",
    budget: "50,000 - 150,000 ETB",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.businessName.trim() || !formData.phone.trim()) {
      setValidationError(
        language === "en"
          ? "Please provide your name, business name, and phone number so we can draft a scope statement."
          : "እባክዎ ስምዎን፣ የድርጅት ስምዎን እና ስልክ ቁጥርዎን ያስገቡ።"
      );
      return;
    }

    setValidationError("");
    setIsSubmitting(true);

    // Simulate secure cloud request pipeline submission
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
      projectType: "Custom Web Application",
      budget: "50,000 - 150,000 ETB",
      description: "",
    });
    setIsSubmitted(false);
  };

  const services = [
    {
      icon: <Laptop className="h-6 w-6 text-[#FFD700]" />,
      title: t("devService1Title"),
      desc: t("devService1Desc"),
      highlights: language === "en"
        ? ["High search engine optimizing (SEO) compliance", "Ultrafast local cloud hosting speed ratios", "Secure custom CMS capabilities", "Responsive mobile-first layouts"]
        : ["ለፍለጋ ሞተሮች (SEO) ተስማሚ የሆኑ አወቃቀሮች", "እጅግ ፈጣን የአገር ውስጥ የደመና ማስተናገጃ ፍጥነት", "ደህንነታቸው የተጠበቁ የCMS አስተዳዳሪዎች", "በማንኛውም ስልክ ላይ የሚሰሩ ዲዛይኖች"],
    },
    {
      icon: <Smartphone className="h-6 w-6 text-[#FFD700]" />,
      title: t("devService2Title"),
      desc: t("devService2Desc"),
      highlights: language === "en"
        ? ["Seamless iOS & Android native codes", "Cross-platform Flutter efficiencies", "Local offline storage synching", "Smooth UI screen transitions"]
        : ["ያለእንከን የሚሰሩ የiOS እና አንድሮይድ መተግበሪያዎች", "በክሮስ-ፕላትፎርም ፍሉተር (Flutter) መገንባት", "ያለ ኢንተርኔት መረጃዎችን በስልክ ላይ የማስቀመጥ ዘዴ", "ለስላሳ የመተግበሪያ ስክሪን ሽግግሮች"],
    },
    {
      icon: <Terminal className="h-6 w-6 text-[#FFD700]" />,
      title: t("devService3Title"),
      desc: t("devService3Desc"),
      highlights: language === "en"
        ? ["Automated enterprise workflows", "Advanced warehouse inventory models", "Comprehensive analytics & reports", "Custom local multi-role control panels"]
        : ["አውቶማቲክ የድርጅት የሥራ ሂደቶች", "የላቀ የመጋዘን ዕቃዎች ክምችት ቁጥጥር", "አጠቃላይ ትንታኔዎች እና ሪፖርቶች", "ብጁ የባለብዙ-ደረጃ የተጠቃሚ መቆጣጠሪያዎች"],
    },
    {
      icon: <Palette className="h-6 w-6 text-[#FFD700]" />,
      title: t("devService4Title"),
      desc: t("devService4Desc"),
      highlights: language === "en"
        ? ["User-centric research patterns", "Figma prototype walkthrough maps", "Aesthetic micro-animation components", "Visual style guide manuals"]
        : ["በተጠቃሚዎች ላይ ያተኮሩ የጥናት ሂደቶች", "ዝርዝር የFigma የሙከራ ፕሮቶታይፖች", "ውብ የሆኑ ጥቃቅን አኒሜሽኖች", "የምስል እና የቅጥ መመሪያ ሰነዶች"],
    },
    {
      icon: <Server className="h-6 w-6 text-[#FFD700]" />,
      title: t("devService5Title"),
      desc: t("devService5Desc"),
      highlights: language === "en"
        ? ["Restful / GraphQL microservice ports", "High load-bearing API limits", "Integration of Telebirr and local banks", "Double-layered security authorization"]
        : ["Restful / GraphQL የማይክሮ ሰርቪስ ግንኙነቶች", "ከፍተኛ ጫናዎችን መቋቋም የሚችሉ APIዎች", "የቴሌብር እና የአገር ውስጥ ባንኮች ትስስር", "ድርብ-ደረጃ የደህንነት ጥበቃዎች"],
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-[#FFD700]" />,
      title: t("devService6Title"),
      desc: t("devService6Desc"),
      highlights: language === "en"
        ? ["4-6 weeks rapid product releases", "Core user validation focus setups", "Modular scale-up code architectures", "Agile sprint testing metrics"]
        : ["ከ 4 እስከ 6 ሳምንታት ፈጣን ምርቶችን ማጠናቀቅ", "በተጠቃሚዎች የሙከራ ማረጋገጫ ላይ ማተኮር", "ሊለኩ የሚችሉ የኮድ አወቃቀሮች", "ቀልጣፋ የስራ ሙከራ ሂደቶች"],
    },
    {
      icon: <HelpCircle className="h-6 w-6 text-[#FFD700]" />,
      title: t("devService7Title"),
      desc: t("devService7Desc"),
      highlights: language === "en"
        ? ["24/7 technical monitoring & recovery", "Monthly security patches & updates", "Database scaling & migrations", "Direct cloud DevOps operations"]
        : ["24/7 ቀጣይነት ያለው የቴክኒክ ክትትል", "ወርሃዊ የደህንነት ማሻሻያዎች", "የውሂብ ጎታዎችን ማሳደግ እና ማዛወር", "የቀጥታ የደመና (Cloud) DevOps ስራዎች"],
    },
  ];

  const techStack = [
    { name: "React", type: "Frontend" },
    { name: "Node.js", type: "Backend" },
    { name: "Python", type: "Backend/AI" },
    { name: "Flutter", type: "Mobile" },
    { name: "PostgreSQL", type: "Database" },
    { name: "MongoDB", type: "Database" },
    { name: "AWS", type: "DevOps" },
    { name: "Docker", type: "DevOps" },
    { name: "TypeScript", type: "Language" },
    { name: "Next.js", type: "Full Stack" },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-[85vh] py-16 px-4 sm:px-6 lg:px-8" id="beu-develop-page">
      <div className="mx-auto max-w-7xl">
        {/* Navigation Breadcrumb */}
        <button
          onClick={() => navigateTo("/subsidiaries")}
          className="flex items-center space-x-2 text-xs font-semibold text-gray-500 hover:text-[#FFD700] transition-colors mb-8 cursor-pointer"
          id="btn-back-subs-develop"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{language === "en" ? "Back to Subsidiaries" : "ወደ ቅርንጫፎች ተመለስ"}</span>
        </button>

        {/* Page Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 rounded-full bg-[#FFD700]/5 border border-[#FFD700]/10 px-4 py-1.5 mb-6"
            id="develop-page-badge"
          >
            <Code2 className="h-3.5 w-3.5 text-[#FFD700]" />
            <span className="text-xs font-semibold tracking-wider text-[#FFD700] uppercase">Beu Develop</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-4xl font-extrabold sm:text-5xl tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent"
            id="develop-page-title"
          >
            {t("developTagline")}
          </motion.h1>
          <p className="mt-4 font-sans text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {t("developDesc")}
          </p>
          <div className="mt-4 h-1 w-12 bg-[#FFD700] mx-auto rounded-full" />
        </div>

        {/* Custom Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24" id="develop-services-detailed-grid">
          {services.map((serv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 hover:border-[#FFD700]/50 transition-all duration-300 flex flex-col justify-between group"
              id={`develop-service-card-${idx}`}
            >
              <div>
                <div className="inline-flex items-center justify-center rounded-xl bg-white/[0.02] p-3 border border-white/[0.08] text-[#FFD700] mb-6">
                  {serv.icon}
                </div>
                <h3 className="font-sans text-lg font-bold text-white tracking-tight group-hover:text-[#FFD700] transition-colors">
                  {serv.title}
                </h3>
                <p className="mt-2 font-sans text-xs md:text-sm leading-relaxed text-gray-500">
                  {serv.desc}
                </p>

                {/* Sub-highlights */}
                <div className="mt-5 pt-5 border-t border-white/5 space-y-2.5">
                  {serv.highlights.map((high, hidx) => (
                    <div key={hidx} className="flex items-start space-x-2">
                      <div className="mt-1 flex-shrink-0 p-0.5 rounded-full bg-[#FFD700]/10 text-[#FFD700]">
                        <Check className="h-2.5 w-2.5" />
                      </div>
                      <span className="font-sans text-[11px] text-gray-300 leading-normal">{high}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Display */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 md:p-12 mb-24" id="develop-tech-stack-panel">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-sans text-2xl font-extrabold text-white">
              {t("techStackTitle")}
            </h2>
            <p className="mt-2 font-sans text-sm text-gray-400">
              {language === "en"
                ? "We write clean, documented, type-safe codebases using robust modern development technologies."
                : "እኛ ጠንካራ እና ዘመናዊ የልማት ቴክኖሎጂዎችን በመጠቀም ንፁህ፣ የተመዘገበ እና አስተማማኝ የኮድ መሰረት እንፅፋለን።"}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" id="tech-stack-detailed-grid">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-5 text-center hover:border-[#FFD700]/50 transition-all group"
                id={`tech-item-${idx}`}
              >
                <span className="font-mono text-sm font-bold text-white group-hover:text-[#FFD700] transition-colors block">
                  {tech.name}
                </span>
                <span className="font-sans text-[9px] text-gray-500 font-semibold tracking-wider uppercase block mt-1.5">
                  {tech.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Beu Develop Project Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent overflow-hidden"
          id="beu-develop-interactive-form-section"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left promo box: Slogan & Core Tech Values */}
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
                    ? "From enterprise ERP workflows and high-fidelity mobile apps to complex system integrations, we write clean, documented, type-safe codebase tailored to scale your brand."
                    : "ከኢንተርፕራይዝ የERP ሶፍትዌሮች እስከ ከፍተኛ ጥራት ያላቸው የስልክ መተግበሪያዎች፣ የእርስዎን ንግድ ለማሳደግ ንፁህ፣ አስተማማኝ እና የተመዘገቡ የኮድ መሰረቶችን እንፅፋለን።"}
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    { title: "No Templates, No Shortcuts", desc: "Crafted strictly for your operational logic" },
                    { title: "Rapid Product Release", desc: "4-6 weeks iterative sprint cycles" },
                    { title: "Scalable Architecture", desc: "Modular structures prepared for future growth" }
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
                  ? "Beu Develop, high-performance software engineering" 
                  : "ቤዩ ዴቨሎፕ፣ ከፍተኛ አፈጻጸም ያለው የሶፍትዌር ልማት"}
              </div>
            </div>

            {/* Right side: Interactive Form Container */}
            <div className="lg:col-span-7 p-8 md:p-12 bg-black/30">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="develop-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="beu-develop-lead-form"
                  >
                    <div>
                      <h3 className="font-sans text-xl font-bold text-white mb-1">
                        {language === "en" ? "Propose Your Project Scope" : "የፕሮጀክትዎን ዝርዝር ይላኩልን"}
                      </h3>
                      <p className="font-sans text-xs text-gray-400">
                        {language === "en" 
                          ? "Submit your custom software blueprint parameters for a detailed cost roadmap." 
                          : "ዝርዝር የስራ ማስኬጃ ዋጋ ለማግኘት የፕሮጀክትዎን መረጃ ያስገቡ።"}
                      </p>
                    </div>

                    {validationError && (
                      <div className="flex items-center space-x-2 text-xs font-semibold text-rose-400 bg-rose-500/5 border border-rose-500/10 p-3 rounded-lg" id="val-err-dev">
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
                          placeholder="e.g. Martha S."
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
                          placeholder="e.g. Addis Logistics Group"
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
                          placeholder="e.g. +251 913 ..."
                          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all"
                        />
                      </div>

                      {/* Project Type */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "Project Type" : "የፕሮጀክት አይነት"}
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-[#0E0E0E] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all cursor-pointer"
                        >
                          <option value="Custom Web Application" className="bg-neutral-900 text-white">Custom Web Application</option>
                          <option value="Mobile Flutter App" className="bg-neutral-900 text-white">Mobile (iOS & Android) Flutter App</option>
                          <option value="Enterprise ERP Suite" className="bg-neutral-900 text-white">Enterprise ERP & Inventory Suite</option>
                          <option value="UI/UX Figma Design" className="bg-neutral-900 text-white">UI/UX Figma Interactive Mockups</option>
                          <option value="API backend system" className="bg-neutral-900 text-white">Restful/GraphQL API Integration</option>
                          <option value="Cloud DevOps" className="bg-neutral-900 text-white">DevOps & Cloud Server Migration</option>
                        </select>
                      </div>
                    </div>

                    {/* Estimated Budget */}
                    <div className="space-y-1.5">
                      <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {language === "en" ? "Estimated Project Budget" : "የሚጠበቀው የፕሮጀክት በጀት"}
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#0E0E0E] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all cursor-pointer"
                      >
                        <option value="50,000 - 150,000 ETB" className="bg-neutral-900 text-white">50,000 - 150,000 ETB</option>
                        <option value="150,000 - 500,000 ETB" className="bg-neutral-900 text-white">150,000 - 500,000 ETB</option>
                        <option value="500,000 - 1,500,000 ETB" className="bg-neutral-900 text-white">500,000 - 1,500,000 ETB</option>
                        <option value="Over 1.5M ETB" className="bg-neutral-900 text-white">Over 1,500,000 ETB</option>
                      </select>
                    </div>

                    {/* Description */}
                    <div className="space-y-1.5">
                      <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {language === "en" ? "Project Description & Goals" : "የፕሮጀክቱ ገለጻ እና ዋና አላማ"}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder={language === "en" ? "Explain what features you need (e.g. database, multi-roles, mobile app syncing)..." : "የሚፈልጓቸውን ባህሪያት ያብራሩ (ለምሳሌ የውሂብ ጎታ፣ የባለብዙ ደረጃ መግቢያ)..."}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all resize-none"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 rounded-lg bg-[#FFD700] disabled:bg-gray-700 disabled:text-gray-400 px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_15px_rgba(255,215,0,0.15)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      id="btn-submit-develop-form"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>{language === "en" ? "Analyzing scope..." : "ወሰኑን በመገምገም ላይ..."}</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>
                            {language === "en" ? "Request Technical Proposal" : "የቴክኒክ ፕሮፖዛል ጠይቅ"}
                          </span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="develop-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6 flex flex-col items-center justify-center"
                    id="develop-success-message"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <Check className="h-8 w-8 stroke-[2.5]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-sans text-2xl font-extrabold text-white">
                        {language === "en" ? "Project Parameters Saved!" : "የፕሮጀክትዎ መረጃዎች ተመዝግበዋል!"}
                      </h3>
                      <p className="font-mono text-xs text-[#FFD700] tracking-wider uppercase font-bold">
                        {language === "en" ? "Let's make your company ahead of others." : "ድርጅትዎን ከሌሎች ቀዳሚ እናደርገዋለን።"}
                      </p>
                      <p className="font-sans text-sm text-gray-400 max-w-md mx-auto pt-2">
                        {language === "en"
                          ? "Thank you, " + formData.name + ". Our lead software architect will review the specs for " + formData.businessName + " (Budget: " + formData.budget + ") and call " + formData.phone + " within 24 hours to schedule a detailed technical scoping workshop for your " + formData.projectType + "."
                          : "እናመሰግናለን " + formData.name + "። የእኛ ዋና ሶፍትዌር አርክቴክት ለ " + formData.businessName + " ያቀረቡትን የስራ መጠን (በጀት፡ " + formData.budget + ") በመገምገም በ 24 ሰዓታት ውስጥ በ " + formData.phone + " በመደወል ለ " + formData.projectType + " የእቅድ ውይይት ያዘጋጃል።"}
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center space-x-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-5 py-2.5 text-xs font-bold text-white transition-all cursor-pointer"
                        id="btn-develop-reset"
                      >
                        <span>{language === "en" ? "Submit Another Project Scope" : "ሌላ አዲስ ፕሮጀክት አስገባ"}</span>
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
