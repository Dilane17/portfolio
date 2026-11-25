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
            Développeur full stack web &amp; mobile freelance
          </div>
        </div>

        <h1 className={styles.heroTitle}>
          <span className="sr-only">Clovis Ahouandjinou — Développeur full stack web et mobile freelance à Cotonou : applications Next.js, API NestJS, applications Flutter, sites web et SaaS pour l'Afrique et l'Europe. </span>
          Je conçois des applications web et mobiles{" "}
          <span className={styles.heroTitleAccent}>solides</span>, rapides et
          faites pour durer.
        </h1>

        <p className={styles.heroSubtitle}>
          Développeur full stack basé à Cotonou. Je crée des sites web,
          applications SaaS et applications mobiles avec Next.js, NestJS,
          PostgreSQL et Flutter, pour des startups et PME d'Afrique et
          d'Europe francophone.
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
