import { portfolioData } from "@/lib/portfolio";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import BioSection from "@/components/BioSection";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

export default function Home() {
  const data = portfolioData;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte un projet ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chaque projet est unique. Je ne propose pas de tarifs fixes. Après un premier échange pour comprendre votre besoin, je vous envoie un devis détaillé avec le périmètre, les délais et le coût. Pas de surprises en cours de route.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps faut-il pour livrer un projet ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La durée dépend de la complexité : un site vitrine peut être livré en 1 à 3 semaines, une application complète peut prendre 4 à 12 semaines. Je vous donne une estimation précise dès la phase de cadrage, et je respecte les délais annoncés.",
        },
      },
      {
        "@type": "Question",
        name: "Travaillez-vous uniquement en remote ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, je travaille intégralement en remote depuis Cotonou (Bénin). Cela me permet d'intervenir pour des clients partout en Afrique francophone et en Europe sans contrainte géographique. Tous les échanges se font par visio, email ou messagerie selon votre préférence.",
        },
      },
      {
        "@type": "Question",
        name: "Proposez-vous de la maintenance après livraison ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Une fois votre projet livré, je reste disponible pour la maintenance, les corrections de bugs et les évolutions. Nous convenons ensemble des modalités selon vos besoins : intervention ponctuelle ou suivi régulier.",
        },
      },
      {
        "@type": "Question",
        name: "Puis-je gérer mon site moi-même après la livraison ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tout à fait. Si votre projet nécessite une interface d'administration, je l'intègre dès la conception. Je vous fournis également une documentation claire et une prise en main si nécessaire, pour que vous soyez autonome.",
        },
      },
      {
        "@type": "Question",
        name: "Comment se déroule une collaboration concrètement ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En 4 étapes : (1) un premier échange pour cadrer votre besoin, (2) un devis et un planning détaillés, (3) le développement avec des points réguliers et des livrables intermédiaires, (4) la livraison finale avec tests et mise en production. Vous êtes impliqué à chaque étape.",
        },
      },
      {
        "@type": "Question",
        name: "Vous occupez-vous aussi du SEO ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, le SEO technique est intégré par défaut dans tous mes projets web : métadonnées structurées, Open Graph, sitemap, performance optimisée et balisage sémantique. Pour un travail SEO plus avancé (contenu, netlinking), je peux vous orienter vers un spécialiste.",
        },
      },
      {
        "@type": "Question",
        name: "Est-ce que vous travaillez sur des projets déjà existants ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Je peux reprendre une base de code existante pour la refactoriser, l'améliorer, corriger des bugs ou ajouter de nouvelles fonctionnalités. Un audit préalable me permet d'évaluer l'état du code et de vous proposer un plan d'intervention réaliste.",
        },
      },
    ],
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <HeroSection />

      <ScrollReveal>
        <BioSection />
      </ScrollReveal>

      {/* About */}
      <ScrollReveal>
        <AboutSection
          approach={data.about.approach}
          metrics={data.about.metrics}
        />
      </ScrollReveal>

      {/* Projects */}
      <section id="projects" className="section container">
        <ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--line)', paddingBottom: '32px', marginBottom: '64px', maxWidth: 'none' }}>
            <div>
              <h2 style={{ marginBottom: 0 }}>Projets Récents</h2>
            </div>
            <a href="#projects" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)' }} className="text-link hidden md:inline-block">
              Voir tout le portfolio
            </a>
          </div>
        </ScrollReveal>

        <div className={styles.projectsGrid}>
          {data.projects.map((p, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <ProjectCard
                index={i}
                slug={p.slug}
                title={p.title}
                company={p.company}
                problem={p.problem}
                solution={p.solution}
                techStack={p.techStack}
                ctaLabel={p.ctaLabel}
                imageSrc={p.screenshots?.[0]?.src}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ScrollReveal>
        <TrustSection />
      </ScrollReveal>

      {/* Services */}
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      {/* Skills */}
      <section id="skills" className="section section-soft">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <span className="eyebrow">STACK TECHNIQUE</span>
              <h2>Stack technique : React, Next.js, TypeScript et plus encore.</h2>
              <p>
                Les outils sur lesquels j&apos;interviens au quotidien,
                sélectionnés parce qu&apos;ils donnent un vrai effet de levier
                sur la qualité d&apos;exécution.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <SkillsSection groups={data.skills} />
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>

      {/* Contact */}
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p className={styles.footerLeft}>
            © {new Date().getFullYear()} Clovis Ahouandjinou. Ingénierie Frontend & Création de Produits SaaS.
          </p>

          <div className={styles.footerSocials}>
            <a href="https://github.com/Dilane17" target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
            <a href="https://x.com/dylankodee" target="_blank" rel="noopener noreferrer">
              X (TWITTER)
            </a>
            <a href="https://comeup.com/dylankode" target="_blank" rel="noopener noreferrer">
              COMEUP
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
