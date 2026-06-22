import Link from "next/link";
import Image from "next/image";
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
  imageSrc?: string;
}

export default function ProjectCard({
  index,
  slug,
  title,
  problem,
  imageSrc,
}: ProjectCardProps) {
  // Décalage asymétrique pour la 2ème colonne (index impair) sur desktop
  const isOffset = index % 2 !== 0;

  return (
    <Link
      href={`/projects/${slug}`}
      className={`${styles.projectCard} ${isOffset ? styles.projectCardOffset : ""}`}
    >
      <div className={styles.projectImageWrapper}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${title} — projet réalisé par Clovis Ahouandjinou, développeur front-end freelance`}
            fill
            className={styles.projectImage}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className={styles.projectImageFallback} />
        )}
        <div className={styles.projectImageOverlay}></div>
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectCardTitle}>{title}</h3>
        <p className={styles.projectCardText}>{problem}</p>
      </div>
    </Link>
  );
}
