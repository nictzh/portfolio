import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Archives — Nick Toh",
  description: "Selected older work — IDEAS, Fundamental, and other projects.",
};

const ideasImages = [
  "https://static.wixstatic.com/media/53b24d_3a2bd76bb5c940aba20c04adc862df84~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_5ea0334cdfb645d2af911ed6abd779cc~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_348a851a28f54876ae24c95ee8776ec9~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_1476699b4a274d23b301f614f27eff6b~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_4ef2e57fbe2341c7a1818929c49ae6ca~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_fbe7fa6bdd6f4589a63b7273d615bb8f~mv2.jpg",
];

const fundamentalImages = [
  "https://static.wixstatic.com/media/53b24d_2c8fe725dba448258b6e9c52487deeca~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_3135cc841ab2454eb9b72b17831b6cc3~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_8256efcd7fd74cd99337c2412b7f3916~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_2625bec2d1c64ec0b250c5c5dcad458d~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_6249605861004b5fbf33892872af5638~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_5d0a69b4c21b408cb16b72c117c8ccd1~mv2.jpg",
];

const otherImages = [
  "https://static.wixstatic.com/media/53b24d_b69c9e196e3043eaac0f2985368d10a2~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_950404c7d73b411991d0dac605215fa5~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_e0ffdf3926304a9f9c2a2466e70fb371~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_adc4088e46104964b836d6833a53e334~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_50cb2bb9902448daa330591585ef75cc~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_c2369860d25b48f09028547125ad0c67~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_60f698d51e8c4d7e816b6c4deb9e15af~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_7cdb70d07d22427bb39155e175a1593b~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_4738d795436840adac6da731ff3a8931~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_4b790af9210144a2b7eeaadce1d1daff~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_2b4c1fe2219e4ea091d2cff92826d3c4~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_a1031141ec3d4647a793e9ab86c49951~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_064b744656684ad59bf9827b644f2766~mv2.png",
  "https://static.wixstatic.com/media/53b24d_b2995ff2ad624060adf15e7298227343~mv2.png",
  "https://static.wixstatic.com/media/53b24d_38f7c4763427412e81c73758a4eaead6~mv2.png",
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
      nextLink={{ href: "/", label: "Back to Work →" }}
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
