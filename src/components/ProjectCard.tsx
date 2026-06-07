import Link from "next/link";
import styles from "@/app/page.module.css";

interface ProjectCardProps {
  index: number;
  slug: string;
  title: string;
  company?: string;
  problem: string;
  solution: string;
  techStack: string[];
  ctaLabel?: string;
}

export default function ProjectCard({
  index,
  slug,
  title,
  company,
  problem,
  solution,
  techStack,
  ctaLabel = "Voir l'approche",
}: ProjectCardProps) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectCardIcon}>
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className={styles.projectCardHeader}>
        <div>
          <h3 className={styles.projectCardTitle}>{title}</h3>
          {company ? (
            <div className={styles.projectCardMeta}>{company}</div>
          ) : null}
        </div>
      </div>

      <p className={styles.projectCardText}>
        <strong>Contexte :</strong> {problem}
      </p>
      <p className={styles.projectCardText}>
        <strong>Réponse :</strong> {solution}
      </p>

      <div className={styles.techBadges}>
        {techStack.slice(0, 4).map((tech) => (
          <span key={tech} className={styles.techBadge}>
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.projectCardFooter}>
        <Link
          href={`/projects/${slug}`}
          className={styles.footerBtn}
          aria-label={`${ctaLabel} : ${title}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
