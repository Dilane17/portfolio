import {
  Monitor,
  LayoutDashboard,
  Smartphone,
  Server,
  Wrench,
  Search,
} from "lucide-react";
import styles from "./services-section.module.css";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const services: ServiceCard[] = [
  {
    icon: <Monitor size={22} />,
    title: "Site Vitrine Premium",
    description:
      "Un site élégant, rapide et optimisé SEO pour présenter votre activité, convaincre vos visiteurs et générer des contacts qualifiés. Conçu pour convertir dès les premières secondes.",
    tags: ["Next.js", "Design System", "SEO", "Responsive"],
  },
  {
    icon: <LayoutDashboard size={22} />,
    title: "Application Web & SaaS",
    description:
      "Du dashboard produit à la plateforme complète — je conçois et développe des interfaces web robustes, scalables et agréables à utiliser, avec authentification, gestion d'état et API intégrées.",
    tags: ["React", "TypeScript", "API REST", "Auth"],
  },
  {
    icon: <Smartphone size={22} />,
    title: "Application Mobile",
    description:
      "Des apps iOS et Android fluides et performantes, pensées pour l'expérience utilisateur. Du prototype à la publication sur les stores, je gère l'ensemble du cycle de développement mobile.",
    tags: ["Flutter", "Dart", "iOS", "Android"],
  },
  {
    icon: <Server size={22} />,
    title: "Développement Full-Stack",
    description:
      "Besoin d'un produit complet, de la base de données à l'interface ? Je prends en charge le frontend ET le backend pour livrer une solution cohérente, maintenable et prête à scaler.",
    tags: ["NestJS", "PostgreSQL", "Next.js", "TypeScript"],
  },
  {
    icon: <Wrench size={22} />,
    title: "Maintenance & Évolution",
    description:
      "Votre produit est en ligne mais évolue ? Je prends en charge la maintenance, les corrections de bugs, les mises à jour techniques et l'ajout de nouvelles fonctionnalités sur des bases existantes.",
    tags: ["Audit", "Refacto", "Tests", "CI/CD"],
  },
  {
    icon: <Search size={22} />,
    title: "Audit & Conseil Frontend",
    description:
      "Votre interface est lente, incohérente ou difficile à maintenir ? Je réalise un audit complet de votre codebase et de votre UX, avec un rapport de recommandations priorisées et actionnables.",
    tags: ["Performance", "A11y", "Code Review", "UX"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <div className="badge">
            <span className="badge-dot" />
            Services
          </div>
          <h2>Ce que je fais — et comment je l&apos;aborde.</h2>
          <p>
            Une intervention front-end calibrée pour des équipes produit qui
            veulent avancer vite, sans rien lâcher sur le niveau
            d&apos;exécution.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, i) => (
            <div key={i} className={styles.serviceCard}>
              <div className={styles.cardTopRow}>
                <div className={styles.iconWrap}>{service.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <div className={styles.tagList}>
                {service.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
