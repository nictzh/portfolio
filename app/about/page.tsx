import type { Metadata } from "next";
import Reveal from "@/components/Reveal/Reveal";

export const metadata: Metadata = {
  title: "About — Nick Toh",
  description:
    "Melbourne-based designer with 10+ years across branding, digital, and UX/UI.",
};

const experience = [
  { year: "2025", role: "Digitas", org: "UX UI Designer", logo: "/images/explogos/digitas.png" },
  { year: "2021", role: "Balance Internet", org: "UX UI Designer", logo: "/images/explogos/balance.png" },
  { year: "2017", role: "L3 Home, Melbourne", org: "Marketing & Digital Designer", logo: "/images/explogos/l3home.png" },
  { year: "2015", role: "3ciety, Kuala Lumpur", org: "Senior Designer", logo: "/images/explogos/3ciety.png" },
  { year: "2013", role: "DIA Brands, KL", org: "Senior Graphic Designer", logo: "/images/explogos/dia.png" },
  { year: "2011", role: "Lucideas / Fundamental, KL", org: "Art Director", logo: "/images/explogos/fundamental.png" },
  { year: "2010", role: "OgilvyAction Malaysia", org: "Designer / Visualizer", logo: "/images/explogos/ogilvy.png" },
];

const education = [
  { date: "2021", role: "Academy Xi", org: "UX / UI Elevate Course" },
  { date: "2006", role: "Swinburne University", org: "Bachelor of Communication Design" },
  { date: "2004", role: "Brighton Secondary College", org: "VCE Year 11–12" },
];

const tools = [
  { name: "Tool 01", src: "/images/tools/tool-01.png" },
  { name: "Tool 02", src: "/images/tools/tool-02.png" },
  { name: "Tool 03", src: "/images/tools/tool-03.png" },
  { name: "Tool 04", src: "/images/tools/tool-04.png" },
  { name: "Tool 05", src: "/images/tools/tool-05.png" },
  { name: "Tool 06", src: "/images/tools/tool-06.png" },
  { name: "Tool 07", src: "/images/tools/tool-07.png" },
  { name: "Tool 08", src: "/images/tools/tool-08.png" },
  { name: "Tool 09", src: "/images/tools/tool-09.png" },
];
const brands = [
  { name: "Brand 01", src: "/images/brands/brand-01.png" },
  { name: "Brand 02", src: "/images/brands/brand-02.png" },
  { name: "Brand 03", src: "/images/brands/brand-03.png" },
  { name: "Brand 04", src: "/images/brands/brand-04.png" },
  { name: "Brand 05", src: "/images/brands/brand-05.png" },
  { name: "Brand 06", src: "/images/brands/brand-06.png" },
  { name: "Brand 07", src: "/images/brands/brand-07.png" },
  { name: "Brand 08", src: "/images/brands/brand-08.png" },
  { name: "Brand 09", src: "/images/brands/brand-09.png" },
  { name: "Brand 10", src: "/images/brands/brand-10.png" },
  { name: "Brand 11", src: "/images/brands/brand-11.png" },
  { name: "Brand 12", src: "/images/brands/brand-12.png" },
  { name: "Brand 13", src: "/images/brands/brand-13.png" },
  { name: "Brand 14", src: "/images/brands/brand-14.png" },
  { name: "Brand 15", src: "/images/brands/brand-15.png" },
  { name: "Brand 16", src: "/images/brands/brand-16.png" },
];

export default function About() {
  return (
    <main className="main">
      <Reveal className="intro">
        <div className="introText">
          <h1 className="opener" style={{ color: "var(--color-accent)" }}>
            I&apos;m a designer who cares about experiences that help people.
          </h1>
          <p className="bio">
            Melbourne-based designer with 15+ years across branding, digital, and UX/UI. Started in
            Malaysia, moved to Australia, built for startups, tech and agencies.
          </p>
          <a
            href="/pdfs/nick-toh-resume.pdf"
            className="cvButton"
            download="Nick Toh - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
        <div className="introPortrait">
          <img src="/images/portrait.jpg" alt="Nick Toh" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </Reveal>

      <Reveal className="section historyGrid">
        <div>
          <span className="sectionLabel">Experience</span>
          <div className="expList">
            {experience.map((entry) => (
              <div className="entry" key={entry.role}>
                <span className="entryDate">{entry.year}</span>
                <div className="expRow">
                  <div className="expLogo">
                    <img src={entry.logo} alt={`${entry.role} logo`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                  <div className="expText">
                    <span className="expRole">{entry.role}</span>
                    <span className="expOrg">{entry.org}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="sectionLabel">Tools I work with</span>
          <div className="softwareGrid">
            {tools.map((tool) => (
              <div className="softwareTile" key={tool.name}>
                <img src={tool.src} alt={tool.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <span className="sectionLabel">Brands I have worked with</span>
        <div className="brandGrid">
          {brands.map((brand) => (
            <div className="brandTile" key={brand.name}>
              <img src={brand.src} alt={brand.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="section">
        <span className="sectionLabel">Education</span>
        {education.map((entry) => (
          <div className="entry" key={entry.role}>
            <span className="entryDate">{entry.date}</span>
            <div className="entryBody">
              <span className="entryRole">{entry.role}</span>
              <span className="entryOrg">{entry.org}</span>
            </div>
          </div>
        ))}
      </Reveal>
    </main>
  );
}
