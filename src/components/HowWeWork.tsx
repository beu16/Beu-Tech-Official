import { useApp } from "./AppContext";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProcessSteps from "./ProcessSteps";

export default function HowWeWork() {
  const { navigateTo, language } = useApp();

  return (
    <section className="relative border-t border-white/[0.05] bg-[#0A0A0A] py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="how-we-work-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={language === "en" ? "How We Work" : "እንዴት እንሰራለን"}
          title={language === "en" ? "From Your Request to a Running System" : "ከጥያቄዎ እስከ ስራ ላይ የዋለ ስርዓት"}
          subtitle={
            language === "en"
              ? "A simple, transparent process. You see working progress every week."
              : "ቀላል እና ግልጽ አሰራር። እድገቱን በየሳምንቱ ያያሉ።"
          }
        />

        <ProcessSteps />

        <div className="mt-14 flex justify-center">
          <button
            onClick={() => navigateTo("/solutions")}
            className="inline-flex items-center justify-center space-x-2 rounded-lg bg-[#FFD700] px-7 py-3.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,215,0,0.25)] transition-all duration-300 hover:bg-[#FFE033] hover:shadow-[0_0_28px_rgba(255,215,0,0.4)] active:scale-[0.98]"
            id="how-we-work-cta"
          >
            <span>{language === "en" ? "Request Your System" : "ስርዓትዎን ይጠይቁ"}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
