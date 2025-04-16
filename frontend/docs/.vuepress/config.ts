import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Kong Lingran\'s Blog',
  description: '个人博客',
  
  bundler: viteBundler(),
  
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
    
    repo: 'SCUklr/scuklr.github.io',
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页',
    docsRepo: 'SCUklr/scuklr.github.io',
    docsBranch: 'main',
    docsDir: 'docs',
  }),
}) 