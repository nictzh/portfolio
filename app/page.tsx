import Hero from "@/components/Hero/Hero";
import Reveal from "@/components/Reveal/Reveal";
import ExperienceScroll, {
  type ExperienceEntry,
} from "@/components/ExperienceScroll/ExperienceScroll";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const clients = [
  "L3 Home",
  "Eastern Warehouse",
  "Bumbung",
  "Temple & Webster",
  "OgilvyAction",
  "Petronas",
  "F&N",
];

const skills = [
  "UX/UI Design",
  "Design Systems",
  "Vibe Coding",
  "eCommerce",
  "User Research",
  "User Testing",
  "Wireframing & Prototyping",
  "Brand Strategy",
  "Brand Identity",
  "Art Direction",
  "Interaction Design",
  "Print & Packaging",
  "Web Design",
];

const experience: ExperienceEntry[] = [
  { year: "2025", company: "Digitas", title: "UX UI Designer" },
  { year: "2021", company: "Balance", title: "UX UI Designer" },
  { year: "2017", company: "L3 Home", title: "Marketing & Digital Designer" },
  { year: "2015", company: "3ciety", title: "Senior Designer" },
  { year: "2013", company: "DIA Brands", title: "Senior Graphic Designer" },
  { year: "2011", company: "Lucideas / Fundamental", title: "Art Director" },
  { year: "2010", company: "OgilvyAction Malaysia", title: "Designer / Visualizer" },
];

const projects = [
  {
    title: "Mitre 10",
    description: "Retail and campaign design for a national hardware chain",
    comingSoon: true,
  },
  {
    title: "MMEM",
    description: "Brand identity and collateral",
    comingSoon: true,
  },
  {
    title: "Aspect Skincare",
    description: "Brand identity and packaging for a skincare label",
    comingSoon: true,
  },
  {
    title: "L3 Home — UX/UI",
    description: "E-commerce redesign for a Melbourne furniture brand",
    href: "/work/l3home-ux",
    image: { src: "/images/l3home-ux/hero.jpg", alt: "L3 Home — UX/UI" },
  },
  {
    title: "L3 Home — Branding",
    description: "Brand identity for a direct-to-consumer homewares label",
    href: "/work/l3home-branding",
    image: { src: "/images/l3home-branding/hero.jpg", alt: "L3 Home — Branding" },
  },
  {
    title: "Bumbung",
    description: "Identity system for a Malaysian property startup",
    href: "/work/bumbung",
    image: { src: "/images/bumbung/hero.png", alt: "Bumbung" },
  },
  {
    title: "Eastern Warehouse",
    description: "Brand and visual language for a homewares distributor",
    href: "/work/eastern-warehouse",
    image: { src: "/images/eastern-warehouse/hero.jpg", alt: "Eastern Warehouse" },
  },
  {
    title: "3ciety.com",
    description: "Brand identity for a social lifestyle platform",
    href: "/work/3ciety",
    image: { src: "/images/3ciety/hero.png", alt: "3ciety.com" },
  },
  {
    title: "Fundamental",
    description: "Identity and print collateral for a KL creative agency",
    href: "/work/fundamental",
    image: { src: "/images/fundamental/hero.jpg", alt: "Fundamental" },
  },
  {
    title: "IDEAS",
    description: "Publication design for a Malaysian policy think tank",
    href: "/work/ideas",
    image: { src: "/images/ideas/hero.jpg", alt: "IDEAS" },
  },
  {
    title: "F&N Ang Pau",
    description: "Festive packaging for a national F&B brand",
    comingSoon: true,
    image: { src: "/images/fn-angpau/hero.jpg", alt: "F&N Ang Pau" },
  },
];

export default function Home() {
  return (
    <main className="main">
      <Hero
        headline="UX + UI + Product Designer"
        sub="Hello, this is Nick Toh's portfolio, an UX designer for brands that want to mean something. 10+ years across branding, digital, and UX/UI. Melbourne-based, helping startups and growing businesses build brands and products with clarity and character."
        clients={clients}
      />

      <Reveal className="expSection">
        <div>
          <span className="sectionLabel">Skills</span>
          <div className="skillList">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
        <div>
          <span className="sectionLabel">Experience</span>
          <ExperienceScroll items={experience} />
        </div>
      </Reveal>

      <span className="sectionLabel" style={{ paddingTop: 40, paddingBottom: 40 }}>
        Selected Work
      </span>

      <Reveal className="workGrid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Reveal>
    </main>
  );
}
