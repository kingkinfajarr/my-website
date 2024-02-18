import { MetadataRoute } from 'next'
import { env } from '@/shared'
import { navigationItems } from '@/components'

export default function sitemap(): MetadataRoute.Sitemap {
  const websiteUrl = env.url.website

  const navigations = navigationItems.map((item) => {
    return {
      url: `${websiteUrl}${item.href}`,
      lastModified: new Date(),
      priority: item.href === '/' ? 1 : 0.7,
    }
  })

  //   const posts = allPosts.map((post) => {
  //     return {
  //       url: `${websiteUrl}/blog/${post.slug}`,
  //       lastModified: new Date(post.updatedAt),
  //       priority: 0.5,
  //     }
  //   })

  return [...navigations]
}
