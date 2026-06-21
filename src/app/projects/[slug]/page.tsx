import type { Metadata } from "next";
import Link from "next/link";
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
    title: `${project.title} | Case Study`,
    description: project.summary,
    alternates: {
      canonical: `https://www.dylan-dev.me/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.summary,
      type: "website",
      locale: "fr_FR",
      images: [
        {
          url: `/case-studies/${slug}/og.png`,
          width: 1200,
          height: 630,
          alt: `${project.title} — Case Study | Clovis Ahouandjinou`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study`,
      description: project.summary,
      images: [`/case-studies/${slug}/og.png`],
    },
  };
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
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
  const quickRead = [
    { label: "Problème", text: project.problem },
    { label: "Solution", text: project.solution },
    {
      label: "Impact",
      text: project.impact
        .map((item) => `${item.label} : ${item.value}`)
        .join(" · "),
    },
  ];

  return (
    <main className={styles.page}>
      <Navbar isProjectPage />

      <div className="container">
        <section className={styles.hero}>
          <ScrollReveal className={styles.heroContent}>
            <Link href="/#projects" className={styles.backLink}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Retour aux projets
            </Link>

            <div className="badge">
              <span className="badge-dot" />
              {project.eyebrow}
            </div>

            <h1 className={styles.title}>
              {project.title}, une case study{" "}
              <span className="accent-word">produit</span>.
            </h1>

            <p className={styles.lead}>{content.heroLead}</p>

            <div className={styles.heroActions}>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Voir le site
                  <ExternalIcon />
                </a>
              ) : null}
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Voir le dépôt
                  <ExternalIcon />
                </a>
              ) : null}
            </div>
          </ScrollReveal>

          <ScrollReveal className={styles.projectPanel} delay={120}>
            <div className={styles.panelLabel}>Résumé projet</div>
            <dl className={styles.metaList}>
              <div>
                <dt>Rôle</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>{project.timeline}</dd>
              </div>
              <div>
                <dt>Équipe</dt>
                <dd>{project.team}</dd>
              </div>
              <div>
                <dt>Statut</dt>
                <dd>{project.status}</dd>
              </div>
            </dl>

            <div className={styles.panelLabel}>Stack</div>
            <div className={styles.techStack}>
              {project.techStack.map((tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {heroShot ? (
          <ScrollReveal className={styles.visualHero}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroShot.src}
              alt={heroShot.alt}
              className={styles.heroImage}
            />
            <p>{heroShot.caption}</p>
          </ScrollReveal>
        ) : null}

        <ScrollReveal className={styles.quickRead}>
          {quickRead.map((item) => (
            <article key={item.label} className={styles.quickCard}>
              <span>{item.label}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </ScrollReveal>

        <section className={styles.contentGrid}>
          <div className={styles.story}>
            <ScrollReveal className={styles.sectionBlock}>
              <div className="badge">
                <span className="badge-dot" />
                Contexte
              </div>
              <h2>Le point de départ.</h2>
              {content.context.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </ScrollReveal>

            <ScrollReveal className={styles.sectionBlock} delay={80}>
              <div className="badge">
                <span className="badge-dot" />
                Process
              </div>
              <h2>Une démarche en trois temps.</h2>
              <div className={styles.timeline}>
                {project.process.map((step, index) => (
                  <article key={step.title} className={styles.timelineItem}>
                    <span>{String(index + 1).padStart(2, "0")} · Process</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className={styles.sectionBlock} delay={120}>
              <div className="badge">
                <span className="badge-dot" />
                Livrables
              </div>
              <h2>Ce qui a réellement été livré.</h2>
              <div className={styles.cardsGrid}>
                {project.deliverables.map((item, index) => (
                  <article key={item} className={styles.sectionCard}>
                    <h3>{item}</h3>
                    <p>
                      {project.deliverableDescriptions?.[index] ??
                        "Livrable concret réalisé sur le projet."}
                    </p>
                  </article>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className={styles.sectionBlock} delay={140}>
              <div className="badge">
                <span className="badge-dot" />
                Décisions
              </div>
              <h2>Les choix qui donnent du niveau au produit.</h2>
              <div className={styles.cardsGrid}>
                {project.technicalDecisions.map((decision) => (
                  <article key={decision.title} className={styles.sectionCard}>
                    <h3>{decision.title}</h3>
                    <p>{decision.description}</p>
                  </article>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className={styles.beforeAfter} delay={180}>
              <article>
                <span>Avant</span>
                <h3>Une expérience correcte, mais difficile à défendre.</h3>
                <ul>
                  {content.before.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article>
                <span>Après</span>
                <h3>
                  Une interface claire, crédible et plus simple à faire évoluer.
                </h3>
                <ul>
                  {content.after.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          </div>

          <aside className={styles.stickyAside}>
            <div className={styles.asideCard}>
              <div className={styles.panelLabel}>À retenir</div>
              <div className={styles.asideList}>
                {content.aside.map((item) => (
                  <div key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <ScrollReveal className={styles.results}>
          <div className={styles.sectionHeader}>
            <div className="badge">
              <span className="badge-dot" />
              Résultats
            </div>
            <h2>Ce que la refonte doit prouver.</h2>
            <p>{project.summary}</p>
          </div>

          <div className={styles.metricsGrid}>
            {project.impact.map((item) => (
              <article key={item.label} className={styles.metricCard}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <div className={styles.outcomesCard}>
            <h3>Résultats qualitatifs</h3>
            <div className={styles.asideList}>
              {project.outcomes.map((outcome) => (
                <div key={outcome}>
                  <CheckIcon />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
            <p>
              <strong>Étape suivante :</strong> {project.nextSteps}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className={styles.gallerySection}>
          <div className={styles.sectionHeader}>
            <div className="badge">
              <span className="badge-dot" />
              Interface
            </div>
            <h2>Quelques écrans clés.</h2>
            <p>
              Les captures montrent les choix de direction, de hiérarchie et de
              parcours qui structurent le projet.
            </p>
          </div>

          <div className={styles.galleryGrid}>
            {project.screenshots.filter(Boolean).map((item, index) => (
              <figure
                key={`${item!.src}-${index}`}
                className={styles.galleryCard}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item!.src}
                  alt={item!.alt}
                  className={styles.galleryImage}
                />
                <figcaption>{item!.caption}</figcaption>
              </figure>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className={styles.ctaCard}>
          <div>
            <span>Projet suivant</span>
            <h2>
              Vous voulez une page projet aussi claire pour votre produit ?
            </h2>
            <p>
              Je peux vous aider à transformer une idée, une vitrine ou une
              application existante en produit plus clair, plus crédible et plus
              simple à maintenir.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <Link href="/#contact" className="btn btn-green">
              Me contacter
            </Link>
            <Link href="/#projects" className="btn btn-ghost">
              Voir les autres projets
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
