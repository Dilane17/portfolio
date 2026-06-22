import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { getProjectBySlug, getProjectSlugs } from "@/lib/portfolio";
import styles from "./case-study.module.css";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const repoInsights: Record<
  string,
  {
    heroLead: string;
    context: string[];
    before: string[];
    after: string[];
    aside: string[];
  }
> = {
  "ares-drive": {
    heroLead:
      "Ares Drive est une plateforme de location de véhicules premium construite comme un produit complet : vitrine, catalogue, fiches véhicules, tunnel de réservation, API, notifications et back-office administrateur.",
    context: [
      "Le dépôt montre une architecture Next.js 15 structurée autour de zones métier distinctes : homepage, catalogue, fiches véhicules, réservation, administration protégée et API de réservation.",
      "Le besoin allait au-delà d'une simple page marketing. Le produit devait séduire côté client, gérer des médias haut de gamme via Cloudinary, enregistrer les demandes dans Supabase et prévenir l'équipe par email avec Resend.",
      "Le flux de réservation a été pensé pour ne pas bloquer l'utilisateur : WhatsApp s'ouvre immédiatement, tandis que l'API persiste la demande et déclenche l'email administrateur côté serveur.",
    ],
    before: [
      "Une simple vitrine n'aurait pas suffi à gérer les véhicules, les disponibilités et les demandes.",
      "Le parcours client pouvait perdre en fluidité si la réservation attendait trop de traitements serveur.",
      "Sans back-office, chaque mise à jour de véhicule ou d'image aurait dépendu du code.",
    ],
    after: [
      "Un catalogue filtrable et des fiches véhicules détaillées structurent la découverte.",
      "Un tunnel de réservation relie l'intention client à Supabase, WhatsApp et Resend.",
      "Un admin protégé permet de gérer véhicules, images, disponibilités et demandes.",
    ],
    aside: [
      "Architecture App Router avec séparation homepage, catalogue, réservation et admin.",
      "Back-office protégé par Supabase Auth et middleware.",
      "Flux métier complet : Supabase, Cloudinary, Resend, WhatsApp et Playwright.",
    ],
  },
  "asmi-transfert": {
    heroLead:
      "ASMI Transfert est une landing fintech conçue pour présenter une solution de transfert de fonds entre l'Afrique et l'Europe avec un message clair, une identité forte et une expérience rassurante.",
    context: [
      "Le README décrit une landing page Next.js avec sections complètes : navbar, hero, statistiques, services, process, sécurité, témoignages, FAQ, CTA download et footer.",
      "Le travail reposait sur une direction de marque marquée : rouge principal, bleu secondaire, section sécurité sombre, typographie Karst et composants réutilisables.",
      "L'enjeu principal était la confiance. Dans une expérience fintech, la hiérarchie du message, la sécurité perçue, les animations et les finitions SEO comptent autant que le rendu visuel.",
    ],
    before: [
      "Une promesse fintech peut paraître fragile si le discours, la sécurité et les CTA ne sont pas immédiatement lisibles.",
      "Un design trop décoratif aurait nui à la compréhension d'un service financier.",
      "Sans système visuel cohérent, chaque section aurait donné une impression différente.",
    ],
    after: [
      "Un parcours marketing complet rend la proposition plus claire et rassurante.",
      "Les sections sécurité, process, FAQ et témoignages renforcent la crédibilité.",
      "Framer Motion, SEO, Open Graph et optimisation d'images donnent une finition production.",
    ],
    aside: [
      "Landing page production ready avec sections marketing complètes.",
      "Direction visuelle documentée : rouge, bleu, noir, blanc et typographie Karst.",
      "Animations Framer Motion, SEO, accessibilité et micro-interactions.",
    ],
  },
  "atelier-bossart": {
    heroLead:
      "Atelier Bossart est une vitrine éditoriale pour un studio audiovisuel, pensée pour valoriser une identité créative, présenter les services et guider vers la prise de contact.",
    context: [
      "Le repo privé confirme une base Next.js 14 avec TypeScript, Tailwind CSS et Lucide React. La case study s'appuie aussi sur les captures et les données déjà présentes dans le portfolio.",
      "Le projet demandait un équilibre entre narration de marque, présentation claire des services, galerie de réalisations et expérience responsive.",
      "L'objectif était de créer une présence digitale plus premium pour un studio créatif sans perdre la lisibilité business.",
    ],
    before: [
      "Un studio audiovisuel peut vite paraître générique si son site ne porte pas son univers visuel.",
      "Une galerie mal structurée rend les réalisations difficiles à explorer.",
      "Sans architecture simple, la vitrine devient difficile à faire évoluer.",
    ],
    after: [
      "Une homepage éditoriale installe rapidement l'ambiance du studio.",
      "Les services, réalisations, témoignages et contacts sont organisés en séquences lisibles.",
      "Une base Next.js, TypeScript et Tailwind rend le site plus simple à maintenir.",
    ],
    aside: [
      "Site vitrine éditorial construit avec Next.js, TypeScript et Tailwind.",
      "Usage de Lucide React pour une iconographie légère et cohérente.",
      "Positionnement premium adapté à un studio audiovisuel.",
    ],
  },
  "mayylo": {
    heroLead:
      "Mayylo est un service d'e-mails professionnels conçu pour les PME d'Afrique francophone — une alternative simple à Gmail pour les entreprises qui veulent une adresse sérieuse, gérée en quelques minutes, payée en Mobile Money. J'ai réalisé la landing page de conversion complète : de la structure d'information à l'intégration finale, en passant par le formulaire de capture et l'optimisation pour la conversion.",
    context: [
      "HustlerLabs construisait Mayylo pour répondre à un problème réel sur le marché africain : des milliers de PME utilisent encore des adresses Gmail pour leur communication professionnelle, ce qui nuit à leur crédibilité face aux clients et fournisseurs. Le service devait être simple, rapide à activer, et payable sans carte bancaire.",
      "Avant le lancement officiel, il fallait une page capable de collecter des inscriptions à une liste d'attente — assez convaincante pour que des prospects s'inscrivent à un service qui n'existe pas encore."
    ],
    before: [
      "Expliquer clairement le problème que Mayylo résout (adresse Gmail = manque de crédibilité professionnelle)",
      "Différencier le service des alternatives existantes sur le marché africain (paiement Mobile Money, support WhatsApp en français, activation rapide sans compétence technique)",
      "Inciter à l'inscription à une liste d'attente — une action à friction plus élevée qu'un simple achat"
    ],
    after: [
      "Page de conversion complète livrée et déployée",
      "Formulaire de capture fonctionnel avec qualification des inscrits (besoin principal, taille d'équipe, pays)",
      "Architecture d'information orientée conversion de A à Z",
      "Expérience adaptée au marché cible (Mobile Money, WhatsApp, français)"
    ],
    aside: []
  },
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: ProjectPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projet introuvable | Clovis Ahouandjinou",
    };
  }

  return {
    title: `${project.title} | Case Study — Clovis Ahouandjinou`,
    description: project.summary,
    alternates: {
      canonical: `https://www.dylan-dev.me/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Case Study — Clovis Ahouandjinou`,
      description: project.summary,
      url: `https://www.dylan-dev.me/projects/${slug}`,
      type: "website",
      locale: "fr_FR",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${project.title} - Case Study | Clovis Ahouandjinou`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study — Clovis Ahouandjinou`,
      description: project.summary,
      images: ["/og-image.png"],
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const heroShot = project.screenshots?.[0];
  const content = repoInsights[slug];

  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `https://www.dylan-dev.me/projects/${slug}`,
    author: { "@id": "https://www.dylan-dev.me/#person" },
    inLanguage: "fr",
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      {/* Effet ambiant */}
      <div className={styles.ambientBlobs} aria-hidden="true">
        <div className={`${styles.blob} ${styles.blobGreen}`} />
        <div className={`${styles.blob} ${styles.blobSteel}`} />
      </div>

      <Navbar isProjectPage />

      <div className="container">
        {/* Header de page centré */}
        <header className={styles.header}>
          <span className="eyebrow">{project.eyebrow}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.metaList}>
            <span>Client : {project.company || "Interne"}</span>
            <span className={styles.metaSeparator}>|</span>
            <span>Durée : {project.timeline}</span>
            <span className={styles.metaSeparator}>|</span>
            <span>Rôle : {project.role}</span>
            <span className={styles.metaSeparator}>|</span>
            <span>Stack : {project.techStack.slice(0, 3).join(", ")}</span>
          </div>
        </header>

        {/* Hero Image Pleine Largeur */}
        {heroShot && (
          <ScrollReveal>
            <div className={styles.heroImageWrapper}>
              <Image
                src={heroShot.src}
                alt={heroShot.alt}
                width={1200}
                height={750}
                className={styles.heroImage}
                priority
              />
            </div>
          </ScrollReveal>
        )}

        {/* Corps Editorial Aligné à gauche */}
        <article className={styles.articleBody}>
          <ScrollReveal>
            <p className={styles.lead}>{content.heroLead}</p>
          </ScrollReveal>

          <ScrollReveal>
            <h2>Le contexte</h2>
            {content.context.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </ScrollReveal>

          <ScrollReveal>
            <h2>Le problème</h2>
            <p>{project.problem}</p>
            <ul>
              {content.before.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2>La démarche</h2>
            <p>{project.solution}</p>
            <div style={{ marginTop: "32px" }}>
              {project.process.map((step) => (
                <div key={step.title} className={styles.step}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2>Le résultat</h2>
            <ul>
              {project.impact.map((imp) => (
                <li key={imp.label}>
                  <strong className={styles.resultLabel}>{imp.label} :</strong> {imp.value}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </article>

        {/* Images Secondaires Pleine Largeur */}
        {project.screenshots && project.screenshots.length > 1 && (
          <div style={{ marginTop: "64px" }}>
            {project.screenshots.slice(1).map((shot, index) => (
              <ScrollReveal key={index}>
                <div className={styles.heroImageWrapper}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1200}
                    height={750}
                    className={styles.heroImage}
                  />
                  {shot.caption && (
                    <p className={styles.imageCaption}>{shot.caption}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Navigation de fin de page */}
        <footer className={styles.footerNav}>
          <Link href="/#projects" className="btn btn-ghost">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "8px" }}
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Retour aux projets
          </Link>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-green">
              Visiter le site
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginLeft: "8px" }}
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          )}
        </footer>
      </div>
    </main>
  );
}
