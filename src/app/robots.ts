import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/common/url'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/',
    },
    sitemap: getSiteUrl('/sitemap.xml').href,
  }
}
