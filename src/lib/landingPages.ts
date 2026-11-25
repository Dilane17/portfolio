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
  /** Slugs of other landing pages to cross-link (internal linking). */
  related: string[];
  /** Keyword-rich long-form sections (h2 + paragraphs) answering the search intent. */
  sections?: { title: string; paragraphs: string[] }[];
  /** Page-specific questions, rendered with the shared FAQ items and in FAQPage JSON-LD. */
  faq?: { question: string; answer: string }[];
  areaServed?: string[];
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
    related: [
      "creation-site-web-benin-cotonou",
      "creation-site-vitrine-landing-page-freelance",
      "developpeur-fullstack-freelance-nestjs-postgresql",
    ],
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
    related: [
      "creation-site-web-benin-cotonou",
      "refonte-optimisation-site-web-nextjs",
      "developpeur-nextjs-freelance-europe-afrique",
    ],
  },
  {
    slug: "creation-site-web-benin-cotonou",
    seoTitle: "Création de site web au Bénin (Cotonou) | Développeur freelance",
    seoDescription:
      "Besoin d'un site web professionnel à Cotonou ou ailleurs au Bénin ? Site vitrine, landing page ou application web sur mesure, rapide et bien référencé sur Google.",
    eyebrow: "Création de site web au Bénin",
    h1: "Création de site web à Cotonou et partout au Bénin, par un développeur freelance",
    lead: "Vous cherchez un développeur web à Cotonou pour créer le site de votre entreprise, de votre startup ou de votre association ? Je suis Clovis Ahouandjinou, développeur freelance basé à Cotonou. Je conçois des sites vitrines, des landing pages et des applications web rapides, lisibles sur mobile et prêtes à être trouvées sur Google.",
    lastModified: "2026-11-25",
    highlights: [
      {
        title: "Un interlocuteur local, dans votre fuseau horaire",
        text: "Basé à Cotonou, je suis facilement joignable pour un rendez-vous en visio ou par messagerie, sans décalage horaire si vous êtes au Bénin ou en Afrique de l'Ouest.",
      },
      {
        title: "Pensé pour le mobile et les connexions variables",
        text: "La majorité de vos visiteurs naviguent sur smartphone. Je soigne le poids des pages et les performances pour que votre site reste rapide, même sur une connexion moyenne.",
      },
      {
        title: "Visible sur Google dès la mise en ligne",
        text: "Balises de titre et de description, données structurées, sitemap et pages rapides : les bases du référencement naturel sont posées dès le développement.",
      },
      {
        title: "Un site que vous pouvez faire évoluer",
        text: "Je construis des sites propres et documentés, pour que vous puissiez les faire évoluer ensuite avec moi ou avec une autre équipe.",
      },
    ],
    serviceTitles: [
      "Site Vitrine Premium",
      "Application Web & SaaS",
      "Maintenance & Évolution",
      "Audit & Conseil Frontend",
    ],
    projectSlugs: ["mayylo", "atelier-bossart", "asmi-transfert"],
    faqQuestions: [
      "Combien coûte un projet ?",
      "Combien de temps faut-il pour livrer un projet ?",
      "Vous occupez-vous aussi du SEO ?",
      "Puis-je gérer mon site moi-même après la livraison ?",
    ],
    faq: [
      {
        question: "Faites-vous des sites web pour les entreprises béninoises ?",
        answer:
          "Oui. Je travaille avec des entreprises, des startups et des indépendants basés à Cotonou, à Porto-Novo, à Parakou ou ailleurs au Bénin, ainsi qu'avec des clients en Afrique francophone et en Europe. Tout se fait à distance, par visio et messagerie.",
      },
      {
        question: "Pourquoi mon entreprise a-t-elle besoin d'un site web ?",
        answer:
          "Un site web est la vitrine que vos clients consultent avant de vous contacter. Il rassure, présente vos services de façon claire et vous permet d'être trouvé sur Google par des personnes qui ne vous connaissent pas encore.",
      },
    ],
    sections: [
      {
        title: "Un développeur web à Cotonou pour votre présence en ligne",
        paragraphs: [
          "Créer un site web au Bénin ne se résume pas à choisir un modèle. Votre site doit expliquer ce que vous faites en quelques secondes, inspirer confiance et faciliter la prise de contact, que ce soit par formulaire, par WhatsApp ou par email.",
          "Je commence toujours par comprendre votre activité, vos clients et ce que vous attendez du site. Ensuite seulement je propose une structure, un design et un planning, puis je développe en Next.js et React, des technologies modernes utilisées par de nombreux produits web.",
        ],
      },
      {
        title: "Quels types de sites web puis-je créer pour vous ?",
        paragraphs: [
          "Site vitrine pour présenter votre entreprise, landing page pour promouvoir une offre ou un lancement, application web ou tableau de bord pour gérer votre activité : je m'adapte à votre besoin et à votre budget. Le tarif est défini sur devis après un premier échange gratuit.",
        ],
      },
    ],
    ctaLabel: "Demander un devis gratuit",
    related: [
      "creation-site-vitrine-landing-page-freelance",
      "creation-application-web-saas-sur-mesure",
      "developpeur-nextjs-freelance-europe-afrique",
    ],
    areaServed: ["Bénin", "Afrique de l'Ouest", "Afrique francophone"],
  },
  {
    slug: "creation-application-web-saas-sur-mesure",
    seoTitle: "Création d'application web et SaaS sur mesure | Freelance",
    seoDescription:
      "Créer une application web, un SaaS ou un dashboard sur mesure avec React et Next.js. De l'idée au MVP, un développeur freelance vous accompagne de bout en bout.",
    eyebrow: "Application web & SaaS sur mesure",
    h1: "Création d'application web et de SaaS sur mesure, de l'idée au MVP",
    lead: "Vous avez une idée de plateforme, un outil interne à digitaliser ou un MVP à lancer ? Je conçois et développe votre application web ou SaaS avec React, Next.js, NestJS et PostgreSQL : authentification, tableaux de bord, paiements et API inclus selon votre besoin.",
    lastModified: "2026-11-25",
    highlights: [
      {
        title: "Un MVP pour valider avant d'investir plus",
        text: "On définit ensemble le plus petit produit utile, on le livre rapidement, puis on l'enrichit avec les retours réels de vos premiers utilisateurs.",
      },
      {
        title: "Une interface claire pour des produits complexes",
        text: "Dashboards, parcours d'onboarding, formulaires longs, états vides et cas limites : je travaille l'expérience utilisateur autant que le code.",
      },
      {
        title: "Un code typé, testé et maintenable",
        text: "TypeScript, composants réutilisables et revue de code : votre produit reste évolutif et facile à reprendre par d'autres développeurs.",
      },
      {
        title: "De l'interface à la base de données",
        text: "Je peux prendre en charge le frontend et le backend (API REST, base PostgreSQL) pour livrer un produit cohérent, sans multiplier les interlocuteurs.",
      },
    ],
    serviceTitles: [
      "Application Web & SaaS",
      "Développement Full-Stack",
      "Maintenance & Évolution",
      "Audit & Conseil Frontend",
    ],
    projectSlugs: ["mayylo", "ares-drive", "asmi-transfert"],
    faqQuestions: [
      "Combien coûte un projet ?",
      "Combien de temps faut-il pour livrer un projet ?",
      "Comment se déroule une collaboration concrètement ?",
      "Proposez-vous de la maintenance après livraison ?",
    ],
    faq: [
      {
        question: "Qu'est-ce qu'un MVP et pourquoi commencer par là ?",
        answer:
          "Un MVP (produit minimum viable) est une première version qui contient uniquement les fonctionnalités essentielles. Il permet de tester votre idée auprès de vrais utilisateurs rapidement, avant d'investir dans des fonctionnalités dont vous n'êtes pas sûr qu'elles servent.",
      },
      {
        question: "Quelles technologies utilisez-vous pour un SaaS ?",
        answer:
          "Principalement React et Next.js avec TypeScript pour l'interface, NestJS et PostgreSQL pour le backend, Prisma pour l'accès aux données et Docker pour le déploiement. Je choisis la stack en fonction de votre besoin, pas l'inverse.",
      },
    ],
    sections: [
      {
        title: "Développer un SaaS ou une application web : par où commencer ?",
        paragraphs: [
          "Avant d'écrire la première ligne de code, il faut clarifier qui sont vos utilisateurs, quel problème précis vous résolvez et quelles actions ils doivent pouvoir accomplir en priorité. Cette phase de cadrage évite de développer des fonctionnalités inutiles et réduit les coûts.",
          "Je vous aide à transformer votre idée en parcours utilisateur simples, puis en une première version fonctionnelle, mise en ligne et mesurable.",
        ],
      },
      {
        title: "Des exemples concrets de produits web que j'ai réalisés",
        paragraphs: [
          "Mayylo est un service d'e-mails professionnels pour les PME d'Afrique francophone avec paiement par Mobile Money. Ares Drive est une expérience de réservation avec back-office. ASMI Transfert est une landing page fintech de transfert de fonds. Chaque projet est détaillé dans une étude de cas.",
        ],
      },
    ],
    ctaLabel: "Parler de mon projet",
    related: [
      "developpeur-fullstack-freelance-nestjs-postgresql",
      "developpeur-flutter-application-mobile-freelance",
      "developpeur-nextjs-freelance-europe-afrique",
    ],
  },
  {
    slug: "refonte-optimisation-site-web-nextjs",
    seoTitle: "Refonte de site web et optimisation des performances | Next.js",
    seoDescription:
      "Votre site est lent, daté ou mal référencé ? Audit, refonte et optimisation des performances (Core Web Vitals) avec Next.js par un développeur front-end freelance.",
    eyebrow: "Refonte & optimisation de site web",
    h1: "Refonte de site web et optimisation des performances avec Next.js",
    lead: "Un site lent, qui s'affiche mal sur mobile ou qui n'apparaît pas sur Google fait perdre des clients. Je réalise l'audit de votre site existant, puis sa refonte ou son optimisation : performances, accessibilité, SEO technique et expérience mobile.",
    lastModified: "2026-11-25",
    highlights: [
      {
        title: "Un audit clair avant toute action",
        text: "Je commence par analyser votre site existant et je vous remets un rapport de recommandations priorisées, pour que vous sachiez quoi corriger en premier.",
      },
      {
        title: "Des pages plus rapides",
        text: "Optimisation des images, du chargement des scripts et du rendu pour améliorer l'expérience des visiteurs et les indicateurs Core Web Vitals suivis par Google.",
      },
      {
        title: "Refonte sans repartir de zéro",
        text: "Selon l'état de votre code, je refactorise l'existant ou je reconstruis sur une base moderne, en conservant vos contenus et vos URL importantes pour ne pas perdre votre référencement.",
      },
      {
        title: "SEO technique inclus",
        text: "Métadonnées, balisage sémantique, sitemap, redirections et données structurées sont vérifiés et corrigés pendant la refonte.",
      },
    ],
    serviceTitles: [
      "Audit & Conseil Frontend",
      "Maintenance & Évolution",
      "Site Vitrine Premium",
      "Application Web & SaaS",
    ],
    projectSlugs: ["atelier-bossart", "mayylo"],
    faqQuestions: [
      "Est-ce que vous travaillez sur des projets déjà existants ?",
      "Vous occupez-vous aussi du SEO ?",
      "Combien coûte un projet ?",
      "Proposez-vous de la maintenance après livraison ?",
    ],
    faq: [
      {
        question: "Comment savoir si mon site a besoin d'une refonte ?",
        answer:
          "Les signes courants sont un chargement lent, un affichage défaillant sur mobile, un design daté, des difficultés à modifier le contenu ou une absence de visibilité sur Google. Un audit permet de savoir s'il faut corriger l'existant ou repartir sur une nouvelle base.",
      },
      {
        question: "Une refonte fait-elle perdre le référencement Google ?",
        answer:
          "Pas si elle est bien préparée. Je conserve les URL importantes ou je mets en place des redirections 301, et je vérifie les métadonnées et le sitemap pour que Google comprenne rapidement la nouvelle version du site.",
      },
    ],
    sections: [
      {
        title: "Pourquoi la vitesse de votre site compte pour Google et vos clients",
        paragraphs: [
          "Un site lent fait fuir les visiteurs, surtout sur mobile. Google tient aussi compte de l'expérience de page, notamment via les Core Web Vitals, pour classer les résultats. Optimiser les performances améliore donc à la fois la satisfaction des visiteurs et votre visibilité.",
        ],
      },
      {
        title: "Mon approche : audit, priorisation, correction",
        paragraphs: [
          "Je mesure d'abord l'état de votre site, puis je classe les problèmes par impact. Vous choisissez ce qui est traité : corrections ciblées, refonte du front-end ou migration complète vers Next.js.",
        ],
      },
    ],
    ctaLabel: "Demander un audit",
    related: [
      "creation-site-vitrine-landing-page-freelance",
      "creation-site-web-benin-cotonou",
      "developpeur-nextjs-freelance-europe-afrique",
    ],
  },
  {
    slug: "developpeur-flutter-application-mobile-freelance",
    seoTitle: "Développeur Flutter freelance | Création d'application mobile",
    seoDescription:
      "Création d'application mobile iOS et Android avec Flutter : du prototype à la publication sur les stores, par un développeur freelance basé à Cotonou.",
    eyebrow: "Application mobile Flutter",
    h1: "Développeur Flutter freelance : création d'application mobile iOS et Android",
    lead: "Vous voulez lancer une application mobile pour vos clients ou votre équipe ? Je développe des applications iOS et Android avec Flutter, à partir d'une seule base de code, avec un backend NestJS et PostgreSQL si votre produit en a besoin.",
    lastModified: "2026-11-25",
    highlights: [
      {
        title: "Une seule base de code pour iOS et Android",
        text: "Flutter permet de livrer les deux plateformes avec une expérience fluide, tout en limitant les délais et les coûts de développement.",
      },
      {
        title: "Du prototype à la publication",
        text: "J'accompagne le cycle complet : cadrage, maquettes, développement, tests, puis publication sur l'App Store et Google Play.",
      },
      {
        title: "Backend et API inclus si besoin",
        text: "Authentification, base de données, API REST : je peux construire le backend avec NestJS, PostgreSQL et Prisma pour un produit cohérent de bout en bout.",
      },
      {
        title: "Un lien avec le web",
        text: "Votre application mobile peut s'accompagner d'un site, d'un back-office ou d'un dashboard web développé avec Next.js.",
      },
    ],
    serviceTitles: [
      "Application Mobile",
      "Développement Full-Stack",
      "Application Web & SaaS",
      "Maintenance & Évolution",
    ],
    projectSlugs: ["ares-drive", "mayylo"],
    faqQuestions: [
      "Combien coûte un projet ?",
      "Combien de temps faut-il pour livrer un projet ?",
      "Comment se déroule une collaboration concrètement ?",
      "Proposez-vous de la maintenance après livraison ?",
    ],
    faq: [
      {
        question: "Pourquoi choisir Flutter pour une application mobile ?",
        answer:
          "Flutter permet de créer une application pour iOS et Android avec un seul code source, ce qui réduit le temps de développement et facilite la maintenance, tout en offrant une interface fluide et soignée.",
      },
      {
        question: "Application mobile ou site web : que choisir ?",
        answer:
          "Cela dépend de votre usage. Un site web est plus simple à lancer et à référencer sur Google. Une application mobile se justifie pour des usages fréquents, des notifications ou des fonctions liées au téléphone. Je peux vous conseiller après un premier échange.",
      },
    ],
    sections: [
      {
        title: "Créer une application mobile : les étapes clés",
        paragraphs: [
          "On définit d'abord les fonctionnalités indispensables pour une première version, puis on valide les écrans sur maquette, on développe, on teste sur de vrais appareils et on publie. Cette progression limite les mauvaises surprises et vous permet de lancer plus vite.",
        ],
      },
    ],
    ctaLabel: "Discuter de mon application",
    related: [
      "creation-application-web-saas-sur-mesure",
      "developpeur-fullstack-freelance-nestjs-postgresql",
      "developpeur-nextjs-freelance-europe-afrique",
    ],
  },
  {
    slug: "developpeur-fullstack-freelance-nestjs-postgresql",
    seoTitle: "Développeur full-stack freelance | Next.js, NestJS, PostgreSQL",
    seoDescription:
      "Développeur full-stack freelance : interface Next.js, API NestJS et base PostgreSQL. Un seul interlocuteur pour livrer un produit web complet, en remote.",
    eyebrow: "Développeur full-stack freelance",
    h1: "Développeur full-stack freelance : Next.js, NestJS et PostgreSQL",
    lead: "Besoin d'un produit complet, de la base de données à l'interface ? Je prends en charge le frontend et le backend de votre projet avec Next.js, NestJS, PostgreSQL et Prisma, pour livrer une solution cohérente, maintenable et prête à évoluer.",
    lastModified: "2026-11-25",
    highlights: [
      {
        title: "Un seul interlocuteur du front au back",
        text: "Moins de coordination, moins de pertes d'information : je conçois l'interface, l'API et la base de données ensemble.",
      },
      {
        title: "Une stack moderne et éprouvée",
        text: "Next.js et React avec TypeScript, NestJS pour l'API REST, PostgreSQL et Prisma pour les données, Docker pour le déploiement.",
      },
      {
        title: "Qualité et tests dès le départ",
        text: "ESLint, tests de bout en bout avec Playwright, intégration continue et revue de code font partie de ma façon de travailler.",
      },
      {
        title: "Reprise de code existant possible",
        text: "Je peux aussi rejoindre un projet en cours pour corriger, refactoriser ou ajouter des fonctionnalités.",
      },
    ],
    serviceTitles: [
      "Développement Full-Stack",
      "Application Web & SaaS",
      "Application Mobile",
      "Maintenance & Évolution",
    ],
    projectSlugs: ["ares-drive", "mayylo", "asmi-transfert"],
    faqQuestions: [
      "Combien coûte un projet ?",
      "Est-ce que vous travaillez sur des projets déjà existants ?",
      "Comment se déroule une collaboration concrètement ?",
      "Travaillez-vous uniquement en remote ?",
    ],
    faq: [
      {
        question: "Quelle est la différence entre un développeur front-end et full-stack ?",
        answer:
          "Un développeur front-end s'occupe de ce que voit l'utilisateur (interface, navigation, performance). Un développeur full-stack gère aussi le backend : API, base de données, authentification et déploiement. Pour un produit complet, cela réduit le nombre d'intervenants.",
      },
    ],
    sections: [
      {
        title: "Quand faire appel à un développeur full-stack freelance ?",
        paragraphs: [
          "C'est souvent la bonne option pour un MVP, un outil interne ou un produit SaaS en démarrage : vous avancez vite avec une personne qui comprend l'ensemble de l'architecture, sans devoir recruter une équipe complète.",
        ],
      },
    ],
    ctaLabel: "Discuter de mon projet",
    related: [
      "creation-application-web-saas-sur-mesure",
      "developpeur-flutter-application-mobile-freelance",
      "developpeur-nextjs-freelance-europe-afrique",
    ],
  },
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
