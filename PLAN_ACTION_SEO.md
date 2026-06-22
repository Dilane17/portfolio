# Plan d'Action SEO — dylan-dev.me

**Date** : 22 juin 2026  
**Priorité** : De haut (🔴 Critique) à bas (🟡 Optimisation)

---

## 🔴 Critique — Bloque l'indexation ou la reconnaissance de marque

### 1. Ajouter le JSON-LD `Person` + `WebSite`

**Problème** : Aucune donnée structurée n'est présente sur le site. Sans schema `Person`, Google ne peut pas construire de Knowledge Panel pour "Clovis Ahouandjinou". C'est l'élément #1 pour le SEO de marque personnelle.

**Fichier** : `src/app/layout.tsx`

**Correction** : Ajouter un `<script type="application/ld+json">` dans le `<body>` (ou via le composant `metadata` de Next.js) contenant :

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.dylan-dev.me/#person",
      "name": "Clovis Ahouandjinou",
      "alternateName": ["Clovis Dylan", "Dylan Ahouandjinou", "dylankode"],
      "jobTitle": "Développeur Front-End Freelance",
      "description": "Développeur front-end freelance spécialisé React, Next.js et produits SaaS. Basé à Cotonou, Bénin.",
      "url": "https://www.dylan-dev.me",
      "image": "https://www.dylan-dev.me/og-image.png",
      "email": "contact@dylan-dev.me",
      "sameAs": [
        "https://github.com/Dilane17",
        "https://x.com/dylankodee",
        "https://comeup.com/dylankode",
        "https://www.linkedin.com/in/TON-IDENTIFIANT-LINKEDIN"
      ],
      "knowsAbout": ["React", "Next.js", "TypeScript", "SaaS", "Fintech", "Design Systems"],
      "worksFor": {
        "@type": "Organization",
        "name": "HustlerLabs"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cotonou",
        "addressCountry": "BJ"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.dylan-dev.me/#website",
      "name": "Clovis Ahouandjinou — Portfolio",
      "url": "https://www.dylan-dev.me",
      "publisher": { "@id": "https://www.dylan-dev.me/#person" },
      "inLanguage": "fr"
    }
  ]
}
```

---

### 2. Ajouter le JSON-LD `FAQPage`

**Problème** : La section FAQ contient 8 questions/réponses bien structurées, mais sans le schema `FAQPage`, Google ne les affichera jamais en rich snippets dans les résultats de recherche. C'est un **gros potentiel de visibilité gratuit** perdu.

**Fichier** : `src/components/FAQSection.tsx` ou `src/app/page.tsx`

**Correction** : Injecter un `<script type="application/ld+json">` avec le schema `FAQPage` qui liste les 8 Q&R :

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien coûte un projet ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque projet est unique..."
      }
    }
  ]
}
```

---

### 3. Mettre à jour le sitemap pour inclure Mayylo

**Problème** : Le fichier `sitemap.ts` est hardcodé avec seulement 3 projets. Le projet Mayylo (et tout futur projet) n'y apparaît pas. Google ne peut pas découvrir ces nouvelles pages.

**Fichier** : `src/app/sitemap.ts`

**Correction** : Rendre le sitemap dynamique en important la liste des projets :

```typescript
import { MetadataRoute } from 'next'
import { getProjectSlugs } from '@/lib/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = getProjectSlugs().map(slug => ({
    url: `https://www.dylan-dev.me/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: 'https://www.dylan-dev.me', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    ...projectUrls,
  ]
}
```

---

### 4. Ajouter LinkedIn dans le footer

**Problème** : Le lien LinkedIn est complètement absent du site. Google utilise activement les liens LinkedIn dans les schemas `sameAs` pour construire des Knowledge Panels. C'est aussi un signal de confiance pour les visiteurs humains (recruteurs, clients).

**Fichier** : `src/app/page.tsx` (section footer)

**Correction** : Ajouter un lien vers ton profil LinkedIn à côté de GitHub, X et ComeUp :

```tsx
<a href="https://www.linkedin.com/in/TON-IDENTIFIANT" target="_blank" rel="noopener noreferrer">
  LINKEDIN
