import styles from "@/app/page.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className="section container">
      <div className="section-heading">
        <div className="badge"><span className="badge-dot" />Contact</div>
        <h2>Parlons de votre prochain produit</h2>
        <p>
          Si vous cherchez un développeur frontend capable d&apos;élever la qualité
          perçue d&apos;un produit sans sacrifier la vitesse d&apos;exécution, on a déjà une bonne base pour échanger.
        </p>
      </div>

      <div className={styles.contactCard}>
        <div className={styles.contactCardLeft}>
          <h3>Email</h3>
          <p>Un message simple, un besoin clair, et je vous réponds rapidement.</p>
        </div>
        <a
          href="mailto:clovis.dylan@example.com"
          className="btn btn-primary"
          style={{ borderRadius: "12px" }}
        >
          clovis.dylan@example.com
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
