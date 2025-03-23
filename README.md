# 个人博客项目

这是一个使用 Vue 3 + Vite + Naive UI 构建的个人博客项目。

## 功能特点

- 🎨 现代化的 UI 设计
- 📱 响应式布局
- 📝 Markdown 文章支持
- 🚀 基于 Vite 的快速开发体验
- �� GitHub Pages 自动部署

## 快速开始

### 环境要求

- Node.js 16.0 或更高版本
- npm 或 yarn 包管理器
- Git

### 安装步骤

1. 克隆项目

```bash
git clone https://github.com/你的用户名/你的仓库名.git
cd 你的仓库名
```

2. 安装依赖

```bash
npm install
# 或者
yarn install
```

3. 启动开发服务器

```bash
npm run dev
# 或者
yarn dev
```

4. 构建生产版本

```bash
npm run build
# 或者
yarn build
```

### 部署到 GitHub Pages

1. 在 GitHub 上创建新仓库
2. 初始化本地仓库并推送

```bash
git init
git add .
git commit -m "初始化项目"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

3. 配置 GitHub Actions

- 在仓库的 Settings > Pages 中设置部署分支为 `gh-pages`
- 在仓库的 Settings > Actions > General 中启用 Actions

4. 创建 GitHub Actions 工作流文件
   在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
    
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
        
      - name: Install Dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

5. 推送更改

```bash
git add .
git commit -m "添加 GitHub Actions 配置"
git push origin main
```

### 自定义配置

1. 修改网站标题和描述

- 编辑 `index.html` 中的 `<title>` 和 `<meta>` 标签

2. 修改个人信息

- 编辑 `src/views/Home.vue` 中的个人信息部分

3. 添加新文章

- 在 `src/posts` 目录下创建 Markdown 文件
- 使用 frontmatter 添加文章元数据：

```markdown
---
title: 文章标题
date: 2024-03-22
tags: ['标签1', '标签2']
---

文章内容...
```

## 项目结构


blog-frontend/

├── src/

│ ├── assets/ # 静态资源

│ ├── components/ # 组件

│ ├── posts/ # Markdown 文章

│ ├── router/ # 路由配置

│ ├── views/ # 页面视图

│ ├── App.vue # 根组件

│ └── main.js # 入口文件

├── public/ # 公共资源

└── index.html # HTML 模板


## 技术栈

- Vue 3
- Vite
- Naive UI
- Vue Router
- Markdown

## 许可证

MIT License
