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
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Clovis Ahouandjinou | Développeur Frontend React Next.js Freelance",
    description:
      "Des interfaces React et Next.js performantes pour des produits SaaS exigeants, de la landing page au dashboard complet.",
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
