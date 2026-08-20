import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Eastern Warehouse — Nick Toh",
  description:
    "Case study: Eastern Warehouse. Brand and visual language for a homewares distributor.",
};

const images = [
  "/images/eastern-warehouse/01.jpg",
  "/images/eastern-warehouse/02.jpg",
  "/images/eastern-warehouse/03.jpg",
  "/images/eastern-warehouse/04.jpg",
  "/images/eastern-warehouse/05.jpg",
  "/images/eastern-warehouse/06.jpg",
  "/images/eastern-warehouse/07.jpg",
  "/images/eastern-warehouse/08.jpg",
];

export default function EasternWarehouse() {
  return (
    <CaseStudyLayout
      kicker="Branding & Operations"
      title="Eastern Warehouse"
      prevLink={{ href: "/work/l3home-branding", label: "← L3 Home — Branding" }}
      nextLink={{ href: "/work/bumbung", label: "Bumbung »" }}
    >
      <section className="caseSection" style={{ gridTemplateColumns: "1fr" }}>
        <div className="caseBody" style={{ maxWidth: "100%" }}>
          <p>
            Eastern Warehouse started as a Furniture Wholesale family business
            30 years ago, carrying a strong passion for design and a
            distinctive selection of furniture intended for Australian
            living.
          </p>
          <p>
            As the core of the business itself has shifted to more
            e-commerce oriented clients, one of my first tasks was to bring
            the brand back up to the current times, as well as translating
            its product offerings to its potential value. This would help
            transition to the philosophy and beliefs in forming its sister
            brand — L3 Home.
          </p>
          <p>
            Asides from managing the branding and marketing side of things, I
            am also in charge of the Operations and Customer Service
            (partially) side of things. Along the way, these roles has
            helped me gained experience in the fundamentals of managing
            warehouses for online fulfillment and dropshipping as well as how
            the supply chain works in the e-commerce industry.
          </p>
          <div className="caseBento6">
            {images.map((src) => (
              <div key={src}>
                <Image src={src} alt="Eastern Warehouse" fill sizes="20vw" style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
