import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Bumbung — Nick Toh",
  description:
    "Case study: Bumbung Brand Identity. Identity system for a Malaysian property startup.",
};

export default function Bumbung() {
  return (
    <CaseStudyLayout
      kicker="Brand Identity & UI/UX"
      title="Bumbung Brand Identity"
      prevLink={{ href: "/work/eastern-warehouse", label: "← Eastern Warehouse" }}
      nextLink={{ href: "/work/3ciety", label: "3ciety →" }}
    >
      <section className="caseSection" style={{ gridTemplateColumns: "1fr" }}>
        <div className="caseBody" style={{ maxWidth: "100%" }}>
          <p>
            Bumbung was a aspiring Malaysian startup, aiming to connect
            home-seekers and real estate agents and pair them up together.
          </p>
          <p>
            I worked closely with the founders to create a refreshing brand
            and identity that helps to stand out from its competitors, as
            well as to make it appealing to young working professionals who
            are their target audiences.
          </p>
          <p>
            As bumbung basically means &apos;roof&apos; in Malay, I intended
            to tie its literal meaning to bumbung&apos;s goal of connecting
            home-seekers and agents. Therefore, the logomark is built of a
            simple idea of connectivity through their services, forming the
            shape of a roof.
          </p>
          <p>
            As well as coming up with its brand identity, I also worked
            closely with the developer team to facelift UI/UX interface for
            bumbung&apos;s initial website as well their customer/agents
            backend portal.
          </p>
          <div className="caseBento">
            <div className="bTall">
              <Image
                src="https://static.wixstatic.com/media/53b24d_e5f5028f8e05415296735916cf199681~mv2.jpg"
                alt="Bumbung"
                fill
                sizes="33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="bWide">
              <Image
                src="https://static.wixstatic.com/media/53b24d_7a44c2e3cb484af499f6ff43f8afaf17~mv2.png"
                alt="Bumbung"
                fill
                sizes="66vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <Image
                src="https://static.wixstatic.com/media/53b24d_abd6b65868624db188426af68de68ef1~mv2.png"
                alt="Bumbung"
                fill
                sizes="33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <Image
                src="https://static.wixstatic.com/media/53b24d_3f4bcc392ec640c9ab21dd1cb830ef75~mv2.jpg"
                alt="Bumbung"
                fill
                sizes="33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
