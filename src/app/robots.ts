import { MetadataRoute } from 'next'
import { env } from '@/shared'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*' }],
    sitemap: `${env.url.website}/sitemap.xml`,
    host: env.url.website,
  }
}
