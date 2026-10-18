import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ReadingProgress from "@/components/ReadingProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dylan-dev.me"),
  title: "Clovis Ahouandjinou | Développeur React & Next.js Freelance",
  description:
    "Développeur front-end freelance à Cotonou. Sites, landing pages et dashboards React & Next.js pour startups et PME d'Afrique et d'Europe francophone.",
  keywords: [
    "développeur frontend React Next.js freelance",
    "développeur frontend Cotonou Bénin Afrique",
    "portfolio développeur frontend SaaS",
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
    title: "Clovis Ahouandjinou | Développeur React & Next.js Freelance",
    description:
      "Clovis Ahouandjinou — Développeur front-end freelance React & Next.js. Interfaces performantes pour produits SaaS exigeants, de la landing page au dashboard complet.",
    siteName: "Clovis Ahouandjinou Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clovis Ahouandjinou - Développeur Frontend React Next.js Freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clovis Ahouandjinou | Développeur React & Next.js Freelance",
    description:
      "Interfaces React & Next.js solides pour produits SaaS. Freelance basé à Cotonou, Bénin.",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.dylan-dev.me/#person",
                  name: "Clovis Ahouandjinou",
                  alternateName: ["Clovis Dylan", "Dylan Ahouandjinou", "dylankode"],
                  jobTitle: "Développeur Front-End Freelance",
                  description: "Développeur front-end freelance spécialisé React, Next.js et produits SaaS. Basé à Cotonou, Bénin.",
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
                  dateModified: "2026-06-22",
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
