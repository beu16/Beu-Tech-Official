import { useApp } from "./AppContext";

const stack = ["React", "Next.js", "TypeScript", "Node.js", "Python", "Flutter", "PostgreSQL", "MongoDB", "Docker", "AWS", "REST & GraphQL APIs", "Figma"];

// Endless, slow-scrolling strip of the technology we build with
export default function TechMarquee() {
  const { language } = useApp();

  return (
    <section className="relative border-b border-white/[0.06] bg-[#0A0A0A] py-8 overflow-hidden" id="tech-marquee" aria-label={language === "en" ? "Technology we use" : "የምንጠቀምባቸው ቴክኖሎጂዎች"}>
      <p className="mb-5 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
        {language === "en" ? "Built with modern, proven technology" : "በዘመናዊ እና በተረጋገጡ ቴክኖሎጂዎች የተገነባ"}
      </p>
      <div className="[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee-track flex w-max gap-3">
          {[...stack, ...stack].map((name, i) => (
            <span
              key={i}
              aria-hidden={i >= stack.length}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-xs text-gray-400"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
