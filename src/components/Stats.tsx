import { useEffect, useState, useRef } from "react";
import { useApp } from "./AppContext";
import { motion, useInView } from "motion/react";

function CountUp({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-amber-200 to-[#FFD700] bg-clip-text text-transparent">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useApp();

  const statItems = [
    { end: 4, suffix: "+", label: t("stat1Label") },
    { end: 500, suffix: "+", label: t("stat2Label") },
    { end: 50000, suffix: "+", label: t("stat3Label") },
    { end: 24, suffix: "/7", label: t("stat4Label") },
  ];

  return (
    <section className="relative border-y border-white/[0.05] bg-[#0E0E0E] py-16 px-4" id="stats-section">
      <div className="absolute inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center" id="stats-grid">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col items-center justify-center p-6 rounded-2xl border border-white/[0.02] bg-white/[0.01] hover:border-white/[0.05] hover:bg-white/[0.02] transition-all duration-300 group"
              id={`stat-card-${index}`}
            >
              {/* Subtle card glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#FFD700]/0 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <CountUp end={item.end} suffix={item.suffix} />
              
              <span className="mt-3 font-sans text-xs md:text-sm font-semibold tracking-wider text-gray-400 uppercase group-hover:text-gray-300 transition-colors">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
