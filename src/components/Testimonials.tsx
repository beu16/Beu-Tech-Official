import { useApp } from "./AppContext";
import { Quote } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const { t, language } = useApp();

  const testimonials = [
    { text: t("test1Text"), author: t("test1Author"), avatarLetter: "A" },
    { text: t("test2Text"), author: t("test2Author"), avatarLetter: "S" },
    { text: t("test3Text"), author: t("test3Author"), avatarLetter: "D" },
  ];

  return (
    <section className="relative border-t border-white/[0.05] bg-[#0A0A0A] py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="testimonials-section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={language === "en" ? "Client Stories" : "የደንበኞች ምስክርነት"}
          title={t("testimonialsTitle")}
          id="testimonials-header"
        />

        {/* Swipeable row on phones, three columns from tablet up */}
        <div
          className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0"
          id="testimonials-grid"
        >
          {testimonials.map((item, i) => {
            // Author strings are formatted "Name, Role, Place"
            const [name, ...rest] = item.author.split(/[,،፣]\s*/);
            return (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative flex w-[85%] shrink-0 snap-center flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 md:w-auto"
                id={`testimonial-card-${i}`}
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-[#FFD700]/15" />
                <blockquote className="pr-8 font-sans text-sm md:text-base leading-relaxed text-gray-200">
                  {item.text.replace(/^"|"$/g, "")}
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-white/[0.06] flex items-center space-x-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 font-sans text-sm font-bold text-[#FFD700]">
                    {item.avatarLetter}
                  </div>
                  <div>
                    <div className="font-sans text-sm font-bold text-white">{name}</div>
                    <div className="font-sans text-xs text-gray-500">{rest.join(", ")}</div>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
        <p className="mt-4 text-center font-sans text-xs text-gray-600 md:hidden">
          {language === "en" ? "Swipe to read more →" : "ተጨማሪ ለማንበብ ያንሸራትቱ →"}
        </p>
      </div>
    </section>
  );
}
