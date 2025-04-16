---
title: Github入门——以把本博客部署到你的本地为例
date: 2025-04-08
tags: ['项目']
description: '给新手看的'
---
你是不是刚打开GitHub，满眼英文按钮一头雾水？是不是看到"Fork"、"Clone"、"Pull Request"这些词就头皮发麻？别慌！这篇文章就是为你准备的——**零基础也能看懂**的GitHub入门教程。

我们会通过一个 **真实案例** （把我的博客的源码部署到你的电脑上并运行）来手把手教你：
✅ 如何"下载"GitHub上的代码（其实叫Clone）
✅ 怎么运行这些代码
✅ 遇到问题该怎么求助

全程就像学做菜一样： **准备食材（下载代码）→ 跟着菜谱操作（运行项目）→ 尝味道调咸淡（调试）** 。保证你学完就能自信地说："原来GitHub也没那么可怕嘛！"

要一起试试吗？👉 接下来我们开始第一步...

## 环境准备

在开始之前，请确保你的电脑上已经安装了以下工具：

- Node.js (建议使用 16.0 或更高版本)
- Git
- npm 或 yarn 包管理器

## 部署步骤

https://github.com/SCUklr/scuklr.github.io

点击以上链接进入到我的个人博客的仓库。

### 1. 克隆项目

首先，打开终端（Windows 用户可以使用 PowerShell 或 CMD），win+r，输入cmd回车进入终端。

cd到你想要下载到的地方的目录。执行以下命令克隆项目：

```bash

git clone https://github.com/SCUklr/scuklr.github.io.git

cd scuklr.github.io

```

### 2. 安装依赖

进入项目目录后，安装项目所需的依赖包：1234567

```bash

npm install

# 或者使用 yarn（我个人不太推荐这么做哈）

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

1.**依赖安装失败**

- 检查 Node.js 版本是否符合要求
- 尝试清除 npm 缓存：`npm cache clean --force`
- 使用淘宝镜像：`npm config set registry https://registry.npmmirror.com`

2.**启动失败**

- 检查端口是否被占用
- 确保所有依赖都正确安装
- 查看终端错误信息进行排查

3.**页面显示异常**

- 清除浏览器缓存
- 检查控制台是否有错误信息
- 确保所有静态资源路径正确
