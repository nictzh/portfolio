import ProjectRow from "@/components/ProjectRow/ProjectRow";
import styles from "./page.module.css";

const clients = [
  "L3 Home",
  "Eastern Warehouse",
  "Bumbung",
  "Temple & Webster",
  "OgilvyAction",
  "Petronas",
  "F&N",
];

const projects = [
  {
    title: "L3 Home — UX/UI",
    description: "E-commerce redesign for a Melbourne furniture brand",
    tag: "UX/UI",
    href: "/work/l3home-ux",
  },
  {
    title: "L3 Home — Branding",
    description: "Brand identity for a direct-to-consumer homewares label",
    tag: "Branding",
    comingSoon: true,
  },
  {
    title: "Bumbung",
    description: "Identity system for a Malaysian property startup",
    tag: "Branding",
    href: "/work/bumbung",
  },
  {
    title: "Eastern Warehouse",
    description: "Brand and visual language for a homewares distributor",
    tag: "Branding",
    comingSoon: true,
  },
  {
    title: "3ciety.com",
    description: "Brand identity for a social lifestyle platform",
    tag: "Branding",
    comingSoon: true,
  },
  {
    title: "Fundamental",
    description: "Identity and print collateral for a KL creative agency",
    tag: "Branding · Print",
    comingSoon: true,
  },
  {
    title: "IDEAS",
    description: "Publication design for a Malaysian policy think tank",
    tag: "Print",
    comingSoon: true,
  },
  {
    title: "F&N Ang Pau",
    description: "Festive packaging for a national F&B brand",
    tag: "Packaging · Print",
    href: "/work/fn-angpau",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroHeadline}>
          Nick Toh — designer for brands that want to mean something.
        </h1>
        <p className={styles.heroSub}>
          10+ years across branding, digital, and UX/UI. Melbourne-based,
          helping startups and growing businesses build brands and products
          with clarity and character.
        </p>
        <div className={styles.clientStrip}>
          {clients.map((client) => (
            <span key={client}>{client}</span>
          ))}
        </div>
      </section>

      <span className={styles.sectionLabel}>Selected Work</span>
      {projects.map((project) => (
        <ProjectRow key={project.title} {...project} />
      ))}
    </main>
  );
}
