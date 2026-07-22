import Link from "next/link";
import TagPill from "@/components/TagPill/TagPill";
import styles from "./ProjectRow.module.css";

type ProjectRowProps = {
  title: string;
  description: string;
  tag: string;
  href?: string;
  comingSoon?: boolean;
};

export default function ProjectRow({
  title,
  description,
  tag,
  href,
  comingSoon,
}: ProjectRowProps) {
  const content = (
    <>
      <div className={styles.text}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </div>
      <TagPill label={tag} />
      <span
        className={`${styles.arrow} ${comingSoon ? styles.arrowMuted : ""}`}
      >
        →
      </span>
    </>
  );

  if (comingSoon || !href) {
    return <div className={`${styles.row} ${styles.comingSoon}`}>{content}</div>;
  }

  return (
    <Link href={href} className={styles.row}>
      {content}
    </Link>
  );
}
