import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { sampleSites, MockSite } from "./MockSite";

// Small illustrative, gently "live" UI previews of the systems we build

const frame = "flex min-h-[196px] flex-col justify-between rounded-xl border border-white/10 bg-[#070707] p-4";

// Re-renders on an interval unless the visitor prefers reduced motion
function useTick(ms: number) {
  const reduce = useReducedMotion();
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setTick((t) => t + 1), ms);
    return () => clearInterval(id);
  }, [ms, reduce]);
  return tick;
}

export function HospitalPreview({ en }: { en: boolean }) {
  const tick = useTick(2600);
  const statuses = [
    { label: en ? "Waiting" : "በመጠባበቅ", cls: "bg-white/[0.06] text-gray-400" },
    { label: en ? "In consult" : "በምርመራ ላይ", cls: "bg-[#FFD700]/15 text-[#FFD700]" },
    { label: en ? "Done" : "ተጠናቋል", cls: "bg-emerald-500/15 text-emerald-300" },
  ];
  const rows = [
    { id: "P-1042", dept: en ? "Cardiology" : "ልብ ህክምና" },
    { id: "P-1043", dept: en ? "Laboratory" : "ላብራቶሪ" },
    { id: "P-1044", dept: en ? "Pharmacy" : "ፋርማሲ" },
  ];
  return (
    <div className={frame}>
      <div className="flex items-center justify-between mb-3">
        <span className="font-sans text-[11px] font-semibold text-gray-300">{en ? "Today's patient queue" : "የዛሬ የታካሚዎች ተራ"}</span>
        <span className="font-mono text-[10px] text-gray-500">{en ? "Beds" : "አልጋ"} {40 + (tick % 5)} / 60</span>
      </div>
      <div className="space-y-2">
        {rows.map((r, i) => {
          const status = statuses[(i + tick) % statuses.length];
          return (
            <div key={r.id} className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2">
              <div className="flex items-center space-x-2.5 min-w-0">
                <span className="h-6 w-6 shrink-0 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20" />
                <span className="font-mono text-[11px] text-gray-200">{r.id}</span>
                <span className="font-sans text-[11px] text-gray-500 truncate">{r.dept}</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.span
                  key={status.label}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${status.cls}`}
                >
                  {status.label}
                </motion.span>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function HotelPreview({ en }: { en: boolean }) {
  const tick = useTick(1400);
  // o = occupied, f = free, c = cleaning; one room changes state per tick
  const [rooms, setRooms] = useState("oofocoofoocfoofo".split(""));
  const [flash, setFlash] = useState(-1);
  useEffect(() => {
    if (tick === 0) return;
    const i = (tick * 7) % 16;
    setRooms((prev) => prev.map((r, idx) => (idx !== i ? r : r === "o" ? "c" : r === "c" ? "f" : "o")));
    setFlash(i);
  }, [tick]);
  const occupancy = Math.round((rooms.filter((r) => r === "o").length / rooms.length) * 100);

  return (
    <div className={frame}>
      <div className="flex items-center justify-between mb-3">
        <span className="font-sans text-[11px] font-semibold text-gray-300">{en ? "Floor 2 rooms" : "ፎቅ 2 ክፍሎች"}</span>
        <span className="font-mono text-[10px] text-gray-500">{en ? "Occupancy" : "ይዞታ"} {occupancy}%</span>
      </div>
      <div className="grid grid-cols-8 gap-1.5">
        {rooms.map((r, i) => (
          <motion.div
            key={i}
            animate={i === flash ? { scale: [1, 1.15, 1] } : { scale: 1 }}
            transition={{ duration: 0.4 }}
            className={`h-7 rounded-md flex items-center justify-center font-mono text-[9px] transition-colors duration-500 ${
              r === "o"
                ? "bg-[#FFD700]/80 text-black font-bold"
                : r === "c"
                  ? "bg-white/[0.08] text-gray-400"
                  : "border border-white/15 text-gray-500"
            }`}
          >
            {201 + i}
          </motion.div>
        ))}
      </div>
      <div className="mt-3 flex items-center space-x-4 text-[10px] text-gray-500">
        <span className="flex items-center space-x-1.5"><span className="h-2 w-2 rounded-sm bg-[#FFD700]/80" /><span>{en ? "Occupied" : "የተያዘ"}</span></span>
        <span className="flex items-center space-x-1.5"><span className="h-2 w-2 rounded-sm border border-white/30" /><span>{en ? "Free" : "ክፍት"}</span></span>
        <span className="flex items-center space-x-1.5"><span className="h-2 w-2 rounded-sm bg-white/20" /><span>{en ? "Cleaning" : "በፅዳት ላይ"}</span></span>
      </div>
    </div>
  );
}

// Generic dashboard for systems without a dedicated preview
export function DashboardPreview({ en, title }: { en: boolean; title: string }) {
  const tick = useTick(1800);
  const base = [42, 64, 50, 78, 58, 86, 70];
  const bars = base.map((h, i) => Math.max(18, Math.min(100, h + (((tick + i) * 13) % 22) - 11)));
  return (
    <div className={frame}>
      <div className="flex items-center justify-between mb-3">
        <span className="font-sans text-[11px] font-semibold text-gray-300 truncate">{title}</span>
        <span className="font-mono text-[10px] text-emerald-400">{en ? "● Live" : "● ቀጥታ"}</span>
      </div>
      <div className="flex h-24 items-end gap-2">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: `${h}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className={`flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-[#FFD700]" : "bg-[#FFD700]/30"}`}
          />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {(en ? ["Today", "This week", "This month"] : ["ዛሬ", "በዚህ ሳምንት", "በዚህ ወር"]).map((label, i) => (
          <div key={label} className="rounded-md bg-white/[0.03] px-2 py-1.5">
            <div className="font-sans text-[9px] text-gray-500">{label}</div>
            <div className="font-mono text-[11px] font-bold text-gray-200">{[128, 842, 3614][i] + (tick % 7) * (i + 1)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// A small browser cycling through sample client websites
export function WebsitePreview({ en }: { en: boolean }) {
  const tick = useTick(3200);
  const site = sampleSites[tick % sampleSites.length];
  return (
    <div className="flex min-h-[196px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#070707]">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-1.5">
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        </div>
        <span className="mx-auto rounded bg-white/[0.05] px-2 font-mono text-[9px] text-gray-500">{site.url}</span>
      </div>
      <div className="relative flex-1 min-h-[168px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={site.id}
            className="absolute inset-0"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
          >
            <MockSite site={site} en={en} layout="desktop" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function SolutionPreview({ id, en, title }: { id: string; en: boolean; title: string }) {
  if (id === "hospital") return <HospitalPreview en={en} />;
  if (id === "website") return <WebsitePreview en={en} />;
  if (id === "hotel") return <HotelPreview en={en} />;
  return <DashboardPreview en={en} title={title} />;
}
