import React, { useState } from "react";
import { useApp } from "./AppContext";
import { GraduationCap, BookOpen, Landmark, Award, ShieldCheck, Users, HelpCircle, ArrowLeft, Check, Server, RefreshCw, Send, Sparkles, AlertCircle, FileSpreadsheet } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function BeuEducationPage() {
  const { t, navigateTo, language } = useApp();

  // State for Beu Education Form
  const [formData, setFormData] = useState({
    name: "",
    institutionName: "",
    phone: "",
    institutionType: "Full University",
    capacity: "1,000 - 5,000 students",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.institutionName.trim() || !formData.phone.trim()) {
      setValidationError(
        language === "en"
          ? "Please provide your name, institution name, and phone number so our team can draft an integration proposal."
          : "እባክዎ ስምዎን፣ የትምህርት ተቋሙን ስም እና ስልክ ቁጥርዎን ያስገቡ።"
      );
      return;
    }

    setValidationError("");
    setIsSubmitting(true);

    // Simulate secure pipeline registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      institutionName: "",
      phone: "",
      institutionType: "Full University",
      capacity: "1,000 - 5,000 students",
      description: "",
    });
    setIsSubmitted(false);
  };

  const services = [
    {
      icon: <Landmark className="h-6 w-6 text-[#FFD700]" />,
      title: language === "en" ? "Full University ERP" : "ሙሉ የዩኒቨርሲቲ ERP ስርዓት",
      desc: language === "en" 
        ? "Complete campus-wide operational integration. Manage admissions, registration, class scheduling, hostels, human resources, and student records under one single, robust digital umbrella."
        : "አጠቃላይ የዩኒቨርሲቲ ስራዎችን የሚያስተሳስር መፍትሄ። የተማሪዎች ምዝገባን፣ ኮርሶችን፣ የመኝታ ክፍል ድልድልን፣ የሰው ኃይል እና የፋይናንስ አስተዳደርን በአንድ ጠንካራ መድረክ ያቀናጁ።",
      highlights: language === "en"
        ? ["Centralized student registry databases", "Automated course scheduling systems", "Integrated billing & tuition ledger controls", "Multi-role dean, registrar & professor logins"]
        : ["የተማሪዎች ማዕከላዊ የውሂብ ጎታ", "አውቶማቲክ የኮርሶች እና ክፍሎች ዝግጅት", "የክፍያ እና የትምህርት ካርድ ቁጥጥር", "ለዲኖች፣ ለሬጅስትራር እና ለመምህራን የተለየ መቆጣጠሪያ"],
    },
    {
      icon: <Award className="h-6 w-6 text-[#FFD700]" />,
      title: language === "en" ? "Grade Report Systems" : "የውጤት ሪፖርት ማሳያ ስርዓት",
      desc: language === "en" 
        ? "Transform grade submissions and report card generation. Highly secure interfaces designed to calculate GPAs, CGPAs, letter grades, and export official registrar transcripts seamlessly."
        : "የክፍል ውጤቶችን ማጠናቀቅ እና የሪፖርት ካርድ ማዘጋጀትን ያቀላጥፉ። GPA፣ CGPA እና የደብዳቤ ውጤቶችን በትክክል የሚያሰላ እና ኦፊሴላዊ የተማሪ ትራንስክሪፕቶችን የሚያዘጋጅ እጅግ ደህንነቱ የተጠበቀ ስርዓት።",
      highlights: language === "en"
        ? ["Tamper-proof encryption on grade logs", "Instant GPA & CGPA automated calculators", "Direct transcript PDF exports for registrars", "Online student grade access portals"]
        : ["ደህንነቱ የተጠበቀ እና ሊለወጥ የማይችል የውጤት መዝገብ", "የGPA እና CGPA ፈጣን አውቶማቲክ ስሌቶች", "ኦፊሴላዊ ትራንስክሪፕቶችን በPDF የማውረድ ዕድል", "የተማሪዎች ውጤት መከታተያ ድረ-ገጽ"],
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6 text-[#FFD700]" />,
      title: language === "en" ? "College & TVET Management" : "የኮሌጅ እና የቲቪኢቲ (TVET) ስርዓት",
      desc: language === "en" 
        ? "Tailored school management system built specifically for vocational schools, technical institutes, and private colleges. Fully supports modular grading, practical labs scheduling, and certificates."
        : "ለቴክኒክና ሙያ ተቋማት፣ ለልዩ ልዩ ኮሌጆች እና ለግል ተቋማት ተብሎ የተዘጋጀ ብጁ የአስተዳደር ስርዓት። ሞዱላር የክፍል ስራዎችን እና ሰርተፍኬቶችን ሙሉ በሙሉ ይደግፋል።",
      highlights: language === "en"
        ? ["Modular training progress tracking", "Practical workshop scheduling & attendance", "Automated graduation certificate prints", "National qualification framework supports"]
        : ["የሞዱላር ስልጠናዎች እድገት ክትትል", "የተግባር ልምምድ ክፍሎች ዝግጅት እና ክትትል", "የምረቃ ሰርተፍኬቶችን በራስ-ሰር ማተም", "የአገራዊ የብቃት ማዕቀፍ (COC) ድጋፍ"],
    },
    {
      icon: <Users className="h-6 w-6 text-[#FFD700]" />,
      title: language === "en" ? "Parent-Teacher Digital Gateways" : "የወላጅ-መምህር ዲጂታል ግንኙነት",
      desc: language === "en" 
        ? "Real-time portals bridging the gap between parents and schools. Provide mothers and fathers with active attendance trackers, exam notifications, and direct contact options with administrators."
        : "በወላጆች እና በትምህርት ቤቶች መካከል ፈጣን ግንኙነት የሚፈጥር መድረክ። ወላጆች የተማሪዎችን የትምህርት ቤት መገኘት፣ የፈተና ውጤቶች እና ማስታወቂያዎችን እንዲከታተሉ ያስችላል።",
      highlights: language === "en"
        ? ["SMS automated attendance warnings", "Live school circulars & calendar updates", "Secure messaging with class teachers", "Detailed performance behavior tracking"]
        : ["የትምህርት ቤት መቅረት አውቶማቲክ የኤስኤምኤስ መልዕክት", "የቀጥታ ትምህርት ቤት ማስታወቂያዎች እና የቀን መቁጠሪያ", "ከክፍል አስተማሪዎች ጋር ደህንነቱ የተጠበቀ ግንኙነት", "የተማሪ ባህሪ እና ስነ-ምግባር ክትትል"],
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#FFD700]" />,
      title: language === "en" ? "Tuition & Payment Integration" : "የትምህርት ክፍያ እና የባንክ ትስስር",
      desc: language === "en" 
        ? "Incorporate cashless operations across your institution. Directly integrate payment modules with Telebirr, CBE Birr, and CBE banks to reconcile tuition fees instantly and eliminate queue delays."
        : "በትምህርት ተቋምዎ ውስጥ ከወረቀት ነጻ ክፍያዎችን ይጀምሩ። የትምህርት ክፍያዎችን በራስ-ሰር ለማረጋገጥ ከቴሌብር፣ ሲቢኢ ብር እና ንግድ ባንክ ጋር ቀጥታ ትስስር ይፍጠሩ።",
      highlights: language === "en"
        ? ["Direct API integrations for Telebirr and local banks", "Automated digital receipts with verification", "Outstanding fee reminders and alerts", "Instant finance department reconciliation dashboards"]
        : ["ከቴሌብር እና ባንኮች ጋር የቀጥታ API ትስስር", "የክፍያ ማረጋገጫዎች እና ዲጂታል ደረሰኞች", "የቀሪ ክፍያ ማሳሰቢያዎች እና መልዕክቶች", "ለሂሳብ ክፍል የሚሆን ፈጣን የቁጥጥር ዳሽቦርድ"],
    },
    {
      icon: <BookOpen className="h-6 w-6 text-[#FFD700]" />,
      title: language === "en" ? "E-Learning & Digital Libraries" : "የኢ-ሌርኒንግ (E-Learning) እና ቤተ-መጽሐፍት",
      desc: language === "en" 
        ? "Equip students with online class modules and lecture materials. Includes digital books search engine directories, online homework submission portals, and virtual lecture classrooms."
        : "ለተማሪዎች የመስመር ላይ የትምህርት ማቴሪያሎችን ያቅርቡ። የዲጂታል መጽሐፍት ካታሎጎችን፣ የቤት ስራዎችን መጫኛ እና ምናባዊ የክፍል መድረኮችን የያዘ።",
      highlights: language === "en"
        ? ["File attachments for syllabus & homework", "Virtual resource library index system", "Interactive online test structures", "Student reading progress checklists"]
        : ["የስርዓተ-ትምህርት እና የቤት ስራዎች ማያያዣ", "የዲጂታል መጽሐፍት ማዕከላዊ ማውጫ", "በይነተገናኝ የመስመር ላይ ፈተናዎች", "የተማሪዎችን የንባብ እድገት ክትትል"],
    },
  ];

  const valueAesthetic = [
    { name: "PostgreSQL", type: "Durable DB" },
    { name: "TypeScript", type: "Security" },
    { name: "CBE Birr API", type: "Payment" },
    { name: "Telebirr API", type: "Payment" },
    { name: "Node.js", type: "Backbone" },
    { name: "React Web", type: "UI Interface" },
    { name: "Local Cloud", type: "Fast Access" },
    { name: "Redis Cache", type: "Instant GPAs" },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-[85vh] py-16 px-4 sm:px-6 lg:px-8" id="beu-education-page">
      <div className="mx-auto max-w-7xl">
        {/* Navigation Breadcrumb */}
        <button
          onClick={() => navigateTo("/subsidiaries")}
          className="flex items-center space-x-2 text-xs font-semibold text-gray-500 hover:text-[#FFD700] transition-colors mb-8 cursor-pointer"
          id="btn-back-subs-education"
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
            id="education-page-badge"
          >
            <GraduationCap className="h-3.5 w-3.5 text-[#FFD700]" />
            <span className="text-xs font-semibold tracking-wider text-[#FFD700] uppercase">Beu Education</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-4xl font-extrabold sm:text-5xl tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent"
            id="education-page-title"
          >
            {t("educationTagline")}
          </motion.h1>
          <p className="mt-4 font-sans text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {t("educationDesc")}
          </p>
          <div className="mt-4 h-1 w-12 bg-[#FFD700] mx-auto rounded-full" />
        </div>

        {/* Custom Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24" id="education-services-detailed-grid">
          {services.map((serv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 hover:border-[#FFD700]/50 transition-all duration-300 flex flex-col justify-between group"
              id={`education-service-card-${idx}`}
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

        {/* Educational Architecture Stacks */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 md:p-12 mb-24" id="education-tech-stack-panel">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-sans text-2xl font-extrabold text-white">
              {language === "en" ? "Robust, Compliant Institutional Infrastructure" : "ደህንነቱ የተጠበቀ የቴክኖሎጂ መሰረተ-ልማት"}
            </h2>
            <p className="mt-2 font-sans text-sm text-gray-400">
              {language === "en"
                ? "Our systems are built on secure enterprise relational databases ensuring complete data integrity, Telebirr/CBE payment syncs, and 24/7 localized hosting backups."
                : "የእኛ ስርዓቶች የተማሪዎች እና የውጤት መረጃዎች እንዳይባክኑ ጠንካራ የውሂብ ጎታዎችን፣ ከቴሌብር እና ባንኮች ጋር አውቶማቲክ ማረጋገጫን፣ እና የ24/7 የደመና ምትኬን ይጠቀማሉ።"}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" id="education-architecture-grid">
            {valueAesthetic.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-5 text-center hover:border-[#FFD700]/50 transition-all group"
                id={`edu-tech-item-${idx}`}
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

        {/* Interactive Beu Education Proposal Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent overflow-hidden"
          id="beu-education-interactive-form-section"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left promo box: Slogan & Core Tech Values */}
            <div className="lg:col-span-5 p-8 md:p-12 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-transparent flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 rounded-full bg-[#FFD700]/10 px-3.5 py-1 border border-[#FFD700]/20">
                  <Sparkles className="h-3 w-3 text-[#FFD700] fill-[#FFD700] animate-pulse" />
                  <span className="font-mono text-[10px] font-bold text-[#FFD700] uppercase tracking-wider">
                    {language === "en" ? "Ethiopian Digital Transformation 2030" : "የኢትዮጵያ 2030 ዲጂታል ሽግግር"}
                  </span>
                </div>
                
                <h2 className="font-sans text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {language === "en" 
                    ? "Empowering Modern Learning Institutions." 
                    : "ለዘመናዊ የትምህርት ተቋማት ዘመናዊ መፍትሄዎች።"}
                </h2>
                
                <p className="font-sans text-sm text-gray-400 leading-relaxed">
                  {language === "en"
                    ? "In alignment with the Ethiopian 2030 National Digital Transformation vision, Beu Education builds world-class management software that eliminates queues, prevents manual grade tempering, and elevates academic efficiency."
                    : "ከኢትዮጵያ 2030 አገራዊ የዲጂታል ሽግግር ራዕይ ጋር በተጣጣመ መልኩ ቤዩ ኤጁኬሽን ሰልፎችን የሚያስወግዱ፣ የውጤት መዛባቶችን የሚከላከሉ እና የትምህርት ጥራትን የሚያሳድጉ የሶፍትዌር መፍትሄዎችን ይገነባል።"}
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    { title: language === "en" ? "Government & Ministry Aligned" : "ከሚኒስቴር እና ከመንግስት መመሪያዎች ጋር የተጣጣመ", desc: language === "en" ? "Meets strict national educational standards" : "አገራዊ የትምህርት መስፈርቶች እና ደንቦችን ሙሉ በሙሉ የሚያሟላ" },
                    { title: language === "en" ? "Highly Secure & Audited" : "ደህንነቱ የተረጋገጠ እና የተፈተሸ", desc: language === "en" ? "Encrypted registers preventing any form of alteration" : "ማንኛውንም አይነት የውጤት ለውጥ የሚከላከል ጠንካራ ምስጠራ" },
                    { title: language === "en" ? "Offline local fallbacks" : "ያለ በይነመረብ (Offline) መስራት የሚችል", desc: language === "en" ? "Designed to survive local connection limits seamlessly" : "የኢንተርኔት መቆራረጥን ለመቋቋም በሚያስችል መልኩ የተዘጋጀ" }
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
                  ? "Beu Education, modernizing Ethiopia's academic infrastructure" 
                  : "ቤዩ ኤጁኬሽን፣ የኢትዮጵያን የትምህርት መሰረተ-ልማት ማዘመን"}
              </div>
            </div>

            {/* Right side: Interactive Form Container */}
            <div className="lg:col-span-7 p-8 md:p-12 bg-black/30">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="education-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="beu-education-lead-form"
                  >
                    <div>
                      <h3 className="font-sans text-xl font-bold text-white mb-1">
                        {language === "en" ? "Request Institution Integration Scoping" : "የተቋምዎን መረጃዎች ያስመዝግቡ"}
                      </h3>
                      <p className="font-sans text-xs text-gray-400">
                        {language === "en" 
                          ? "Submit your academic parameter requirements for an integration scope roadmap and live system demonstration." 
                          : "ለትምህርት ተቋምዎ የሚሆን የኮድ እቅድ እና የሙከራ ማሳያ ለማግኘት ዝርዝሩን ያስገቡ።"}
                      </p>
                    </div>

                    {validationError && (
                      <div className="flex items-center space-x-2 text-xs font-semibold text-rose-400 bg-rose-500/5 border border-rose-500/10 p-3 rounded-lg" id="val-err-edu">
                        <AlertCircle className="h-4 w-4" />
                        <span>{validationError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "Registrar / Admin Name *" : "የሬጅስትራር ወይም የአስተዳዳሪ ስም *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Dr. Almaz T."
                          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all"
                        />
                      </div>

                      {/* Institution Name */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "Educational Institution Name *" : "የትምህርት ተቋሙ ስም *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.institutionName}
                          onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                          placeholder="e.g. Rift Valley Campus"
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
                          placeholder="e.g. +251 911 ..."
                          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all"
                        />
                      </div>

                      {/* Institution Type */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {language === "en" ? "Institution Category" : "የተቋሙ ምድብ"}
                        </label>
                        <select
                          value={formData.institutionType}
                          onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                          className="w-full bg-[#0E0E0E] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all cursor-pointer"
                        >
                          <option value="Full University" className="bg-neutral-900 text-white">Full University / College</option>
                          <option value="TVET Institute" className="bg-neutral-900 text-white">Technical & Vocational TVET</option>
                          <option value="Private K-12 Academy" className="bg-neutral-900 text-white">Private K-12 Academy</option>
                          <option value="Government School" className="bg-neutral-900 text-white">Government School / District</option>
                          <option value="Specialized Training Center" className="bg-neutral-900 text-white">Specialized Training Center</option>
                        </select>
                      </div>
                    </div>

                    {/* Student Capacity */}
                    <div className="space-y-1.5">
                      <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {language === "en" ? "Student Capacity / Size" : "የተማሪዎች ብዛት / መጠን"}
                      </label>
                      <select
                        value={formData.capacity}
                        onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                        className="w-full bg-[#0E0E0E] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all cursor-pointer"
                      >
                        <option value="Under 1,000 students" className="bg-neutral-900 text-white">Under 1,000 students</option>
                        <option value="1,000 - 5,000 students" className="bg-neutral-900 text-white">1,000 - 5,000 students</option>
                        <option value="5,000 - 15,000 students" className="bg-neutral-900 text-white">5,000 - 15,000 students</option>
                        <option value="Over 15,000 students" className="bg-neutral-900 text-white">Over 15,000 students</option>
                      </select>
                    </div>

                    {/* Description */}
                    <div className="space-y-1.5">
                      <label className="block font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {language === "en" ? "Specific Feature Requirements & Goals" : "የሚፈለጉ ልዩ ልዩ ባህሪያት እና አላማዎች"}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder={language === "en" ? "Explain your academic goals (e.g. Telebirr tuition reconciliations, custom transcripts, parent notifications)..." : "ተቋማዊ ግቦችዎን ያብራሩ (ለምሳሌ የክፍያ ትስስር፣ የትራንስክሪፕት አወጣጥ፣ የወላጆች መከታተያ)..."}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-sm text-white focus:outline-none focus:border-[#FFD700]/70 focus:bg-white/[0.05] transition-all resize-none"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 rounded-lg bg-[#FFD700] disabled:bg-gray-700 disabled:text-gray-400 px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_15px_rgba(255,215,0,0.15)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      id="btn-submit-[#FFD700]-form"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>{language === "en" ? "Compiling scoping model..." : "መረጃውን በመገምገም ላይ..."}</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>
                            {language === "en" ? "Request Scoping & Proposal" : "የመፍትሄ እቅድ እና ፕሮፖዛል ጠይቅ"}
                          </span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="education-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6 flex flex-col items-center justify-center"
                    id="education-success-message"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <Check className="h-8 w-8 stroke-[2.5]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-sans text-2xl font-extrabold text-white">
                        {language === "en" ? "Integration Proposal Initialized!" : "የመፍትሄ እቅድ ጥያቄ ተመዝግቧል!"}
                      </h3>
                      <p className="font-mono text-xs text-[#FFD700] tracking-wider uppercase font-bold">
                        {language === "en" ? "Modernizing Ethiopian Academic Systems" : "የኢትዮጵያን የትምህርት ሥርዓት ማዘመን"}
                      </p>
                      <p className="font-sans text-sm text-gray-400 max-w-md mx-auto pt-2">
                        {language === "en"
                          ? "Thank you, " + formData.name + ". Our senior institutional systems architect will review Rift Valley's specifications for " + formData.institutionName + " (Capacity: " + formData.capacity + ") and call " + formData.phone + " within 24 hours to coordinate a technical walk-through and custom live preview sandbox."
                          : "እናመሰግናለን " + formData.name + "። የእኛ የትምህርት ሥርዓት አርክቴክት ለ " + formData.institutionName + " ያቀረቡትን ተቋማዊ መመዘኛዎች (መጠን፡ " + formData.capacity + ") በመገምገም በ 24 ሰዓታት ውስጥ በ " + formData.phone + " በመደወል የሙከራ ማሳያ ያዘጋጃል።"}
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center space-x-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-5 py-2.5 text-xs font-bold text-white transition-all cursor-pointer"
                        id="btn-education-reset"
                      >
                        <span>{language === "en" ? "Register Another Campus System" : "ሌላ የተቋም መረጃ አስገባ"}</span>
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
