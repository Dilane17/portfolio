import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { landingPages, getLandingPage } from "@/lib/landingPages";
import styles from "./services-section.module.css";

interface ServiceCard {
  title: string;
  description: string;
  /** Slug of the landing page that details this service. */
  pageSlug?: string;
}

export const services: ServiceCard[] = [
  {
    title: "Site Vitrine Premium",
    pageSlug: "creation-site-vitrine-landing-page-freelance",
    description:
      "Un site élégant, rapide et optimisé SEO pour présenter votre activité, convaincre vos visiteurs et générer des contacts qualifiés. Conçu pour convertir dès les premières secondes.",
  },
  {
    title: "Application Web & SaaS",
    pageSlug: "creation-application-web-saas-sur-mesure",
    description:
      "Du dashboard produit à la plateforme complète, je conçois et développe des interfaces web robustes, scalables et agréables à utiliser, avec authentification, gestion d'état et API intégrées.",
  },
  {
    title: "Application Mobile",
    pageSlug: "developpeur-flutter-application-mobile-freelance",
    description:
      "Des apps iOS et Android fluides et performantes, pensées pour l'expérience utilisateur. Du prototype à la publication sur les stores, je gère l'ensemble du cycle de développement mobile.",
  },
  {
    title: "Développement Full-Stack",
    pageSlug: "developpeur-fullstack-freelance-nestjs-postgresql",
    description:
      "Besoin d'un produit complet, de la base de données à l'interface ? Je prends en charge le frontend ET le backend pour livrer une solution cohérente, maintenable et prête à scaler.",
  },
  {
    title: "Maintenance & Évolution",
    pageSlug: "maintenance-deploiement-application-docker",
    description:
      "Votre produit est en ligne mais évolue ? Je prends en charge la maintenance, les corrections de bugs, les mises à jour techniques et l'ajout de nouvelles fonctionnalités sur des bases existantes.",
  },
  {
    title: "Audit & Conseil Frontend",
    pageSlug: "refonte-optimisation-site-web-nextjs",
    description:
      "Votre interface est lente, incohérente ou difficile à maintenir ? Je réalise un audit complet de votre codebase et de votre UX, avec un rapport de recommandations priorisées et actionnables.",
  },
];

const linkedSlugs = new Set(services.map((s) => s.pageSlug));
const extraPages = landingPages.filter((page) => !linkedSlugs.has(page.slug));

export default function ServicesSection() {
  return (
    <section id="services" className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Expertises</span>
          <h2>Services de développement web et mobile freelance</h2>
          <p>
            Du site vitrine à l&apos;application SaaS ou mobile, une intervention
            calibrée pour avancer vite, sans rien lâcher sur la qualité
            d&apos;exécution. Cliquez sur un service pour le détail.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => {
            const page = service.pageSlug
              ? getLandingPage(service.pageSlug)
              : undefined;
            const content = (
              <>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </>
            );
            return page ? (
              <Link
                key={service.title}
                href={`/services/${page.slug}`}
                className={`${styles.serviceCard} ${styles.cardLink}`}
              >
                {content}
                <span className={styles.cardCta}>
                  En savoir plus <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ) : (
              <div key={service.title} className={styles.serviceCard}>
                {content}
              </div>
            );
          })}
        </div>

        {extraPages.length > 0 && (
          <>
            <h3 className={styles.subHeading}>Selon votre besoin</h3>
            <div className={styles.extraGrid}>
              {extraPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/services/${page.slug}`}
                  className={`${styles.serviceCard} ${styles.cardLink}`}
                >
                  <h3 className={styles.cardTitle}>{page.eyebrow}</h3>
                  <p className={styles.cardDescription}>
                    {page.seoDescription}
                  </p>
                  <span className={styles.cardCta}>
                    En savoir plus <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
