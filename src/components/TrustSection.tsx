import Link from "next/link";
import styles from "@/app/page.module.css";

const stats = [
  { value: "8+", label: "projets structurés" },
  { value: "4", label: "familles de produits" },
  { value: "24h", label: "réponse moyenne" },
  { value: "100", label: "performance visée" },
];

const reasons = [
  "Une approche orientée produit, pas seulement esthétique.",
  "Des interfaces pensées pour être maintenables après livraison.",
  "Un cadrage clair avant de partir en développement.",
];

export default function TrustSection() {
  return (
    <section className="section container">
      <div className={styles.trustGrid}>
        <div className={styles.trustIntro}>
          <div className="badge">
            <span className="badge-dot" />
            Pourquoi me faire confiance
          </div>
          <h2>
            Un développeur qui relie design, logique métier et qualité
            technique.
          </h2>
          <p>
            J&apos;interviens pour transformer une idée, une maquette ou un
            produit existant en interface solide : claire à utiliser, propre à
            maintenir et crédible face à vos clients.
          </p>
          <div className={styles.trustActions}>
            <Link href="#contact" className="btn btn-primary">
              Discuter d&apos;un projet
            </Link>
            <Link href="#services" className="btn btn-ghost">
              Voir mes services
            </Link>
          </div>
        </div>

        <div className={styles.trustPanel}>
          <div className={styles.trustStats}>
            {stats.map((item) => (
              <div key={item.label} className={styles.trustStat}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.trustReasons}>
            {reasons.map((reason) => (
              <div key={reason}>
                <span aria-hidden="true" />
                {reason}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
