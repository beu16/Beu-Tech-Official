import { ReactNode } from "react";
import { motion } from "motion/react";

// Sample client websites drawn with plain elements (no images), used to show
// the kind of sites we build. Each has its own palette, like a real client brand.
// Sizes follow the mock's own width (container queries), not the screen.

export interface SampleSite {
  id: string;
  tab: { en: string; am: string };
  name: string;
  url: string;
  headline: { en: string; am: string };
  cta: { en: string; am: string };
  bg: string;
  text: string;
  muted: string;
  accent: string;
  card: string;
}

export const sampleSites: SampleSite[] = [
  {
    id: "clinic",
    tab: { en: "Clinic", am: "ክሊኒክ" },
    name: "Tena Clinic",
    url: "tenaclinic.com",
    headline: { en: "Care that's close to home", am: "ለቤትዎ ቅርብ የሆነ እንክብካቤ" },
    cta: { en: "Book a visit", am: "ቀጠሮ ይያዙ" },
    bg: "#ffffff",
    text: "#0f172a",
    muted: "#cbd5e1",
    accent: "#0d9488",
    card: "#f1f5f9",
  },
  {
    id: "hotel",
    tab: { en: "Hotel", am: "ሆቴል" },
    name: "Aurora Hotel",
    url: "aurorahotel.com",
    headline: { en: "Stay somewhere unforgettable", am: "የማይረሳ ቆይታ ያድርጉ" },
    cta: { en: "Check rates", am: "ዋጋ ይመልከቱ" },
    bg: "#16120d",
    text: "#fdf6e3",
    muted: "#4a4034",
    accent: "#f5b82e",
    card: "#231c14",
  },
  {
    id: "store",
    tab: { en: "Online store", am: "የመስመር ላይ መደብር" },
    name: "Buna Store",
    url: "bunastore.com",
    headline: { en: "Fresh coffee, delivered", am: "ትኩስ ቡና፣ እቤትዎ ድረስ" },
    cta: { en: "Shop now", am: "አሁን ይግዙ" },
    bg: "#faf6f0",
    text: "#1c1917",
    muted: "#d6cfc4",
    accent: "#be123c",
    card: "#efe8dd",
  },
];

