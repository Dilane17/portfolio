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
      title: "Projet introuvable | Clovis Dylan",
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
          alt: `${project.title} — Case Study | Clovis Dylan`,
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

  return (
    <main className={styles.page}>
      <Navbar isProjectPage />

      <div className="container">
        <section className={styles.hero}>
          <ScrollReveal className={styles.heroCard}>
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

            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              {project.eyebrow}
            </div>

            <h1 className={styles.title}>
              {project.title}{" "}
              <span className={styles.titleAccent}>en profondeur.</span>
            </h1>

            <p className={styles.tagline}>{project.tagline}</p>
            <p className={styles.summary}>{project.summary}</p>

            <div className={styles.projectLinks}>
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Voir le dépôt GitHub
                  <ExternalIcon />
                </a>
              ) : null}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Voir la version en ligne
                  <ExternalIcon />
                </a>
              ) : null}
            </div>

            {project.screenshots?.[0] ? (
              <div className={styles.heroImageWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.screenshots[0].src}
                  alt={project.screenshots[0].alt}
                  className={styles.heroImage}
                />
                <div className={styles.heroImageCaption}>
                  {project.screenshots[0].caption}
                </div>
              </div>
            ) : null}

            <div className={styles.heroMeta}>
              <div className={styles.metaItem}>
                <div className={styles.metaLabel}>Rôle</div>
                <div className={styles.metaValue}>{project.role}</div>
              </div>
              <div className={styles.metaItem}>
                <div className={styles.metaLabel}>Durée</div>
                <div className={styles.metaValue}>{project.timeline}</div>
              </div>
              <div className={styles.metaItem}>
                <div className={styles.metaLabel}>Équipe</div>
                <div className={styles.metaValue}>{project.team}</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className={styles.sideCard} delay={120}>
            <div className={styles.sideLabel}>Impact attendu</div>
            <div className={styles.impactGrid}>
              {project.impact.map((item) => (
                <div key={item.label} className={styles.impactItem}>
                  <div className={styles.impactValue}>{item.value}</div>
                  <div className={styles.impactLabel}>{item.label}</div>
                </div>
              ))}
            </div>

            <div className={styles.sideLabel}>Statut</div>
            <div className={styles.sectionCard}>
              <div className={styles.cardText}>{project.status}</div>
            </div>

            <div className={styles.sideLabel}>Stack mobilisée</div>
            <div className={styles.techStack}>
              {project.techStack.map((tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <ScrollReveal className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className="badge">
              <span className="badge-dot" />
              Le contexte
            </div>
            <h2 className={styles.sectionTitle}>Le problème à résoudre</h2>
            <p className={styles.sectionIntro}>{project.problem}</p>
          </div>

          <div className={styles.twoColGrid}>
            <div className={styles.sectionCard}>
              <h3 className={styles.cardTitle}>Objectifs produit</h3>
              <div className={styles.list}>
                {project.goals.map((goal) => (
                  <div key={goal} className={styles.listItem}>
                    <CheckIcon />
                    <span>{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.sectionCard}>
              <h3 className={styles.cardTitle}>Contraintes & défis</h3>
              <div className={styles.list}>
                {project.challenges.map((challenge) => (
                  <div key={challenge} className={styles.listItem}>
                    <CheckIcon />
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className={styles.section} delay={80}>
          <div className={styles.sectionHeader}>
            <div className="badge">
              <span className="badge-dot" />
              Ce que j&apos;ai livré
            </div>
            <h2 className={styles.sectionTitle}>
              Des livrables concrets, pas juste une intention
            </h2>
            <p className={styles.sectionIntro}>
              Cette mission peut être lue comme un ensemble de décisions et de
              livrables visibles, pas comme une promesse vague.
            </p>
          </div>

          <div className={styles.cardsGrid}>
            {project.deliverables.map((item, idx) => (
              <div key={item} className={styles.sectionCard}>
                <span className={styles.cardEyebrow}>Livrable</span>
                <h3 className={styles.cardTitle}>{item}</h3>
                <p className={styles.cardText}>
                  {project.deliverableDescriptions?.[idx] ??
                    "Un bloc de travail tangible qui montre mon niveau d\u2019intervention sur le produit, l\u2019interface et la structure globale du projet."}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className={styles.section} delay={120}>
          <div className={styles.sectionHeader}>
            <div className="badge">
              <span className="badge-dot" />
              Ma réponse
            </div>
            <h2 className={styles.sectionTitle}>
              Comment j&apos;ai structuré la solution
            </h2>
            <p className={styles.sectionIntro}>{project.solution}</p>
          </div>

          <div className={styles.cardsGrid}>
            {project.process.map((step) => (
              <div key={step.title} className={styles.sectionCard}>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardText}>{step.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className={styles.section} delay={180}>
          <div className={styles.sectionHeader}>
            <div className="badge">
              <span className="badge-dot" />
              Décisions techniques
            </div>
            <h2 className={styles.sectionTitle}>Des choix pensés pour durer</h2>
            <p className={styles.sectionIntro}>
              Au-delà du rendu visuel, l&apos;objectif était de construire une
              base claire, maintenable et crédible pour l&apos;équipe.
            </p>
          </div>

          <div className={styles.cardsGrid}>
            {project.technicalDecisions.map((decision) => (
              <div key={decision.title} className={styles.sectionCard}>
                <h3 className={styles.cardTitle}>{decision.title}</h3>
                <p className={styles.cardText}>{decision.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {project.screenshots.length > 1 ? (
          <ScrollReveal className={styles.section} delay={220}>
            <div className={styles.sectionHeader}>
              <div className="badge">
                <span className="badge-dot" />
                Visuels
              </div>
              <h2 className={styles.sectionTitle}>
                Structure prête pour les captures
              </h2>
              <p className={styles.sectionIntro}>
                J&apos;ai préparé une galerie branchée sur des assets
                remplaçables. Tu pourras ensuite injecter tes vraies captures en
                gardant exactement la même structure.
              </p>
            </div>

            <div className={styles.galleryGrid}>
              {project.screenshots.slice(1).map((item) => (
                <div key={item.src} className={styles.galleryCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={styles.galleryImage}
                  />
                  <div className={styles.galleryCaption}>{item.caption}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        ) : null}

        <ScrollReveal className={styles.section} delay={240}>
          <div className={styles.sectionHeader}>
            <div className="badge">
              <span className="badge-dot" />
              Preuves publiques
            </div>
            <h2 className={styles.sectionTitle}>
              Ce qu&apos;un recruteur peut vérifier
            </h2>
            <p className={styles.sectionIntro}>
              J&apos;ai volontairement cadré ces projets avec des éléments
              observables publiquement pour rester professionnel et crédible.
            </p>
          </div>

          <div className={styles.proofGrid}>
            <div className={styles.sectionCard}>
              <h3 className={styles.cardTitle}>Preuves publiques</h3>
              <div className={styles.list}>
                {project.proofPoints.map((item) => (
                  <div key={item} className={styles.listItem}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.sectionCard}>
              <h3 className={styles.cardTitle}>Ce qu&apos;il faut retenir</h3>
              <div className={styles.list}>
                {project.recruiterTakeaways.map((item) => (
                  <div key={item} className={styles.listItem}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.noteCard}>
            <h3 className={styles.noteTitle}>Note de présentation</h3>
            <p className={styles.noteText}>{project.publicNote}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal className={styles.section} delay={280}>
          <div className={styles.sectionHeader}>
            <div className="badge">
              <span className="badge-dot" />
              Résultats
            </div>
            <h2 className={styles.sectionTitle}>
              Ce que cette approche apporte
            </h2>
            <p className={styles.sectionIntro}>
              Une bonne case study ne montre pas seulement ce qui a été fait,
              mais ce que cela change pour les utilisateurs et pour
              l&apos;équipe.
            </p>
          </div>

          <div className={styles.metricsGrid}>
            {project.impact.map((item) => (
              <div key={item.label} className={styles.metricCard}>
                <div className={styles.metricValue}>{item.value}</div>
                <div className={styles.metricLabel}>{item.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.sectionCard} style={{ marginTop: "1.25rem" }}>
            <h3 className={styles.cardTitle}>Résultats qualitatifs</h3>
            <div className={styles.list}>
              {project.outcomes.map((outcome) => (
                <div key={outcome} className={styles.listItem}>
                  <CheckIcon />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
            <p className={styles.nextStep}>
              <strong style={{ color: "rgba(255,255,255,0.82)" }}>
                Étape suivante :
              </strong>{" "}
              {project.nextSteps}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className={styles.ctaCard} delay={320}>
          <div>
            <h2 className={styles.ctaTitle}>Ce type de projet vous parle ?</h2>
            <p className={styles.ctaText}>
              Je peux vous aider à clarifier une expérience complexe, renforcer
              la perception de qualité d&apos;un produit et construire une base
              frontend plus fiable pour la suite.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <Link href="/#contact" className="btn btn-primary">
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
