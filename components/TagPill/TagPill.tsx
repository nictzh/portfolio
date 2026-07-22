import styles from "./TagPill.module.css";

type TagPillProps = {
  label: string;
};

export default function TagPill({ label }: TagPillProps) {
  return <span className={styles.pill}>{label}</span>;
}
