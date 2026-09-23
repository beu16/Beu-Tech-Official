import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, MessageCircle } from "lucide-react";
import { useApp } from "./AppContext";
import SectionHeading from "./SectionHeading";

type Bilingual = { en: string; am: string };

const faqs: { q: Bilingual; a: Bilingual }[] = [
  {
    q: { en: "How much does a system cost?", am: "አንድ ስርዓት ምን ያህል ያስወጣል?" },
    a: {
      en: "It depends on what you need. After a free call we send a clear, itemized quote before any work starts. Many clients begin with one focused module to see value early, then grow from there.",
      am: "በፍላጎትዎ ይወሰናል። ከነጻ ምክክር በኋላ ስራ ከመጀመሩ በፊት ግልጽ እና ዝርዝር ዋጋ እንልካለን። ብዙ ደንበኞች ቶሎ ጥቅም ለማየት በአንድ ክፍል ይጀምራሉ፣ ከዚያም ያሳድጋሉ።",
    },
  },
  {
    q: { en: "How long does it take?", am: "ምን ያህል ጊዜ ይወስዳል?" },
    a: {
      en: "A focused first version is typically ready in 4 to 6 weeks. Larger systems are delivered in stages, and you see a working demo every week along the way.",
      am: "ትኩረት ያለው የመጀመሪያ ስሪት በአብዛኛው ከ4 እስከ 6 ሳምንታት ይደርሳል። ትላልቅ ስርዓቶች በደረጃ ይረከባሉ። በየሳምንቱም የሚሰራ ማሳያ ያያሉ።",
    },
  },
  {
    q: { en: "Can we work together remotely?", am: "በርቀት አብረን መስራት እንችላለን?" },
    a: {
      en: "Yes. We collaborate online with weekly video demos, shared progress boards and chat, and we schedule meetings around your time zone.",
      am: "አዎ። በየሳምንቱ በቪዲዮ ማሳያ፣ በጋራ የእድገት ሰሌዳ እና በቻት በመስመር ላይ እንሰራለን። ስብሰባዎችንም በእርስዎ የሰዓት ዞን እናዘጋጃለን።",
    },
  },
  {
    q: { en: "Can it connect to the tools we already use?", am: "አሁን ከምንጠቀምባቸው መሳሪያዎች ጋር ሊገናኝ ይችላል?" },
    a: {
      en: "Yes. We integrate with payment providers, banks, accounting software and existing databases through secure APIs, so your new system fits into how you already work.",
      am: "አዎ። ከክፍያ አቅራቢዎች፣ ባንኮች፣ የሂሳብ ሶፍትዌሮች እና ካሉ የመረጃ ቋቶች ጋር በደህንነቱ የተጠበቀ API እናገናኛለን።",
    },
  },
  {
    q: { en: "What happens after launch?", am: "ከማስጀመር በኋላ ምን ይሆናል?" },
    a: {
      en: "We train your staff, monitor the system and stay on for maintenance, updates and new features. Support is available around the clock.",
      am: "ሰራተኞችዎን እናሰለጥናለን፣ ስርዓቱን እንከታተላለን፣ ለጥገና፣ ለማሻሻያ እና ለአዳዲስ ባህሪያት አብረን እንቆያለን። ድጋፍ ሁል ጊዜ ይገኛል።",
    },
  },
  {
    q: { en: "Who owns the software?", am: "ሶፍትዌሩ የማን ነው?" },
    a: {
      en: "You do. The system is built for your organization, and the source code and your data are handed over to you.",
      am: "የእርስዎ ነው። ስርዓቱ ለድርጅትዎ የተገነባ ነው። የምንጭ ኮዱ እና መረጃዎ ለእርስዎ ይረከባሉ።",
    },
  },
  {
    q: { en: "Which languages do your systems support?", am: "ስርዓቶቻችሁ የትኞቹን ቋንቋዎች ይደግፋሉ?" },
    a: {
      en: "Our systems and our support team work in English and Amharic, and we can add any other language your users need.",
      am: "ስርዓቶቻችን እና የድጋፍ ቡድናችን በእንግሊዝኛ እና በአማርኛ ይሰራሉ። ተጠቃሚዎችዎ የሚፈልጉትን ሌላ ቋንቋም መጨመር እንችላለን።",
    },
  },
];

export default function FAQ() {
  const { language, navigateTo } = useApp();
  const en = language === "en";
  const [open, setOpen] = useState(0);

  return (
    <section className="relative border-t border-white/[0.05] bg-[#0A0A0A] py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="faq-section">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28 text-center lg:text-left">
            <div className="lg:hidden">
              <SectionHeading eyebrow="FAQ" title={en ? "Questions, Answered" : "ጥያቄዎች እና መልሶች"} />
            </div>
            <div className="hidden lg:block">
              <div className="inline-flex items-center space-x-3">
                <span className="h-px w-6 bg-[#FFD700]/60" />
                <span className="font-sans text-xs font-semibold tracking-[0.2em] text-[#FFD700] uppercase">FAQ</span>
              </div>
              <h2 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-white">
                {en ? "Questions, Answered" : "ጥያቄዎች እና መልሶች"}
              </h2>
              <p className="mt-4 font-sans text-base text-gray-400 leading-relaxed">
                {en ? "Can't find what you're looking for? Ask us directly." : "የሚፈልጉትን አላገኙም? በቀጥታ ይጠይቁን።"}
              </p>
              <button
                onClick={() => navigateTo("/contact")}
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-bold text-white hover:border-[#FFD700]/50 hover:text-[#FFD700] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{en ? "Ask a question" : "ጥያቄ ይጠይቁ"}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q.en}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`font-sans text-base sm:text-lg font-semibold transition-colors ${isOpen ? "text-white" : "text-gray-300"}`}>
                    {item.q[language]}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen ? "border-[#FFD700]/50 bg-[#FFD700]/10 text-[#FFD700]" : "border-white/15 text-gray-400"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-10 font-sans text-sm sm:text-base leading-relaxed text-gray-400">{item.a[language]}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
