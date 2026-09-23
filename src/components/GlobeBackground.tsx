import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

// A dotted planet rising from the bottom of the hero. It turns slowly while
// data arcs launch from Addis Ababa to cities around the world, each carrying
// a travelling pulse. Pure canvas 2D with a hand-rolled 3D projection.

type Vec3 = [number, number, number];

// [latitude, longitude]; the first entry is home
const HUBS: [number, number][] = [
  [9.03, 38.74], // Addis Ababa
  [51.5, -0.13], // London
  [50.11, 8.68], // Frankfurt
  [52.37, 4.9], // Amsterdam
  [59.33, 18.07], // Stockholm
  [48.86, 2.35], // Paris
  [25.2, 55.27], // Dubai
  [-1.29, 36.82], // Nairobi
  [6.52, 3.38], // Lagos
  [30.04, 31.24], // Cairo
  [19.07, 72.88], // Mumbai
  [40.71, -74.0], // New York
  [-26.2, 28.05], // Johannesburg
];

const toVec = (lat: number, lon: number): Vec3 => {
  const φ = (lat * Math.PI) / 180;
  const λ = (lon * Math.PI) / 180;
  return [Math.cos(φ) * Math.sin(λ), Math.sin(φ), Math.cos(φ) * Math.cos(λ)];
};

// Spherical interpolation between two unit vectors
const slerp = (a: Vec3, b: Vec3, t: number): Vec3 => {
  const dot = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const ω = Math.acos(dot);
  if (ω < 1e-4) return a;
  const s = Math.sin(ω);
  const k1 = Math.sin((1 - t) * ω) / s;
  const k2 = Math.sin(t * ω) / s;
  return [a[0] * k1 + b[0] * k2, a[1] * k1 + b[1] * k2, a[2] * k1 + b[2] * k2];
};

interface Arc {
  from: Vec3;
  to: Vec3;
  born: number;
  lift: number;
}

const ARC_GROW = 1400;
const ARC_HOLD = 1200;
const ARC_FADE = 900;
const ARC_LIFE = ARC_GROW + ARC_HOLD + ARC_FADE;

