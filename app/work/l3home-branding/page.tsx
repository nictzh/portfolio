import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "L3 Home — Branding — Nick Toh",
  description:
    "Case study: L3 Home — Like It, Live It, Love It. Brand identity for a Melbourne furniture and homewares label.",
};

const images = [
  "/images/l3home-branding/01.jpg",
  "/images/l3home-branding/02.jpg",
  "/images/l3home-branding/03.jpg",
  "/images/l3home-branding/04.jpg",
  "/images/l3home-branding/05.jpg",
  "/images/l3home-branding/06.jpg",
  "/images/l3home-branding/07.jpg",
  "/images/l3home-branding/08.jpg",
  "/images/l3home-branding/09.jpg",
  "/images/l3home-branding/10.jpg",
  "/images/l3home-branding/11.jpg",
  "/images/l3home-branding/12.jpg",
  "/images/l3home-branding/13.jpg",
  "/images/l3home-branding/14.jpg",
  "/images/l3home-branding/15.jpg",
  "/images/l3home-branding/16.jpg",
];

export default function L3HomeBranding() {
  return (
    <CaseStudyLayout
      kicker="Brand Identity"
      title="L3 Home: Like It, Live It, Love It"
      prevLink={{ href: "/", label: "← Back to Work" }}
      nextLink={{ href: "/work/eastern-warehouse", label: "Eastern Warehouse »" }}
    >
      <section className="caseSection" style={{ gridTemplateColumns: "1fr" }}>
        <div className="caseBody" style={{ maxWidth: "100%" }}>
          <p>
            L3 Home represents the progression of the home furniture industry
            of Australia, as people had started to pick up e-commerce as an
            alternative to the traditional brick and mortar stores in 2016.
            This is especially quite a unique challenge within this space as
            furniture are considered bulky items and most Australians had
            still prefer to walk ins prior to making their purchase.
          </p>
          <p>
            I was tasked to design a logomark which represents the
            convergence of the 3 key messages — Like it, Live it and Love it.
            As a forward thinking brand, I designed the logo and modified the
            font to be very simple yet modern, attempting to stay away from
            how a lot of traditional brands wanted to portray themselves —
            classic and traditional.
          </p>
          <p>
            All of this was adapted and expanded upon in every branding and
            marketing material, as well as the framework for how we have
            envisioned the online store. My approach to researching into
            competitors as well as customer insights based on our
            customer&apos;s testimonials have led us to being able to build a
            website which is not just user friendly and approachable, but
            ultimately stay true to the brand identity we want to present as
            well.
          </p>
          <p>
            Ever since the website was launched (especially in the beginning
            of the pandemic year 2020), the brand has grown strength to
            strength — from being able to hit record sales due to the healthy
            traffic coming in, to being featured in household names such as
            Bunnings as well as primetime TV shows such as The Living Room
            and The Block.
          </p>
          <div className="caseBento6">
            {images.map((src) => (
              <div key={src}>
                <Image src={src} alt="L3 Home — Branding" fill sizes="20vw" style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
