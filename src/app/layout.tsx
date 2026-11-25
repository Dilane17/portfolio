import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { jsonLdString } from "@/lib/jsonLd";
import ReadingProgress from "@/components/ReadingProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dylan-dev.me"),
  title: "Développeur Full Stack Web & Mobile freelance | Clovis Ahouandjinou",
  description:
    "Clovis Ahouandjinou, développeur full stack à Cotonou : sites web, applications SaaS (Next.js, NestJS, PostgreSQL) et applications mobiles Flutter pour startups et PME d'Afrique et d'Europe. Devis gratuit.",
  keywords: [
    "développeur web freelance Cotonou",
    "création de site web Bénin",
    "création site vitrine landing page",
    "création application web SaaS sur mesure",
    "développeur Flutter application mobile freelance",
    "développeur full-stack freelance Next.js NestJS",
    "développeur full stack Next.js NestJS freelance",
    "développeur full stack Cotonou Bénin Afrique",
    "portfolio développeur full stack SaaS",
    "développeur React TypeScript disponible",
    "Clovis Ahouandjinou",
    "Design Systems",
  ],
  authors: [{ name: "Clovis Ahouandjinou" }],
  creator: "Clovis Ahouandjinou",
  alternates: {
    canonical: "https://www.dylan-dev.me",
    languages: { fr: "https://www.dylan-dev.me" },
  },
  verification: {
    google: "q6jzhPZgYgiakg-78gcsmzVLrbkAOOdmJaNGyQ-B71U",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.dylan-dev.me",
    title: "Développeur Full Stack Web & Mobile freelance | Clovis Ahouandjinou",
    description:
      "Clovis Ahouandjinou — Développeur full stack freelance. Sites web, applications SaaS et applications mobiles (Next.js, NestJS, PostgreSQL, Flutter), de la landing page au produit complet.",
    siteName: "Clovis Ahouandjinou Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clovis Ahouandjinou - Développeur Full Stack Web & Mobile Freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Développeur Full Stack Web & Mobile freelance | Clovis Ahouandjinou",
    description:
      "Applications web et mobiles solides (Next.js, NestJS, Flutter). Freelance full stack basé à Cotonou, Bénin.",
    creator: "@dylankodee",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdString({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.dylan-dev.me/#person",
                  name: "Clovis Ahouandjinou",
                  alternateName: ["Clovis Dylan", "Dylan Ahouandjinou", "dylankode"],
                  jobTitle: "Développeur Full Stack Freelance",
                  description: "Développeur full stack freelance spécialisé Next.js, NestJS, Flutter et produits SaaS. Basé à Cotonou, Bénin.",
                  url: "https://www.dylan-dev.me",
                  image: "https://www.dylan-dev.me/og-image.png",
                  sameAs: [
                    "https://github.com/Dilane17",
                    "https://x.com/dylankodee",
                    "https://comeup.com/dylankode"
                  ],
                  knowsAbout: [
                    "React", "Next.js", "TypeScript", "Flutter",
                    "SaaS", "Fintech", "NestJS", "PostgreSQL"
                  ],
                  worksFor: {
                    "@type": "Organization",
                    name: "HustlerLabs"
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Cotonou",
                    addressCountry: "BJ"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.dylan-dev.me/#website",
                  name: "Clovis Ahouandjinou — Portfolio",
                  url: "https://www.dylan-dev.me",
                  publisher: { "@id": "https://www.dylan-dev.me/#person" },
                  inLanguage: "fr"
                },
                {
                  "@type": "ProfilePage",
                  dateCreated: "2024-01-01",
                  dateModified: "2026-10-19",
                  mainEntity: { "@id": "https://www.dylan-dev.me/#person" }
                }
              ]
            })
          }}
        />
        <ReadingProgress />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
