import { useApp } from "./AppContext";
import { ShieldCheck, Cpu, ArrowRight, X, Activity, Layers, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Ethiopia Digital Strategy 2030 details, opened from the About page
export default function RoadmapModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { navigateTo, language } = useApp();
  const en = language === "en";

  const pillars = [
    {
      icon: ShieldCheck,
      title: { en: "Stopping payment fraud", am: "የክፍያ ማጭበርበርን ማስቆም" },
      desc: {
        en: "Beu Verify checks mobile money and bank receipts instantly, protecting businesses from fake payments.",
        am: "ቤዩ ቬሪፋይ የሞባይል ገንዘብ እና የባንክ ደረሰኞችን ወዲያውኑ በማረጋገጥ ንግዶችን ከሀሰተኛ ክፍያ ይጠብቃል።",
      },
    },
    {
      icon: Activity,
      title: { en: "Digital merchants", am: "ዲጂታል ነጋዴዎች" },
      desc: {
        en: "Replacing paper registers with QR ordering, smart point of sale and live inventory.",
        am: "የወረቀት መዝገቦችን በQR ትዕዛዝ፣ በስማርት POS እና በቀጥታ የክምችት ክትትል መተካት።",
      },
    },
    {
      icon: Cpu,
      title: { en: "Connected payments", am: "የተገናኙ ክፍያዎች" },
      desc: {
        en: "Secure integrations that link businesses to banks and mobile money automatically.",
        am: "ንግዶችን ከባንኮች እና ከሞባይል ገንዘብ ጋር በራስ ሰር የሚያገናኙ ደህንነታቸው የተጠበቁ ትስስሮች።",
      },
    },
    {
      icon: Layers,
      title: { en: "Digital campuses", am: "ዲጂታል ካምፓሶች" },
      desc: {
        en: "Student portals, parent SMS alerts and cashless tuition for schools and universities.",
        am: "ለትምህርት ቤቶች እና ዩኒቨርሲቲዎች የተማሪ ፖርታል፣ ለወላጆች የSMS ማሳወቂያ እና ከጥሬ ገንዘብ ነጻ የትምህርት ክፍያ።",
      },
    },
  ];

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-3xl rounded-3xl border border-emerald-500/40 bg-[#0E0E0E] p-6 sm:p-8 text-left shadow-[0_0_80px_rgba(16,185,129,0.25)] overflow-hidden"
          >
            {/* Background ambient glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center space-x-3 mb-6 pr-10">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Landmark className="h-6 w-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                  {en ? "Ethiopia Digital Strategy 2030" : "የኢትዮጵያ ዲጂታል ስትራቴጂ 2030"}
                </span>
                <h3 className="font-sans text-xl sm:text-2xl font-black text-white mt-1">
                  {en ? "Our Part in Ethiopia's Digital Future" : "በኢትዮጵያ ዲጂታል ወደፊት ያለን ድርሻ"}
                </h3>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              {en
                ? "Ethiopia's national Digital Transformation Strategy aims to bring more of the economy online by 2030. We contribute by building the everyday systems that make it real."
                : "የኢትዮጵያ ብሔራዊ የዲጂታል ትራንስፎርሜሽን ስትራቴጂ እስከ 2030 ድረስ ተጨማሪ የኢኮኖሚውን ክፍል ወደ ዲጂታል ለማምጣት ያለመ ነው። እኛም ይህን እውን የሚያደርጉ የዕለት ተዕለት ስርዓቶችን በመገንባት አስተዋጽኦ እናደርጋለን።"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title.en} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 transition-colors">
                    <div className="flex items-center space-x-2.5 mb-2 text-[#FFD700]">
                      <Icon className="h-5 w-5" />
                      <span className="font-mono text-[11px] text-gray-500">0{i + 1}</span>
                      <span className="font-sans text-sm font-bold text-white">{pillar.title[language]}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{pillar.desc[language]}</p>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-sans text-sm text-emerald-200/90 text-center sm:text-left">
                {en ? "Every system we deliver moves that goal a little closer." : "የምናስረክበው እያንዳንዱ ስርዓት ያንን ግብ ትንሽ ያቀርበዋል።"}
              </p>
              <button
                onClick={() => {
                  onClose();
                  navigateTo("/solutions");
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#FFD700] hover:bg-amber-400 text-black font-extrabold text-xs flex items-center justify-center space-x-2 transition-all shadow-md shrink-0"
              >
                <span>{en ? "See Our Solutions" : "መፍትሄዎቻችንን ይመልከቱ"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
