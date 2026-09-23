import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  id?: string;
}

// One heading style for every section, so the site reads as a single system
export default function SectionHeading({ eyebrow, title, subtitle, id }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
    >
      <div className="inline-flex items-center space-x-3">
        <span className="h-px w-6 bg-[#FFD700]/60" />
        <span className="font-sans text-xs font-semibold tracking-[0.2em] text-[#FFD700] uppercase">
          {eyebrow}
        </span>
        <span className="h-px w-6 bg-[#FFD700]/60" />
      </div>
      <h2 className="mt-4 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight text-balance" id={id}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto font-sans text-sm md:text-base text-gray-400 leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
