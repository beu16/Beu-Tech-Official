import { useApp } from "./AppContext";
import { motion } from "motion/react";
import { processSteps } from "../data/solutions";

// The 4-step "how we work" row, shared by the home page and the Solutions page
export default function ProcessSteps() {
  const { language } = useApp();

  return (
    <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* Connecting line behind the step numbers on wide screens */}
      <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#FFD700]/0 via-[#FFD700]/30 to-[#FFD700]/0" />

      {processSteps.map((step, idx) => {
        const Icon = step.icon;
        return (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="relative flex flex-col items-center text-center px-2"
          >
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#FFD700]/30 bg-[#0E0E0E] text-[#FFD700]">
              <Icon className="h-5 w-5" />
            </div>
            <span className="mt-4 font-mono text-[11px] font-bold tracking-widest text-[#FFD700]/70">
              {language === "en" ? "STEP" : "ደረጃ"} 0{idx + 1}
            </span>
            <h3 className="mt-1.5 font-sans text-base font-bold text-white">{step.title[language]}</h3>
            <p className="mt-2 font-sans text-sm text-gray-400 leading-relaxed max-w-[16rem]">{step.desc[language]}</p>
          </motion.li>
        );
      })}
    </ol>
  );
}