</a>
```

> ⚠️ Tu dois remplacer `TON-IDENTIFIANT` par ton vrai slug LinkedIn.

---

## 🟠 Important — Impacte significativement le positionnement

### 5. Optimiser le H1 de la page d'accueil

**Problème** : Le H1 actuel ("Je conçois des interfaces nettes, rapides et faites pour durer.") ne contient ni le nom, ni "développeur", ni "freelance", ni aucun mot-clé ciblé. C'est le signal on-page le plus fort pour Google.

**Fichier** : `src/components/HeroSection.tsx`

**Correction suggérée** : Intégrer les mots-clés dans le H1 sans casser l'esthétique. Deux options :

**Option A** — Ajouter un sous-titre H1 caché visuellement (screen reader + SEO) :
```tsx
<h1 className={styles.heroTitle}>
  <span className="sr-only">Clovis Ahouandjinou — Développeur Front-End Freelance React & Next.js. </span>
  Je conçois des interfaces <span className={styles.heroTitleAccent}>nettes</span>, rapides et faites pour durer.
</h1>
```

**Option B** — Reformuler légèrement le H1 :
```
Clovis Ahouandjinou — Développeur Front-End Freelance
```
Puis garder le texte actuel en sous-titre `<p>`.

> L'option A préserve le design actuel tout en ajoutant les mots-clés pour Google.

---

### 6. Ajouter "Clovis Ahouandjinou" dans les `<title>` des case studies

**Problème** : Les titles des case studies sont "Ares Drive | Case Study", sans le nom du développeur. Si quelqu'un cherche "Clovis Ahouandjinou Ares Drive", la page ne remontera pas.

**Fichier** : `src/app/projects/[slug]/page.tsx` (fonction `generateMetadata`)

**Correction** :
```typescript
title: `${project.title} | Case Study — Clovis Ahouandjinou`,
```

---

### 7. Enrichir les mots-clés dans les meta descriptions

**Problème** : La meta `og:description` de l'accueil ne contient pas "Clovis Ahouandjinou". Les descriptions des case studies ne mentionnent ni le nom ni "développeur front-end freelance".

**Fichier** : `src/app/layout.tsx`

**Correction pour `og:description`** :
```
"Clovis Ahouandjinou — Développeur front-end freelance React & Next.js. Interfaces performantes pour produits SaaS exigeants, de la landing page au dashboard complet."
```

---

### 8. Injecter les variantes de nom dans le contenu visible

**Problème** : "Clovis Dylan" et "Dylan Ahouandjinou" n'apparaissent nulle part. Si quelqu'un tape ces variantes dans Google, le site n'a aucune chance de remonter.

**Fichier** : `src/components/BioSection.tsx`

**Correction** : Mentionner naturellement les variantes dans le texte bio, par exemple :
```
"Je m'appelle Clovis Ahouandjinou (Dylan pour ceux qui me connaissent en ligne), développeur front-end basé en Afrique de l'Ouest."
```

---

### 9. Définir `og:url` sur chaque page

**Problème** : L'attribut `og:url` n'est pas explicitement défini dans les metadata. Quand un réseau social crawle la page, il peut deviner l'URL mais c'est mieux de la spécifier.

**Fichier** : `src/app/layout.tsx` + `src/app/projects/[slug]/page.tsx`

**Correction** :
```typescript
// layout.tsx
openGraph: {
  url: "https://www.dylan-dev.me",
  // ...rest
}

