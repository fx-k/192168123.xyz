'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'
import config from 'config'
import { animated, useTransition } from '@react-spring/web'
import useTranslation from '@/hooks/useTranslation'
import ImageWithFallback from '@/components/ImageWithFallback'
import { shuffle } from 'lodash';

const links: { name: string; link: string }[] = config.friends || []
const links_valid: { name: string; link: string }[] = config.friends_invalid || []

export default function Friends() {
  const { t } = useTranslation()
  // const transitions = useTransition(shuffle(links), {
  //   from: { scale: 0.5, opacity: 0 },
  //   enter: { scale: 1, opacity: 1 },
  //   leave: { scale: 0.5, opacity: 0 },
  //   trail: 400 / links.length,
  //   reset: true,
  // })
  // const transitions2 = useTransition(shuffle(links_valid), {
  //   from: { scale: 0.5, opacity: 0 },
  //   enter: { scale: 1, opacity: 1 },
  //   leave: { scale: 0.5, opacity: 0 },
  //   trail: 400 / links.length,
  //   reset: true,
  // })
  const useAnimatedLinks = (links: string | any[]) => {
    const transitions = useTransition(shuffle(links), {
      from: { scale: 0.5, opacity: 0 },
      enter: { scale: 1, opacity: 1 },
      leave: { scale: 0.5, opacity: 0 },
      trail: 400 / links.length,
      reset: true,
    });

    return transitions;
  };

  return (
    <div
      className={clsx(styles.friends, 'prose-container flex flex-col items-center justify-center')}
    >
      <h2 className={clsx(styles.title, 'relative font-bold text-5xl mt-20 sm:mt-40 italic')}>
        {t('friends-page.title')}
      </h2>
      <div className="font-medium text-sm m-10 sm:m-14 text-center">
        <p>{t('friends-page.desc', { count: links.length })}</p>
        <p>{t('friends-page.desc2', { count: links.length })}</p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-7 text-2xl">
        {useAnimatedLinks(links)((linkStyles, { name, link }) => (
          <animated.div key={link} style={linkStyles}>
            {/* eslint-disable-next-line */}
            <div className="relative flex-shrink-0 hover:text-[#398c94]">
              <ImageWithFallback
                className="mr-2 inline-block object-cover rounded-full p-1 bg-white dark:bg-zinc-900 ring-2 ring-zinc-400/20 shadow-lg dark:shadow-none shadow-zinc-600/10"
                src={config.getFaviconAPI + link.split('/')[2]}
                alt="avatar"
                width={30}
                height={30}
                unoptimized
                priority
                fallbackSrc="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzIwMCcgaGVpZ2h0PScyMDAnPjxwYXRoIGQ9J001MTIgNTEuMmMyNTQuMDggMCA0NjAuOCAyMDYuNzIgNDYwLjggNDYwLjhzLTIwNi43MiA0NjAuOC00NjAuOCA0NjAuOFM1MS4yIDc2Ni4wOCA1MS4yIDUxMiAyNTcuOTIgNTEuMiA1MTIgNTEuMk01MTIgMEMyMjkuMjQ4IDAgMCAyMjkuMjQ4IDAgNTEyczIyOS4yNDggNTEyIDUxMiA1MTIgNTEyLTIyOS4yNDggNTEyLTUxMlM3OTQuNzUyIDAgNTEyIDBMNTEyIDB6JyBmaWxsPScjRDFEM0Q0Jz48L3BhdGg+PHBhdGggZD0nTTQ3MC45NzYgNjQyLjYyNEM0NzAuNzIgNjMzLjYgNDcwLjY1NiA2MjYuODggNDcwLjY1NiA2MjIuNGMwLTI2LjQ5NiAzLjc3Ni00OS4zNDQgMTEuMjY0LTY4LjYwOCA1LjUwNC0xNC41MjggMTQuNC0yOS4xMiAyNi42MjQtNDMuOTA0IDkuMDI0LTEwLjc1MiAyNS4yMTYtMjYuNDMyIDQ4LjU3Ni00Ny4wNHMzOC41OTItMzcuMDU2IDQ1LjU2OC00OS4zNDQgMTAuNDk2LTI1LjYgMTAuNDk2LTQwLjEyOGMwLTI2LjI0LTEwLjI0LTQ5LjM0NC0zMC43Mi02OS4xODRTNTM2Ljc2OCAyNzQuMzY4IDUwNy4wMDggMjc0LjM2OGMtMjguNzM2IDAtNTIuNzM2IDkuMDI0LTcyIDI3LjAwOFM0MDMuMTM2IDM0Ny41MiAzOTcuMTIgMzg1LjcyOEwzMjcuNzQ0IDM3Ny40NzJjNi4yNzItNTEuMjY0IDI0LjgzMi05MC40OTYgNTUuNjgtMTE3Ljc2UzQ1NS4xMDQgMjE4Ljg4IDUwNS44NTYgMjE4Ljg4YzUzLjc2IDAgOTYuNjQgMTQuNjU2IDEyOC42NCA0My45MDRzNDggNjQuNjQgNDggMTA2LjExMmMwIDI0LTUuNjMyIDQ2LjE0NC0xNi44OTYgNjYuMzY4cy0zMy4yOCA0NC44NjQtNjUuOTg0IDczLjg1NkM1NzcuNiA1MjguNjQgNTYzLjI2NCA1NDIuOTc2IDU1Ni40OCA1NTIuMjU2UzU0NC43NjggNTcyLjA5NiA1NDEuNTA0IDU4NC4xMjhzLTUuMTIgMzEuNDg4LTUuNjMyIDU4LjQ5Nkw0NzAuOTc2IDY0Mi42MjR6TTQ2Ni44OCA3NzcuOTg0bDAtNzYuODY0IDc2Ljg2NCAwIDAgNzYuODY0TDQ2Ni44OCA3NzcuOTg0eicgZmlsbD0nI0QxRDNENCc+PC9wYXRoPjwvc3ZnPg=="
                suppressHydrationWarning
              />
              <a
                key={link}
                className="border-b border-current transition hover:text-[#52c8d5]"
                href={link}
                target="_blank"
                suppressHydrationWarning
              >
                {name}
              </a>
            </div>
          </animated.div>
        ))}
      </div>
      <p className="font-medium text-base m-10 sm:m-14">
        👇{t('friends_invalid-page.title', { count: links_valid.length })}😭
      </p>
      <div className="flex items-center justify-center flex-wrap gap-7 text-1xl">
        {useAnimatedLinks(links_valid)((linkStyles, { name }) => (
          <animated.div key={name} style={linkStyles}>
            {/* eslint-disable-next-line */}
            <a
              key={name}
              className="line-through border-current transition hover:text-[#52c8d5]"
              href="#"
              suppressHydrationWarning
            >
              {name}
            </a>
          </animated.div>
        ))}
      </div>
    </div >
  )
}
