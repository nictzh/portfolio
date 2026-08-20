import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Eastern Warehouse — Nick Toh",
  description:
    "Case study: Eastern Warehouse. Brand and visual language for a homewares distributor.",
};

const images = [
  "https://static.wixstatic.com/media/53b24d_404675a68b1f4d1fb2d378efac9caf24~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_ea39c9dd06d94ab9b684c7b2a0c0a401~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_82be53550c604a69a38dee82ae74a106~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_58e6c0c451ef48c783557e28731c6d00~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_f5b5d19a82c947de9aeb69b0009fff1b~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_c52aa737f0564faa837abe352d7391df~mv2.jpg",
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
