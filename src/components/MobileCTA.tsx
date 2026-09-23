import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Send } from "lucide-react";
import { useApp } from "./AppContext";

// Ids of on-page forms/footers; the bar steps aside while any of them is on screen
const AVOID = ["contact-section", "solution-request-form", "footer-section"];

// Phone-only sticky action bar that appears once the visitor scrolls past the first screen
export default function MobileCTA() {
  const { language, navigateTo, currentRoute } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const visible = new Set<string>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
      setBlocked(visible.size > 0);
    });
    // Page content swaps on navigation, so look the targets up again shortly after
    const t = setTimeout(() => {
      AVOID.forEach((id) => {
        const el = document.getElementById(id);
        if (el) io.observe(el);
      });
    }, 600);
    return () => {
      clearTimeout(t);
      io.disconnect();
      setBlocked(false);
    };
  }, [currentRoute]);

  const show = scrolled && !blocked && currentRoute !== "/contact";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-white/10 bg-black/85 backdrop-blur-xl px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
          id="mobile-cta-bar"
        >
          <div className="flex items-center gap-3">
            <a
              href="https://t.me/Beutechsupport"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 text-gray-200 active:bg-white/10"
            >
              <Send className="h-5 w-5" />
            </a>
            <button
              onClick={() => navigateTo("/contact")}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#FFD700] text-sm font-bold text-black shadow-[0_0_20px_rgba(255,215,0,0.25)] active:scale-[0.98]"
            >
              <span>{language === "en" ? "Start a Project" : "ፕሮጀክት ይጀምሩ"}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
