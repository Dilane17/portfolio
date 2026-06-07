import styles from "@/app/page.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className="section section-soft">
      <div className="container">
        <div className={styles.contactCard}>
          <div className={styles.contactCardLeft}>
            <div className="badge">
              <span className="badge-dot" />
              Contact
            </div>
            <h3>
              Un projet en tête ?{" "}
              <span className="accent-word">Parlons-en.</span>
            </h3>
            <p>
              Décrivez en quelques lignes ce que vous voulez construire, le
              contexte produit et les contraintes. Je reviens vers vous sous 24
              heures avec une première lecture.
            </p>
          </div>

          <div className={styles.contactCardActions}>
            <a
              href="mailto:clovis_dylan@icloud.com"
              className="btn btn-primary"
            >
              clovis_dylan@icloud.com
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
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="/cv-clovis-dylan.pdf"
              download="CV-Clovis-Dylan-Frontend.pdf"
              className="btn btn-ghost"
            >
              Télécharger le CV
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
