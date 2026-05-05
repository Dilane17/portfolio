import styles from "@/app/page.module.css";

interface SkillGroup {
  title: string;
  items: string[];
}

export default function SkillsSection({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className={styles.skillsGrid}>
      {groups.map((g, i) => (
        <div key={i} className={styles.skillCard}>
          <h3 className={styles.skillCardTitle}>{g.title}</h3>
          <div className={styles.skillBadges}>
            {g.items.map((item, j) => (
              <span key={j} className={styles.skillBadge}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
