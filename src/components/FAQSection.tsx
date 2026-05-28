"use client";

import { useState } from "react";
import styles from "./faq-section.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Combien coûte un projet ?",
    answer:
      "Chaque projet est unique — je ne propose pas de tarifs fixes. Après un premier échange pour comprendre votre besoin, je vous envoie un devis détaillé avec le périmètre, les délais et le coût. Pas de surprises en cours de route.",
  },
  {
    question: "Combien de temps faut-il pour livrer un projet ?",
    answer:
      "La durée dépend de la complexité : un site vitrine peut être livré en 1 à 3 semaines, une application complète peut prendre 4 à 12 semaines. Je vous donne une estimation précise dès la phase de cadrage, et je respecte les délais annoncés.",
  },
  {
    question: "Travaillez-vous uniquement en remote ?",
    answer:
      "Oui, je travaille intégralement en remote depuis Cotonou (Bénin). Cela me permet d'intervenir pour des clients partout en Afrique francophone et en Europe sans contrainte géographique. Tous les échanges se font par visio, email ou messagerie selon votre préférence.",
  },
  {
    question: "Proposez-vous de la maintenance après livraison ?",
    answer:
      "Oui. Une fois votre projet livré, je reste disponible pour la maintenance, les corrections de bugs et les évolutions. Nous convenons ensemble des modalités selon vos besoins — intervention ponctuelle ou suivi régulier.",
  },
  {
    question: "Puis-je gérer mon site moi-même après la livraison ?",
    answer:
      "Tout à fait. Si votre projet nécessite une interface d'administration, je l'intègre dès la conception. Je vous fournis également une documentation claire et une prise en main si nécessaire, pour que vous soyez autonome.",
  },
  {
    question: "Comment se déroule une collaboration concrètement ?",
    answer:
      "En 4 étapes : (1) un premier échange pour cadrer votre besoin, (2) un devis et un planning détaillés, (3) le développement avec des points réguliers et des livrables intermédiaires, (4) la livraison finale avec tests et mise en production. Vous êtes impliqué à chaque étape.",
  },
  {
    question: "Vous occupez-vous aussi du SEO ?",
    answer:
      "Oui, le SEO technique est intégré par défaut dans tous mes projets web : métadonnées structurées, Open Graph, sitemap, performance optimisée et balisage sémantique. Pour un travail SEO plus avancé (contenu, netlinking), je peux vous orienter vers un spécialiste.",
  },
  {
    question: "Est-ce que vous travaillez sur des projets déjà existants ?",
    answer:
      "Oui. Je peux reprendre une base de code existante pour la refactoriser, l'améliorer, corriger des bugs ou ajouter de nouvelles fonctionnalités. Un audit préalable me permet d'évaluer l'état du code et de vous proposer un plan d'intervention réaliste.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section container">
      <div className="section-heading">
        <div className="badge">
          <span className="badge-dot" />
          FAQ
        </div>
        <h2>Les questions qu&apos;on me pose souvent</h2>
        <p>
          Avant de démarrer un projet, voici ce que mes clients me demandent le plus
          souvent. Si votre question n&apos;est pas là, écrivez-moi directement.
        </p>
      </div>

      <div className={styles.faqCard}>
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span
                  className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ""}`}
                  aria-hidden="true"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div
                className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
