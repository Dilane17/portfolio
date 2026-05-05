import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReadingProgress from "@/components/ReadingProgress";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Clovis Dylan | Développeur Frontend",
  description:
    "Portfolio de Clovis Dylan, développeur frontend spécialisé dans la création d'interfaces claires, performantes et crédibles pour des produits SaaS ambitieux.",
  keywords: ["Développeur Frontend", "Portfolio", "SaaS", "Design Systems", "React", "Next.js", "Clovis Dylan"],
  authors: [{ name: "Clovis Dylan" }],
  creator: "Clovis Dylan",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Clovis Dylan | Développeur Frontend",
    description:
      "Des interfaces lisibles, performantes et solides pour des produits SaaS exigeants.",
    siteName: "Clovis Dylan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clovis Dylan | Développeur Frontend",
    description: "Interfaces solides, design systems et produits SaaS pensés pour durer.",
    creator: "@clovisdylan",
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
      <body className={inter.className} suppressHydrationWarning>
        {/* Reading progress bar */}
        <ReadingProgress />

        {/* Global ambient background blobs */}
        <div aria-hidden="true" className="bg-blobs">
          <div className="bg-blob bg-blob--blue-tl" />
          <div className="bg-blob bg-blob--teal-ml" />
          <div className="bg-blob bg-blob--pink-tr" />
          <div className="bg-blob bg-blob--pink-mr" />
          <div className="bg-blob bg-blob--blue-bl" />
          <div className="bg-blob bg-blob--pink-br" />
        </div>

        {children}
      </body>
    </html>
  );
}
