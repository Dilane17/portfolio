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

## 7. Anti-Patterns (STRICTEMENT INTERDITS)
- **Typographie :** Pas d'emojis. Pas de police `Inter`. Pas de texte superposé sur des images sans overlay fort.
- **Couleurs :** Pas de `#000000`. Pas d'accents sursaturés ou multiples (jamais de rouge ou de violet néon). Pas de lueurs externes (outer glow) sur les boutons.
- **Composants :** Pas de disposition paresseuse "3 cartes égales alignées" pour les features. 
- **Contenu :** Pas de pourcentages artificiels ("99.9%"). Pas de copywriting IA cliché ("Elevate", "Seamless", "Unleash"). Pas d'instructions inutiles comme "Scroll to explore" ou de flèches rebondissantes vers le bas.
- **Code :** Pas de `calc()` basés sur des pourcentages obscurs, utiliser CSS Grid natif. Jamais de `100vh`, toujours `100dvh`.
