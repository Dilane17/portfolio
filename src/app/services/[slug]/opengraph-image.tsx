import { notFound } from "next/navigation";
import { getLandingPage, landingPages } from "@/lib/landingPages";
import { renderOgImage } from "@/lib/ogImage";

export const alt = "Services de développement front-end freelance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return landingPages.map((item) => ({ slug: item.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) notFound();

  return renderOgImage({ eyebrow: page.eyebrow, title: page.h1 });
}
