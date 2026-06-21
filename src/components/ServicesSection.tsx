import styles from "./services-section.module.css";

interface ServiceCard {
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    title: "Site Vitrine Premium",
    description:
      "Un site élégant, rapide et optimisé SEO pour présenter votre activité, convaincre vos visiteurs et générer des contacts qualifiés. Conçu pour convertir dès les premières secondes.",
  },
  {
    title: "Application Web & SaaS",
    description:
      "Du dashboard produit à la plateforme complète, je conçois et développe des interfaces web robustes, scalables et agréables à utiliser, avec authentification, gestion d'état et API intégrées.",
  },
  {
    title: "Application Mobile",
    description:
      "Des apps iOS et Android fluides et performantes, pensées pour l'expérience utilisateur. Du prototype à la publication sur les stores, je gère l'ensemble du cycle de développement mobile.",
  },
  {
    title: "Développement Full-Stack",
    description:
      "Besoin d'un produit complet, de la base de données à l'interface ? Je prends en charge le frontend ET le backend pour livrer une solution cohérente, maintenable et prête à scaler.",
  },
  {
    title: "Maintenance & Évolution",
    description:
      "Votre produit est en ligne mais évolue ? Je prends en charge la maintenance, les corrections de bugs, les mises à jour techniques et l'ajout de nouvelles fonctionnalités sur des bases existantes.",
  },
  {
    title: "Audit & Conseil Frontend",
    description:
      "Votre interface est lente, incohérente ou difficile à maintenir ? Je réalise un audit complet de votre codebase et de votre UX, avec un rapport de recommandations priorisées et actionnables.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Expertises</span>
          <h2>Ce que je fais, et comment je l&apos;aborde.</h2>
          <p>
            Une intervention front-end calibrée pour des équipes produit qui
            veulent avancer vite, sans rien lâcher sur le niveau
            d&apos;exécution.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, i) => (
            <div key={i} className={styles.serviceCard}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