// Hero art block: soft shapes in the brand accent
function Art({ site, className }: { site: SampleSite; className: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`} style={{ background: site.card }}>
      <motion.div
        className="absolute rounded-full"
        style={{ background: site.accent, opacity: 0.85, width: "46%", aspectRatio: "1", left: "12%", top: "18%" }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute rounded-full" style={{ background: site.accent, opacity: 0.25, width: "58%", aspectRatio: "1", right: "-12%", bottom: "-20%" }} />
      <div className="absolute rounded-md" style={{ background: site.bg, opacity: 0.9, width: "34%", height: "22%", right: "10%", top: "14%" }} />
    </div>
  );
}

export function MockSite({ site, en, layout }: { site: SampleSite; en: boolean; layout: "desktop" | "phone" }) {
  const bar = (w: string, h = "h-1.5") => <div className={`${h} rounded-full`} style={{ width: w, background: site.muted }} />;

  if (layout === "phone") {
    return (
      <div className="flex h-full flex-col gap-2.5 p-2.5" style={{ background: site.bg }}>
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-extrabold" style={{ color: site.text }}>{site.name}</span>
          <div className="flex flex-col gap-[2px]">
            {[0, 1, 2].map((i) => <span key={i} className="block h-[1.5px] w-2.5 rounded" style={{ background: site.text }} />)}
          </div>
        </div>
        <Art site={site} className="h-[38%] w-full" />
        <div className="text-[10px] font-extrabold leading-tight" style={{ color: site.text }}>{site.headline[en ? "en" : "am"]}</div>
        <div className="space-y-1">{bar("90%", "h-1")}{bar("70%", "h-1")}</div>
        <div className="rounded-md py-1 text-center text-[7px] font-bold" style={{ background: site.accent, color: site.bg }}>
          {site.cta[en ? "en" : "am"]}
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[0, 1].map((i) => (
            <div key={i} className="h-8 rounded-md" style={{ background: site.card }} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="@container flex h-full flex-col" style={{ background: site.bg }}>
      <div className="flex items-center justify-between px-[4%] py-[2.5%]">
        <span className="text-[9px] @lg:text-xs font-extrabold" style={{ color: site.text }}>{site.name}</span>
        <div className="hidden @lg:flex items-center gap-3">{bar("28px")}{bar("24px")}{bar("30px")}</div>
        <span className="rounded-full px-2 py-0.5 text-[7px] @lg:text-[9px] font-bold" style={{ background: site.accent, color: site.bg }}>
          {site.cta[en ? "en" : "am"]}
        </span>
      </div>
      <div className="grid flex-1 grid-cols-2 items-center gap-[5%] px-[4%]">
        <div>
          <div className="text-[13px] @lg:text-2xl @2xl:text-[1.7rem] font-extrabold leading-[1.1] tracking-tight" style={{ color: site.text }}>
            {site.headline[en ? "en" : "am"]}
          </div>
          <div className="mt-2 @lg:mt-3 space-y-1 @lg:space-y-1.5">{bar("92%")}{bar("74%")}</div>
          <div className="mt-2.5 @lg:mt-4 flex gap-1.5">
            <span className="rounded-md px-2 py-1 @lg:px-3 @lg:py-1.5 text-[7px] @lg:text-[10px] font-bold" style={{ background: site.accent, color: site.bg }}>
              {site.cta[en ? "en" : "am"]}
            </span>
            <span className="rounded-md border px-2 py-1 @lg:px-3 @lg:py-1.5 text-[7px] @lg:text-[10px] font-bold" style={{ borderColor: site.muted, color: site.text }}>
              {en ? "Learn more" : "ተጨማሪ"}
            </span>
          </div>
        </div>
        <Art site={site} className="aspect-[4/3] w-full" />
      </div>
      <div className="grid grid-cols-3 gap-[3%] px-[4%] pb-[4%] pt-[3%]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-md p-[8%]" style={{ background: site.card }}>
            <div className="mb-1.5 h-2.5 w-2.5 @lg:h-4 @lg:w-4 rounded" style={{ background: site.accent, opacity: 0.8 }} />
            <div className="space-y-1">{bar("80%", "h-1")}{bar("55%", "h-1")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Browser window chrome with an address bar
export function BrowserFrame({ url, children, className = "" }: { url: string; children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-[#141414] shadow-[0_30px_80px_rgba(0,0,0,0.6)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </div>
        <div className="mx-auto flex max-w-[60%] flex-1 items-center justify-center rounded-md bg-white/[0.05] px-2 py-0.5 font-mono text-[9px] text-gray-500 truncate">
          {url}
        </div>
        <div className="w-8" />
      </div>
      {children}
    </div>
  );
}

// Phone body with a notch
export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[1.4rem] border border-white/15 bg-[#0c0c0c] p-1.5 shadow-[0_30px_60px_rgba(0,0,0,0.7)] ${className}`}>
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.05rem]">
        <div className="absolute left-1/2 top-1 z-10 h-1.5 w-8 -translate-x-1/2 rounded-full bg-black/80" />
        {children}
      </div>
    </div>
  );
}

// Wireframe palette: the "before brand" look used while a site is being planned
const WIRE = { bg: "#f4f4f5", text: "#a1a1aa", muted: "#d4d4d8", accent: "#a1a1aa", card: "#e4e4e7" };

