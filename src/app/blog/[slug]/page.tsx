import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { blogPosts, getBlogPost } from "@/lib/blog";
import styles from "../blog.module.css";

type BlogPostProps = {
  params: Promise<{ slug: string }>;
};

const SITE_URL = "https://www.dylan-dev.me";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: BlogPostProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Article introuvable | Clovis Ahouandjinou" };
  }

  const url = `${SITE_URL}/blog/${slug}`;

  return {
    title: post.seoTitle,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      url,
      type: "article",
      locale: "fr_FR",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ["Clovis Ahouandjinou"],
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const url = `${SITE_URL}/blog/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        mainEntityOfPage: url,
        image: `${SITE_URL}/og-image.png`,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        keywords: post.tags.join(", "),
        inLanguage: "fr",
        author: { "@id": `${SITE_URL}/#person` },
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar isProjectPage />

      <header className={styles.header}>
        <span className="eyebrow" style={{ textAlign: "left" }}>
          {post.tags.join(" · ")}
        </span>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.meta}>
          <span>Par Clovis Ahouandjinou</span>
          <span>
            Publié le{" "}
            {new Date(post.datePublished).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span>{post.readingTime} de lecture</span>
        </p>
      </header>

      <article className={styles.article}>
        {post.content.map((block, i) => {
          switch (block.type) {
            case "h2":
              return <h2 key={i}>{block.text}</h2>;
            case "p":
              return <p key={i}>{block.text}</p>;
            case "ul":
              return (
                <ul key={i}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            case "code":
              return (
                <pre key={i}>
                  <code>{block.lines.join("\n")}</code>
                </pre>
              );
          }
        })}
      </article>

      <div className={styles.cta}>
        <Link
          href="/services/developpeur-nextjs-freelance-europe-afrique"
          className="btn btn-green"
        >
          Travaillons ensemble
        </Link>{" "}
        <Link href="/blog" className="btn btn-ghost">
          Tous les articles
        </Link>
      </div>
    </main>
  );
}
