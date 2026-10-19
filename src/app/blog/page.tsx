import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/lib/blog";
import styles from "./blog.module.css";

const url = "https://www.dylan-dev.me/blog";
const title = "Blog développement web : Next.js, React et SEO";
const description =
  "Articles techniques en français sur Next.js, React et le SEO technique, par Clovis Ahouandjinou, développeur front-end freelance.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
    types: { "application/rss+xml": "https://www.dylan-dev.me/blog/feed.xml" },
  },
  openGraph: { title, description, url, type: "website", locale: "fr_FR" },
  twitter: { card: "summary_large_image", title, description },
};

export default function BlogIndexPage() {
  return (
    <main className={styles.page}>
      <Navbar isProjectPage />
      <header className={styles.header}>
        <span className="eyebrow" style={{ textAlign: "left" }}>
          Blog
        </span>
        <h1 className={styles.title}>Next.js, React et SEO technique</h1>
        <p className={styles.meta}>
          Des articles pratiques en français, tirés de mes projets.
        </p>
      </header>
      <div className={styles.list}>
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
