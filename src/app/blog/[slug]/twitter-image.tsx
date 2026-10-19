import { blogPosts } from "@/lib/blog";
import Image from "./opengraph-image";

export const alt = "Article de blog de Clovis Ahouandjinou";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default Image;

export function generateStaticParams() {
  return blogPosts.map((item) => ({ slug: item.slug }));
}
