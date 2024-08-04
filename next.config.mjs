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
}

export default withPlaiceholder(config)
