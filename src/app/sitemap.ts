import { MetadataRoute } from 'next'
import { projects } from '@/lib/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map(({ slug, lastModified }) => ({
    url: `https://www.dylan-dev.me/projects/${slug}`,
    lastModified: new Date(lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://www.dylan-dev.me',
      lastModified: new Date(
        Math.max(...projects.map((p) => new Date(p.lastModified).getTime())),
      ),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...projectUrls,
  ]
}
