import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page introuvable | Clovis Ahouandjinou",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <Navbar isProjectPage />
      <div className={styles.content}>
        <span className={styles.code}>ERREUR 404</span>
        <h1 className={styles.title}>Cette page n&apos;existe pas (ou plus).</h1>
        <p className={styles.text}>
          Le lien est peut-être erroné. Voici où poursuivre votre visite.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn-green">
            Retour à l&apos;accueil
          </Link>
          <Link href="/blog" className="btn btn-ghost">
            Lire le blog
          </Link>
          <Link href="/#contact" className="btn btn-ghost">
            Me contacter
          </Link>
        </div>
      </div>
    </main>
  );
}
