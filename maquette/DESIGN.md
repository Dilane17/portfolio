---
name: Kinetic Noir
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdada'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e8'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#42484a'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#73787a'
  outline-variant: '#c2c7c9'
  surface-tint: '#506167'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0c1e23'
  on-primary-container: '#75878d'
  inverse-primary: '#b7cad0'
  secondary: '#006c45'
  on-secondary: '#ffffff'
  secondary-container: '#26fea9'
  on-secondary-container: '#007148'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a1710'
  on-tertiary-container: '#9b7d73'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e6ed'
  primary-fixed-dim: '#b7cad0'
  on-primary-fixed: '#0c1e23'
  on-primary-fixed-variant: '#38494f'
  secondary-fixed: '#4fffb0'
  secondary-fixed-dim: '#00e294'
  on-secondary-fixed: '#002112'
  on-secondary-fixed-variant: '#005233'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#e2bfb3'
  on-tertiary-fixed: '#2a1710'
  on-tertiary-fixed-variant: '#594138'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
  canvas-white: '#ffffff'
  soft-cream: '#fafaf8'
  deep-steel: '#4a5a60'
  whisper-line: '#e7ecec'
  kinetic-green: '#02f5a1'
  deep-green: '#00c97f'
typography:
  display:
    fontFamily: Bricolage Grotesque
    fontSize: clamp(2.5rem, 8vw, 5rem)
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.028em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: clamp(2rem, 5vw, 3.5rem)
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Bricolage Grotesque
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap: clamp(80px, 10vw, 128px)
  gutter: 2rem
  margin-mobile: 1rem
  margin-desktop: 4rem
---

# Design System: Portfolio Clovis Dylan (Kinetic Noir)

## 1. Visual Theme & Atmosphere
Une interface haut de gamme, éditoriale et brutaliste (vibe "Kinetic Noir"). L'atmosphère est clinique, aérée et extrêmement professionnelle, rappelant les standards de l'ingénierie SaaS et Fintech. La densité est "Art Gallery Airy" (espace blanc généreux, marges de section massives) avec une variance "Offset Asymmetric" (grilles 50/50, asymétrie mesurée). Le mouvement est "Fluid CSS" (courbes de bézier personnalisées, élévations subtiles, pas d'animations rebondissantes cartoon).

## 2. Color Palette & Roles
- **Canvas White** (`#ffffff`) — Surface de fond principale (var(--bg))
- **Soft Cream** (`#fafaf8`) — Surface de fond alternative / sections secondaires (var(--bg-cream))
- **Onyx Noir** (`#07191e`) — Couleur dominante pour le texte principal, les titres et les cartes sombres inversées (var(--ink) / var(--onyx))
- **Deep Steel** (`#4a5a60`) — Texte secondaire, sous-titres, paragraphes descriptifs (var(--ink-mid))
- **Whisper Line** (`#e7ecec`) — Bordures structurelles, séparateurs 1px (var(--line))
- **Kinetic Green** (`#02f5a1`) — **ACCENT UNIQUE**. Utilisé avec parcimonie pour les appels à l'action, les badges, et les surlignages (var(--green))
- **Deep Green** (`#00c97f`) — Variation de l'accent pour les dégradés textuels ou les états hover (var(--green-deep))

*(Règle stricte : 1 seul accent (vert). Pas de violet, pas de bleu néon. Pas de noir pur #000000, toujours Onyx #07191e).*

## 3. Typography Rules
- **Display / Headlines:** `Bricolage Grotesque` — Interlettrage très serré (`-0.028em`), échelle typographique contrôlée par `clamp()`, hiérarchie gérée par la graisse (`700`) et le contraste de taille. Jamais de texte centré sur les longs blocs.
- **Body:** `Poppins` — Interlignage relaxé (`1.6`), max-width contenu (environ `60-65ch` pour la lisibilité). Couleur toujours neutre (`var(--ink-mid)`).
- **Banned Fonts:** `Inter`, `Times New Roman`, `Georgia`, `Roboto`. Les polices Serif sont strictement interdites sur ce projet (contexte SaaS/Dev). 

## 4. Component Stylings
- **Buttons (CTAs):** Style "pill" arrondi (`border-radius: 999px`). Pas de lueur externe néon. Effet tactile au hover : léger `translateY(-1px)` et variation de background. Le bouton primaire utilise un fond transparent avec bordure, ou remplissage vert (Kinetic Green).
- **Cards:** Coins généreusement arrondis (`var(--r-xl)` = `28px` ou `24px`). Ombres très douces et diffuses (`--shadow-lg: 0 30px 60px -20px rgba(7,25,30,0.2)`). Utilisation du fond Onyx inversé pour créer du contraste focal (ex: Hero Snapshot).
- **Badges:** Très arrondis, fond doux (`var(--bg-soft)`), bordure 1px, texte en majuscules espacées pour le micro-statut (ex: point vert "DISPONIBLE").
- **Images & Mockups:** Les images doivent respecter des ratios stricts (ex: `1920/740`) avec `object-fit: cover`. Les couleurs vives externes (ex: rouge vif) doivent être atténuées par un overlay sombre (ex: `rgba(7,25,30,0.25)`) pour matcher l'ambiance Kinetic Noir.

## 5. Layout Principles
- **Aération Éditoriale (Spacing) :** Espacement vertical massif entre les sections (`clamp(80px, 10vw, 128px)`).
- **Asymétrie et Grilles :** Les Hero sections et les Features utilisent des grilles asymétriques ou du 50/50 strict. Pas de centrage de texte paresseux sur les longues descriptions.
- **Responsive Strict :** Architecture "Mobile-First Collapse". En dessous de 768px, toutes les grilles multi-colonnes s'effondrent en une seule colonne (1fr). Les images s'empilent sous les textes. Menu burger obligatoire, pas de scroll horizontal.
- **Dimensionnement :** Utilisation de `min-height: 100dvh` (jamais `h-screen` ou `100vh`) pour éviter les sauts catastrophiques sur iOS Safari.

## 6. Motion & Interaction
- **Easing Personnalisé :** Toutes les transitions CSS utilisent la courbe `cubic-bezier(0.2, 0.7, 0.2, 1)` (var(--ease)) pour un rendu fluide, cinématique et hardware-accelerated.
- **Perpetual Micro-Interactions :** Les liens soulignés ont un effet de remplissage depuis la gauche (`scaleX`). Les cartes ont un effet de soulèvement subtil (`transform: translateY(-4px) scale(1.01)`).
- **Pas d'animations cartoon :** Pas de rebond, pas de "spring" excessif, uniquement des mouvements fluides et professionnels.
