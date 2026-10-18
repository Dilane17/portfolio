export type LandingPage = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  lastModified: string;
  highlights: { title: string; text: string }[];
  serviceTitles: string[];
  projectSlugs: string[];
  faqQuestions: string[];
  ctaLabel: string;
  related: string;
};

export const landingPages: LandingPage[] = [
  {
    slug: "developpeur-nextjs-freelance-europe-afrique",
    seoTitle: "Développeur Next.js freelance en remote | Europe & Afrique",
    seoDescription:
      "Clovis Ahouandjinou, développeur Next.js et React freelance basé à Cotonou. Interfaces SaaS et fintech en remote pour l'Europe francophone et l'Afrique.",
    eyebrow: "Freelance React & Next.js",
    h1: "Développeur Next.js freelance, en remote pour l'Europe francophone et l'Afrique",
    lead: "Je suis Clovis Ahouandjinou, développeur front-end freelance basé à Cotonou (Bénin). Je transforme une idée, une maquette ou un produit existant en interface React et Next.js solide, claire à utiliser et propre à maintenir, pour des startups, des équipes produit SaaS et des PME en Europe francophone comme en Afrique.",
    lastModified: "2026-10-18",
    highlights: [
      {
        title: "100 % remote, sans contrainte géographique",
        text: "Je travaille intégralement en remote depuis Cotonou. Tous les échanges se font par visio, email ou messagerie selon votre préférence.",
      },
      {
        title: "Un fuseau horaire proche du vôtre",
        text: "Cotonou est à UTC+1, soit l'heure de Paris en hiver et une heure de moins en été. Les plages de travail commun avec l'Europe francophone sont donc larges.",
      },
      {
        title: "Une expérience Afrique et Europe",
        text: "J'ai conçu une landing page fintech de transfert de fonds entre l'Afrique et l'Europe (ASMI Transfert) et un site pour un studio audiovisuel entre Cotonou et Paris (Atelier Bossart).",
      },
      {
        title: "Réponse en 24 h en moyenne",
        text: "Un cadrage clair avant de partir en développement, puis des points réguliers et des livrables intermédiaires.",
      },
    ],
    serviceTitles: [
      "Application Web & SaaS",
      "Développement Full-Stack",
      "Site Vitrine Premium",
      "Maintenance & Évolution",
      "Audit & Conseil Frontend",
    ],
    projectSlugs: ["asmi-transfert", "atelier-bossart", "ares-drive", "mayylo"],
    faqQuestions: [
      "Travaillez-vous uniquement en remote ?",
      "Combien coûte un projet ?",
      "Combien de temps faut-il pour livrer un projet ?",
      "Comment se déroule une collaboration concrètement ?",
      "Est-ce que vous travaillez sur des projets déjà existants ?",
    ],
    ctaLabel: "Discuter de votre projet",
    related: "creation-site-vitrine-landing-page-freelance",
  },
  {
    slug: "creation-site-vitrine-landing-page-freelance",
    seoTitle: "Création de site vitrine et landing page Next.js | Freelance",
    seoDescription:
      "Site vitrine ou landing page Next.js rapide, optimisé SEO et pensé pour convertir. Livraison en 1 à 3 semaines, par un développeur freelance basé à Cotonou.",
    eyebrow: "Site vitrine & landing page",
    h1: "Création de site vitrine et de landing page Next.js, sur mesure",
    lead: "Un site élégant, rapide et optimisé SEO pour présenter votre activité, convaincre vos visiteurs et générer des contacts qualifiés. Je conçois et développe votre site vitrine ou votre landing page de conversion en Next.js, depuis Cotonou, pour des clients en Europe francophone et en Afrique.",
    lastModified: "2026-10-18",
    highlights: [
      {
        title: "Conçu pour convertir dès les premières secondes",
        text: "Hiérarchie du message claire, appels à l'action visibles et interface responsive, du mobile au grand écran.",
      },
      {
        title: "SEO technique intégré par défaut",
        text: "Métadonnées structurées, Open Graph, sitemap, performance optimisée et balisage sémantique sont inclus dans tous mes projets web.",
      },
      {
        title: "Livraison en 1 à 3 semaines",
        text: "Un site vitrine peut être livré en 1 à 3 semaines. Je vous donne une estimation précise dès la phase de cadrage et je respecte les délais annoncés.",
      },
      {
        title: "Autonome après la livraison",
        text: "Si votre projet nécessite une interface d'administration, je l'intègre dès la conception, avec une documentation claire et une prise en main.",
      },
    ],
    serviceTitles: [
      "Site Vitrine Premium",
      "Application Web & SaaS",
      "Maintenance & Évolution",
      "Audit & Conseil Frontend",
    ],
    projectSlugs: ["mayylo", "asmi-transfert", "atelier-bossart"],
    faqQuestions: [
      "Combien coûte un projet ?",
      "Combien de temps faut-il pour livrer un projet ?",
      "Vous occupez-vous aussi du SEO ?",
      "Puis-je gérer mon site moi-même après la livraison ?",
      "Proposez-vous de la maintenance après livraison ?",
    ],
    ctaLabel: "Demander un devis",
    related: "developpeur-nextjs-freelance-europe-afrique",
  },
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
