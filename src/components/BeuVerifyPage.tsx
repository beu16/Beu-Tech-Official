import { useEffect } from "react";
import { useApp } from "./AppContext";
import { Zap, ArrowUpRight, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export default function BeuVerifyPage() {
  const { t, navigateTo, language } = useApp();

  useEffect(() => {
    // Attempt automatic redirect
    const timer = setTimeout(() => {
      window.open("https://beuverify.beutech.com.et/", "_blank", "noopener,noreferrer");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-white min-h-[85vh] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden" id="beu-verify-page">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#FFD700]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex flex-col items-center">
        
        {/* Animated logo frame */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 10px rgba(255,215,0,0.1)",
              "0 0 25px rgba(255,215,0,0.4)",
              "0 0 10px rgba(255,215,0,0.1)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-[#FFD700] to-[#FFA500] p-[2px] flex items-center justify-center mb-6"
        >
          <div className="h-full w-full rounded-[14px] bg-[#0A0A0A] flex items-center justify-center text-[#FFD700]">
            <Zap className="h-7 w-7 fill-current" />
          </div>
        </motion.div>

        <h1 className="font-sans text-2xl font-extrabold text-white tracking-tight">
          {language === "en" ? "Redirecting to Beu Verify" : "ወደ ቤዩ ቬሪፋይ በመዘዋወር ላይ"}
        </h1>
        
        <p className="mt-3 font-sans text-sm text-gray-500 leading-relaxed">
          {language === "en"
            ? "Beu Verify, our payment verification platform, is opening in a new tab."
            : "የኢትዮጵያ ቀዳሚ የባንኮች እና ዲጂታል ዋሌቶች የክፍያ ማረጋገጫ መድረክ በአዲስ ታብ ላይ በመከፈት ላይ ነው።"}
        </p>

        {/* Progress bar animation */}
        <div className="w-full bg-white/5 h-1 rounded-full mt-6 overflow-hidden relative">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
          />
        </div>

        {/* Direct Link in case of pop-up blockers */}
        <div className="mt-8 w-full space-y-4">
          <a
            href="https://beuverify.beutech.com.et/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center space-x-2 rounded-xl bg-[#FFD700] py-3.5 text-sm font-bold text-black hover:scale-[1.01] active:scale-95 shadow-[0_0_15px_rgba(255,215,0,0.15)] transition-all"
            id="btn-verify-direct-link"
          >
            <span>{t("verifyCta")}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            onClick={() => navigateTo("/")}
            className="flex w-full items-center justify-center space-x-1.5 text-xs text-gray-500 hover:text-white transition-colors py-2"
            id="btn-verify-back-home"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>{language === "en" ? "Return to Beu Tech" : "ወደ ቤዩ ቴክ ተመለስ"}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
