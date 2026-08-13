"use client";

import { useEffect, useRef } from "react";

export type ExperienceEntry = {
  year: string;
  company: string;
  title: string;
};

export default function ExperienceScroll({ items }: { items: ExperienceEntry[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { root: scroller, threshold: 0.3 }
    );
    scroller.querySelectorAll(".expItem").forEach((el) => io.observe(el));

    let half = 0;
    let rafId: number | null = null;

    const measure = () => requestAnimationFrame(() => {
      half = scroller.scrollHeight / 2;
    });
    measure();

    const step = () => {
      scroller.scrollTop += 0.6;
      if (scroller.scrollTop >= half) scroller.scrollTop -= half;
      rafId = requestAnimationFrame(step);
    };

    const onEnter = () => {
      if (!rafId) rafId = requestAnimationFrame(step);
    };
    const onLeave = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    scroller.addEventListener("mouseenter", onEnter);
    scroller.addEventListener("mouseleave", onLeave);

    return () => {
      io.disconnect();
      scroller.removeEventListener("mouseenter", onEnter);
      scroller.removeEventListener("mouseleave", onLeave);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const doubled = [...items, ...items];

  return (
    <div className="expScroll" ref={scrollerRef}>
      {doubled.map((item, i) => (
        <div className="expItem" key={`${item.company}-${i}`}>
          <span className="expYear">{item.year}</span>
          <div className="expRow">
            <div className="expLogo">
              <span className="logoPlaceholder">Logo</span>
            </div>
            <div className="expText">
              <span className="expRole">{item.company}</span>
              <span className="expOrg">{item.title}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
