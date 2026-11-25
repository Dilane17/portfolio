---
title: SEO technique avec Next.js : metadata, sitemap et JSON-LD dans l'App Router
seoTitle: SEO technique avec Next.js : metadata, sitemap, JSON-LD
description: Guide pratique en français pour le SEO technique avec Next.js App Router : generateMetadata, canonical, sitemap.ts, robots.ts et données structurées JSON-LD.
datePublished: 2026-10-18
dateModified: 2026-10-18
tags: Next.js, SEO, JSON-LD, App Router
readingTime: 8 min
links:
  - Voir mes services | /services/developpeur-nextjs-freelance-europe-afrique
  - Lire : landing page de conversion | /blog/landing-page-conversion-nextjs-structure-performance
---

Un site Next.js rapide n'est pas automatiquement un site bien référencé. Le framework fournit tous les outils nécessaires, mais c'est à vous de les configurer : métadonnées, URL canoniques, sitemap, données structurées. Voici la base que j'applique sur mes projets et sur ce portfolio, avec l'App Router de Next.js 16.

Les exemples ci-dessous sont simplifiés. Adaptez les URLs et les champs à votre projet.

## 1. Poser les métadonnées de base dans le layout

Dans le fichier app/layout.tsx, exportez un objet metadata. La propriété metadataBase est essentielle : elle permet à Next.js de transformer les chemins relatifs (images Open Graph, canonical) en URLs absolues.

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.exemple.fr"),
  title: "Votre Nom | Développeur React & Next.js Freelance",
  description:
    "Développeur full stack freelance. Sites, landing pages et applications Next.js pour startups et PME.",
  alternates: { canonical: "https://www.exemple.fr" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.exemple.fr",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};
```

Quelques repères utiles : gardez le titre autour de 60 caractères pour qu'il ne soit pas tronqué dans les résultats, et la description entre 140 et 160 caractères. Écrivez-la pour un humain qui hésite à cliquer, pas pour un robot.

## 2. Générer des métadonnées dynamiques avec generateMetadata

Pour des pages générées à partir de données (études de cas, articles, fiches produit), exportez une fonction generateMetadata. Dans cette version de Next.js, params est une promesse : il faut donc l'attendre.

```tsx
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Projet introuvable" };

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    alternates: { canonical: `https://www.exemple.fr/projects/${slug}` },
  };
}
```

Associez-la à generateStaticParams pour que ces pages soient prérendues au build. Le HTML servi contient alors déjà le titre et la description, sans attendre le JavaScript.

Un point souvent négligé : le titre d'une page doit viser ce que cherche votre visiteur, pas seulement le nom du projet. Un titre du type « Site de location de voitures premium en Next.js » répond à un besoin ; « Nom du client | Case Study » ne fait que se battre contre le site du client lui-même.

## 3. Sitemap et robots en TypeScript

Plutôt que d'écrire un sitemap.xml à la main, créez app/sitemap.ts. La liste des URLs est calculée à partir de vos données, donc une nouvelle page est automatiquement déclarée.

```ts
import type { MetadataRoute } from "next";
import { projects } from "@/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map(({ slug, lastModified }) => ({
    url: `https://www.exemple.fr/projects/${slug}`,
    lastModified: new Date(lastModified),
  }));

  return [{ url: "https://www.exemple.fr", lastModified: new Date() }, ...projectUrls];
}
```

Évitez de mettre new Date() partout pour lastModified : si toutes vos pages affichent la date du jour à chaque build, cette information perd toute valeur pour les moteurs de recherche. Stockez une vraie date de dernière modification dans vos données.

Le fichier app/robots.ts suit la même logique et doit pointer vers le sitemap.

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.exemple.fr/sitemap.xml",
  };
}
```

## 4. Décrire vos pages avec JSON-LD

Les données structurées aident les moteurs de recherche à comprendre qui vous êtes et ce que contient chaque page. La documentation de Next.js recommande d'ajouter une balise script de type application/ld+json directement dans le layout ou la page.

```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  datePublished: post.datePublished,
  author: { "@type": "Person", name: "Votre Nom" },
  inLanguage: "fr",
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
  }}
/>
```

Le remplacement du caractère < par son équivalent unicode protège contre l'injection de balises si une valeur provient d'une source que vous ne maîtrisez pas. Les types les plus utiles pour un site de freelance sont Person et WebSite pour l'identité, BreadcrumbList pour le fil d'Ariane, BlogPosting pour les articles et Service pour vos offres.

Validez toujours le résultat avec le test des résultats enrichis de Google et avec le validateur de schema.org avant de déployer.

## 5. Indexé ne veut pas dire visible

Une fois tout cela en place, vos pages seront explorées et indexées. Mais être indexé ne signifie pas être bien classé. Dans la Search Console, regardez l'onglet Performances et, surtout, les requêtes : si vos impressions viennent uniquement de noms de clients ou de votre nom, Google vous montre, mais pour des recherches qui ne vous amènent aucun client.

Pour changer cela, il faut des pages qui ciblent un besoin précis, du contenu utile et des liens externes de qualité. Le SEO technique est le socle indispensable, pas la finalité.

## Checklist avant de publier

- metadataBase défini et canonical sur chaque page
- Un titre unique de 60 caractères maximum et une description de 140 à 160 caractères par page
- sitemap.ts et robots.ts en place, avec de vraies dates de modification
- JSON-LD adapté au type de page et validé
- Une image Open Graph pour le partage de liens
- Les pages soumises dans la Search Console, puis les impressions et les requêtes suivies dans le temps

Si vous souhaitez un site Next.js avec un SEO technique solide dès le départ, découvrez mes services de développement web et mobile freelance ou écrivez-moi pour en discuter.
