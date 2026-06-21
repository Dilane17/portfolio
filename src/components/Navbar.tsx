"use client";
import Link from "next/link";
import styles from "@/app/page.module.css";

interface NavbarProps {
  isProjectPage?: boolean;
}

export default function Navbar({ isProjectPage = false }: NavbarProps) {
  const projectsHref = isProjectPage ? "/#projects" : "#projects";
  const servicesHref = isProjectPage ? "/#services" : "#services";
  const skillsHref = isProjectPage ? "/#skills" : "#skills";
  const aboutHref = isProjectPage ? "/#about" : "#about";
  const faqHref = isProjectPage ? "/#faq" : "#faq";
  const contactHref = isProjectPage ? "/#contact" : "#contact";
  const homeHref = isProjectPage ? "/" : "#";

  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        {/* Brand */}
        <Link href={homeHref} className={styles.navBrand}>
          <span className={styles.brandBadge}>CD</span>
          <span>
            <span className={styles.brandName}>Clovis Ahouandjinou</span>
            <span className={styles.brandRole}>Développeur Front-End</span>
          </span>
        </Link>

        {/* Nav links */}
        <ul className={styles.navLinks}>
          <li>
            <Link href={projectsHref}>Projets</Link>
          </li>
          <li>
            <Link href={servicesHref}>Services</Link>
          </li>
          <li>
            <Link href={skillsHref}>Compétences</Link>
          </li>
          <li>
            <Link href={aboutHref}>À propos</Link>
          </li>
          <li>
            <Link href={faqHref}>FAQ</Link>
          </li>
          <li>
            <Link href={contactHref}>Contact</Link>
          </li>
        </ul>

        {/* Right side: CTA */}
        <div className={styles.navActions}>
          <a
            href="/cv-clovis-dylan.pdf"
            download="CV-Clovis-Dylan-Frontend.pdf"
            className={styles.navLinkBtn}
          >
            Télécharger le CV
          </a>
          <Link href={contactHref} className={styles.navLinkBtn}>
            Discuter
          </Link>
          <Link href={projectsHref} className="btn btn-primary">
            Voir les projets
          </Link>
        </div>
      </div>
    </nav>
  );
}
