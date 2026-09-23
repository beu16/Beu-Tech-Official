import { useApp } from "./AppContext";
import { Flag, Zap, Shield, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

export default function WhyChooseUs() {
  const { t, language } = useApp();

  const cards = [
    { icon: Flag, title: t("whyCard1Title"), desc: t("whyCard1Desc") },
    { icon: Zap, title: t("whyCard2Title"), desc: t("whyCard2Desc") },
    { icon: Shield, title: t("whyCard3Title"), desc: t("whyCard3Desc") },
    { icon: MessageSquare, title: t("whyCard4Title"), desc: t("whyCard4Desc") },
  ];

  return (
    <section className="relative border-t border-white/[0.05] bg-[#0A0A0A] py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="why-choose-us-section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={language === "en" ? "Why Beu Tech" : "ለምን ቤዩ ቴክ"}
          title={t("whyTitle")}
          id="why-title-header"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" id="why-cards-grid">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex gap-4 sm:block rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:border-[#FFD700]/40 transition-colors duration-300"
                id={`why-card-${index}`}
              >
                <div className="flex shrink-0 items-center justify-center h-11 w-11 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="sm:mt-5 font-sans text-base font-bold text-white">{card.title}</h3>
                  <p className="mt-1.5 sm:mt-2 font-sans text-sm leading-relaxed text-gray-400">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
