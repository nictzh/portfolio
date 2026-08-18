"use client";

import { useRef } from "react";

type HeroProps = {
  headline: string;
  sub: string;
};

export default function Hero({ headline, sub }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const ptsRef = useRef<{ x: number; y: number; t: number }[]>([]);
  const lastRef = useRef<{ x: number; y: number } | null>(null);

  const setup = (canvas: HTMLCanvasElement | null) => {
    canvasRef.current = canvas;
    if (!canvas) return;
    const hero = heroRef.current;
    if (!hero) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const accent =
      getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim() ||
      "#E85A42";

    function resize() {
      const w = window.innerWidth;
      const r = hero!.getBoundingClientRect();
      canvas!.width = w * devicePixelRatio;
      canvas!.height = r.height * devicePixelRatio;
      canvas!.style.width = w + "px";
      canvas!.style.height = r.height + "px";
      ctx!.scale(devicePixelRatio, devicePixelRatio);
    }
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const r = hero!.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) {
        lastRef.current = null;
        return;
      }
      const x = e.clientX;
      const y = e.clientY - r.top;
      if (y < 0 || y > r.height) {
        lastRef.current = null;
        return;
      }
      const now = performance.now();
      const last = lastRef.current;
      if (last) {
        const dx = x - last.x;
        const dy = y - last.y;
        const dist = Math.hypot(dx, dy);
        const steps = Math.max(1, Math.floor(dist / 6));
        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          const jx = x - dx + dx * t + (Math.random() - 0.5) * 3;
          const jy = y - dy + dy * t + (Math.random() - 0.5) * 3;
          ptsRef.current.push({ x: jx, y: jy, t: now });
        }
      } else {
        ptsRef.current.push({ x, y, t: now });
      }
      lastRef.current = { x, y };
    };
    window.addEventListener("mousemove", onMove);

    function frame() {
      const now = performance.now();
      const maxAge = 2200;
      ptsRef.current = ptsRef.current.filter((p) => now - p.t < maxAge);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";
      ctx!.lineWidth = 1.6;
      const pts = ptsRef.current;
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1];
        const b = pts[i];
        if (b.t - a.t > 200) continue;
        const age = now - b.t;
        const alpha = Math.max(0, 1 - age / maxAge);
        ctx!.strokeStyle = accent;
        ctx!.globalAlpha = alpha * 0.85;
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.stroke();
      }
      ctx!.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(frame);
    }
    rafRef.current = requestAnimationFrame(frame);
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="heroGrid" />
      <canvas className="heroPen" ref={setup} />
      <div className="heroTop">
        <h1
          className="heroHeadline"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 96px)",
            display: "flex",
            width: "100%",
            color: "var(--color-accent)",
          }}
        >
          {headline}
        </h1>
        <p className="heroSub" style={{ minWidth: "min(885px, 100%)" }}>
          {sub}
        </p>
      </div>
    </section>
  );
}
