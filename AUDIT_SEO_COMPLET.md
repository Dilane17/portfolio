# Audit SEO Complet — dylan-dev.me

**Date** : 22 juin 2026  
**Auditeur** : Antigravity (assistant IA)  
**Site** : https://www.dylan-dev.me  
**Objectif** : SEO de marque personnelle + positionnement métier francophone international

---

## Résumé Exécutif

Le site dylan-dev.me dispose d'une base SEO technique correcte (balises meta, sitemap, robots.txt, SSR Next.js, HTTPS, `<html lang="fr">`), mais présente **des lacunes critiques** qui empêchent un bon référencement de marque et de positionnement métier. Les deux problèmes les plus graves sont : **l'absence totale de données structurées JSON-LD** (Person, WebSite) — indispensables pour que Google associe le site à l'identité "Clovis Ahouandjinou" — et **l'absence du nom complet dans le H1 et le contenu visible principal**. Le sitemap est incomplet (Mayylo manquant), le lien LinkedIn est absent du footer, et plusieurs mots-clés métier cibles ne figurent nulle part dans les balises ou le contenu.

| Axe | Score |
|---|---|
| **Axe 1 — Mots-clés & Contenu** | 4/10 |
| **Axe 2 — Structure Technique** | 6/10 |
| **Axe 3 — Performance & Signaux** | 7/10 |
| **Score Global** | **5.5/10** |

---

## Axe 1 — Mots-Clés et Contenu

### 1.1 Tableau de Présence des Mots-Clés

#### Mots-clés de marque (priorité absolue)

| Mot-clé | `<title>` | `<meta description>` | H1 | H2 | Body | Alt images |
|---|---|---|---|---|---|---|
| Clovis Ahouandjinou | ✅ | ✅ (dans `description` mais pas dans `og:description`) | ❌ | ❌ | ✅ (Bio) | ❌ |
| Clovis Dylan | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Dylan Ahouandjinou | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

> [!CAUTION]
> **Verdict** : Seul "Clovis Ahouandjinou" apparaît dans le `<title>` et la meta `description`. Les variantes "Clovis Dylan" et "Dylan Ahouandjinou" sont **complètement absentes** du site. Or, ces variations sont celles que les gens pourraient taper. Le H1 ne contient aucun nom — c'est un problème majeur pour le SEO de marque.

#### Mots-clés de positionnement métier

| Mot-clé | `<title>` | `<meta description>` | H1/H2 | Body | Keywords meta |
|---|---|---|---|---|---|
| développeur front-end freelance | Partiel ("Frontend… Freelance") | ✅ ("frontend freelance") | ❌ | ✅ | ✅ |
| développeur Next.js freelance | Partiel ("React Next.js Freelance") | ❌ | ❌ | ❌ | ✅ |
| développeur React freelance | Partiel | ❌ | ❌ | ❌ | ✅ |
| développeur front-end Bénin | ❌ | ✅ ("Cotonou (Bénin)") | ❌ | ✅ (FAQ) | ✅ |
| développeur front-end Afrique | ❌ | ❌ | ❌ | ✅ (Bio) | ✅ |
| développeur front-end francophone | ❌ | ❌ | ❌ | ✅ (FAQ) | ❌ |
| développeur SaaS fintech | ❌ | ❌ | ❌ | ✅ (Hero subtitle) | ❌ |

> [!WARNING]
> **Verdict** : Les mots-clés métier apparaissent partiellement dans le `<title>` et le body, mais jamais dans les H1/H2. Aucun H2 ne contient un mot-clé métier ciblé — ils sont tous éditoriaux ("Développeur par passion, entrepreneur par nécessité", "Une exigence produit, pas juste visuelle"). C'est un manque à gagner SEO significatif.

### 1.2 Qualité et Densité du Contenu

- **Page d'accueil** : Environ **1200+ mots** de contenu visible → ✅ Largement au-dessus du seuil de 300-500 mots. Le contenu est riche, original et bien structuré.
- **Pages de case study** : Environ **400-500 mots** chacune → ⚠️ Suffisant mais limite. Le format "repoInsights" produit un contenu correct mais pas très long.
- **Contenu dupliqué** : Les meta `description` sont uniques par page → ✅. En revanche, la meta `og:description` de l'accueil diffère de la meta `description` (pas grave, mais attention à la cohérence). Les case studies réutilisent les champs `summary` de `portfolioData.json`, donc chaque page a sa propre description.
- **Copywriting** : Le texte cible clairement un public B2B francophone (PME, startups, équipes produit). Le ton est professionnel et différencié. ✅

### 1.3 Données Structurées (Schema.org / JSON-LD)

