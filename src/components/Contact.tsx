import { useState, FormEvent } from "react";
import { useApp } from "./AppContext";
import { Mail, MapPin, Send, MessageSquare, Zap, Globe, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const { t, language } = useApp();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000); // clear after 5s
    }, 1200);
  };

  return (
    <section className="relative overflow-hidden bg-black py-24 px-4 sm:px-6 lg:px-8" id="contact-section">
      {/* Golden gradient glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#FFD700]/10 to-[#FFA500]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            id="contact-header"
          >
            {t("contactSectionTitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-sans text-sm md:text-base leading-relaxed text-gray-400"
            id="contact-subheader"
          >
            {t("contactSectionSubtitle")}
          </motion.p>
        </div>

        {/* Two Options Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="contact-options-grid">
          {/* OPTION 1: Explore Beu Verify */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[#FFD700]/10 bg-gradient-to-b from-[#0E0E0E] to-black p-8 md:p-10 flex flex-col justify-between group relative overflow-hidden"
            id="contact-option-card-verify"
          >
            {/* Ambient golden highlight */}
            <div className="absolute top-0 right-0 h-16 w-16 bg-[#FFD700]/5 rounded-full blur-xl group-hover:bg-[#FFD700]/10 transition-all pointer-events-none" />
            
            <div>
              <span className="font-sans text-xs font-semibold tracking-wider text-[#FFD700] uppercase block mb-3">
                {t("contactOption1Title")}
              </span>
              <h3 className="font-sans text-2xl font-extrabold text-white tracking-tight">
                Beu Verify
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-gray-400">
                {language === "en"
                  ? "Instantly verify Telebirr receipts and protect your business against transaction fraud. Free to get started."
                  : "የቴሌብር ደረሰኞችን በቅጽበት ያረጋግጡ እና ንግድዎን ከክፍያ ማጭበርበር ይጠብቁ። በነጻ ይጀምሩ።"}
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://beuverify.beutech.com.et/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center space-x-2 rounded-xl bg-[#FFD700] px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:scale-[1.02] active:scale-95 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-200"
                id="btn-option-verify"
              >
                <span>{t("contactOption1Cta")}</span>
                <Zap className="h-4 w-4 fill-current text-black" />
              </a>
            </div>
          </motion.div>

          {/* OPTION 2: Work With Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-white/[0.05] bg-gradient-to-b from-[#0E0E0E] to-black p-8 md:p-10 flex flex-col justify-between group relative overflow-hidden"
            id="contact-option-card-corp"
          >
            {/* Ambient gold highlight */}
            <div className="absolute top-0 right-0 h-16 w-16 bg-white/[0.03] rounded-full blur-xl group-hover:bg-[#FFD700]/5 transition-all pointer-events-none" />

            <div>
              <span className="font-sans text-xs font-semibold tracking-wider text-gray-400 uppercase block mb-3">
                {t("contactOption2Title")}
              </span>
              <h3 className="font-sans text-2xl font-extrabold text-white tracking-tight">
                Corporate Headquarters
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-gray-400">
                {language === "en"
                  ? "Collaborate with our subsidiaries to digitize operations, integrate smart financial tools, or request tailor-made custom systems."
                  : "ስራዎችን ዲጂታላይዝ ለማድረግ፣ ዘመናዊ የፋይናንስ መሳሪያዎችን ለማዋሃድ ወይም በልዩ ሁኔታ የተዘጋጁ ብጁ መተግበሪያዎችን ለመጠየቅ ከእኛ ጋር ይስሩ።"}
              </p>
            </div>

            <div className="mt-8">
              <a
                href="mailto:info@beutech.cloud"
                className="inline-flex w-full sm:w-auto items-center justify-center space-x-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white hover:scale-[1.02] active:scale-95 hover:border-white/40 transition-all duration-200"
                id="btn-option-email"
              >
                <span>{t("contactOption2Cta")}</span>
                <Mail className="h-4 w-4 text-white" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Split Layout: Contact form (Left) and Details info (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="contact-split-view">
          
          {/* Contact Details Info (Left on desktop, 5 cols) */}
          <div className="lg:col-span-5 space-y-8" id="contact-info-panel">
            <h3 className="font-sans text-2xl font-extrabold text-white tracking-tight">
              {t("contactInfoTitle")}
            </h3>
            <div className="h-0.5 w-12 bg-[#FFD700] rounded-full" />

            <div className="space-y-6" id="contact-info-list">
              {/* Telegram */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl border border-white/[0.03] bg-white/[0.01]">
                <div className="flex-shrink-0 p-3 rounded-xl bg-[#FFD700]/5 border border-[#FFD700]/10 text-[#FFD700]">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs text-gray-500 font-bold uppercase tracking-wider">TELEGRAM SUPPORT</h4>
                  <p className="font-sans text-sm md:text-base text-white font-semibold mt-0.5">@Beutechsupport</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl border border-white/[0.03] bg-white/[0.01]">
                <div className="flex-shrink-0 p-3 rounded-xl bg-[#FFD700]/5 border border-[#FFD700]/10 text-[#FFD700]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs text-gray-500 font-bold uppercase tracking-wider">EMAIL ADDRESS</h4>
                  <p className="font-sans text-sm md:text-base text-white font-semibold mt-0.5">info@beutech.cloud</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl border border-white/[0.03] bg-white/[0.01]">
                <div className="flex-shrink-0 p-3 rounded-xl bg-[#FFD700]/5 border border-[#FFD700]/10 text-[#FFD700]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs text-gray-500 font-bold uppercase tracking-wider">HEADQUARTERS</h4>
                  <p className="font-sans text-sm md:text-base text-white font-semibold mt-0.5">{t("contactLocation").replace("Location: ", "").replace("አድራሻ: ", "")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form (Right on desktop, 7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-white/[0.05] bg-[#0E0E0E] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] relative overflow-hidden" id="contact-form-panel">
            <h3 className="font-sans text-2xl font-extrabold text-white tracking-tight">
              {t("contactFormTitle")}
            </h3>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 flex flex-col items-center justify-center py-12 text-center"
                  id="form-success-state"
                >
                  <div className="h-14 w-14 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] mb-4 shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                    <CheckCircle className="h-7 w-7 stroke-[2.5]" />
                  </div>
                  <h4 className="font-sans text-lg font-bold text-white">
                    {language === "en" ? "Message Dispatched" : "መልእክቱ ተልኳል"}
                  </h4>
                  <p className="mt-3 font-sans text-sm text-gray-400 max-w-sm leading-relaxed">
                    {t("contactSuccessMessage")}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-6"
                  id="contact-form-el"
                >
                  {/* Name field */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {t("contactFormName")}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === "en" ? "Abebe Kebede" : "አበበ ከበደ"}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm font-medium text-white placeholder-gray-600 focus:border-[#FFD700]/50 focus:bg-black/80 focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {t("contactFormEmail")}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@beutech.cloud"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm font-medium text-white placeholder-gray-600 focus:border-[#FFD700]/50 focus:bg-black/80 focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {t("contactFormMessage")}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={language === "en" ? "Describe your system needs, timeline, or inquiries..." : "የሚፈልጉትን የሶፍትዌር አይነት፣ ጊዜ ወይም ጥያቄዎችን እዚህ ይግለጹ..."}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm font-medium text-white placeholder-gray-600 focus:border-[#FFD700]/50 focus:bg-black/80 focus:outline-none transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#FFA500] py-4 text-sm font-bold text-black shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:scale-[1.01] active:scale-95 transition-all duration-200 disabled:opacity-50"
                  >
                    <span>{loading ? (language === "en" ? "Sending..." : "በመላክ ላይ...") : t("contactFormSend")}</span>
                    <Send className="h-4 w-4 fill-current text-black" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
