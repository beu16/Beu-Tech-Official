import React, { useEffect, useState } from "react";
import { useApp } from "./AppContext";
import { Check, Send, Sparkles, AlertCircle, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { solutions, featuredSolutions, extendedSolutions, customSolution, ownProduct, Solution } from "../data/solutions";
import { TierLabel } from "./Solutions";
import { SolutionPreview } from "./Previews";
import { REQUEST_PREFILL_KEY } from "../data/explorer";
import SectionHeading from "./SectionHeading";
import ProcessSteps from "./ProcessSteps";
import { sendMessage, SUPPORT_EMAIL } from "../lib/sendMessage";

// Scope-based sizes instead of a currency, so the form reads naturally for any client
const projectSizes = [
  { value: "not-sure", en: "Not sure yet, help me scope it", am: "እርግጠኛ አይደለሁም፣ እቅዱን እንዲያግዙኝ" },
  { value: "focused", en: "A focused first module or MVP", am: "ትኩረት ያለው የመጀመሪያ ክፍል ወይም MVP" },
  { value: "complete", en: "A complete system with several modules", am: "በርካታ ክፍሎች ያሉት ሙሉ ስርዓት" },
  { value: "enterprise", en: "An enterprise platform for several sites with long term support", am: "ለበርካታ ቅርንጫፎች የሚሆን የኢንተርፕራይዝ መድረክ ከረጅም ጊዜ ድጋፍ ጋር" },
];

const initialForm = {
  name: "",
  businessName: "",
  phone: "",
  email: "",
  solutionId: "hospital",
  budget: "not-sure",
  description: "",
};

export default function SolutionsPage() {
  const { t, language } = useApp();
  const en = language === "en";

  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  // Beu Verify is our own product, so it is signed up for directly rather than requested
  const requestableSolutions = solutions.filter((s) => !s.ownProduct);
  const selectedSolution = solutions.find((s) => s.id === formData.solutionId) ?? requestableSolutions[0];

  const handleRequest = (solutionId: string) => {
    setFormData((prev) => ({ ...prev, solutionId }));
    setIsSubmitted(false);
    document.getElementById("solution-request-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Arriving from the home-page explorer: pre-select that system and jump to the form
  useEffect(() => {
    let prefill: string | null = null;
    try {
      prefill = sessionStorage.getItem(REQUEST_PREFILL_KEY);
    } catch {
      return;
    }
    if (!prefill || !solutions.some((s) => s.id === prefill && !s.ownProduct)) return;
    setFormData((prev) => ({ ...prev, solutionId: prefill! }));
    // Consume the handoff only once the scroll happens, so a re-run of this effect still scrolls
    const t = setTimeout(() => {
      try {
        sessionStorage.removeItem(REQUEST_PREFILL_KEY);
      } catch {
        // ignore
      }
      document.getElementById("solution-request-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 700);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.businessName.trim() || !formData.phone.trim()) {
      setValidationError(
        language === "en"
          ? "Please provide your name, organization name, and phone number so we can prepare a proposal."
          : "እባክዎ ስምዎን፣ የድርጅት ስምዎን እና ስልክ ቁጥርዎን ያስገቡ።"
      );
      return;
    }

    setValidationError("");
    setIsSubmitting(true);
    const size = projectSizes.find((s) => s.value === formData.budget);
    try {
      await sendMessage(
        `New ${selectedSolution.title.en} request from ${formData.businessName} (beutech website)`,
        {
          Name: formData.name,
          Organization: formData.businessName,
          "Phone / WhatsApp": formData.phone,
          Email: formData.email || "Not given",
          System: selectedSolution.title.en,
          "Project size": size ? size.en : formData.budget,
          Description: formData.description || "Not given",
          Language: language,
        },
        formData.email || undefined
      );
      setIsSubmitted(true);
    } catch {
      setValidationError(
        language === "en"
          ? `We could not send your request right now. Please try again, or email us directly at ${SUPPORT_EMAIL}`
          : `ጥያቄዎን አሁን መላክ አልቻልንም። እባክዎ እንደገና ይሞክሩ ወይም በቀጥታ ወደ ${SUPPORT_EMAIL} ኢሜይል ይላኩ`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialForm);
    setIsSubmitted(false);
  };

  const renderCard = (sol: Solution, idx: number, featured: boolean) => {
    const Icon = sol.icon;
    return (
      <motion.div
        key={sol.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: idx * 0.06 }}
        className={`rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#FFD700]/40 transition-colors duration-300 flex flex-col justify-between ${featured ? "p-8" : "p-6"}`}
        id={`solution-detail-card-${sol.id}`}
      >
        <div>
          {featured && (
            <div className="mb-6">
              <SolutionPreview id={sol.id} en={en} title={sol.title[language]} />
            </div>
          )}
          <div className={`flex items-center justify-center rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] mb-5 ${featured ? "h-12 w-12" : "h-10 w-10"}`}>
            <Icon className={featured ? "h-6 w-6" : "h-5 w-5"} />
          </div>
          <h3 className={`font-sans font-bold text-white tracking-tight ${featured ? "text-xl" : "text-base"}`}>{sol.title[language]}</h3>
          <p className="mt-2 font-sans text-sm leading-relaxed text-gray-400">{sol.tagline[language]}</p>
          <ul className="mt-5 pt-5 border-t border-white/5 grid grid-cols-1 gap-y-2.5">
            {sol.features[language].map((feature) => (
              <li key={feature} className="flex items-start space-x-2 font-sans text-sm text-gray-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FFD700]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => handleRequest(sol.id)}
          className={`mt-7 inline-flex items-center justify-center space-x-2 rounded-lg px-5 py-2.5 text-xs font-bold transition-colors cursor-pointer ${
            featured
              ? "bg-[#FFD700] text-black hover:bg-[#FFE033]"
              : "border border-white/10 bg-white/5 text-white hover:border-[#FFD700]/50 hover:text-[#FFD700]"
          }`}
        >
          <span>{en ? "Request This System" : "ይህንን ስርዓት ይጠይቁ"}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </motion.div>
    );
  };

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
    <div className="bg-[#0A0A0A] text-white min-h-[85vh] pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 lg:px-8" id="solutions-page">
      <div className="mx-auto max-w-7xl">
        {/* Page Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-3">
            <span className="h-px w-6 bg-[#FFD700]/60" />
            <span className="font-sans text-xs font-semibold tracking-[0.2em] text-[#FFD700] uppercase">
              {language === "en" ? "Solutions" : "መፍትሄዎች"}
            </span>
            <span className="h-px w-6 bg-[#FFD700]/60" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
            id="solutions-page-title"
          >
            {language === "en" ? "You Ask. We Build." : "እርስዎ ይጠይቃሉ። እኛ እንገነባለን።"}
          </motion.h1>
          <p className="mt-5 font-sans text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {language === "en"
              ? "Every organization works differently, so we never sell the same software to everyone. Pick a starting point below, or describe something completely new, and our team will build it around the way you work."
              : "እያንዳንዱ ድርጅት የራሱ አሰራር አለው፣ ስለዚህ ለሁሉም አንድ አይነት ሶፍትዌር አንሸጥም። ከታች ካሉት አንዱን ይምረጡ ወይም ፍጹም አዲስ ሀሳብ ይንገሩን፣ ቡድናችን በእርስዎ አሰራር ላይ ተመስርቶ ይገነባዋል።"}
          </p>
        </div>

        {/* Solutions in three widening rings */}
        <div className="mb-20 sm:mb-28" id="solutions-detailed-grid">
          <TierLabel level={1} label={en ? "Where most clients start" : "አብዛኞቹ ደንበኞች የሚጀምሩበት"} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredSolutions.map((sol, idx) => renderCard(sol, idx, true))}
          </div>

          <div className="mt-14">
            <TierLabel level={2} label={en ? "Where they grow next" : "ቀጥሎ የሚያድጉበት"} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {extendedSolutions.map((sol, idx) => renderCard(sol, idx, false))}
            </div>
          </div>

          <div className="mt-14">
            <TierLabel level={3} label={en ? "Where there are no limits" : "ገደብ የሌለበት"} />
            <div
              className="rounded-2xl border border-[#FFD700]/30 bg-[#FFD700]/[0.04] p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
              id={`solution-detail-card-${customSolution.id}`}
            >
              <div className="max-w-2xl">
                <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  {customSolution.title[language]}
                </h3>
                <p className="mt-3 font-sans text-sm sm:text-base text-gray-400 leading-relaxed">{customSolution.tagline[language]}</p>
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {customSolution.features[language].map((feature) => (
                    <li key={feature} className="flex items-start space-x-2 font-sans text-sm text-gray-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FFD700]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleRequest(customSolution.id)}
                className="w-full lg:w-auto shrink-0 inline-flex items-center justify-center space-x-2 rounded-lg bg-[#FFD700] px-7 py-3.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,215,0,0.25)] transition-all duration-300 hover:bg-[#FFE033] active:scale-[0.98] cursor-pointer"
              >
                <span>{en ? "Describe Your Idea" : "ሀሳብዎን ይግለጹ"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Our own product */}
          <a
            href={ownProduct.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-white/[0.06] px-5 py-4 hover:border-white/15 transition-colors"
            id="solution-detail-card-verify"
          >
            <div className="flex items-center space-x-3">
              <span className="flex items-center space-x-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{en ? "Live" : "ስራ ላይ"}</span>
              </span>
              <p className="font-sans text-sm text-gray-400">
                <span className="font-semibold text-white">{en ? "Also from our team, Beu Verify." : "ከቡድናችን ደግሞ ቤዩ ቬሪፋይ።"}</span>{" "}
                {en ? "Our own payment verification platform, used by businesses every day." : "በንግዶች በየቀኑ የሚጠቀሙበት የራሳችን የክፍያ ማረጋገጫ መድረክ።"}
              </p>
            </div>
            <span className="inline-flex items-center space-x-1.5 text-xs font-semibold text-gray-400 group-hover:text-[#FFD700] transition-colors shrink-0">
              <span>{en ? "Visit" : "ይጎብኙ"}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>

        {/* How We Work */}
        <div className="mb-20 sm:mb-28" id="solutions-process">
          <SectionHeading
            eyebrow={language === "en" ? "How We Work" : "እንዴት እንሰራለን"}
            title={language === "en" ? "From Your Request to a Running System" : "ከጥያቄዎ እስከ ስራ ላይ የዋለ ስርዓት"}
            subtitle={language === "en" ? "A simple, transparent process. You see working progress every week." : "ቀላል እና ግልጽ አሰራር። እድገቱን በየሳምንቱ ያያሉ።"}
          />
          <ProcessSteps />
        </div>

        {/* Tech Stack Display */}
        <div className="mb-20 sm:mb-28" id="solutions-tech-stack-panel">
          <SectionHeading
            eyebrow={language === "en" ? "Technology" : "ቴክኖሎጂ"}
            title={t("techStackTitle")}
            subtitle={language === "en"
              ? "We write clean, well documented code with modern and proven technology."
              : "እኛ ጠንካራ እና ዘመናዊ የልማት ቴክኖሎጂዎችን በመጠቀም ንፁህ፣ የተመዘገበ እና አስተማማኝ የኮድ መሰረት እንፅፋለን።"}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" id="tech-stack-detailed-grid">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center hover:border-[#FFD700]/40 transition-colors group"
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

        {/* Project Request Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
          id="solution-request-form"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left promo box */}
            <div className="lg:col-span-5 p-8 md:p-12 bg-[#FFD700]/[0.04] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
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
                    ? "Tell us what you need. Whether it's a hospital system, a hotel system or something no one has built yet, we'll come back with a clear scope and quote."
                    : "የሚፈልጉትን ይንገሩን። የሆስፒታል ስርዓትም ይሁን የሆቴል ስርዓት ወይም እስካሁን ማንም ያልገነባው ነገር፣ ግልጽ እቅድ እና ዋጋ ይዘን እንመለሳለን።"}
                </p>

                <div className="space-y-4 pt-4">
                  {(language === "en"
                    ? [
                        { title: "No Templates, No Shortcuts", desc: "Built around how your organization actually works" },
                        { title: "Weekly Progress", desc: "A working demo in your hands every sprint" },
                        { title: "Training & Support Included", desc: "Your staff learns the system, and we maintain it" },
                      ]
                    : [
                        { title: "ዝግጁ አብነት የለም", desc: "በድርጅትዎ ትክክለኛ አሰራር ላይ ተመስርቶ የሚገነባ" },
                        { title: "ሳምንታዊ እድገት", desc: "በየስራ ዙሩ የሚሰራ ማሳያ" },
                        { title: "ስልጠና እና ድጋፍ ተካቷል", desc: "ሰራተኞችዎ ስርዓቱን ይማራሉ፣ እኛ እንጠግናለን" },
                      ]
                  ).map((item, idx) => (
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
            </div>

            {/* Right side: Interactive Form Container */}
            <div className="lg:col-span-7 p-8 md:p-12">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="request-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="solution-lead-form"
                  >
                    <div>
                      <h3 className="font-sans text-xl font-bold text-white mb-1">
                        {language === "en" ? "Request Your System" : "ስርዓትዎን ይጠይቁ"}
                      </h3>
                      <p className="font-sans text-xs text-gray-400">
                        {language === "en"
                          ? "Share a few details and we'll prepare a detailed proposal and cost estimate."
                          : "ጥቂት መረጃዎችን ያጋሩን፣ ዝርዝር ፕሮፖዛል እና የዋጋ ግምት እናዘጋጃለን።"}
                      </p>
                    </div>

                    {validationError && (
                      <div className="flex items-center space-x-2 text-xs font-semibold text-rose-400 bg-rose-500/5 border border-rose-500/10 p-3 rounded-lg" id="val-err-solution">
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
                          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 sm:py-2.5 font-sans text-base sm:text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all"
                        />
                      </div>

                      {/* Organization Name */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "Organization Name *" : "የድርጅት ስም *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. Tena General Hospital"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 sm:py-2.5 font-sans text-base sm:text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Number */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "Phone / WhatsApp *" : "ስልክ / ዋትስአፕ *"}
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={language === "en" ? "Include country code" : "የአገር ኮድ ያካትቱ"}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 sm:py-2.5 font-sans text-base sm:text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all"
                        />
                      </div>

                      {/* Email (optional, lets us reply in writing) */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "Email" : "ኢሜይል"}
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 sm:py-2.5 font-sans text-base sm:text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {/* System Type */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "What Do You Need?" : "ምን ይፈልጋሉ?"}
                        </label>
                        <select
                          value={formData.solutionId}
                          onChange={(e) => setFormData({ ...formData, solutionId: e.target.value })}
                          className="w-full bg-[#0E0E0E] border border-white/10 rounded-lg px-4 py-3 sm:py-2.5 font-sans text-base sm:text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all cursor-pointer"
                        >
                          {requestableSolutions.map((sol) => (
                            <option key={sol.id} value={sol.id} className="bg-neutral-900 text-white">
                              {sol.title[language]}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Estimated Budget */}
                    <div className="space-y-1.5">
                      <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {language === "en" ? "Project Size" : "የፕሮጀክት መጠን"}
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#0E0E0E] border border-white/10 rounded-lg px-4 py-3 sm:py-2.5 font-sans text-base sm:text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all cursor-pointer"
                      >
                        {projectSizes.map((size) => (
                          <option key={size.value} value={size.value} className="bg-neutral-900 text-white">
                            {size[language]}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Description */}
                    <div className="space-y-1.5">
                      <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {language === "en" ? "Describe What You Need" : "የሚፈልጉትን ይግለጹ"}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder={language === "en" ? "e.g. We have 3 branches and need patient records, billing and a pharmacy module..." : "ለምሳሌ 3 ቅርንጫፎች አሉን፣ የታካሚ መዝገብ፣ ክፍያ እና የፋርማሲ ክፍል እንፈልጋለን..."}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 sm:py-2.5 font-sans text-base sm:text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all resize-none"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 rounded-lg bg-[#FFD700] disabled:bg-gray-700 disabled:text-gray-400 px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_15px_rgba(255,215,0,0.15)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      id="btn-submit-solution-form"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>{language === "en" ? "Sending request..." : "ጥያቄውን በመላክ ላይ..."}</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>{language === "en" ? "Request a Proposal" : "ፕሮፖዛል ይጠይቁ"}</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="request-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6 flex flex-col items-center justify-center"
                    id="solution-success-message"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <Check className="h-8 w-8 stroke-[2.5]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-sans text-2xl font-extrabold text-white">
                        {language === "en" ? "Request Received!" : "ጥያቄዎ ደርሶናል!"}
                      </h3>
                      <p className="font-mono text-xs text-[#FFD700] tracking-wider uppercase font-bold">
                        {language === "en" ? "Let's make your company ahead of others." : "ድርጅትዎን ከሌሎች ቀዳሚ እናደርገዋለን።"}
                      </p>
                      <p className="font-sans text-sm text-gray-400 max-w-md mx-auto pt-2">
                        {language === "en"
                          ? "Thank you, " + formData.name + ". Our team will review your " + selectedSolution.title.en + " request for " + formData.businessName + " and call " + formData.phone + " within 24 hours to schedule a free consultation."
                          : "እናመሰግናለን " + formData.name + "። ቡድናችን ለ " + formData.businessName + " ያቀረቡትን የ" + selectedSolution.title.am + " ጥያቄ ገምግሞ በ 24 ሰዓታት ውስጥ በ " + formData.phone + " በመደወል ነጻ ምክክር ያዘጋጃል።"}
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center space-x-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-5 py-2.5 text-xs font-bold text-white transition-all cursor-pointer"
                        id="btn-solution-reset"
                      >
                        <span>{language === "en" ? "Submit Another Request" : "ሌላ ጥያቄ ያስገቡ"}</span>
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
