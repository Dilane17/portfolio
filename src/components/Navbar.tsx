"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";

interface NavbarProps {
  isProjectPage?: boolean;
}

export default function Navbar({ isProjectPage = false }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const projectsHref = isProjectPage ? "/#projects" : "#projects";
  const servicesHref = isProjectPage ? "/#services" : "#services";
  const skillsHref = isProjectPage ? "/#skills" : "#skills";
  const aboutHref = isProjectPage ? "/#about" : "#about";
  const faqHref = isProjectPage ? "/#faq" : "#faq";
  const contactHref = isProjectPage ? "/#contact" : "#contact";
  const homeHref = isProjectPage ? "/" : "#";

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={styles.navbarWrapper}>
        <div className={styles.navbar}>
          {/* Brand */}
          <Link href={homeHref} className={styles.navBrand} onClick={closeMenu}>
            <span className={styles.brandBadge}>CD</span>
            <span>
              <span className={styles.brandName}>Clovis Ahouandjinou</span>
              <span className={styles.brandRole}>Développeur Front-End</span>
            </span>
          </Link>

          {/* Nav links (Desktop) */}
          <ul className={styles.navLinks}>
            <li><Link href={projectsHref}>Projets</Link></li>
            <li><Link href={servicesHref}>Services</Link></li>
            <li><Link href={skillsHref}>Compétences</Link></li>
            <li><Link href={aboutHref}>À propos</Link></li>
            <li><Link href={faqHref}>FAQ</Link></li>
            <li><Link href={contactHref}>Contact</Link></li>
          </ul>

          {/* Right side: CTA (Desktop) */}
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

          {/* Burger Button (Mobile) */}
          <button
            className={styles.burgerBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12h16M4 6h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <ul className={styles.mobileNavLinks}>
          <li><Link href={projectsHref} onClick={closeMenu}>Projets</Link></li>
          <li><Link href={servicesHref} onClick={closeMenu}>Services</Link></li>
          <li><Link href={skillsHref} onClick={closeMenu}>Compétences</Link></li>
          <li><Link href={aboutHref} onClick={closeMenu}>À propos</Link></li>
          <li><Link href={faqHref} onClick={closeMenu}>FAQ</Link></li>
          <li><Link href={contactHref} onClick={closeMenu}>Contact</Link></li>
        </ul>

        <div className={styles.mobileNavActions}>
          <a
            href="/cv-clovis-dylan.pdf"
            download="CV-Clovis-Dylan-Frontend.pdf"
            className="btn btn-ghost"
            onClick={closeMenu}
          >
            Télécharger le CV
          </a>
          <Link href={contactHref} className="btn btn-primary" onClick={closeMenu}>
            Démarrer un projet
          </Link>
        </div>
      </div>
    </>
  );
}
