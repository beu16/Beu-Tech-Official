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
    <span ref={ref} className="font-sans text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-white via-amber-100 to-[#FFD700] bg-clip-text text-transparent">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useApp();

  const statItems = [
    { end: 7, suffix: "+", label: t("stat1Label") },
    { end: 500, suffix: "+", label: t("stat2Label") },
    { end: 50000, suffix: "+", label: t("stat3Label") },
    { end: 24, suffix: "/7", label: t("stat4Label") },
  ];

  return (
    <section className="relative border-y border-white/[0.06] bg-[#0E0E0E] px-4" id="stats-section">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center divide-white/[0.06] lg:divide-x" id="stats-grid">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-center justify-start py-8 sm:py-10 px-3"
              id={`stat-card-${index}`}
            >
              <CountUp end={item.end} suffix={item.suffix} />
              <span className="mt-2 font-sans text-[11px] md:text-xs font-semibold tracking-wider text-gray-500 uppercase">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
