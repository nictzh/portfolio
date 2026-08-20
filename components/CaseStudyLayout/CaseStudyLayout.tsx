"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type MetaItem = { label: string; value: string };
type NavLink = { href: string; label: string };

type CaseStudyLayoutProps = {
  kicker: string;
  title: string;
  meta?: MetaItem[];
  heroImage?: { src: string; alt: string };
  prevLink: NavLink;
  nextLink: NavLink;
  children: React.ReactNode;
};

function renderNavLabel(label: string) {
  if (label.startsWith("← ")) {
    return (
      <>
        <span className="caseNavIcon">‹</span> {label.slice(2)}
      </>
    );
  }
  if (label.endsWith(" »")) {
    return (
      <>
        {label.slice(0, -2)} <span className="caseNavIcon">»</span>
      </>
    );
  }
  return label;
}

export default function CaseStudyLayout({
  kicker,
  title,
  meta,
  heroImage,
  prevLink,
  nextLink,
  children,
}: CaseStudyLayoutProps) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const img = (e.target as HTMLElement).closest("img");
    if (img instanceof HTMLImageElement) {
      setLightbox({ src: img.currentSrc || img.src, alt: img.alt });
    }
  };

  return (
    <main className="main" onClick={handleClick}>
      <section className="caseHero">
        <span className="caseKicker">{kicker}</span>
        <h1 className="caseTitle">{title}</h1>

        {meta && (
          <div className="caseMetaGrid">
            {meta.map((item) => (
              <div className="caseMetaItem" key={item.label}>
                <span className="caseMetaLabel">{item.label}</span>
                <span className="caseMetaValue">{item.value}</span>
              </div>
            ))}
          </div>
        )}

        {heroImage && (
          <div className="caseHeroImage">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1312px"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </section>

      {children}

      <nav className="caseNav">
        <Link href={prevLink.href} className="caseNavLink">
          {renderNavLabel(prevLink.label)}
        </Link>
        <Link href={nextLink.href} className="caseNavLink">
          {renderNavLabel(nextLink.label)}
        </Link>
      </nav>

      <div
        className={`lightbox${lightbox ? " open" : ""}`}
        onClick={() => setLightbox(null)}
      >
        <span className="lightboxClose">&times;</span>
        {lightbox && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={lightbox.src} alt={lightbox.alt} />
        )}
      </div>
    </main>
  );
}