export default function GlobeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const isPhone = window.matchMedia("(max-width: 767px)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const frameInterval = isPhone ? 1000 / 30 : 0;

    // Evenly spread surface points (Fibonacci sphere)
    const count = isPhone ? 2600 : 5200;
    const golden = Math.PI * (3 - Math.sqrt(5));
    const points: Vec3[] = [];
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const θ = golden * i;
      points.push([Math.cos(θ) * r, y, Math.sin(θ) * r]);
    }
    const hubs = HUBS.map(([lat, lon]) => toVec(lat, lon));

    let width = 0;
    let height = 0;
    let R = 0;
    let cx = 0;
    let cy = 0;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Big planet whose top edge sits in the lower part of the hero
      R = isPhone ? Math.max(width * 1.05, height * 0.55) : Math.max(width * 0.55, height * 0.95);
      cx = width / 2;
      cy = height * (isPhone ? 0.74 : 0.66) + R;
    };

    // View: spin around the vertical axis, pitched so Africa and Europe face us
    const spin = 0.62;
    const pitch = -0.75;
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

    const project = (v: Vec3, s: number, p: number) => {
      const cosS = Math.cos(s), sinS = Math.sin(s);
      const x1 = v[0] * cosS - v[2] * sinS;
      const z1 = v[0] * sinS + v[2] * cosS;
      const cosP = Math.cos(p), sinP = Math.sin(p);
      const y2 = v[1] * cosP - z1 * sinP;
      const z2 = v[1] * sinP + z1 * cosP;
      return { x: cx + x1 * R, y: cy - y2 * R, z: z2 };
    };

    const arcs: Arc[] = [];
    let lastSpawn = 0;
    const spawnArc = (now: number) => {
      // Mostly outward from home, sometimes between two other cities
      const fromHome = Math.random() < 0.75;
      const a = fromHome ? 0 : 1 + Math.floor(Math.random() * (hubs.length - 1));
      let b = 1 + Math.floor(Math.random() * (hubs.length - 1));
      if (b === a) b = ((b % (hubs.length - 1)) + 1) as number;
      const from = hubs[a];
      const to = hubs[b];
      const dist = Math.acos(Math.min(1, from[0] * to[0] + from[1] * to[1] + from[2] * to[2]));
      arcs.push({ from, to, born: now, lift: 0.03 + dist * 0.08 });
    };

    const start = performance.now();

    const draw = (now: number) => {
      const t = now - start;
      pointer.x += (pointer.tx - pointer.x) * 0.03;
      pointer.y += (pointer.ty - pointer.y) * 0.03;
      const s = spin + (reduce ? 0 : t * 0.000045) + (pointer.x - 0.5) * 0.35;
      const p = pitch + (pointer.y - 0.5) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // Atmosphere: a soft golden halo hugging the planet's edge
      const halo = ctx.createRadialGradient(cx, cy, R * 0.96, cx, cy, R * 1.22);
      halo.addColorStop(0, "rgba(255, 200, 0, 0.10)");
      halo.addColorStop(0.18, "rgba(255, 200, 0, 0.05)");
      halo.addColorStop(1, "rgba(255, 200, 0, 0)");
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.22, 0, Math.PI * 2);
      ctx.fill();

      // Dark planet body so the back of the sphere doesn't show through
      const body = ctx.createRadialGradient(cx, cy - R * 0.6, R * 0.1, cx, cy, R);
      body.addColorStop(0, "rgba(22, 18, 8, 1)");
      body.addColorStop(1, "rgba(10, 10, 10, 1)");
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      // A scanning beam sweeping left and right across the visible surface
      const scan = reduce ? 0.2 : 0.85 * Math.sin(t * 0.00032);

      // Surface dots: brighter toward the viewer and inside the scan band
      for (const v of points) {
        const q = project(v, s, p);
        if (q.z <= 0 || q.y > height + 4 || q.y < -4) continue;
        // Only the planet's upper edge is on screen, so light by sqrt(depth) to keep it readable
        const band = Math.max(0, 1 - Math.abs((q.x - cx) / R - scan) * 7);
        const depth = Math.sqrt(q.z);
        const alpha = 0.12 + depth * 0.3 + band * 0.45;
        const size = 1.1 + depth * 0.7 + band * 0.4;
        ctx.fillStyle = `rgba(255, 215, 0, ${alpha.toFixed(3)})`;
        ctx.fillRect(q.x - size / 2, q.y - size / 2, size, size);
      }

      // Faint latitude/longitude wireframe for structure
      ctx.lineWidth = 0.6;
      const line = (pts: Vec3[]) => {
        let prev: { x: number; y: number; z: number } | null = null;
        for (const v of pts) {
          const q = project(v, s, p);
          if (prev && q.z > 0 && prev.z > 0) {
            ctx.strokeStyle = `rgba(255, 215, 0, ${(0.04 + 0.08 * Math.sqrt(q.z)).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
          prev = q;
        }
      };
      for (let lat = -60; lat <= 75; lat += 15) {
        line(Array.from({ length: 73 }, (_, i) => toVec(lat, -180 + i * 5)));
      }
      for (let lon = -180; lon < 180; lon += 20) {
        line(Array.from({ length: 31 }, (_, i) => toVec(-75 + i * 5, lon)));
      }

      // Rim light along the horizon
      ctx.strokeStyle = "rgba(255, 215, 0, 0.35)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, R, Math.PI * 1.05, Math.PI * 1.95);
      ctx.stroke();

      // Data arcs
      if (!reduce && now - lastSpawn > 650 && arcs.length < (isPhone ? 4 : 7)) {
        spawnArc(now);
        lastSpawn = now;
      }
      for (let i = arcs.length - 1; i >= 0; i--) {
        const arc = arcs[i];
        const age = now - arc.born;
        if (age > ARC_LIFE) {
          arcs.splice(i, 1);
          continue;
        }
        const head = Math.min(1, age / ARC_GROW);
        const tail = age > ARC_GROW + ARC_HOLD ? Math.min(1, (age - ARC_GROW - ARC_HOLD) / ARC_FADE) : 0;
        const steps = 40;
        let prev: { x: number; y: number; z: number } | null = null;
        for (let k = 0; k <= steps; k++) {
          const u = k / steps;
          if (u < tail || u > head) {
            prev = null;
            continue;
          }
          const base = slerp(arc.from, arc.to, u);
          const h = 1 + arc.lift * Math.sin(Math.PI * u);
          const q = project([base[0] * h, base[1] * h, base[2] * h], s, p);
          if (prev && q.z > -0.15 && prev.z > -0.15) {
            ctx.strokeStyle = `rgba(255, 215, 0, ${(0.18 + 0.4 * Math.max(0, q.z)).toFixed(3)})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
          prev = q;
        }
        // Pulse riding at the head of the arc while it grows
        if (head < 1 || age < ARC_GROW + ARC_HOLD) {
          const u = head < 1 ? head : ((age - ARC_GROW) / ARC_HOLD) % 1;
          const base = slerp(arc.from, arc.to, u);
          const h = 1 + arc.lift * Math.sin(Math.PI * u);
          const q = project([base[0] * h, base[1] * h, base[2] * h], s, p);
          if (q.z > -0.15) {
            const glow = ctx.createRadialGradient(q.x, q.y, 0, q.x, q.y, 9);
            glow.addColorStop(0, "rgba(255, 236, 140, 0.95)");
            glow.addColorStop(1, "rgba(255, 215, 0, 0)");
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(q.x, q.y, 9, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // City hubs: small pulsing rings, home is brighter
      hubs.forEach((v, i) => {
        const q = project(v, s, p);
        if (q.z <= 0.05) return;
        const pulse = reduce ? 0.5 : (t / (i === 0 ? 1400 : 2200) + i * 0.37) % 1;
        ctx.strokeStyle = `rgba(255, 215, 0, ${((1 - pulse) * (i === 0 ? 0.9 : 0.5) * q.z).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(q.x, q.y, 2 + pulse * (i === 0 ? 14 : 8), 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = i === 0 ? "rgba(255, 236, 140, 1)" : `rgba(255, 215, 0, ${(0.5 + 0.5 * q.z).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(q.x, q.y, i === 0 ? 2.6 : 1.8, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    let frame = 0;
    let last = 0;
    let running = false;
    const loop = (now: number) => {
      if (!running) return;
      if (now - last >= frameInterval) {
        last = now;
        draw(now);
      }
      frame = requestAnimationFrame(loop);
    };
    const play = () => {
      if (running || reduce) return;
      running = true;
      frame = requestAnimationFrame(loop);
    };
    const pause = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const onPointer = (e: PointerEvent) => {
      pointer.tx = e.clientX / window.innerWidth;
      pointer.ty = e.clientY / window.innerHeight;
    };

    resize();
    draw(performance.now());

    const ro = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? play() : pause()));
    io.observe(canvas);
    const onVisibility = () => (document.hidden ? pause() : play());
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      pause();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [reduce]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />;
}
