import styles from "@/app/page.module.css";

interface AboutProps {
  approach: string[];
  metrics: { label: string; value: string }[];
}

export default function AboutSection({ approach, metrics }: AboutProps) {
  return (
    <section id="about" className="section container">
      <div className="section-heading">
        <span className="eyebrow">APPROCHE PRODUIT</span>
        <h2>Une exigence produit, pas juste visuelle</h2>
        <p>
          J&apos;aime les interfaces qui ont du niveau, mais surtout une logique:
          hiérarchie claire, décisions assumées et détails utiles au service du produit.
        </p>
      </div>

      <div className={styles.mindsetGrid}>
        {/* Left card: How I approach problems */}
        <div className={styles.mindsetCard}>
          <h3 className={styles.mindsetCardTitle}>Ma façon d&apos;aborder un problème</h3>
          <p className={styles.mindsetCardText}>
            Je pars du besoin utilisateur, j&apos;identifie les zones de friction,
            puis je construis un parcours simple, crédible et agréable à utiliser.
            Mon objectif n&apos;est pas juste de livrer une belle UI, mais un produit
            plus clair à maintenir, plus rapide à faire évoluer et plus fort côté perception.
          </p>
          <div className={styles.approachList}>
            {approach.map((item, i) => (
              <div key={i} className={styles.approachItem}>
                <svg style={{ flexShrink: 0, marginTop: "2px", color: "rgba(255,255,255,0.7)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right card: What you can expect */}
        <div className={styles.mindsetCard}>
          <h3 className={styles.mindsetCardTitle}>Ce que vous pouvez attendre de moi</h3>
          <p className={styles.mindsetCardText}>
            Une communication claire, des PR propres, une vraie attention aux
            détails et un niveau d&apos;exigence constant sur la qualité finale.
            Je travaille facilement avec le design, le produit et le backend pour
            garder le scope net et transformer les idées en livrables solides.
          </p>
          <div className={styles.metricsGrid}>
            {metrics.map((m, i) => (
              <div key={i} className={styles.metricsItem}>
                <div className={styles.metricsItemLabel}>{m.label}</div>
                <div className={styles.metricsItemValue}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
