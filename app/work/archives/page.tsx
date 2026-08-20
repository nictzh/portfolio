import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout/CaseStudyLayout";
import Reveal from "@/components/Reveal/Reveal";

export const metadata: Metadata = {
  title: "Archives — Nick Toh",
  description: "Selected older work — IDEAS, Fundamental, and other projects.",
};

const ideasImages = [
  "/images/archives/ideas/01.jpg",
  "/images/archives/ideas/02.jpg",
  "/images/archives/ideas/03.jpg",
  "/images/archives/ideas/04.jpg",
  "/images/archives/ideas/05.jpg",
  "/images/archives/ideas/06.jpg",
  "/images/archives/ideas/07.jpg",
];

const fundamentalImages = [
  "/images/archives/fundamental/01.jpg",
  "/images/archives/fundamental/02.jpg",
  "/images/archives/fundamental/03.jpg",
  "/images/archives/fundamental/04.jpg",
  "/images/archives/fundamental/05.jpg",
  "/images/archives/fundamental/06.jpg",
  "/images/archives/fundamental/07.jpg",
  "/images/archives/fundamental/08.jpg",
  "/images/archives/fundamental/09.jpg",
  "/images/archives/fundamental/10.jpg",
  "/images/archives/fundamental/11.jpg",
];

const otherImages = [
  "/images/archives/other/01.jpg",
  "/images/archives/other/02.jpg",
  "/images/archives/other/03.png",
  "/images/archives/other/04.png",
  "/images/archives/other/05.png",
  "/images/archives/other/06.jpg",
  "/images/archives/other/07.jpg",
  "/images/archives/other/08.jpg",
  "/images/archives/other/09.jpg",
  "/images/archives/other/10.jpg",
  "/images/archives/other/11.jpg",
  "/images/archives/other/12.jpg",
  "/images/archives/other/13.jpg",
];

function Bento({ images, alt }: { images: string[]; alt: string }) {
  return (
    <div className="caseBento6">
      {images.map((src) => (
        <div key={src}>
          <Image src={src} alt={alt} fill sizes="20vw" style={{ objectFit: "cover" }} />
        </div>
      ))}
    </div>
  );
}

export default function Archives() {
  return (
    <CaseStudyLayout
      kicker="Selected Older Work"
      title="Archives"
      prevLink={{ href: "/work/3ciety", label: "← 3ciety" }}
      nextLink={{ href: "/", label: "Back to Work »" }}
    >
      <section className="caseSection" style={{ gridTemplateColumns: "1fr", borderTop: "1px solid var(--color-border)", paddingTop: 48 }}>
        <div className="caseBody" style={{ maxWidth: "100%" }}>
          <span className="caseKicker">Editorial Design</span>
          <h2 className="caseTitle" style={{ fontSize: "var(--fs-4)" }}>IDEAS: Editorial Design</h2>
          <p>
            The Institute for Democracy and Economic Affairs (IDEAS) is a nonprofit research institute based in
            Malaysia dedicated to promoting solutions to the country&apos;s public policy challenges. As its mission
            is to improve the level of understanding and acceptance of public policies, IDEAS needed to improve the
            way its research papers was being presented.
          </p>
          <p>
            This is where we came in with the task to redesign their editorial research papers, turning statistics
            and data into something that is easily digestible for interested stakeholders and government ministers
            alike. Taking cues from its core brand logo, we also managed to expand its identity into sets of visual
            illustrations that adequately represents IDEA&apos;s vision and mission of promoting public policies
            across.
          </p>
          <Bento images={ideasImages} alt="IDEAS" />
        </div>
      </section>

      <section className="caseSection" style={{ gridTemplateColumns: "1fr", borderTop: "1px solid var(--color-border)", paddingTop: 48 }}>
        <div className="caseBody" style={{ maxWidth: "100%" }}>
          <span className="caseKicker">Brand Identity</span>
          <h2 className="caseTitle" style={{ fontSize: "var(--fs-4)" }}>Fundamental: Creating Believable Identity</h2>
          <p>
            Fundamental is an advertising agency based in Malaysia which came out from the transformation of its
            previous incarnation which was Lucideas. With the result of the logo resulting from an internal
            competition, my design was ultimately picked to spearhead the agency&apos;s personality and intentions.
          </p>
          <p>
            The literal logotype of a horse with a deliberate ice cream on top was intended to be a cheeky play of
            the idea of make belief, that anything can be an unicorn, as long as you are convinced to believe it to
            be. As the core of its brand value is about &apos;Believe in Advertising&apos;, we had also decided to
            utilise by having everyone&apos;s business cards personally tailored to reflect each of our individual
            beliefs.
          </p>
          <Bento images={fundamentalImages} alt="Fundamental" />
        </div>
      </section>

      <section className="caseSection" style={{ gridTemplateColumns: "1fr", borderTop: "1px solid var(--color-border)", paddingTop: 48 }}>
        <div className="caseBody" style={{ maxWidth: "100%" }}>
          <span className="caseKicker">Archived</span>
          <h2 className="caseTitle" style={{ fontSize: "var(--fs-4)" }}>Other works</h2>
          <p>
            A collection of smaller projects and one-off collaborations from the last 10 years, spanning branding,
            packaging, and print work across Malaysia and Australia.
          </p>
          <Bento images={otherImages} alt="Other works" />
        </div>
      </section>
    </CaseStudyLayout>
  );
}
