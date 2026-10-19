// JSON.stringify ne neutralise pas "<" : on l'échappe pour qu'une valeur ne
// puisse jamais fermer la balise <script> (recommandation de la doc Next.js).
export function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
