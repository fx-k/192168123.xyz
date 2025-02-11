import React from 'react'
import { getLatestPosts } from '@/common/post'
import Link from 'next/link'
import DesktopOnly from '@/components/DesktopOnly'
import { ArrowRight } from '@/components/icons'
import dayjs from 'dayjs'

export default async function LatestPosts() {
  const posts = await getLatestPosts({ limit: 5 })

  if (posts.length === 0) return null

  return (
    <div className="-mx-3 sm:-mx-4 mt-6">
      {posts.map(post => (
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
