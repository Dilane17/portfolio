"use client";

import { useState } from "react";
import styles from "./faq-section.module.css";
import { faqItems as faqs } from "@/lib/portfolio";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section container">
      <div className="section-heading">
        <span className="eyebrow">FAQ</span>
        <h2>Questions fréquentes</h2>
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
                <div className={styles.faqAnswerInner}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
