import Image from "next/image";
import Link from "next/link";
import TagPill from "@/components/TagPill/TagPill";
import styles from "./CaseStudyLayout.module.css";

type CaseStudyLayoutProps = {
  title: string;
  tag: string;
  client: string;
  role: string;
  year: string;
  tools: string;
  heroImage: {
    src: string;
    alt: string;
  };
  children: React.ReactNode;
};

export default function CaseStudyLayout({
  title,
  tag,
  client,
  role,
  year,
  tools,
  heroImage,
  children,
}: CaseStudyLayoutProps) {
  return (
    <main className={styles.main}>
      <Link href="/" className={styles.back}>
        ← Back to work
      </Link>

      <h1 className={styles.title}>{title}</h1>
      <TagPill label={tag} />

      <div className={styles.overview}>
        <div className={styles.overviewItem}>
          <span className={styles.overviewLabel}>Client</span>
          <span className={styles.overviewValue}>{client}</span>
        </div>
        <div className={styles.overviewItem}>
          <span className={styles.overviewLabel}>Role</span>
          <span className={styles.overviewValue}>{role}</span>
        </div>
        <div className={styles.overviewItem}>
          <span className={styles.overviewLabel}>Year</span>
          <span className={styles.overviewValue}>{year}</span>
        </div>
        <div className={styles.overviewItem}>
          <span className={styles.overviewLabel}>Tools</span>
          <span className={styles.overviewValue}>{tools}</span>
        </div>
      </div>

      <div className={styles.heroImage}>
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1312px"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.body}>{children}</div>
    </main>
  );
}
