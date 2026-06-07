import styles from "@/app/page.module.css";

const testimonials = [
  {
    name: "Client SaaS",
    source: "Mission produit",
    quote:
      "Clovis a su transformer un parcours confus en interface claire, rapide et beaucoup plus simple à faire évoluer.",
  },
  {
    name: "Fondateur PME",
    source: "Refonte web",
    quote:
      "Communication propre, décisions expliquées, rendu premium. Le projet a gagné en crédibilité dès la première version.",
  },
  {
    name: "Équipe produit",
    source: "Application métier",
    quote:
      "Son approche front-end va au-delà de l'intégration : il pense structure, états, maintenance et usage réel.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section container">
      <div className="section-heading">
        <div className="badge">
          <span className="badge-dot" />
          Retours
        </div>
        <h2>Mes clients parlent mieux que moi du résultat.</h2>
        <p>
          Témoignages fictifs pour l&apos;instant : remplacez-les par vos vrais
          retours clients quand vous aurez les formulations exactes.
        </p>
      </div>

      <div className={styles.testimonialsGrid}>
        {testimonials.map((item) => (
          <article key={item.name} className={styles.testimonialCard}>
            <p>“{item.quote}”</p>
            <div>
              <strong>{item.name}</strong>
              <span>{item.source}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
