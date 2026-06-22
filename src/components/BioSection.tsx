import styles from "./bio-section.module.css";

export default function BioSection() {
  return (
    <section id="about" className="section container">
      <div className={styles.bioGrid}>
        
        {/* Avatar Zone (~35%) */}
        <div className={styles.avatarWrapper}>
          <div className={styles.avatar}>
            CD
          </div>
        </div>

        {/* Text Zone (~65%) */}
        <div className={styles.textContent}>
          <span className={styles.eyebrowLocal}>
            QUI SUIS-JE ?
          </span>
          <h2 className={styles.title}>
            Développeur par passion, entrepreneur par nécessité.
          </h2>
          
          <p className={styles.paragraph}>
            Je m&apos;appelle Clovis Ahouandjinou (Dylan pour ceux qui me connaissent en ligne), développeur front-end basé en Afrique de l&apos;Ouest. Mon parcours mélange une formation académique en informatique et un apprentissage autodidacte poussé — Grafikart a posé une bonne partie de mes bases en développement web.
          </p>
          
          <p className={styles.paragraph}>
            Ce qui me motive, c&apos;est le point de rencontre entre deux choses : des interfaces qui résolvent de vrais problèmes business, et une expérience utilisateur soignée jusqu&apos;au moindre détail. Un produit qui marche mais qui est moche ne suffit pas. Un produit beau mais qui ne convertit pas non plus.
          </p>

          <p className={styles.paragraph}>
            En dehors des projets clients, je co-fonde <strong className={styles.highlight}>HustlerLabs</strong>, où je développe mes propres produits SaaS — comme Covaulty, une plateforme de collecte d&apos;épargne journalière pour les institutions de microfinance, ou FlowTrack, une app de suivi financier personnel. Ça me garde connecté aux deux côtés du métier : livrer pour un client, et porter un produit de A à Z.
          </p>
        </div>

      </div>
    </section>
  );
}
