import fs from "node:fs";
import path from "node:path";

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "code"; lang: string; lines: string[] }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  tags: string[];
  links: { label: string; href: string }[];
  content: BlogBlock[];
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

/**
 * Parse the markdown subset used by blog articles:
 * "## " headings, paragraphs, "- " lists and fenced code blocks.
 */
export function parseBody(body: string): BlogBlock[] {
  const blocks: BlogBlock[] = [];
  const lines = body.replace(/\r\n/g, "\n").split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
    } else if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        code.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({ type: "code", lang, lines: code });
    } else if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      i++;
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2).trim());
        i++;
      }
      blocks.push({ type: "ul", items });
    } else {
      const paragraph: string[] = [];
      while (
        i < lines.length &&
        lines[i].trim() !== "" &&
        !lines[i].startsWith("```") &&
        !lines[i].startsWith("## ") &&
        !lines[i].startsWith("- ")
      ) {
        paragraph.push(lines[i].trim());
        i++;
      }
      blocks.push({ type: "p", text: paragraph.join(" ") });
    }
  }

  return blocks;
}

function parseFrontmatter(source: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error("Blog article is missing its frontmatter");

  const data: Record<string, string> = {};
  const links: { label: string; href: string }[] = [];

  for (const line of match[1].split("\n")) {
    const item = line.match(/^\s+-\s+(.+?)\s*\|\s*(\S+)\s*$/);
    if (item) {
      links.push({ label: item[1], href: item[2] });
      continue;
    }
    const pair = line.match(/^([A-Za-z]+):\s*(.*)$/);
    if (pair) data[pair[1]] = pair[2].trim();
  }

  return { data, links, body: match[2] };
}

function estimateReadingTime(blocks: BlogBlock[]) {
  const words = blocks.reduce((total, block) => {
    const text =
      block.type === "ul"
        ? block.items.join(" ")
        : block.type === "code"
          ? block.lines.join(" ")
          : block.text;
    return total + text.split(/\s+/).filter(Boolean).length;
  }, 0);
  return `${Math.max(1, Math.ceil(words / 160))} min`;
}

function loadPosts(): BlogPost[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const { data, links, body } = parseFrontmatter(
        fs.readFileSync(path.join(CONTENT_DIR, file), "utf8"),
      );
      const required = [
        "title",
        "seoTitle",
        "description",
        "datePublished",
        "dateModified",
      ];
      for (const key of required) {
        if (!data[key]) throw new Error(`${file}: missing "${key}" in frontmatter`);
      }
      const content = parseBody(body);
      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title,
        seoTitle: data.seoTitle,
        description: data.description,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        readingTime: data.readingTime || estimateReadingTime(content),
        tags: (data.tags ?? "")
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        links,
        content,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.datePublished).getTime() -
        new Date(a.datePublished).getTime(),
    );
}

export const blogPosts: BlogPost[] = loadPosts();

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
