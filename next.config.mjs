import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: ['./src'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['oss.192168123.xyz', 'out.fxit.top', 'favicon-ico.vercel.app'],
  },
  experimental: {
    serverComponentsExternalPackages: ['plaiceholder', 'fetch-site-metadata'],
  },
  async rewrites() {
    return [
      {
        source: '/rss',
        destination: '/feed.xml',
      },
      {
        source: '/rss.xml',
        destination: '/feed.xml',
      },
      {
        source: '/feed',
        destination: '/feed.xml',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)', // 应用于所有路径
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload', // 1年有效期，包含子域名，支持预加载
          },
        ],
      },
    ]
  },
}

export default withPlaiceholder(config)
