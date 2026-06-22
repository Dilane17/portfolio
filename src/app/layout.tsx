import type { Metadata } from "next";
import "./globals.css";
import ReadingProgress from "@/components/ReadingProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dylan-dev.me"),
  title: "Clovis Ahouandjinou | Développeur Frontend React Next.js Freelance",
  description:
    "Portfolio de Clovis Ahouandjinou, développeur frontend freelance basé à Cotonou (Bénin). Interfaces React et Next.js performantes pour startups et équipes produit SaaS.",
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.dylan-dev.me",
    title: "Clovis Ahouandjinou | Développeur Frontend React Next.js Freelance",
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
    title: "Clovis Ahouandjinou | Développeur Frontend React Next.js Freelance",
    description:
      "Interfaces React & Next.js solides pour produits SaaS. Freelance basé à Cotonou, Bénin.",
    creator: "@dylankodee",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.dylan-dev.me/#person",
      name: "Clovis Ahouandjinou",
      alternateName: ["Clovis Dylan", "Dylan Ahouandjinou", "dylankode"],
      jobTitle: "Développeur Front-End Freelance",
      description:
        "Développeur front-end freelance spécialisé React, Next.js et produits SaaS. Basé à Cotonou, Bénin, disponible pour des missions en Afrique francophone et à l'international.",
      url: "https://www.dylan-dev.me",
      image: "https://www.dylan-dev.me/og-image.png",
      sameAs: [
        "https://github.com/Dilane17",
        "https://x.com/dylankodee",
        "https://comeup.com/dylankode",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Flutter",
        "SaaS",
        "Fintech",
        "Design Systems",
        "NestJS",
        "PostgreSQL",
      ],
      worksFor: {
        "@type": "Organization",
        name: "HustlerLabs",
        url: "https://www.dylan-dev.me",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cotonou",
        addressCountry: "BJ",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.dylan-dev.me/#website",
      name: "Clovis Ahouandjinou — Portfolio Développeur Front-End Freelance",
      url: "https://www.dylan-dev.me",
      publisher: { "@id": "https://www.dylan-dev.me/#person" },
      inLanguage: "fr",
    },
    {
      "@type": "ProfilePage",
      dateCreated: "2024-01-01",
      dateModified: "2026-06-22",
      mainEntity: { "@id": "https://www.dylan-dev.me/#person" },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ReadingProgress />
        {children}
      </body>
    </html>
  );
}
