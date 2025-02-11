import React from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'

export interface PostListProps {
  posts: {
    slug: string
    frontmatter: PostFrontmatter
  }[]
  dateFormat?: string
}

const PostList: React.FC<PostListProps> = props => {
  const { posts = [], dateFormat = 'MMMM D' } = props

  return (
    <>
      {posts.map(({ frontmatter, slug }, idx) => (
        <Link key={idx} className="block -mx-3 sm:-mx-4 mt-2" href={`/posts/${slug}.html`} prefetch={false}>
          <article className="group relative p-3 sm:p-4 rounded-xl">
            <h3 className="mb-1.5 text-lg font-medium group-hover:text-primary transition-colors">{frontmatter.title}</h3>
            <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
              {dayjs(frontmatter.date).format(dateFormat)}
            </span>
          </article>
        </Link>
      ))}
    </>
  )
}

export default PostList
