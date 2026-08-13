"use client";

import { useRef } from "react";

type HeroProps = {
  headline: string;
  sub: string;
  clients: string[];
};

export default function Hero({ headline, sub, clients }: HeroProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const grid = gridRef.current;
    if (!grid) return;
    const rect = grid.getBoundingClientRect();
    grid.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    grid.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    const grid = gridRef.current;
    if (!grid) return;
    grid.style.setProperty("--mx", "-500px");
    grid.style.setProperty("--my", "-500px");
  };

  const track = [...clients, ...clients];

  return (
    <section className="hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="heroGrid" ref={gridRef} />
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
      <div className="clientTicker">
        <div className="clientTrack">
          {track.map((client, i) => (
            <div className="clientLogo" key={`${client}-${i}`}>
              <span className="logoPlaceholder">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
