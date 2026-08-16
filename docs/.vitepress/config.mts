// 让 VitePress 把 .docx/.pptx 视为静态资源而非页面，
// 避免报告链接被错误改写成 .html 后缀
process.env.VITE_EXTRA_EXTENSIONS = 'docx,pptx'

import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '朝槿的个人首页',
  description: '大四自动化学生 · 课程学习与项目实践',
  // GitHub Pages 部署时通过工作流传入，普通仓库需要 /仓库名/ 前缀
  base: process.env.VITEPRESS_BASE || '/',
  lastUpdated: true,
  // reports 目录下的报告附件（.docx/.pptx 等）不在 VitePress 已知资源扩展名列表中，
  // 会被误判为死链，这里定向豁免检查
  ignoreDeadLinks: [/^\/reports\//],

  themeConfig: {
    siteTitle: '朝槿',
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
      copyright: '© 2026 朝槿'
    }
  }
})
