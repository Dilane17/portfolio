import Link from "next/link";
import styles from "@/app/page.module.css";

interface ProjectCardProps {
  slug: string;
  title: string;
  company?: string;
  problem: string;
  solution: string;
  techStack: string[];
  ctaLabel?: string;
}

export default function ProjectCard({
  slug,
  title,
  company,
  problem,
  solution,
  techStack,
  ctaLabel = "Voir l'approche",
}: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      {/* Header */}
      <div className={styles.projectCardHeader}>
        <div>
          <h3 className={styles.projectCardTitle}>{title}</h3>
          {company ? (
            <div className={styles.projectCardMeta}>{company}</div>
          ) : null}
        </div>
        <div className={styles.projectCardIcon}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
            <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </div>
      </div>

      {/* Problem / Solution */}
      <p className={styles.projectCardText}>
        <strong>Contexte :</strong> {problem}
      </p>
      <p className={styles.projectCardText}>
        <strong>Réponse :</strong> {solution}
      </p>

      {/* Tech badges */}
      <div className={styles.techBadges}>
        {techStack.map((t, i) => (
          <span key={i} className={styles.techBadge}>{t}</span>
        ))}
      </div>

      {/* Mockup preview */}
      <div className={styles.mockupBox}>
        <div className={styles.mockupHeader}>
          <span className={styles.mockupHeaderLeft}>Aperçu produit</span>
          <span className={styles.mockupHeaderRight}>Interface optimisée</span>
        </div>
        <div className={styles.mockupContent}>
          <div className={styles.mockupLeft}>
            <div className={styles.mockupDot} />
            <svg className={styles.mockupLine} viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 35 C40 35 50 5 100 10 C150 15 160 20 200 8" stroke="#192bc2" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className={styles.mockupRight} />
        </div>
      </div>

      {/* Footer */}
      <div className={styles.projectCardFooter}>
        <Link href={`/projects/${slug}`} className={styles.footerBtn}>
          {ctaLabel}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </Link>
        <span className={styles.hoverHint}>Survolez pour explorer</span>
      </div>
    </div>
  );
}
