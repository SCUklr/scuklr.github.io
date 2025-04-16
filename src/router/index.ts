import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')  // 懒加载首页
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('../views/Article.vue')  // 懒加载文章页
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../views/Articles.vue')  // 懒加载文章列表页
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }  // 添加平滑滚动
    }
  }
})

export default router 