// One mock that truly reflows with its frame (container queries), and can be
// shown as a grey wireframe or in full brand colors, fading between the two.
export function ResponsiveSite({ site, en, wire }: { site: SampleSite; en: boolean; wire: boolean }) {
  const c = wire ? WIRE : site;
  const fade = "transition-all duration-700";
  // In wireframe mode real text becomes grey "greeked" blocks
  const greek = (color: string) =>
    wire ? { color: "transparent", background: WIRE.muted, borderRadius: 4 } : { color, background: "transparent" };

  return (
    <div className={`@container h-full w-full overflow-hidden ${fade}`} style={{ background: c.bg }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-[5%] py-3">
        <span className={`text-[11px] @md:text-sm font-extrabold ${fade}`} style={greek(site.text)}>{site.name}</span>
        <div className="hidden @md:flex items-center gap-4">
          {[30, 24, 34].map((w) => (
            <span key={w} className={`h-1.5 rounded-full ${fade}`} style={{ width: w, background: c.muted }} />
          ))}
        </div>
        <span
          className={`hidden @md:inline rounded-full px-3 py-1 text-[10px] font-bold ${fade}`}
          style={{ background: c.accent, color: wire ? "transparent" : site.bg }}
        >
          {site.cta[en ? "en" : "am"]}
        </span>
        <span className="flex flex-col gap-[3px] @md:hidden">
          {[0, 1, 2].map((i) => <span key={i} className={`block h-[2px] w-3.5 rounded ${fade}`} style={{ background: c.text }} />)}
        </span>
      </div>

      {/* Hero: image on top on phones, side by side on wide screens */}
      <div className="grid grid-cols-1 @md:grid-cols-2 items-center gap-4 @md:gap-8 px-[5%] pt-1 @md:pt-4">
        <div
          className={`relative order-first @md:order-last aspect-[16/9] @md:aspect-[4/3] overflow-hidden rounded-xl ${fade}`}
          style={{ background: c.card, outline: wire ? `1.5px dashed ${WIRE.text}` : "none", outlineOffset: -1 }}
        >
          {wire ? (
            // Classic wireframe image placeholder
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line x1="0" y1="0" x2="100" y2="100" stroke={WIRE.text} strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
              <line x1="100" y1="0" x2="0" y2="100" stroke={WIRE.text} strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
            </svg>
          ) : (
            <>
              <motion.div
                className="absolute rounded-full"
                style={{ background: site.accent, opacity: 0.85, width: "42%", aspectRatio: "1", left: "12%", top: "16%" }}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.85, y: [0, -6, 0] }}
                transition={{ scale: { duration: 0.6 }, opacity: { duration: 0.6 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
              />
              <div className="absolute rounded-full" style={{ background: site.accent, opacity: 0.22, width: "56%", aspectRatio: "1", right: "-12%", bottom: "-24%" }} />
              <div className="absolute rounded-lg" style={{ background: site.bg, opacity: 0.9, width: "32%", height: "20%", right: "10%", top: "14%" }} />
            </>
          )}
        </div>
        <div>
          <div
            className={`inline text-[17px] @md:text-2xl @2xl:text-[2rem] font-extrabold leading-[1.15] tracking-tight [box-decoration-break:clone] ${fade}`}
            style={greek(site.text)}
          >
            {site.headline[en ? "en" : "am"]}
          </div>
          <div className="mt-3 space-y-1.5">
            <div className={`h-1.5 w-[92%] rounded-full ${fade}`} style={{ background: c.muted }} />
            <div className={`h-1.5 w-[70%] rounded-full ${fade}`} style={{ background: c.muted }} />
          </div>
          <div className="mt-4 flex gap-2">
            <span
              className={`rounded-lg px-3 py-1.5 text-[10px] @md:text-xs font-bold ${fade}`}
              style={{ background: c.accent, color: wire ? "transparent" : site.bg }}
            >
              {site.cta[en ? "en" : "am"]}
            </span>
            <span
              className={`rounded-lg border px-3 py-1.5 text-[10px] @md:text-xs font-bold ${fade}`}
              style={{ borderColor: c.muted, color: wire ? "transparent" : site.text }}
            >
              {en ? "Learn more" : "ተጨማሪ"}
            </span>
          </div>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-2 @md:grid-cols-3 gap-2.5 px-[5%] pt-5 pb-5">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`rounded-lg p-3 ${i === 2 ? "hidden @md:block" : ""} ${fade}`} style={{ background: c.card }}>
            <div className={`mb-2 h-4 w-4 rounded ${fade}`} style={{ background: c.accent, opacity: 0.8 }} />
            <div className={`h-1.5 w-[80%] rounded-full ${fade}`} style={{ background: c.muted }} />
            <div className={`mt-1.5 h-1.5 w-[55%] rounded-full ${fade}`} style={{ background: c.muted }} />
          </div>
        ))}
      </div>
    </div>
  );
}
