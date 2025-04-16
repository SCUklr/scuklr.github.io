/**
 * main.js - 应用程序的主入口文件
 * 
 * 这个文件就像是整个项目的"施工说明书"，定义了如何组装这个 Vue 应用：
 * 1. 导入必要的依赖和组件
 * 2. 创建 Vue 应用实例
 * 3. 配置全局插件和功能
 * 4. 将应用挂载到 DOM
 */

// 核心依赖导入
import { createApp } from 'vue'      // Vue 3 的工厂函数，用于创建应用实例
import App from './App.vue'          // 应用的根组件，定义了整体布局和结构
import naive from 'naive-ui'         // UI 组件库，提供了预制的界面组件
import router from './router'        // 路由配置，处理页面间的导航
import './style.css'                // 全局样式定义

// 创建 Vue 应用实例
const app = createApp(App)

// 注册全局插件
app.use(naive)                      // 注册 Naive UI 组件库，使其组件在全局可用
app.use(router)                     // 注册路由插件，启用页面导航功能

// 将应用挂载到 DOM
// 这一步会将 Vue 应用连接到 index.html 中的 <div id="app"> 元素
app.mount('#app')
