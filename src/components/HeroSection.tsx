import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection} container`}>
      <div className={styles.heroContent}>
        <div className={styles.heroBadgeWrapper}>
          <div className={styles.availabilityBadge}>
            <span className={styles.availabilityDot}>Disponible en 2026</span>
            Freelance front-end, expert React & Next.js
          </div>
        </div>

        <h1 className={styles.heroTitle}>
          Je conçois des interfaces{" "}
          <span className={styles.heroTitleAccent}>nettes</span>, rapides et
          faites pour durer.
        </h1>

        <p className={styles.heroSubtitle}>
          Développeur front-end spécialisé produits SaaS et fintech. Je
          transforme des maquettes en interfaces vivantes, précises, accessibles
          et performantes, du composant isolé à la refonte complète.
        </p>

        <div className={styles.heroButtons}>
          <Link href="#contact" className="btn btn-green">
            Démarrer un projet
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="#projects" className="btn btn-ghost">
            Voir les projets
          </Link>
        </div>

        <div className={styles.heroIndicators}>
          <div className={styles.heroIndicator}>
            <strong>8</strong>
            <span>projets réalisés</span> 
          </div>
          <div className={styles.indicatorSeparator}></div>
          <div className={styles.heroIndicator}>
            <strong>100</strong>
            <span>Score Lighthouse</span>
          </div>
          <div className={styles.indicatorSeparator}></div>
          <div className={styles.heroIndicator}>
            <strong>&lt; 24h</strong>
            <span>Temps de réponse</span>
          </div>
        </div>
      </div>
    </section>
  );
}
