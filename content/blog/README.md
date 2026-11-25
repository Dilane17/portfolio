# Ajouter un article de blog

1. Créez un fichier `nom-de-l-article.md` dans ce dossier (le nom du fichier devient l'URL : `/blog/nom-de-l-article`).
2. Commencez par ce bloc d'en-tête :

```
---
title: Titre affiché en haut de l'article
seoTitle: Titre pour Google (60 caractères max)
description: Résumé pour Google et les réseaux (150 caractères environ)
datePublished: 2026-12-01
dateModified: 2026-12-01
tags: Site web, Prix
links:
  - Libellé du bouton | /services/creation-site-vitrine-landing-page-freelance
---
```

3. Écrivez ensuite le texte : `## Titre de section`, paragraphes, listes avec `- `, **gras**, liens `[texte](/chemin)` et blocs de code entre ``` ```.

Le temps de lecture est calculé automatiquement (ou fixé avec `readingTime: 8 min`). L'article apparaît seul dans la liste du blog, le sitemap et le flux RSS.
