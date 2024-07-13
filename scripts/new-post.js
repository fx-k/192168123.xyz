const fs = require('fs').promises
const path = require('path')
const dayjs = require('dayjs')

// npm run new:post title [tag1] [tag2] ...
const createPost = async () => {
  const [, , title, ...tags] = process.argv
  const dateStr = dayjs().format('YYYY-MM-DD')
  const postsDir = path.join(process.cwd(), 'posts')

  let filename
  let index = 1

  while (true) {
    filename = `${dateStr}-new-${index}.mdx`
    try {
      await fs.access(path.join(postsDir, filename))
      index++
    } catch {
      break
    }
  }

  await fs.writeFile(
    path.join(postsDir, filename),
    `---
title: '${title}'
date: '${new Date().toISOString()}'
tags:${tags.map(tag => `\n  - '${tag}'`).join('')}
---
`,
  )
}

createPost()
