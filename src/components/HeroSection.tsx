import Link from "next/link";
import styles from "@/app/page.module.css";

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection} container`}>
      <div className={styles.heroLeft}>
        <div style={{ textAlign: "center" }}>
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

        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <span className={styles.heroStatValue}>
              React / Next.js / TypeScript
            </span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatValue}>
              Interfaces produit solides
            </span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatValue}>Réponse sous 24 h</span>
          </div>
        </div>
      </div>

      <div className={styles.heroRight}>
        <div className={styles.snapshotCard}>
          <div className={styles.snapshotHeader}>
            <div className={styles.snapshotLabel}>clovis.dev / dashboard</div>
          </div>

          <div className={styles.metricItem}>
            <div className={styles.metricTitle}>Performance</div>
            <div className={styles.metricDesc}>Lighthouse 100</div>
          </div>

          <div className={styles.metricItem}>
            <div className={styles.metricTitle}>Système</div>
            <div className={styles.metricDesc}>Tokens + composants</div>
          </div>

          <div className={styles.metricItem}>
            <div className={styles.metricTitle}>Livraison</div>
            <div className={styles.metricDesc}>Code typé, clair</div>
          </div>

          <div className={styles.snapshotFooter}>
            <div className={styles.footerStat}>
              <span className={styles.footerStatValue}>UX</span>
              <span className={styles.footerStatLabel}>nette</span>
            </div>
            <div className={styles.footerStat}>
              <span className={styles.footerStatValue}>A11y</span>
              <span className={styles.footerStatLabel}>mesurée</span>
            </div>
            <div className={styles.footerStat}>
              <span className={styles.footerStatValue}>+5</span>
              <span className={styles.footerStatLabel}>ans web</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
