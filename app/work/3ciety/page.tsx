import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "3ciety — Nick Toh",
  description:
    "Case study: 3ciety Brand Guidelines. Brand identity for a Malaysian social lifestyle platform.",
};

const images = [
  "/images/3ciety/01.png",
  "/images/3ciety/02.png",
  "/images/3ciety/03.png",
  "/images/3ciety/04.png",
  "/images/3ciety/05.png",
  "/images/3ciety/06.jpg",
  "/images/3ciety/07.jpg",
];

export default function Ciety() {
  return (
    <CaseStudyLayout
      kicker="Brand Guidelines"
      title="3ciety Brand Guidelines"
      prevLink={{ href: "/work/bumbung", label: "← Bumbung" }}
      nextLink={{ href: "/work/fundamental", label: "Fundamental »" }}
    >
      <section className="caseSection" style={{ gridTemplateColumns: "1fr" }}>
        <div className="caseBody" style={{ maxWidth: "100%" }}>
          <p>
            3ciety was a Malaysia-based startup that aims to provide
            consumers and brands alike to empower their merchandise
            possibilities through their platform. When I was hired as their
            Senior Designer, one of my main tasks was to expand upon its
            existing logomark by creating a brand guideline for the internal
            team.
          </p>
          <p>
            Asides from working on 3ciety&apos;s brand guidelines, I was also
            in charge of managing a few designers, coming up with design
            concepts to assist brands for their merchandising efforts. I was
            also involved with managing the production department, often
            assisting by travelling out for Quality Control meetings.
          </p>
          <div className="caseBento6">
            {images.map((src) => (
              <div key={src}>
                <Image src={src} alt="3ciety" fill sizes="20vw" style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
