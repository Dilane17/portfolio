import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { services } from "@/components/ServicesSection";
import { faqItems, getProjectBySlug } from "@/lib/portfolio";
import { getLandingPage, landingPages } from "@/lib/landingPages";
import styles from "./landing.module.css";

type LandingPageProps = {
  params: Promise<{ slug: string }>;
};

const SITE_URL = "https://www.dylan-dev.me";

const steps = [
  "Un premier échange pour cadrer votre besoin.",
  "Un devis et un planning détaillés.",
  "Le développement avec des points réguliers et des livrables intermédiaires.",
  "La livraison finale avec tests et mise en production.",
];

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: LandingPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const page = getLandingPage(slug);

  if (!page) {
    return { title: "Page introuvable | Clovis Ahouandjinou" };
  }

  const url = `${SITE_URL}/services/${slug}`;

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url,
      type: "website",
      locale: "fr_FR",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: page.h1,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.seoDescription,
      images: ["/og-image.png"],
    },
  };
}

export default async function LandingPageRoute({ params }: LandingPageProps) {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    notFound();
  }

  const url = `${SITE_URL}/services/${slug}`;
  const pageServices = services.filter((s) =>
    page.serviceTitles.includes(s.title),
  );
  const pageProjects = page.projectSlugs
    .map((projectSlug) => getProjectBySlug(projectSlug))
    .filter((project) => project !== undefined);
  const pageFaq = faqItems.filter((item) =>
    page.faqQuestions.includes(item.question),
  );
  const relatedPage = getLandingPage(page.related);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.seoTitle,
        description: page.seoDescription,
        inLanguage: "fr",
        dateModified: page.lastModified,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${url}#service` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.h1,
        description: page.seoDescription,
        serviceType: page.eyebrow,
        provider: { "@id": `${SITE_URL}/#person` },
        areaServed: ["Europe", "Afrique"],
        availableLanguage: "fr",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: page.eyebrow, item: url },
        ],
      },
    ],
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar isProjectPage />

      <header className={styles.header}>
        <span className="eyebrow">{page.eyebrow}</span>
        <h1 className={styles.title}>{page.h1}</h1>
        <p className={styles.lead}>{page.lead}</p>
        <div className={styles.actions}>
          <Link href="/#contact" className="btn btn-green">
            {page.ctaLabel}
          </Link>
          <Link href="/#projects" className="btn btn-ghost">
            Voir mes réalisations
          </Link>
        </div>
      </header>

      <section className={styles.block}>
        <h2>Pourquoi travailler avec moi</h2>
        <div className={styles.grid}>
          {page.highlights.map((item) => (
            <div key={item.title} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <h2>Ce que je peux faire pour vous</h2>
        <div className={styles.grid}>
          {pageServices.map((service) => (
            <div key={service.title} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <h2>Réalisations</h2>
        <div className={styles.grid}>
          {pageProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={styles.card}
            >
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <h2>Comment se déroule une collaboration</h2>
        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className={`${styles.block} ${styles.faq}`}>
        <h2>Questions fréquentes</h2>
        {pageFaq.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </section>

      <section className={styles.cta}>
        <p>
          Un projet en tête ? Parlons-en : je vous réponds en 24 h en moyenne.
        </p>
        <Link href="/#contact" className="btn btn-green">
          {page.ctaLabel}
        </Link>
        {relatedPage && (
          <p className={styles.related}>
            À lire aussi :{" "}
            <Link href={`/services/${relatedPage.slug}`} className="text-link">
              {relatedPage.eyebrow}
            </Link>
          </p>
        )}
      </section>
    </main>
  );
}
