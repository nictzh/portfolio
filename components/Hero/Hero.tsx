"use client";

import { useEffect, useRef } from "react";

type HeroProps = {
  headline: string;
  sub: string;
};

export default function Hero({ headline, sub }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const canvas = canvasRef.current;
    if (!hero || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const accent =
      getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim() ||
      "#E85A42";

    const ptsRef: { x: number; y: number; t: number }[] = [];
    let lastPoint: { x: number; y: number } | null = null;
    let rafId: number | null = null;

    function resize() {
      const w = window.innerWidth;
      const r = hero!.getBoundingClientRect();
      canvas!.width = w * devicePixelRatio;
      canvas!.height = r.height * devicePixelRatio;
      canvas!.style.width = w + "px";
      canvas!.style.height = r.height + "px";
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(devicePixelRatio, devicePixelRatio);
    }
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const r = hero!.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) {
        lastPoint = null;
        return;
      }
      const x = e.clientX;
      const y = e.clientY - r.top;
      if (y < 0 || y > r.height) {
        lastPoint = null;
        return;
      }
      const now = performance.now();
      const last = lastPoint;
      if (last) {
        const dx = x - last.x;
        const dy = y - last.y;
        const dist = Math.hypot(dx, dy);
        const steps = Math.max(1, Math.floor(dist / 6));
        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          const jx = x - dx + dx * t + (Math.random() - 0.5) * 3;
          const jy = y - dy + dy * t + (Math.random() - 0.5) * 3;
          ptsRef.push({ x: jx, y: jy, t: now });
        }
      } else {
        ptsRef.push({ x, y, t: now });
      }
      lastPoint = { x, y };
    };
    window.addEventListener("mousemove", onMove);

    function frame() {
      const now = performance.now();
      const maxAge = 2200;
      while (ptsRef.length && now - ptsRef[0].t >= maxAge) {
        ptsRef.shift();
      }
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";
      ctx!.lineWidth = 1.6;
      for (let i = 1; i < ptsRef.length; i++) {
        const a = ptsRef[i - 1];
        const b = ptsRef[i];
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
      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="heroGrid" />
      <canvas className="heroPen" ref={canvasRef} />
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
