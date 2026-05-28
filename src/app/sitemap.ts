import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.dylan-dev.me', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://www.dylan-dev.me/projects/ares-drive', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.dylan-dev.me/projects/asmi-transfert', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.dylan-dev.me/projects/atelier-bossart', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
