import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "L3 Home — Branding — Nick Toh",
  description:
    "Case study: L3 Home — Like It, Live It, Love It. Brand identity for a Melbourne furniture and homewares label.",
};

const images = [
  "https://static.wixstatic.com/media/53b24d_a1fa7fe3f8cf4a1aa0d7b09f49e82a37~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_a915369936f34c5b938d98452fd17632~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_7e615fac60d8478093eeb5c691bc1b8c~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_aff78ece4ce4470c8b6772431e78216b~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_51fd3d590b1f4b47ab2af6b1e740c4f9~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_e2f605e7b7464a0fab97ec3e67fc358c~mv2.jpg",
];

export default function L3HomeBranding() {
  return (
    <CaseStudyLayout
      kicker="Brand Identity"
      title="L3 Home: Like It, Live It, Love It"
      prevLink={{ href: "/", label: "← Back to Work" }}
      nextLink={{ href: "/work/eastern-warehouse", label: "Eastern Warehouse →" }}
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
