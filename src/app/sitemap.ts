import { MetadataRoute } from 'next'
import { projects } from '@/lib/portfolio'
import { landingPages } from '@/lib/landingPages'
import { blogPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map(({ slug, lastModified }) => ({
    url: `https://www.dylan-dev.me/projects/${slug}`,
    lastModified: new Date(lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const landingUrls = landingPages.map(({ slug, lastModified }) => ({
    url: `https://www.dylan-dev.me/services/${slug}`,
    lastModified: new Date(lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const blogUrls = [
    {
      url: 'https://www.dylan-dev.me/blog',
      lastModified: new Date(
        Math.max(...blogPosts.map((p) => new Date(p.dateModified).getTime())),
      ),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...blogPosts.map((post) => ({
      url: `https://www.dylan-dev.me/blog/${post.slug}`,
      lastModified: new Date(post.dateModified),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  return [
    {
      url: 'https://www.dylan-dev.me',
      lastModified: new Date(
        Math.max(...projects.map((p) => new Date(p.lastModified).getTime())),
      ),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...landingUrls,
    ...blogUrls,
    ...projectUrls,
  ]
}
