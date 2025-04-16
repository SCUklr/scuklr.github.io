---
title: 使用Naive UI美化界面
date: 2024-03-20
tags: ['Naive UI', 'UI设计']
description: 如何使用 Naive UI 组件库来美化你的 Vue 应用...
---
在做这个 Vue3框架的博客的时候，看着默认的界面实在是太丑了，得换个皮。

找了一圈UI框架，最后选了Naive UI，主要是因为它：

1. TypeScript支持好（虽然我也不怎么会ts）
2. 组件全（这个确实全）
3. 文档写的还行（至少比Element Plus强）

## 安装过程

### 1. 装包

```bash
npm i naive-ui
# 顺便把这些也装了
npm i vfonts @vicons/ionicons5
```


### 2. 配置主题

```ts
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#18a058',
    primaryColorHover: '#36ad6a',
    primaryColorPressed: '#0c7a43',
    // 一堆配置
  }
}
```

调了半天总算调出个能看的颜色，要是让我再调一次我肯定不干（逃。

### 3. 组件使用

主要用了这些组件：

- `NCard`：文章卡片
- `NTag`：标签
- `NButton`：按钮
- `NInput`：搜索框

代码我就不贴了，反正都是体力活，复制粘贴改改样式的事。

## 踩坑记录

1. **暗色模式适配**
   这个是真的烦，每个组件都得写两套样式，而且还得考虑切换时的动画，搞得我头都大了。
2. **响应式布局**
   手机上看总是有点问题，调了好久才勉强能看。
3. **TypeScript报错**

```ts
// 这种报错看得我头疼
Type '{ size: "small"; bordered: false; }' is not assignable to type 'never'.
```

## 总结

总的来说Naive UI还是挺好用的，就是配置有点多，得慢慢调。

下一步准备给博客加个评论功能（？）。
