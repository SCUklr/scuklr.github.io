import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: { keepAlive: true }
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('../views/Article.vue'),
      meta: { keepAlive: false }
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('../views/Articles.vue'),
      meta: { keepAlive: true }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }  // 添加平滑滚动
    }
  }
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // 添加时间戳防止缓存
  if (to.query._t === undefined) {
    to.query._t = Date.now().toString()
    next({ path: to.path, query: to.query, replace: true })
    return
  }
  next()
})

export default router 