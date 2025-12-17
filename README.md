# SCUklr's Blog

个人博客，使用 Jekyll 构建的静态网站。

## 🚀 本地运行

### 前置要求

- Ruby 2.5.0 或更高版本
- RubyGems
- GCC 和 Make

### 安装依赖

```bash
# 安装 Jekyll 和 Bundler
gem install jekyll bundler

# 安装项目依赖
bundle install
```

### 本地预览

```bash
# 启动开发服务器
bundle exec jekyll serve

# 或者使用实时重载
bundle exec jekyll serve --livereload

# 访问 http://localhost:4000
```

## 📝 写文章

在 `_posts` 目录下创建新的 Markdown 文件，文件名格式：`YYYY-MM-DD-title.md`

文件开头需要包含 Front Matter：

```markdown
---
title: 文章标题
date: 2024-03-20
tags: ['技术', '前端']
description: 文章描述
---

正文内容...
```

## 🌐 部署到 GitHub Pages

### 方式一：直接推送（推荐）

GitHub Pages 会自动构建 Jekyll 网站，只需：

```bash
git add .
git commit -m "Update blog"
git push origin main
```

### 方式二：手动构建

```bash
# 构建静态文件
bundle exec jekyll build

# 生成的文件在 _site 目录
```

## 📁 项目结构

```
.
├── _config.yml          # Jekyll 配置文件
├── _includes/           # 可复用的页面组件
│   ├── header.html
│   └── footer.html
├── _layouts/            # 页面布局模板
│   ├── default.html
│   ├── home.html
│   ├── post.html
│   └── page.html
├── _posts/              # 博客文章
│   └── YYYY-MM-DD-title.md
├── assets/              # 静态资源
│   ├── css/
│   └── images/
├── about.md             # 关于页面
├── archive.md           # 归档页面
├── index.md             # 首页
└── Gemfile              # Ruby 依赖
```

## 🔄 从 Vue 项目迁移说明

如果你想回退到之前的 Vue 版本：

```bash
# 查看提交历史
git log --oneline

# 回退到迁移前的版本
git reset --hard <commit-hash>

# 或者创建新分支保存当前Jekyll版本
git checkout -b jekyll-version
git checkout main
git reset --hard <previous-commit>
```

## 📚 Jekyll 资源

- [Jekyll 官方文档](https://jekyllrb.com/)
- [Jekyll 中文文档](https://jekyllcn.com/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Liquid 模板语言](https://shopify.github.io/liquid/)

## 📧 联系方式

- GitHub: [@SCUklr](https://github.com/SCUklr)
- Email: your-email@example.com

## 许可

MIT
