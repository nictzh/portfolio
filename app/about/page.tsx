import type { Metadata } from "next";
import Reveal from "@/components/Reveal/Reveal";

export const metadata: Metadata = {
  title: "About — Nick Toh",
  description:
    "Melbourne-based designer with 10+ years across branding, digital, and UX/UI.",
};

const experience = [
  { year: "2025", role: "Digitas", org: "UX UI Designer" },
  { year: "2021", role: "Balance Internet", org: "UX UI Designer" },
  { year: "2017", role: "L3 Home, Melbourne", org: "Marketing & Digital Designer" },
  { year: "2015", role: "3ciety, Kuala Lumpur", org: "Senior Designer" },
  { year: "2013", role: "DIA Brands, KL", org: "Senior Graphic Designer" },
  { year: "2011", role: "Lucideas / Fundamental, KL", org: "Art Director" },
  { year: "2010", role: "OgilvyAction Malaysia", org: "Designer / Visualizer" },
];

const education = [
  { date: "2021", role: "Academy Xi", org: "UX / UI Elevate Course" },
  { date: "2006", role: "Swinburne University", org: "Bachelor of Communication Design" },
  { date: "2004", role: "Brighton Secondary College", org: "VCE Year 11–12" },
];

const platforms = 8;
const brands = [
  "L3 Home",
  "Eastern Warehouse",
  "Bumbung",
  "Temple & Webster",
  "OgilvyAction",
  "Petronas",
  "F&N",
  "Client",
  "Client",
  "Client",
  "Client",
  "Client",
];

export default function About() {
  return (
    <main className="main">
      <section className="intro">
        <h1 className="opener" style={{ color: "var(--color-accent)" }}>
          I blur the line between brand and product design.
        </h1>
        <p className="bio">
          Melbourne-based designer with 10+ years across branding, digital, and UX/UI. Started in
          Malaysia, moved to Australia, built for startups and SMBs ever since.
        </p>
        <a href="#" className="cvButton">
          Download CV
        </a>
      </section>

      <Reveal className="section historyGrid">
        <div>
          <span className="sectionLabel">Work History</span>
          <div className="expList">
            {experience.map((entry) => (
              <div className="entry" key={entry.role}>
                <span className="entryDate">{entry.year}</span>
                <div className="expRow">
                  <div className="expLogo">
                    <span className="logoPlaceholder">Logo</span>
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
          <span className="sectionLabel">Platforms I work with</span>
          <div className="softwareGrid">
            {Array.from({ length: platforms }).map((_, i) => (
              <div className="softwareTile" key={i}>
                <span className="logoPlaceholder">App</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <span className="sectionLabel">Brands I have worked with</span>
        <div className="brandGrid">
          {brands.map((brand, i) => (
            <div className="brandTile" key={`${brand}-${i}`}>
              <span className="logoPlaceholder">{brand}</span>
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
