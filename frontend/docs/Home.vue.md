# Home.vue 代码结构说明

## 文件概述
`Home.vue`是个人博客的主页组件，使用Vue3的组合式API开发，实现了一个现代化的个人主页布局。

## 代码结构

### 1. 脚本部分 (`<script setup>`)
```js
// 导入必要的Vue函数和组件
import { ref, computed } from 'vue'
import { NCard, NTag } from 'naive-ui'
import KanaAnna from '../assets/Kana_Anna.jpg'

// 定义背景颜色数组
const bgColors = [
  'rgba(255, 182, 193, 0.7)',  // 粉色
  'rgba(173, 216, 230, 0.7)',  // 浅蓝
  // ... 其他颜色
]

// 定义项目卡片数据
const projects = ref([
  {
    title: '会写点前端',
    description: '🎨 Vue3 / TypeScript',
    // ... 其他属性
  },
  // ... 其他项目
])

// 事件处理函数
const handleMouseOver = (e, project) => { ... }
const handleMouseOut = (e) => { ... }
```

### 2. 模板部分 (`<template>`)
```html
<div class="home-container">
  <!-- 主要内容区域 -->
  <div class="main-content">
    <!-- 项目卡片网格 -->
    <div class="projects-grid">
      <!-- 项目卡片 -->
      <div v-for="(project, index) in projects" ...>
        <!-- 卡片内容 -->
      </div>
    </div>
  </div>

  <!-- 侧边栏 -->
  <div class="sidebar">
    <!-- 个人信息卡片 -->
  </div>
</div>
```

### 3. 样式部分 (`<style scoped>`)
```css
/* 主容器样式 */
.home-container {
  display: grid;
  grid-template-columns: 1fr 300px;
  /* ... */
}

/* 项目卡片样式 */
.project-card {
  /* ... */
}

/* 其他样式 */
```

## 主要功能说明

### 1. 响应式数据管理
- 使用`ref`创建响应式数据
- 使用`computed`创建计算属性
- 数据变化时自动更新视图

### 2. 布局结构
- 使用CSS Grid实现左右两栏布局
- 左侧为主要内容区域
- 右侧为个人信息侧边栏

### 3. 项目卡片功能
- 支持背景图片
- 支持悬停效果
- 支持点击跳转
- 支持自定义样式

### 4. 交互效果
- 卡片悬停动画
- 图片切换效果
- 文字阴影效果
- 渐变背景

### 5. 样式特点
- 使用CSS Grid和Flexbox布局
- 使用CSS变量实现动态样式
- 使用`scoped`确保样式隔离
- 响应式设计适配不同屏幕

## Vue3特性使用

### 1. 组合式API
- `<script setup>`语法
- `ref`和`computed`的使用
- 响应式数据管理

### 2. 模板语法
- `v-for`列表渲染
- `:class`和`:style`绑定
- 事件处理
- 条件渲染

### 3. 组件化
- 使用Naive UI组件
- 自定义组件样式
- 组件间通信

## 前端三件套应用

### 1. HTML
- 语义化标签使用
- 结构化的页面布局
- 组件化结构

### 2. CSS
- 现代布局技术
- 动画和过渡效果
- 响应式设计
- 样式隔离

### 3. JavaScript
- 事件处理
- 数据管理
- 动态样式控制

## 开发建议

1. 代码组织
   - 保持逻辑清晰
   - 合理使用注释
   - 遵循Vue3最佳实践

2. 性能优化
   - 合理使用计算属性
   - 避免不必要的渲染
   - 优化图片加载

3. 维护性
   - 组件化开发
   - 样式模块化
   - 代码复用

## 注意事项

1. 图片资源
   - 注意图片大小
   - 使用适当的图片格式
   - 考虑加载优化

2. 样式兼容
   - 注意浏览器兼容性
   - 使用CSS前缀
   - 考虑降级方案

3. 性能考虑
   - 避免过度动画
   - 优化渲染性能
   - 合理使用计算属性 