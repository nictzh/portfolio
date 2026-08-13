import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "IDEAS — Nick Toh",
  description:
    "Case study: IDEAS — Editorial Design. Publication design for a Malaysian policy think tank.",
};

const images = [
  "https://static.wixstatic.com/media/53b24d_3a2bd76bb5c940aba20c04adc862df84~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_5ea0334cdfb645d2af911ed6abd779cc~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_348a851a28f54876ae24c95ee8776ec9~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_1476699b4a274d23b301f614f27eff6b~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_4ef2e57fbe2341c7a1818929c49ae6ca~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_fbe7fa6bdd6f4589a63b7273d615bb8f~mv2.jpg",
];

export default function Ideas() {
  return (
    <CaseStudyLayout
      kicker="Editorial Design"
      title="IDEAS: Editorial Design"
      prevLink={{ href: "/work/fundamental", label: "← Fundamental" }}
      nextLink={{ href: "/", label: "Back to Work →" }}
    >
      <section className="caseSection" style={{ gridTemplateColumns: "1fr" }}>
        <div className="caseBody" style={{ maxWidth: "100%" }}>
          <p>
            The Institute for Democracy and Economic Affairs (IDEAS) is a
            nonprofit research institute based in Malaysia dedicated to
            promoting solutions to the country&apos;s public policy
            challenges. As its mission is to improve the level of
            understanding and acceptance of public policies, IDEAS needed to
            improve the way its research papers was being presented.
          </p>
          <p>
            This is where we came in with the task to redesign their
            editorial research papers, turning statistics and data into
            something that is easily digestible for interested stakeholders
            and government ministers alike. Taking cues from its core brand
            logo, we also managed to expand its identity into sets of visual
            illustrations that adequately represents IDEA&apos;s vision and
            mission of promoting public policies across.
          </p>
          <div className="caseBento6">
            {images.map((src) => (
              <div key={src}>
                <Image src={src} alt="IDEAS" fill sizes="20vw" style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
