module.exports = {
  name: 'Mr.Ke',
  title: '小可の聚集地',
  description: '小可之地！！！',
  description_typing: [
    "🌹可以永远期待一切的双向奔赴...",
    "虚心学习🙏🙏争取向大佬迈进...",
    "Coding for sth new... 😎",
    "🧐Debug the world...",
  ],
  avatar: '/avatar.png',
  logo: '/logo.svg',
  siteUrl: 'https://192168123.xyz',
  // icon 请在 src/components/Profile.tsx 中修改
  getFaviconAPI: 'https://api.vwood.xyz/v1/Favicon/public?domain=',
  artalkServer: 'https://cmt.192168123.xyz',
  links: [
    { name: 'GitHub', link: 'https://github.com/fx-k' },
    { name: 'Telegram', link: 'https://t.me/Mone_J' },
    { name: 'Mail', link: 'mailto:admin@fxit.top' },
    { name: 'RSS', link: '/feed.xml' },
  ],
  friends: [
    { name: '维基萌', link: 'http://www.wikimoe.com/' },
    { name: 'OMG的博客', link: 'https://ohmyga.cn/' },
  ],
  friends_invalid: [
    { name: '遇见心流', link: 'http://yujianxinliu.com/' },
    { name: '苍灵冥梦', link: 'https://moe.do/' },
    { name: '矢澤にこ', link: 'https://blog.ni-co.moe/' },
    { name: '树洞', link: 'https://aoaoao.me/' },
    { name: '久伴博客', link: 'https://jiub.ren/' },
    { name: 'Sonic853', link: 'http://blog.853lab.com/' },
  ],
  // en | zh-CN
  language: 'zh-CN',
  // 侧边目录
  toc: true,
  // 显示上一篇下一篇按钮
  adjacentPosts: true,
  // 配置文章过时提醒阈值
  outdatedPostThresholdDays: 90,
  markdown: {
    // 统一配置 CodeBlock 是否显示行号，也可以在 frontmatter 中通过 lineNumbers 字段单独设置
    lineNumbers: true,
  },
  backToTopButton: true
}
