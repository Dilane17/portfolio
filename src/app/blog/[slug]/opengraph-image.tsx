import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { renderOgImage } from "@/lib/ogImage";

export const alt = "Article de blog de Clovis Ahouandjinou";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return blogPosts.map((item) => ({ slug: item.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return renderOgImage({ eyebrow: post.tags.join(" · "), title: post.title });
}
