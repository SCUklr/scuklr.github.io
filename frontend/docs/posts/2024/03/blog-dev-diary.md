---
title: 个人博客开发日记
date: 2024-03-20
tags: ['项目']
description: 记录开发个人博客过程中的心得体会...
---
这次决定用 Vue3 + TypeScript + Vite 从头开始写一个博客，练前端开发。

## 技术选型

### 1. 核心框架

-**Vue3**: 选择 Vue3 主要是因为 Composition API 写起来真的很舒服

-**TypeScript**: 类型系统确实能避免很多低级错误

-**Vite**: 开发体验比 Webpack 好太多了

### 2. UI 框架

最后选择了 Naive UI，原因如下：

- TypeScript 支持完善
- 组件库丰富，文档清晰
- 主题定制灵活
- 社区活跃

### 3. 状态管理

考虑到项目规模，没有用 Vuex 或 Pinia，而是选择了轻量级的 nanostores。

## 开发过程

### 1. 项目初始化

```bash

npm createvite@latest

# 选择 Vue + TypeScript

cd my-blog

npm install

```

### 2. 目录结构设计


src/

├── components/ # 公共组件

├── views/ # 页面组件

├── posts/ # Markdown 文章

├── store/ # 状态管理

├── styles/ # 全局样式

├── types/ # TypeScript 类型定义

└── utils/ # 工具函数

### 3. 主要功能实现

#### Markdown 渲染

这部分花了不少时间，主要解决了这些问题：

- 文章元数据解析（frontmatter）
- 代码高亮
- 自定义组件嵌入

```ts
// markdown 解析配置
const markdownConfig = {
  highlight: {
    theme: 'dracula'
  },
  // 其他配置...
}
```

#### 路由设计

采用了嵌套路由的方式：

- `/`: 首页
- `/posts`: 文章列表
- `/posts/:id`: 文章详情
- `/tags`: 标签页
- `/about`: 关于页面

#### 性能优化

1. 路由懒加载

```ts
const routes = [
  {
    path: '/posts',
    component: () => import('@/views/Posts.vue')
  }
]
```

2. 图片懒加载
3. 虚拟列表（文章列表）

## 遇到的问题

### 1. TypeScript 类型定义

最开始对 TS 不太熟，写类型定义时经常遇到问题：

```ts
// 文章类型定义
interface Post {
  id: string
  title: string
  date: string
  tags: string[]
  content: string
}
```

### 2. 样式适配

- 响应式布局适配
- 暗色模式支持
- 主题切换动画

### 3. 构建优化

- 静态资源处理
- 打包体积优化
- 部署配置

## 后续计划

1. 添加评论功能
2. 优化 SEO
3. 添加文章搜索
4. 优化加载性能

## 总结

这次重构让我对 Vue3 和 TypeScript 有了更深的理解。虽然过程中遇到了不少问题，但最终还是完成了一个相对满意的版本。

当然，博客还有很多可以改进的地方。不过，先这样吧，下一步准备把评论功能加上。

## 参考资料

1. [Vue3 文档](https://vuejs.org/)
2. [Naive UI](https://www.naiveui.com/)
3. [Vite 官方文档](https://vitejs.dev/)
