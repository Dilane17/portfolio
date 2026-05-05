import data from "@/data/portfolioData.json";

export type PortfolioData = typeof data;
export type Project = PortfolioData["projects"][number];

export const portfolioData = data;
export const projects = data.projects;

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
