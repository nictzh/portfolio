"use client";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    // Expand whenever the footer is actually on screen, however the user
    // got there (clicking Contact or scrolling down manually), and revert
    // once it scrolls back out of view.
    const io = new IntersectionObserver(([entry]) => setExpanded(entry.isIntersecting), {
      threshold: 0.15,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const sec = canvasRef.current?.closest(".contact") as HTMLElement | null;
    const canvas = canvasRef.current;
    if (!sec || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let pts: { x: number; y: number; t: number }[] = [];
    const accent =
      getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim() ||
      "#E85A42";

    function resize() {
      const r = sec!.getBoundingClientRect();
      canvas!.width = r.width * devicePixelRatio;
      canvas!.height = r.height * devicePixelRatio;
      canvas!.style.width = r.width + "px";
      canvas!.style.height = r.height + "px";
      // setTransform (not scale) so repeated resizes — e.g. every frame of
      // the expand transition below — don't compound the DPR scaling.
      ctx!.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);
    // The grid background sizes itself via CSS (height: 100%), but the
    // canvas's drawing surface only matches its container in pixels set
    // here — so it also needs to re-measure whenever .contact's own
    // height changes (e.g. the expand/collapse transition), not just on
    // window resize.
    const ro = new ResizeObserver(resize);
    ro.observe(sec);

    let last: { x: number; y: number } | null = null;
    const onMove = (e: MouseEvent) => {
      const r = sec!.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const now = performance.now();
      if (last) {
        const dx = x - last.x;
        const dy = y - last.y;
        const dist = Math.hypot(dx, dy);
        const steps = Math.max(1, Math.floor(dist / 6));
        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          const jx = x - dx + dx * t + (Math.random() - 0.5) * 3;
          const jy = y - dy + dy * t + (Math.random() - 0.5) * 3;
          pts.push({ x: jx, y: jy, t: now });
        }
      } else {
        pts.push({ x, y, t: now });
      }
      last = { x, y };
    };
    const onLeave = () => {
      last = null;
    };
    sec.addEventListener("mousemove", onMove);
    sec.addEventListener("mouseleave", onLeave);

    let raf = 0;
    function frame() {
      const now = performance.now();
      const maxAge = 2200;
      pts = pts.filter((p) => now - p.t < maxAge);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";
      ctx!.lineWidth = 1.6;
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
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      ro.disconnect();
      sec.removeEventListener("mousemove", onMove);
      sec.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <footer ref={footerRef} className={`contact${expanded ? " expanded" : ""}`} id="contact">
      <div className="heroGrid contactGrid" />
      <canvas className="contactPen" ref={canvasRef} />
      <span className="sectionLabel">Say Hello!</span>
      <h2 ref={headlineRef} className={`contactHeadline${visible ? " visible" : ""}`}>
        Want to reach out?
        <br />
        Let&apos;s talk
        <br />
      </h2>
      <div className="contactLinks">
        <a href="mailto:nictzh@gmail.com" className="contactLink">
          <span className="contactLinkText">Email</span>
          <span className="contactLinkSub">nictzh@gmail.com</span>
        </a>
        <a href="https://wa.me/61414810353" className="contactLink" target="_blank" rel="noopener">
          <span className="contactLinkText">WhatsApp</span>
          <span className="contactLinkSub">+61 414 810 353</span>
        </a>
        <a href="https://linkedin.com/in/nick-toh-4a0911a" className="contactLink" target="_blank" rel="noopener">
          <span className="contactLinkText">LinkedIn</span>
          <span className="contactLinkSub">/in/nick-toh-4a0911a</span>
        </a>
      </div>
    </footer>
  );
}
