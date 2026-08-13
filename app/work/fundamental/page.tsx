import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Fundamental — Nick Toh",
  description:
    "Case study: Fundamental — Creating Believable Identity. Identity and print collateral for a KL creative agency.",
};

const images = [
  "https://static.wixstatic.com/media/53b24d_2c8fe725dba448258b6e9c52487deeca~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_3135cc841ab2454eb9b72b17831b6cc3~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_8256efcd7fd74cd99337c2412b7f3916~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_2625bec2d1c64ec0b250c5c5dcad458d~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_6249605861004b5fbf33892872af5638~mv2.jpg",
  "https://static.wixstatic.com/media/53b24d_5d0a69b4c21b408cb16b72c117c8ccd1~mv2.jpg",
];

export default function Fundamental() {
  return (
    <CaseStudyLayout
      kicker="Brand Identity"
      title="Fundamental: Creating Believable Identity"
      prevLink={{ href: "/work/3ciety", label: "← 3ciety" }}
      nextLink={{ href: "/work/ideas", label: "IDEAS →" }}
    >
      <section className="caseSection" style={{ gridTemplateColumns: "1fr" }}>
        <div className="caseBody" style={{ maxWidth: "100%" }}>
          <p>
            Fundamental is an advertising agency based in Malaysia which came
            out from the transformation of its previous incarnation which was
            Lucideas. With the result of the logo resulting from an internal
            competition, my design was ultimately picked to spearhead the
            agency&apos;s personality and intentions.
          </p>
          <p>
            The literal logotype of a horse with a deliberate ice cream on
            top was intended to be a cheeky play of the idea of make belief,
            that anything can be an unicorn, as long as you are convinced to
            believe it to be. As the core of its brand value is about
            &apos;Believe in Advertising&apos;, we had also decided to
            utilise by having everyone&apos;s business cards personally
            tailored to reflect each of our individual beliefs.
          </p>
          <div className="caseBento6">
            {images.map((src) => (
              <div key={src}>
                <Image src={src} alt="Fundamental" fill sizes="20vw" style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