// [slug]/page.tsx
openGraph: {
  url: `https://www.dylan-dev.me/projects/${slug}`,
  // ...rest
}
```

---

### 10. Vérifier/créer les images OG des case studies

**Problème** : Les case studies pointent vers `/case-studies/[slug]/og.png` pour les images Open Graph. Ces fichiers existent-ils réellement pour chaque projet ? Si non, les previews sur LinkedIn/Twitter seront cassées.

**Fichiers** : `public/case-studies/ares-drive/og.png`, etc.

**Correction** : Vérifier l'existence de chaque fichier. Si manquants, soit les créer (capture 1200×630), soit faire pointer vers une image existante (ex: le screenshot hero).

---

## 🟡 Optimisation — Amélioration de signal SEO (nice-to-have)

### 11. Ajouter des H2 contenant des mots-clés métier

**Problème** : Les H2 actuels sont éditoriaux ("Une boîte à outils choisie, pas accumulée"). Aucun ne contient "développeur", "front-end", "freelance", "React", "Next.js". Google utilise les H2 comme signal de thématique.

**Fichier** : Différents composants de sections

**Correction** : Reformuler certains H2 pour intégrer des mots-clés naturellement :
- "Une boîte à outils choisie, pas accumulée." → "Stack technique : React, Next.js et TypeScript au quotidien"
- "Ce que je fais, et comment je l'aborde." → "Services de développement front-end freelance"

---

### 12. Supprimer le lien mort `/cv-clovis-dylan.pdf`

**Problème** : L'URL renvoie une 404. Même si le lien a été retiré de l'interface, Google peut encore l'avoir indexée et la considérer comme une erreur.

**Correction** : Deux options :
1. Placer un vrai fichier PDF à cette URL
2. Ajouter une redirection 301 dans `next.config.js` :
```js
async redirects() {
  return [{ source: '/cv-clovis-dylan.pdf', destination: '/', permanent: true }]
}
```

---

### 13. Ajouter un schema `ProfilePage` sur l'accueil

**Problème** : Google a introduit le type `ProfilePage` spécifiquement pour les portfolios et profils personnels. L'ajouter renforce le signal "c'est la page officielle de cette personne".

**Fichier** : `src/app/layout.tsx` (dans le JSON-LD graph)

**Correction** : Ajouter au `@graph` :
```json
{
  "@type": "ProfilePage",
  "dateCreated": "2024-01-01",
  "dateModified": "2026-06-22",
  "mainEntity": { "@id": "https://www.dylan-dev.me/#person" }
}
```

---

### 14. Ajouter `hreflang="fr"` (optionnel)

**Problème** : Pour un site monolingue ciblant l'international francophone, un `hreflang="fr"` dans le `<head>` peut aider Google à comprendre la langue cible.

**Fichier** : `src/app/layout.tsx`

**Correction** : Ajouter dans metadata :
```typescript
alternates: {
  canonical: "https://www.dylan-dev.me",
  languages: { "fr": "https://www.dylan-dev.me" },
}
```

---

### 15. Enrichir les `alt` des images de projets

**Problème** : Les alt actuels sont corrects mais génériques ("Aperçu du projet Ares Drive"). Ils pourraient contenir des mots-clés métier.

**Fichier** : `src/components/ProjectCard.tsx`

**Correction** :
```tsx
alt={`${title} — projet développé par Clovis Ahouandjinou, développeur front-end freelance`}
```

---

## Récapitulatif — Ordre d'exécution recommandé

| # | Action | Priorité | Effort | Impact |
|---|---|---|---|---|
| 1 | JSON-LD Person + WebSite | 🔴 | Moyen | 🟢 Très élevé |
| 2 | JSON-LD FAQPage | 🔴 | Faible | 🟢 Élevé (rich snippets) |
| 3 | Sitemap dynamique | 🔴 | Faible | 🟢 Élevé |
| 4 | LinkedIn dans footer | 🔴 | Très faible | 🟢 Élevé |
| 5 | H1 optimisé | 🟠 | Faible | 🟢 Élevé |
| 6 | Nom dans titles case studies | 🟠 | Très faible | 🟡 Moyen |
| 7 | OG description enrichie | 🟠 | Très faible | 🟡 Moyen |
| 8 | Variantes de nom dans bio | 🟠 | Très faible | 🟡 Moyen |
| 9 | `og:url` défini | 🟠 | Très faible | 🟡 Moyen |
| 10 | Images OG case studies | 🟠 | Moyen | 🟡 Moyen |
| 11 | H2 avec mots-clés | 🟡 | Faible | 🟡 Moyen |
| 12 | Redirect CV 404 | 🟡 | Très faible | 🟡 Faible |
| 13 | Schema ProfilePage | 🟡 | Très faible | 🟡 Faible |
| 14 | hreflang | 🟡 | Très faible | 🟡 Faible |
| 15 | Alt images enrichis | 🟡 | Très faible | 🟡 Faible |

> [!TIP]
> **Les actions 1 à 4 sont les plus impactantes et peuvent être réalisées en une seule session de travail.** Elles représentent environ 80% du gain SEO potentiel pour un effort minimal.
