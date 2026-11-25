import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN = /(\[[^\]]+\]\([^)\s]+\)|\*\*[^*]+\*\*|`[^`]+`)/g;

/** Render the inline markdown used in blog articles: [text](url), **bold**, `code`. */
export default function BlogInline({ text }: { text: string }) {
  const nodes: ReactNode[] = text.split(TOKEN).map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const [, label, href] = link;
      return href.startsWith("/") ? (
        <Link key={i} href={href} className="text-link">
          {label}
        </Link>
      ) : (
        <a key={i} href={href} className="text-link" rel="noopener noreferrer">
          {label}
        </a>
      );
    }
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    return part;
  });
  return <>{nodes}</>;
}
