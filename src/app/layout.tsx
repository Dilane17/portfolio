import type { Metadata } from "next";
import "./globals.css";
import ReadingProgress from "@/components/ReadingProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dylan-dev.me"),
  title: "Clovis Dylan | Développeur Frontend React Next.js Freelance",
  description:
    "Portfolio de Clovis Dylan, développeur frontend freelance basé à Cotonou (Bénin). Interfaces React et Next.js performantes pour startups et équipes produit SaaS.",
  keywords: [
    "développeur frontend React Next.js freelance",
    "développeur frontend Cotonou Bénin Afrique",
    "portfolio développeur frontend SaaS",
    "développeur React TypeScript disponible",
    "Clovis Dylan",
    "Design Systems",
  ],
  authors: [{ name: "Clovis Dylan" }],
  creator: "Clovis Dylan",
  alternates: {
    canonical: "https://www.dylan-dev.me",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Clovis Dylan | Développeur Frontend React Next.js Freelance",
    description:
      "Des interfaces React et Next.js performantes pour des produits SaaS exigeants — de la landing page au dashboard complet.",
    siteName: "Clovis Dylan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clovis Dylan — Développeur Frontend React Next.js Freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clovis Dylan | Développeur Frontend React Next.js Freelance",
    description:
      "Interfaces React & Next.js solides pour produits SaaS. Freelance basé à Cotonou, Bénin.",
    creator: "@clovisdylan",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
        <ReadingProgress />
        {children}
      </body>
    </html>
  );
}
