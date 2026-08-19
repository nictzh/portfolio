import Hero from "@/components/Hero/Hero";
import Reveal from "@/components/Reveal/Reveal";
import ExperienceScroll, {
  type ExperienceEntry,
} from "@/components/ExperienceScroll/ExperienceScroll";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

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
  { year: "2025", company: "Digitas", title: "UX UI Designer", logo: "/images/explogos/digitas.png" },
  { year: "2021", company: "Balance", title: "UX UI Designer", logo: "/images/explogos/balance.png" },
  { year: "2017", company: "L3 Home", title: "Marketing & Digital Designer", logo: "/images/explogos/l3home.png" },
  { year: "2015", company: "3ciety", title: "Senior Designer", logo: "/images/explogos/3ciety.png" },
  { year: "2013", company: "DIA Brands", title: "Senior Graphic Designer", logo: "/images/explogos/dia.png" },
  { year: "2011", company: "Lucideas / Fundamental", title: "Art Director", logo: "/images/explogos/fundamental.png" },
  { year: "2010", company: "OgilvyAction Malaysia", title: "Designer / Visualizer", logo: "/images/explogos/ogilvy.png" },
];

const projects = [
  {
    title: "Mitre 10",
    description: "Lean UX redesign for The Other Hardware Store",
    href: "/work/mitre10",
    image: { src: "/images/mitre10/hero.png", alt: "Mitre 10" },
  },
  {
    title: "Taubmans",
    description: "UX case study for an Australian household brand",
    href: "/work/taubmans",
    image: { src: "/images/taubmans/hero.png", alt: "Taubmans" },
  },
  {
    title: "MMEM",
    description: "Brand identity and collateral",
    href: "/work/mmem",
    image: { src: "/images/mmem/hero.png", alt: "MMEM" },
  },
  {
    title: "Aspect Skincare",
    description: "Brand identity and packaging for a skincare label",
    href: "/work/aspect-skincare",
    image: { src: "/images/aspect-skincare/hero.png", alt: "Aspect Skincare" },
  },
  {
    title: "Mirvac",
    description: "Designing for a digital Build-to-Rent experience",
    href: "/work/mirvac",
    image: { src: "/images/mirvac/hero.png", alt: "Mirvac" },
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
    title: "Archives",
    description: "Selected older work from my past career",
    href: "/work/archives",
    image: { src: "/images/archives/hero.png", alt: "Archives" },
    wide: true,
  },
];

export default function Home() {
  return (
    <main className="main">
      <Hero
        headline="UX + UI + Product Designer"
        sub="Hello, this is Nick Toh's portfolio, an UX designer for brands that want to mean something. 10+ years across branding, digital, and UX/UI. Melbourne-based, helping startups and growing businesses build brands and products with clarity and character."
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
