import { useApp } from "./AppContext";
import { Flag, Zap, Shield, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function WhyChooseUs() {
  const { t } = useApp();

  const cards = [
    {
      icon: <Flag className="h-6 w-6 text-[#FFD700]" />,
      title: t("whyCard1Title"),
      desc: t("whyCard1Desc"),
      color: "from-emerald-500/10 to-emerald-500/0",
    },
    {
      icon: <Zap className="h-6 w-6 text-[#FFD700]" />,
      title: t("whyCard2Title"),
      desc: t("whyCard2Desc"),
      color: "from-amber-500/10 to-amber-500/0",
    },
    {
      icon: <Shield className="h-6 w-6 text-[#FFD700]" />,
      title: t("whyCard3Title"),
      desc: t("whyCard3Desc"),
      color: "from-blue-500/10 to-blue-500/0",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-[#FFD700]" />,
      title: t("whyCard4Title"),
      desc: t("whyCard4Desc"),
      color: "from-purple-500/10 to-purple-500/0",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-24 px-4 sm:px-6 lg:px-8" id="why-choose-us-section">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 rounded-full bg-white/[0.03] px-4 py-1.5 border border-white/[0.08]"
            id="why-badge"
          >
            <span className="text-xs font-semibold tracking-wider text-[#FFD700] uppercase">
              {t("aboutValuesTitle")}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            id="why-title-header"
          >
            {t("whyTitle")}
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" id="why-cards-grid">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 50, damping: 14, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 md:p-10 hover:border-[#FFD700]/50 transition-all duration-300 group"
              id={`why-card-${index}`}
            >
              {/* Border glow effects */}
              <div className="absolute -inset-px bg-gradient-to-r from-[#FFD700]/0 via-[#FFD700]/10 to-[#FFD700]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className={`absolute inset-0 bg-gradient-to-b ${card.color} opacity-30 transition-opacity duration-300 pointer-events-none`} />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Icon Frame */}
                  <div className="inline-flex items-center justify-center rounded-xl bg-white/[0.03] p-3 border border-white/[0.08] shadow-[0_0_15px_rgba(255,215,0,0.05)] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] group-hover:bg-[#FFD700]/5 group-hover:border-[#FFD700]/20 transition-all duration-300">
                    {card.icon}
                  </div>

                  <h3 className="mt-6 font-sans text-xl font-bold text-white tracking-tight group-hover:text-[#FFD700] transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p className="mt-3 font-sans text-sm md:text-base leading-relaxed text-gray-400">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
