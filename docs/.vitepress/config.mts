import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'zhaojin596 的个人首页',
  description: '研究生 · 强化学习方向 · 课程资料与项目展示',
  // GitHub Pages 部署时通过工作流传入，普通仓库需要 /仓库名/ 前缀
  base: process.env.VITEPRESS_BASE || '/',
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'zhaojin596',
    nav: [
      { text: '首页', link: '/' },
      { text: '课程资料', link: '/courses' },
      { text: '项目', link: '/projects' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhaojin596' }
    ],

    footer: {
      message: '用 VitePress 构建，托管于 GitHub Pages',
      copyright: '© 2026 zhaojin596'
    }
  }
})
