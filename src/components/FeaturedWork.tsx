import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUpRight, CheckCircle2, XCircle, ScanLine } from "lucide-react";
import { useApp } from "./AppContext";
import SectionHeading from "./SectionHeading";

// Animated stand-in for the Beu Verify screen: receipts arrive and get checked one by one
function VerifyPreview({ en }: { en: boolean }) {
  const reduce = useReducedMotion();
  const receipts = [
    { ref: "TXN 9A842", source: "Telebirr", amount: "1,250.00", ok: true },
    { ref: "FT 23117", source: "CBE Birr", amount: "4,800.00", ok: true },
    { ref: "TXN 77K10", source: en ? "Edited screenshot" : "የተቀየረ ስክሪንሾት", amount: "9,999.00", ok: false },
    { ref: "BOA 55208", source: "Abyssinia", amount: "620.00", ok: true },
  ];
  const [head, setHead] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setHead((h) => (h + 1) % receipts.length), 2200);
    return () => clearInterval(id);
  }, [reduce, receipts.length]);
  const visible = [0, 1, 2].map((i) => receipts[(head + i) % receipts.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070707] p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-sans text-xs font-semibold text-gray-300">
          <ScanLine className="h-4 w-4 text-[#FFD700]" />
          {en ? "Incoming payments" : "የሚገቡ ክፍያዎች"}
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          LIVE
        </span>
      </div>
      <div className="mt-4 space-y-2.5">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((r, i) => (
            <motion.div
              key={r.ref}
              layout
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: i === 0 ? 1 : 0.55, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4 }}
              className={`relative overflow-hidden flex items-center justify-between rounded-xl border px-3.5 py-3 ${
                i === 0 ? "border-[#FFD700]/30 bg-[#FFD700]/[0.05]" : "border-white/[0.06] bg-white/[0.02]"
              }`}
            >
              {i === 0 && !reduce && (
                <motion.span
                  className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent"
                  initial={{ left: "-20%" }}
                  animate={{ left: "110%" }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                />
              )}
              <div className="min-w-0">
                <div className="font-mono text-xs font-bold text-white">{r.ref}</div>
                <div className="font-sans text-[11px] text-gray-500 truncate">{r.source}</div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-mono text-xs text-gray-300">{r.amount} ETB</span>
                {r.ok ? (
                  <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                    <CheckCircle2 className="h-3 w-3" /> {en ? "Verified" : "ተረጋግጧል"}
                  </span>
                ) : (
                  <span className="flex items-center gap-1 rounded-full bg-rose-500/15 px-2 py-0.5 text-[10px] font-bold text-rose-300">
                    <XCircle className="h-3 w-3" /> {en ? "Rejected" : "ውድቅ"}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  const { language } = useApp();
  const en = language === "en";

  const story = [
    {
      label: en ? "The problem" : "ችግሩ",
      text: en
        ? "Businesses were losing money to fake and edited payment screenshots, with no fast way to check them."
        : "ንግዶች በሀሰተኛ እና በተቀየሩ የክፍያ ስክሪንሾቶች ገንዘብ ያጡ ነበር። በፍጥነት የሚያረጋግጡበት መንገድ አልነበረም።",
    },
    {
      label: en ? "What we built" : "የገነባነው",
      text: en
        ? "A verification platform that checks receipts against multiple banks and mobile wallets, flags edits and duplicates, and keeps a searchable history."
        : "ደረሰኞችን ከበርካታ ባንኮች እና የሞባይል ዋሌቶች ጋር የሚያረጋግጥ፣ ለውጦችን እና ድግግሞሾችን የሚለይ እና የሚፈለግ ታሪክ የሚይዝ መድረክ።",
    },
    {
      label: en ? "Where it is now" : "አሁን ያለበት",
      text: en
        ? "Live, and in daily use by businesses. Built, run and improved entirely by our team."
        : "ስራ ላይ ያለ እና በንግዶች በየቀኑ የሚጠቀሙበት። ሙሉ በሙሉ በቡድናችን የተገነባ፣ የሚተዳደር እና የሚሻሻል።",
    },
  ];

  const metrics = [
    { value: "50,000+", label: en ? "Transactions verified" : "የተረጋገጡ ግብይቶች" },
    { value: "< 2s", label: en ? "Per check" : "በአንድ ማረጋገጫ" },
    { value: "6", label: en ? "Banks & wallets" : "ባንኮች እና ዋሌቶች" },
  ];

  return (
    <section className="relative border-t border-white/[0.05] bg-[#0A0A0A] py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="featured-work-section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={en ? "Featured Work" : "ተለይቶ የቀረበ ስራ"}
          title={en ? "From a Real Problem to a Live Product" : "ከእውነተኛ ችግር ወደ ስራ ላይ ያለ ምርት"}
          subtitle={
            en
              ? "The best proof of how we build for clients is what we've shipped for ourselves."
              : "ለደንበኞች እንዴት እንደምንገነባ ምርጡ ማረጋገጫ ለራሳችን ያስረከብነው ነው።"
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3">
              <span className="font-sans text-2xl font-extrabold text-white">Beu Verify</span>
              <span className="rounded-full border border-white/10 px-2.5 py-0.5 font-sans text-[11px] text-gray-400">
                {en ? "Fintech · Web platform" : "ፊንቴክ · የዌብ መድረክ"}
              </span>
            </div>

            <ol className="mt-6 space-y-5">
              {story.map((s, i) => (
                <li key={s.label} className="relative pl-8">
                  <span className="absolute left-0 top-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-[#FFD700]/40 font-mono text-[10px] font-bold text-[#FFD700]">
                    {i + 1}
                  </span>
                  {i < story.length - 1 && <span className="absolute left-[9.5px] top-7 bottom-[-14px] w-px bg-white/10" />}
                  <div className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">{s.label}</div>
                  <p className="mt-1 font-sans text-sm sm:text-base leading-relaxed text-gray-300">{s.text}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid grid-cols-3 divide-x divide-white/[0.08] rounded-2xl border border-white/10 bg-white/[0.02]">
              {metrics.map((m) => (
                <div key={m.label} className="px-3 py-4 text-center">
                  <div className="font-sans text-xl sm:text-2xl font-extrabold text-white">{m.value}</div>
                  <div className="mt-1 font-sans text-[11px] leading-tight text-gray-500">{m.label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://beuverify.beutech.com.et/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 py-2 font-sans text-sm font-semibold text-white hover:text-[#FFD700] transition-colors"
            >
              <span>{en ? "See Beu Verify live" : "ቤዩ ቬሪፋይን በቀጥታ ይመልከቱ"}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <VerifyPreview en={en} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
