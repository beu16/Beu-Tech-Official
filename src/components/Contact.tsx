import { useState, FormEvent } from "react";
import { useApp } from "./AppContext";
import { Mail, MapPin, Send, MessageSquare, CheckCircle, ArrowRight, ExternalLink, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "./SectionHeading";
import { sendMessage, SUPPORT_EMAIL } from "../lib/sendMessage";

export default function Contact() {
  const { t, language, navigateTo } = useApp();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setSendError(false);
    try {
      await sendMessage(
        `New message from ${formData.name} (beutech website)`,
        { Name: formData.name, Email: formData.email, Message: formData.message, Language: language },
        formData.email
      );
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch {
      setSendError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden border-t border-white/[0.05] bg-[#0A0A0A] py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="contact-section">
      {/* Golden gradient glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#FFD700]/10 to-[#FFA500]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={language === "en" ? "Get in Touch" : "ያግኙን"}
          title={t("contactSectionTitle")}
          subtitle={t("contactSectionSubtitle")}
          id="contact-header"
        />

        {/* Two Options Column Cards: custom project first, our own product second */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" id="contact-options-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#FFD700]/30 bg-[#FFD700]/[0.04] p-6 sm:p-8 md:p-10 flex flex-col justify-between"
            id="contact-option-card-corp"
          >
            <div>
              <span className="font-sans text-xs font-semibold tracking-wider text-[#FFD700] uppercase block mb-3">
                {t("contactOption2Title")}
              </span>
              <h3 className="font-sans text-2xl font-extrabold text-white tracking-tight">
                {language === "en" ? "Start a Custom Project" : "ብጁ ፕሮጀክት ይጀምሩ"}
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-gray-400">
                {language === "en"
                  ? "Tell us what your organization needs. We'll reply with a clear scope, a timeline and a transparent quote, usually within one business day."
                  : "ድርጅትዎ የሚፈልገውን ይንገሩን። ግልጽ እቅድ፣ የጊዜ ሰሌዳ እና ግልጽ ዋጋ ይዘን፣ በአብዛኛው በአንድ የስራ ቀን ውስጥ እንመልሳለን።"}
              </p>
            </div>
            <div className="mt-8">
              <button
                onClick={() => navigateTo("/solutions")}
                className="inline-flex w-full sm:w-auto items-center justify-center space-x-2 rounded-lg bg-[#FFD700] px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,215,0,0.25)] hover:bg-[#FFE033] active:scale-[0.98] transition-all duration-200"
                id="btn-option-project"
              >
                <span>{language === "en" ? "Request Your System" : "ስርዓትዎን ይጠይቁ"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:p-10 flex flex-col justify-between"
            id="contact-option-card-verify"
          >
            <div>
              <span className="font-sans text-xs font-semibold tracking-wider text-gray-400 uppercase block mb-3">
                {language === "en" ? "Also From Our Team" : "ከቡድናችን ደግሞ"}
              </span>
              <h3 className="font-sans text-2xl font-extrabold text-white tracking-tight">Beu Verify</h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-gray-400">
                {language === "en"
                  ? "Our own payment verification platform. It checks mobile money and bank receipts instantly and stops fake payments before they cost you."
                  : "የራሳችን የክፍያ ማረጋገጫ መድረክ። የሞባይል ገንዘብ እና የባንክ ደረሰኞችን ወዲያውኑ ያረጋግጣል። ሀሰተኛ ክፍያዎችን ከጉዳት በፊት ያስቆማል።"}
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://beuverify.beutech.com.et/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center space-x-2 rounded-lg border border-white/15 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/30 px-6 py-3.5 text-sm font-bold text-white transition-all duration-200"
                id="btn-option-verify"
              >
                <span>{t("contactOption1Cta")}</span>
                <ExternalLink className="h-4 w-4" />
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
                  <h4 className="font-sans text-xs text-gray-500 font-bold uppercase tracking-wider">{language === "en" ? "Telegram support" : "የቴሌግራም ድጋፍ"}</h4>
                  <p className="font-sans text-sm md:text-base text-white font-semibold mt-0.5">@Beutechsupport</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl border border-white/[0.03] bg-white/[0.01]">
                <div className="flex-shrink-0 p-3 rounded-xl bg-[#FFD700]/5 border border-[#FFD700]/10 text-[#FFD700]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs text-gray-500 font-bold uppercase tracking-wider">{language === "en" ? "Tech support email" : "የቴክኒክ ድጋፍ ኢሜይል"}</h4>
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="block font-sans text-sm md:text-base text-white font-semibold mt-0.5 break-all hover:text-[#FFD700] transition-colors">
                    {SUPPORT_EMAIL}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl border border-white/[0.03] bg-white/[0.01]">
                <div className="flex-shrink-0 p-3 rounded-xl bg-[#FFD700]/5 border border-[#FFD700]/10 text-[#FFD700]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs text-gray-500 font-bold uppercase tracking-wider">{language === "en" ? "Headquarters" : "ዋና መስሪያ ቤት"}</h4>
                  <p className="font-sans text-sm md:text-base text-white font-semibold mt-0.5">{t("contactLocation")}</p>
                  <p className="font-sans text-xs text-gray-500 mt-1">
                    {language === "en" ? "We work with teams remotely, in any time zone." : "ከቡድኖች ጋር በርቀት፣ በማንኛውም የሰዓት ዞን እንሰራለን።"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form (Right on desktop, 7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:p-10 relative overflow-hidden" id="contact-form-panel">
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
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-base sm:text-sm font-medium text-white placeholder-gray-600 focus:border-[#FFD700]/50 focus:bg-black/80 focus:outline-none transition-colors duration-200"
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
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-base sm:text-sm font-medium text-white placeholder-gray-600 focus:border-[#FFD700]/50 focus:bg-black/80 focus:outline-none transition-colors duration-200"
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
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-base sm:text-sm font-medium text-white placeholder-gray-600 focus:border-[#FFD700]/50 focus:bg-black/80 focus:outline-none transition-colors duration-200 resize-none"
                    />
                  </div>

                  {sendError && (
                    <div className="flex items-start gap-2 rounded-lg border border-rose-500/20 bg-rose-500/5 p-3 text-xs font-semibold text-rose-300" role="alert" id="contact-send-error">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>
                        {language === "en"
                          ? `We could not send your message right now. Please try again, or email us directly at ${SUPPORT_EMAIL}`
                          : `መልእክትዎን አሁን መላክ አልቻልንም። እባክዎ እንደገና ይሞክሩ ወይም በቀጥታ ወደ ${SUPPORT_EMAIL} ኢሜይል ይላኩ`}
                      </span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center space-x-2 rounded-lg bg-[#FFD700] py-3.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,215,0,0.25)] hover:bg-[#FFE033] active:scale-[0.98] transition-all duration-200 disabled:opacity-50"
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
