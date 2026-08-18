import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Mirvac — Nick Toh",
  description: "Mirvac — Find your LIV. UX UI design for a family of Build-to-Rent brand websites.",
};

export default function Mirvac() {
  return (
    <CaseStudyLayout
      kicker="UX UI Design"
      title="Mirvac - Find your LIV"
      meta={[
        { label: "Role", value: "UX UI Designer" },
        { label: "Areas Covered", value: "UX UI Design, Motion Design, Digital Brand Guidelines" },
        { label: "Tools", value: "Figma, Teams" },
        { label: "Creative Director", value: "Meaghan Blanch" },
      ]}
      prevLink={{ href: "/work/aspect-skincare", label: "← Aspect Skincare" }}
      nextLink={{ href: "/work/l3home-ux", label: "L3 Home — UX/UI →" }}
    >
      <section className="caseSection" style={{ gridTemplateColumns: "1fr" }}>
        <div className="caseBody" style={{ maxWidth: "100%" }}>
          <p>
            Mirvac&apos;s LIV buildings cater to renters seeking an elevated lifestyle, offering both long and
            short-term leases. As part of Mirvac&apos;s plan to elevate its sub-branded LIV websites, we were handed
            the brief to build a family of websites that don&apos;t just co-exist together, but also maintaining its
            own unique identity.
            <br />
            <br />
            To bring out the playful essence of each brand, we built a story around each key touchpoint, emphasising
            heavily on the bold colour as well as the aspirational imagery that each brand already has. We also
            carefully designed how the website motions through as user scrolls down the pages.
            <br />
            <br />
            We also improved the user&apos;s search experience, allowing them to better discover available units and
            easily enquire them as a key conversion.
          </p>
          <div className="caseBento6">
            <div><img src="/images/mirvac/1.jpg" alt="Mirvac" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
            <div><img src="/images/mirvac/2.jpg" alt="Mirvac" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
            <div><img src="/images/mirvac/3.jpg" alt="Mirvac" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
            <div><img src="/images/mirvac/4.jpg" alt="Mirvac" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
            <div><img src="/images/mirvac/5.jpg" alt="Mirvac" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
            <div><img src="/images/mirvac/6.jpg" alt="Mirvac" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
