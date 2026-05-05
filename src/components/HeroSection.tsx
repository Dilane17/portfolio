import Link from "next/link";
import styles from "@/app/page.module.css";

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection} container`}>
      {/* Left column */}
      <div className={`${styles.heroLeft} fade-up`}>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          Frontend Engineer • Produits SaaS • Design Systems
        </div>

        <h1 className={styles.heroTitle}>
          Je transforme des produits complexes en expériences{" "}
          <span className={styles.heroTitleAccent}>
            claires, rapides et mémorables.
          </span>
        </h1>

        <p className={styles.heroSubtitle}>
          Je suis <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>Clovis Dylan</strong>, développeur frontend. J&apos;aide les équipes produit à livrer des interfaces qui inspirent confiance, réduisent la friction et donnent une vraie sensation de qualité dès les premières secondes.
        </p>

        <div className={styles.heroButtons}>
          <Link href="#projects" className="btn btn-primary">
            Voir les projets
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="#contact" className="btn btn-ghost">
            Me contacter
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </Link>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <span className={styles.heroStatLabel}>Stack</span>
            <span className={styles.heroStatValue}>React · Next.js · TypeScript</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatLabel}>Force</span>
            <span className={styles.heroStatValue}>UI produit & architecture</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatLabel}>Livraison</span>
            <span className={styles.heroStatValue}>Propre, testée, accessible</span>
          </div>
        </div>
      </div>

      {/* Right column — Snapshot card */}
      <div className={`${styles.heroRight} fade-up-delay`}>
        <div className={styles.snapshotCard}>
          <div className={styles.snapshotHeader}>
            <div>
              <div className={styles.snapshotLabel}>Aperçu de ma façon de construire</div>
              <div className={styles.snapshotTitle}>Lisible, solide, prête à scaler</div>
            </div>
            <div className={styles.snapshotIcon} />
          </div>

          <div className={styles.metricItem}>
            <div className={styles.metricTitle}>Architecture de composants</div>
            <div className={styles.metricDesc}>
              Des APIs prévisibles, des états robustes et une base facile à faire évoluer.
            </div>
          </div>

          <div className={styles.metricItem}>
            <div className={styles.metricTitle}>Performance pensée dès le départ</div>
            <div className={styles.metricDesc}>
              Des parcours fluides, des bundles maîtrisés et une navigation sans inertie.
            </div>
          </div>

          <div className={styles.metricItem}>
            <div className={styles.metricTitle}>Interactions accessibles</div>
            <div className={styles.metricDesc}>
              Des interfaces utilisables au clavier, compréhensibles et fiables pour tous.
            </div>
          </div>

          <div className={styles.snapshotFooter}>
            <div className={styles.footerStat}>
              <span className={styles.footerStatValue}>UX</span>
              <span className={styles.footerStatLabel}>sans friction</span>
            </div>
            <div className={styles.footerStat}>
              <span className={styles.footerStatValue}>A11y</span>
              <span className={styles.footerStatLabel}>prise au sérieux</span>
            </div>
            <div className={styles.footerStat}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
              <span className={styles.footerStatLabel}>Impact produit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
