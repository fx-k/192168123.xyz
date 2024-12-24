import React from 'react'
import Link from 'next/link'
import DesktopOnly from '@/components/DesktopOnly'
import { ArrowRight } from '@/components/icons'

const projects = [
  {
    name: '192168123.xyz',
    desc: "小可の聚集地（本站已开源，帮我点点Star叭 orz）",
    url: 'https://github.com/fx-k/192168123.xyz',
  },
  {
    name: '繁星MC服务器',
    desc: "Fancy World - 一个创立于2014年的MCPE(BE)公益服务器!",
    url: 'https://mc.fxit.top',
  },
  {
    name: 'FXCloud - 私有云',
    desc: "233456.xyz, 一个对外分享的私有云平台。",
    url: 'https://233456.xyz',
  },
  {
    name: 'Server Status - 探针',
    desc: "古人云，有朋自远方来，以针会友～",
    url: 'https://dash.status.192168123.xyz',
  },
]

const Projects = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 -mx-3 sm:-mx-4 mt-8">
      {projects.map(project => (
        <Link
          className="group relative flex flex-col p-3 sm:p-4 gap-1.5 rounded-xl sm:hover:bg-zinc-400/10 transition-colors"
          key={project.name}
          href={project.url}
          target="_blank"
        >
          <h3 className="font-medium">{project.name}</h3>
          <span className="text-zinc-400 dark:text-zinc-500">{project.desc}</span>
          <DesktopOnly>
            <ArrowRight className="absolute right-2.5 bottom-2.5 text-zinc-300 dark:text-zinc-600 -rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
          </DesktopOnly>
        </Link>
      ))}
    </div>
  )
}

export default Projects
