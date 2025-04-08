---
title: 个人博客项目部署指南
date: 2024-03-22
tags: ['教程', '部署']
description: 手把手教你如何将个人博客项目部署到本地环境
---

# 个人博客项目部署指南

## 环境准备

在开始之前，请确保你的电脑上已经安装了以下工具：

- Node.js (建议使用 16.0 或更高版本)
- Git
- npm 或 yarn 包管理器

## 部署步骤

### 1. 克隆项目

首先，打开终端（Windows 用户可以使用 PowerShell 或 CMD），执行以下命令克隆项目：

```bash
git clone https://github.com/SCUklr/scuklr.github.io.git
cd scuklr.github.io
```

### 2. 安装依赖

进入项目目录后，安装项目所需的依赖包：

```bash
npm install
# 或者使用 yarn
yarn install
```

### 3. 启动开发服务器

依赖安装完成后，启动开发服务器：

```bash
npm run dev
# 或者使用 yarn
yarn dev
```

启动成功后，终端会显示一个本地服务器地址（通常是 `http://localhost:5173`），在浏览器中打开这个地址即可看到项目。

### 4. 构建生产版本

如果你想构建生产版本，可以执行：

```bash
npm run build
# 或者使用 yarn
yarn build
```

构建完成后，可以在 `dist` 目录下找到生成的文件。

## 常见问题

1. **依赖安装失败**
   - 检查 Node.js 版本是否符合要求
   - 尝试清除 npm 缓存：`npm cache clean --force`
   - 使用淘宝镜像：`npm config set registry https://registry.npmmirror.com`

2. **启动失败**
   - 检查端口是否被占用
   - 确保所有依赖都正确安装
   - 查看终端错误信息进行排查

3. **页面显示异常**
   - 清除浏览器缓存
   - 检查控制台是否有错误信息
   - 确保所有静态资源路径正确

## 项目结构说明

```
scuklr.github.io/
├── src/                # 源代码目录
│   ├── assets/        # 静态资源
│   ├── components/    # 公共组件
│   ├── posts/         # Markdown 文章
│   ├── router/        # 路由配置
│   ├── views/         # 页面视图
│   ├── App.vue        # 根组件
│   └── main.js        # 入口文件
├── public/            # 公共资源
└── package.json       # 项目配置文件
```

## 技术栈

- Vue 3
- Naive UI
- Vue Router
- Vite
- TypeScript
- Markdown

## 后续开发

如果你想基于这个项目进行二次开发，可以：

1. 修改 `src/views/Home.vue` 中的个人信息
2. 在 `src/posts` 目录下添加新的文章
3. 自定义样式和主题
4. 添加新的功能模块

希望这篇指南能帮助你成功部署项目！如果遇到任何问题，欢迎在 GitHub 上提交 Issue。 