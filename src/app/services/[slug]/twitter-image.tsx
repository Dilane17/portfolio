import { landingPages } from "@/lib/landingPages";
import Image from "./opengraph-image";

export const alt = "Services de développement front-end freelance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default Image;

export function generateStaticParams() {
  return landingPages.map((item) => ({ slug: item.slug }));
}
