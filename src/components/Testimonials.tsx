import { useState, useEffect } from "react";
import { useApp } from "./AppContext";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const { t } = useApp();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: t("test1Text"),
      author: t("test1Author"),
      role: "Supermarket Owner",
      location: "Addis Ababa",
      avatarLetter: "A",
    },
    {
      text: t("test2Text"),
      author: t("test2Author"),
      role: "Restaurant Manager",
      location: "Bole",
      avatarLetter: "S",
    },
    {
      text: t("test3Text"),
      author: t("test3Author"),
      role: "Wholesale Distributor",
      location: "Mercato",
      avatarLetter: "D",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-24 px-4 sm:px-6 lg:px-8" id="testimonials-section">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD700]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFD700]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            id="testimonials-header"
          >
            {t("testimonialsTitle")}
          </motion.h2>
          <div className="mt-3 h-1 w-12 bg-[#FFD700] mx-auto rounded-full" />
        </div>

        {/* Carousel Frame */}
        <div className="relative min-h-[320px] md:min-h-[280px]" id="testimonials-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.8)] group"
              id={`testimonial-slide-${activeIndex}`}
            >
              {/* Golden border accent */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#FFD700]/0 via-[#FFD700]/10 to-[#FFD700]/0 opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Quote icon */}
              <div className="absolute top-6 right-8 text-white/[0.03] group-hover:text-white/[0.05] transition-colors">
                <Quote className="h-20 w-20 transform rotate-180" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:space-x-8 gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-tr from-[#FFD700] to-[#FFA500] p-[2px] shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                    <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#0F0F0F]">
                      <span className="font-sans text-xl md:text-2xl font-black text-[#FFD700]">
                        {testimonials[activeIndex].avatarLetter}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <p className="font-sans text-lg md:text-xl font-medium leading-relaxed text-gray-200">
                    {testimonials[activeIndex].text}
                  </p>
                  
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h4 className="font-sans text-base font-bold text-[#FFD700]">
                        {testimonials[activeIndex].author.replace("— ", "")}
                      </h4>
                      <p className="font-sans text-xs text-gray-500 font-medium tracking-wider uppercase mt-0.5">
                        {testimonials[activeIndex].role} • {testimonials[activeIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-center space-x-6" id="carousel-controls">
            <button
              onClick={handlePrev}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0E0E0E] text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/5 active:scale-95 transition-all duration-200"
              id="prev-slide-btn"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Bullet Indicators */}
            <div className="flex items-center space-x-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "w-6 bg-[#FFD700]" : "w-2.5 bg-white/10 hover:bg-white/20"
                  }`}
                  id={`bullet-indicator-${i}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0E0E0E] text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/5 active:scale-95 transition-all duration-200"
              id="next-slide-btn"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
