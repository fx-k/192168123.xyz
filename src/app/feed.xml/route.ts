import RSS from 'rss'
import config from 'config'
import { getSiteUrl } from '@/common/url'
import { getLatestPosts } from '@/common/post'

export async function GET() {
  const feed = new RSS({
    title: config.title,
    description: config.description,
    site_url: config.siteUrl,
    feed_url: getSiteUrl('/feed.xml').href,
  })

  const posts = await getLatestPosts()

  for (const post of posts) {
    const { frontmatter } = post
    feed.item({
      title: frontmatter.title,
      description: '',
      url: getSiteUrl(`/posts/${post.slug}.html`).href,
      date: frontmatter.date,
    })
  }

  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml',
    },
  })
}
