# 192168123.xyz

[English](./README.md) • [中文](./README.zh-CN.md)

My personal blog, built with Next.js, TypeScript, MDX, and TailwindCSS.

👀 [Live Demo](https://192168123.xyz/)

## Features

- 🎨 Simple, smooth, and fast
- ✨ Supports dark mode, responsive design, and theme color customization
- 🧩 Built-in some markdown extensions, powered by MDX, supports embedding JSX components in posts
- 🎮 Built-in CodePlayground (beta) to run code blocks directly within posts
- 🔫 Fun like button, hit counter, and sound feedback

## Getting Started

1. Fork this repository
2. Run `npm i` to install dependencies
3. Customize the configuration in `site.config.js`
4. To use the like button and hit counter, register for [Upstash Redis](https://console.upstash.com/redis) service, create a `.env` file in the root directory and fill in the following information:

   ```env
   UPSTASH_REDIS_REST_URL = xxx
   UPSTASH_REDIS_REST_TOKEN = xxx
   ```

5. Run `npm run new:post filename title [tag1] [tag2] ...` to create a post in `posts` folder, for more syntax reference, see [example posts](https://www.xiaojun.im/posts/2023-04-27-mdx-syntax-guide)
6. Run `npm run dev` to preview
7. Deploy it on [Vercel](https://vercel.com)
8. If you like it, please give this project a star ✨, it’s a great encouragement for me 🙏

## Thanks

### Sound Effects

https://zapsplat.com

### Reference Sites

- https://www.joshwcomeau.com
- https://cali.so
- https://leerob.io
- https://vuepress.vuejs.org
- https://vitepress.dev
- https://docusaurus.io
- https://github.com/iissnan/hexo-theme-next
- https://github.com/nanxiaobei/hugo-paper
