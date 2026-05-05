"use client";
import Link from "next/link";
import styles from "@/app/page.module.css";

interface NavbarProps {
  isProjectPage?: boolean;
}

export default function Navbar({ isProjectPage = false }: NavbarProps) {
  const projectsHref = isProjectPage ? "/#projects" : "#projects";
  const skillsHref = isProjectPage ? "/#skills" : "#skills";
  const aboutHref = isProjectPage ? "/#about" : "#about";
  const contactHref = isProjectPage ? "/#contact" : "#contact";
  const homeHref = isProjectPage ? "/" : "#";

  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        {/* Brand */}
        <div className={styles.navBrand}>
          <Link href={homeHref} className={styles.navBrand}>
            <span className={styles.brandBadge}>CD</span>
            <span className={styles.brandName}>Clovis Dylan</span>
          </Link>
        </div>

        {/* Nav links */}
        <ul className={styles.navLinks}>
          <li><Link href={projectsHref}>Projets</Link></li>
          <li><Link href={skillsHref}>Compétences</Link></li>
          <li><Link href={aboutHref}>Approche</Link></li>
          <li><Link href={contactHref}>Contact</Link></li>
        </ul>

        {/* Right side: CTA */}
        <div className={styles.navActions}>
          <Link href={contactHref} className={styles.navLinkBtn}>
            Discutons
          </Link>
          <Link
            href={projectsHref}
            className="btn btn-primary"
            style={{ fontSize: "0.82rem", padding: "0.5rem 1.1rem" }}
          >
            Voir mes projets
          </Link>
        </div>
      </div>
    </nav>
  );
}
