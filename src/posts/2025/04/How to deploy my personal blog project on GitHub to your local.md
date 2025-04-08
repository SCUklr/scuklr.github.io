---
title: 如何把本博客部署到你的本地
date: 2025-04-08
tags: ['项目']
description: '给新手看的'
---
每一个计算机类专业的学生都要和github打交道，无论是学习web开发、深度学习还是搞黄色（？），github就像是一个超级无敌豪华大网盘，既可以往上面存东西，也可以把别人的东西下载到你的本机。那假如现在有个叫小D的用户想把我的这个博客项目拿到本地看看，该怎么做呢？



## 环境准备

在开始之前，请确保你的电脑上已经安装了以下工具：

- Node.js (建议使用 16.0 或更高版本)
- Git
- npm 或 yarn 包管理器

## 部署步骤

### 1. 克隆项目

首先，打开终端（Windows 用户可以使用 PowerShell 或 CMD），win+r，输入cmd，到你想要下载到的地方的目录。执行以下命令克隆项目：

```bash

git clone https://github.com/SCUklr/scuklr.github.io.git

cd scuklr.github.io

```

### 2. 安装依赖

进入项目目录后，安装项目所需的依赖包：

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
