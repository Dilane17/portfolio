import posts from "@/data/blogPosts.json";

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "code"; lang: string; lines: string[] }
  | { type: "ul"; items: string[] };

export type BlogPost = Omit<(typeof posts)[number], "content"> & {
  content: BlogBlock[];
};

export const blogPosts = posts as BlogPost[];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
