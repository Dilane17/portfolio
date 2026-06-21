# RAPPORT DE REFONTE NAVBAR ET CASE STUDIES

## 1. Navbar (Desktop & Mobile)
- **Simplification du CTA** : Il n'y a désormais plus qu'un seul bouton d'appel à l'action dans la navbar (« Discuter », style bouton vert primaire). L'ancien bouton "Voir les projets" a été supprimé puisque le lien classique "Projets" remplit le rôle.
- **Déplacement du CV** : Le bouton de téléchargement du CV a été retiré de la navbar pour alléger visuellement l'en-tête. Le lien pointant vers `/cv-clovis-dylan.pdf` reste fonctionnel et accessible dans le footer (mis en place lors d'une précédente passe).
- **Mobile Menu** : Même cure d'allègement dans le menu burger. Le panneau overlay mobile ne propose en bouton bas de page que "Discuter", concentrant ainsi l'utilisateur sur une unique action de conversion.

## 2. Refonte des Pages Case Study (`/projects/[slug]`)
Les pages de projet individuelles (Ares Drive, ASMI Transfert, Atelier Bossart) ont été recodées de zéro pour adopter un format purement éditorial, tel que demandé. L'ancienne structure complexe avec barre latérale (aside) et grille asymétrique a été supprimée au profit d'un flux de lecture naturel.

### Header de Page Centré
- Le titre du projet s'affiche désormais centré dans le haut de page (`max-width: 800px`), surplombé par son `.eyebrow` (reprenant exactement le même espacement que l'accueil).
- Les métadonnées du projet (Client, Durée, Rôle, Stack) s'affichent sur une seule ligne centrée, séparées par de discrets taquets verticaux (`|`). Sur mobile, elles s'empilent naturellement.

### Visuels Pleine Largeur (`next/image`)
- Le composant `Image` natif de Next.js remplace les balises natives.
- Le layout laisse respirer le visuel : les images de projets ne sont plus bloquées dans la colonne texte mais prennent 100% du conteneur parent pour un effet "éditorial asymétrique" fort.
- **Cadre visuel** : Pour pallier d'éventuels conflits colorimétriques entre une image (comme ASMI Transfert qui a beaucoup de rouge) et le fond crème du portfolio, toutes les images sont englobées dans un `.heroImageWrapper` avec un fin `border: 1px solid var(--line);` et un léger `box-shadow`, arrondis à `var(--r-xl)`.

### Corps du Récit
- La colonne de texte est fixée à une largeur confortable (`800px`).
- Le texte est désormais **aligné à gauche** (zéro centrage pour les paragraphes de contenu), favorisant un confort de lecture (conforme au design system Stitch).
- La hiérarchie H2 ("Le contexte", "Le problème", "La démarche", "Le résultat") séquence l'expérience, soutenue par une `ScrollReveal` sur chaque bloc pour une arrivée en douceur au scroll.

### Navigation de Fin
- Au pied du case study, une `footerNav` propre aligne un bouton transparent pour remonter "Retour aux projets" et, le cas échéant, le lien primaire pointant vers le site live en production.

## 3. Statut Technique
- **Zéro erreur console** et typage TypeScript 100% valide.
- Build de production `npm run build` exécuté avec succès (0 erreur) avec génération statique de toutes les routes de projets.
- L'expérience globale est parfaitement fluide et unifiée avec le reste de l'application "Kinetic Noir - variante claire".
