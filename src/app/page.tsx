import React from 'react'
import Profile from '@/components/Profile'
import useTranslation from '@/hooks/useTranslation'
import Link from 'next/link'
import LatestPosts from "@/app/LatestPosts";
import Projects from './Projects'

// export const revalidate = 86400

const Title: React.FC<{ text: string }> = props => {
  const { text } = props

  return <h2 className="flex items-center justify-between mt-16 text-2xl font-bold">{text}</h2>
}

export default async function Home() {
  const { t } = useTranslation()

  return (
    <>
      <div className="prose-container">
        <Profile />
        <p className="mt-4 break-words leading-loose">
          Hiya 👋，这里是小可。
        </p>
        <p className="mt-4 break-words leading-loose">
          本是个开<Link className="underline decoration-sky-500" href="https://mc.fxit.top/" target="_blank">MC服</Link>出身的腐竹🤔意外间打开了CS领域的大门，并开始在前后端及计网运维等领域<a className='line-through'>摸爬滚打</a>😳...后来，有幸正式成为了科班出生的计机人，目前已经是个准硕士研究生😎
        </p>
        <p className="mt-4 break-words leading-loose">
          Yep，正如本站logo所示，<Link className="underline decoration-pink-500" href="https://www.fxit.top/" target="_blank">FXIT</Link>是我的小工作室。一些内容相比于放在工作室官网，我更乐于将它发布在不那么官方的场合，比如<a className="underline decoration-wavy decoration-indigo-500/50">小可の聚集地</a>。
        </p>
        <Title text={t('home-page.posts.title')} />
        <LatestPosts />
        <div className="text-center mt-6">
          <Link
            className="inline-flex items-center justify-center gap-1 font-medium text-zinc-400 border-b border-zinc-400/10 hover:border-zinc-400/50 transition-colors"
            href="/posts"
          >
            {'查看所有'}
          </Link>
        </div>
        <Title text={t('home-page.projects.title')} />
        <Projects />
        <div className="text-center mt-6">
          <Link
            className="inline-flex items-center justify-center gap-1 text-zinc-400 border-b border-zinc-400/10 hover:border-zinc-400/50 transition-colors"
            href="https://github.com/fx-k?tab=repositories&sort=stargazers"
          >
            {t('home-page.projects.view-all')}
          </Link>
        </div>
      </div>
    </>
  )
}
