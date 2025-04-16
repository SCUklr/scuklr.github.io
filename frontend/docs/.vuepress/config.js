import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Kong Lingran\'s Blog',
  description: '个人博客',
  
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '文章',
        link: '/posts/',
      },
      {
        text: '关于',
        link: '/about/',
      },
    ],
    
    sidebar: {
      '/posts/': [
        {
          text: '所有文章',
          children: [
            '/posts/2024/03/blog-dev-diary.md',
            '/posts/2024/03/naive-ui-beautify.md',
            '/posts/2024/03/vue3-project-setup.md',
            '/posts/2024/hello-world.md',
            '/posts/2025/03/future-outlook.md',
            '/posts/2025/04/CypressABC.md',
          ],
        },
      ],
    },
    
    // GitHub 仓库链接
    repo: 'SCUklr/scuklr.github.io',
    
    // 编辑链接
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页',
    docsRepo: 'SCUklr/scuklr.github.io',
    docsBranch: 'main',
    docsDir: 'docs',
  }),
}) 