import { MetadataRoute } from 'next'
import { getProjectSlugs } from '@/lib/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = getProjectSlugs().map((slug) => ({
    url: `https://www.dylan-dev.me/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://www.dylan-dev.me',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...projectUrls,
  ]
}
