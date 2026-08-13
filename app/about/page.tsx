import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Nick Toh",
  description:
    "Melbourne-based designer with 10+ years across branding, digital, and UX/UI.",
};

const workHistory = [
  {
    date: "2017–Present",
    role: "Marketing & Digital Designer",
    org: "L3 Home, Melbourne",
  },
  {
    date: "2015–2016",
    role: "Senior Designer",
    org: "3ciety, Kuala Lumpur",
  },
  {
    date: "2013–2014",
    role: "Senior Graphic Designer",
    org: "DIA Brands, KL",
  },
  {
    date: "2011–2013",
    role: "Art Director",
    org: "Lucideas / Fundamental, KL",
  },
  {
    date: "2010–2011",
    role: "Designer / Visualizer",
    org: "OgilvyAction Malaysia",
  },
];

const education = [
  {
    date: "2004–2005",
    role: "Brighton Secondary College",
    org: "VCE Year 11–12",
  },
  {
    date: "2006–2008",
    role: "Swinburne University",
    org: "Bachelor of Communication Design",
  },
  {
    date: "2021",
    role: "Academy Xi",
    org: "UX / UI Elevate Course",
  },
];

const productSkills = [
  "UX/UI Design",
  "Wireframing & Prototyping",
  "User Research",
  "Design Systems",
  "Interaction Design",
  "Web Design",
];

const brandSkills = [
  "Brand Strategy",
  "Brand Identity",
  "Art Direction",
  "Creative Direction",
  "Print & Packaging",
  "Campaign Design",
];

export default function About() {
  return (
    <main className="main">
      <section className="intro">
        <h1 className="opener">I blur the line between brand and product design.</h1>
        <p className="bio">
          Melbourne-based designer with 10+ years across branding, digital,
          and UX/UI. Started in Malaysia, moved to Australia, built for
          startups and SMBs ever since.
        </p>
        <a
          href="/pdfs/nick-toh-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cvButton"
        >
          Download CV
        </a>
      </section>

      <section className="section">
        <span className="sectionLabel">Work History</span>
        {workHistory.map((entry) => (
          <div className="entry" key={entry.role}>
            <span className="entryDate">{entry.date}</span>
            <div className="entryBody">
              <span className="entryRole">{entry.role}</span>
              <span className="entryOrg">{entry.org}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="section">
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
      </section>

      <section className="section">
        <span className="sectionLabel">Skills</span>
        <div className="skillsGrid">
          <div className="skillsColumn">
            <h3>Product Design</h3>
            <ul>
              {productSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skillsColumn">
            <h3>Brand & Creative</h3>
            <ul>
              {brandSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