| Schéma | Présent ? | Commentaire |
|---|---|---|
| `Person` (JSON-LD) | 🔴 **ABSENT** | Aucun JSON-LD trouvé dans le code source. C'est le point le plus critique pour le SEO de marque personnelle. |
| `WebSite` (JSON-LD) | 🔴 **ABSENT** | Pas de schéma WebSite. |
| `CreativeWork` / `WebPage` | 🔴 **ABSENT** | Pas de données structurées sur les case studies. |
| `FAQPage` | 🔴 **ABSENT** | La section FAQ est bien structurée en HTML mais sans le schéma FAQPage. C'est un **rich snippet perdu** — Google pourrait afficher les Q&R directement dans les résultats de recherche. |

> [!CAUTION]
> **Verdict critique** : L'absence totale de JSON-LD est le problème SEO #1 du site. Sans schema `Person`, Google ne peut pas construire de Knowledge Panel pour "Clovis Ahouandjinou". Sans schema `FAQPage`, les questions/réponses n'apparaîtront jamais en rich snippets dans les SERP.

---

## Axe 2 — Structure Technique

### 2.1 Balises Meta par Page

#### Page d'accueil (`/`)

| Élément | Valeur | Évaluation |
|---|---|---|
| `<title>` | "Clovis Ahouandjinou \| Développeur Frontend React Next.js Freelance" | ✅ 67 caractères — légèrement long (idéal < 60) mais acceptable |
| `<meta description>` | "Portfolio de Clovis Ahouandjinou, développeur frontend freelance basé à Cotonou (Bénin)…" | ✅ Bonne longueur, contient nom + localisation |
| `<meta robots>` | Non défini explicitement | ⚠️ Pas grave (Next.js défaut = index, follow) |
| `og:title` | ✅ Présent et identique au title | ✅ |
| `og:description` | ✅ Présent — "Des interfaces React et Next.js performantes…" | ⚠️ Différent de la meta description (le nom "Clovis" n'y apparaît pas) |
| `og:image` | `/og-image.png` | ✅ Le fichier existe |
| `og:url` | Non défini explicitement | ⚠️ Manquant — devrait être `https://www.dylan-dev.me` |
| `og:type` | `website` | ✅ |
| Twitter Card | ✅ `summary_large_image` | ✅ |
| `<link rel="canonical">` | ✅ `https://www.dylan-dev.me` | ✅ |

#### Pages de Case Study (`/projects/[slug]`)

| Élément | Évaluation |
|---|---|
| `<title>` | "[Nom Projet] \| Case Study" — ⚠️ Ne contient pas "Clovis Ahouandjinou". Longueur OK. |
| `<meta description>` | Utilise `project.summary` — ✅ Unique par page, bonne longueur. Ne contient pas le nom. |
| `og:image` | Pointe vers `/case-studies/[slug]/og.png` — ⚠️ Ces fichiers OG n'existent probablement pas pour chaque projet |
| `<link rel="canonical">` | ✅ Unique par page |
| `og:url` | Non défini | ⚠️ Manquant |

### 2.2 Structure des Titres (Hn)

#### Page d'accueil

| Niveau | Contenu | SEO-friendly ? |
|---|---|---|
| H1 | "Je conçois des interfaces nettes, rapides et faites pour durer." | ❌ **Aucun mot-clé, aucun nom**. C'est le H1 le plus important du site et il ne dit pas qui est le développeur. |
| H2 | "Développeur par passion, entrepreneur par nécessité." | ⚠️ Éditorial mais pas SEO |
| H2 | "Une exigence produit, pas juste visuelle" | ⚠️ Éditorial |
| H2 | "Un développeur qui relie design, logique métier et qualité technique." | ✅ Contient "développeur" |
| H2 | "Ce que je fais, et comment je l'aborde." | ❌ Aucun mot-clé |
| H2 | "Une boîte à outils choisie, pas accumulée." | ❌ Aucun mot-clé |
| H2 | "Questions fréquentes" | ⚠️ OK |
| H2 | "Un projet en tête ? Parlons-en." | ❌ Aucun mot-clé |
| H3 | "Ares Drive", "ASMI Transfert", "Atelier Bossart", etc. | ✅ Noms de projet = OK |

> [!WARNING]
> Le H1 est **le signal SEO on-page le plus important** et il ne contient ni le nom "Clovis Ahouandjinou", ni "développeur front-end", ni "freelance". Google ne comprend pas immédiatement de quoi parle la page.

#### Pages de Case Study

- H1 = Nom du projet (ex: "Ares Drive") → ✅ Un seul H1 par page
- H2 = "Le contexte", "Le problème", "La démarche", "Le résultat" → ✅ Hiérarchie logique
- Pas de saut de niveau → ✅

### 2.3 Sitemap et Robots

#### Sitemap (`/sitemap.xml`)

```
✅ Accessible
✅ Contient : /, /projects/ares-drive, /projects/asmi-transfert, /projects/atelier-bossart
🔴 MANQUANT : /projects/mayylo — le projet Mayylo a été ajouté au code mais le sitemap.ts est hardcodé
```

> [!IMPORTANT]
> Le fichier `sitemap.ts` est **hardcodé** avec les 3 premiers projets. Il ne se met pas à jour dynamiquement quand un nouveau projet est ajouté. Le projet Mayylo est absent du sitemap.

#### Robots.txt (`/robots.txt`)

```
✅ Accessible
✅ User-Agent: * / Allow: /
✅ Contient la référence au sitemap
```

### 2.4 Indexation et Accessibilité

| Critère | Résultat |
|---|---|
| SSR/SSG | ✅ Next.js avec rendu serveur. Le HTML est envoyé complet au navigateur. |
| HTTPS | ✅ Le site est en HTTPS |
| Redirection `http://` → `https://` | ✅ Vérifié — `http://dylan-dev.me` redirige correctement |
| Redirection `dylan-dev.me` → `www.dylan-dev.me` | ✅ Vérifié |
| `/cv-clovis-dylan.pdf` | 🔴 **Erreur 404** — Le fichier référencé historiquement n'existe pas. Lien supprimé du UI mais l'URL peut encore être indexée par Google. |
| `/projects/mayylo` | 🔴 **Erreur 404 en production** — Le projet est ajouté localement mais pas encore déployé. Le `dynamicParams = false` + `generateStaticParams()` hardcodé ne l'inclut probablement pas encore. |

### 2.5 Images

| Critère | Résultat |
|---|---|
| Attributs `alt` | ✅ Toutes les images de projets ont un alt descriptif (`Aperçu du projet ${title}`) |
| `next/image` | ✅ Utilisé sur les cartes projet et les case studies |
| Formats modernes | ✅ Next.js optimise automatiquement (WebP/AVIF) |

### 2.6 Liens

| Critère | Résultat |
|---|---|
| Liens internes | ✅ Ancres descriptives ("Voir les projets", "Discuter d'un projet") |
| Liens sortants | ✅ GitHub, X (Twitter), ComeUp — aident Google à comprendre le contexte |
| LinkedIn | 🔴 **ABSENT** — Le lien LinkedIn n'est nulle part dans le footer ni ailleurs. C'est critique pour le SEO de marque (Google utilise les liens LinkedIn pour construire les Knowledge Panels). |

---

## Axe 3 — Performance et Signaux Techniques

### 3.1 Core Web Vitals (estimation)

| Métrique | Estimation | Commentaire |
|---|---|---|
| LCP | ✅ Bon (~1-2s) | Le hero est du texte pur (pas d'image lourde), le rendu SSR est rapide |
| CLS | ✅ Bon (~0) | Les polices sont chargées en amont, pas de layout shift visible |
| INP | ✅ Bon | Les interactions sont légères (scroll, toggle FAQ) |

> [!NOTE]
> Estimation basée sur l'analyse du code source. Un test Lighthouse réel sur la production donnerait des chiffres précis. Le site est léger et bien structuré côté performance.

### 3.2 Mobile-first

| Critère | Résultat |
|---|---|
| Responsive | ✅ Breakpoints à 900px, 768px, 680px, 640px, 480px |
| Meta viewport | ✅ Défini par Next.js automatiquement (`width=device-width, initial-scale=1`) |
| Menu mobile | ✅ Burger menu avec overlay |

### 3.3 Langue et Internationalisation

| Critère | Résultat |
|---|---|
| `<html lang="fr">` | ✅ Présent dans `layout.tsx` |
| `hreflang` | ❌ Absent — pas obligatoire pour un site monolingue mais pourrait aider pour cibler `fr` international |

---

## Score Global Estimé

| Axe | Score | Poids | Contribution |
|---|---|---|---|
| Mots-clés & Contenu | 4/10 | 40% | 1.6 |
| Structure Technique | 6/10 | 35% | 2.1 |
| Performance & Signaux | 7/10 | 25% | 1.75 |
| **Total** | | | **5.5/10** |

Le site a un excellent contenu éditorial et une bonne base technique, mais les **lacunes en données structurées, en optimisation des H1/H2 pour les mots-clés, et en liens de marque (LinkedIn absent)** tirent le score vers le bas de façon significative.
