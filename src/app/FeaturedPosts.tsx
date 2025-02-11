import React from 'react'
import { redis } from '@/lib/redis'
import { getLatestPosts } from '@/common/post'
import Link from 'next/link'
import DesktopOnly from '@/components/DesktopOnly'
import { ArrowRight } from '@/components/icons'
import dayjs from 'dayjs'

// 热门文章暂时不显示
export default async function FeaturedPosts() {
  const posts = await getLatestPosts()
  const likesArr = await redis.mget<number[]>(...posts.map(post => `post:likes:${post.slug}`))
  const combined = posts.map((post, idx) => [post, likesArr[idx] || 0] as const)
  const popularPosts = combined
    .filter(v => v[1] > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  if (popularPosts.length === 0) return null

  return (
    <div className="-mx-3 sm:-mx-4 mt-6">
      {popularPosts.map(([post]) => (
        <Link key={post.slug} href={`/posts/${post.slug}.html`}>
          <article className="group relative flex flex-col p-3 sm:p-4 mt-2 rounded-xl sm:hover:bg-zinc-400/10 transition-colors">
            <span className="text-sm text-zinc-400">
              {dayjs(post.frontmatter.date).format('MMM D, YYYY')}
            </span>
            <h3 className="mt-3 text-base font-medium">{post.frontmatter.title}</h3>
            <DesktopOnly>
              <ArrowRight className="absolute right-2.5 top-2.5 text-zinc-300 dark:text-zinc-600 -rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
            </DesktopOnly>
          </article>
        </Link>
      ))}
    </div>
  )
}
