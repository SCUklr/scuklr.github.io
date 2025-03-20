<script setup>
import { 
  NLayout, 
  NLayoutHeader, 
  NLayoutContent, 
  NLayoutFooter,
  NMenu,
  NAvatar,
  NBackTop
} from 'naive-ui'
import { 
  HomeOutline,
  BookOutline,
  PeopleOutline,
  SettingsOutline,
  ArrowUpOutline
} from '@vicons/ionicons5'
import { h } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 添加路由导航守卫，每次路由变化时滚动到顶部
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

const renderIcon = () => {
  return h(ArrowUpOutline, {
    size: 24,
    color: '#fff'
  })
}

const menuOptions = [
  {
    label: '首页',
    key: 'home',
    icon: HomeOutline
  },
  {
    label: '文章',
    key: 'articles',
    icon: BookOutline
  },
  {
    label: '社交',
    key: 'social',
    icon: PeopleOutline
  },
  {
    label: '关于',
    key: 'about',
    icon: SettingsOutline
  }
]

const handleMenuClick = (key) => {
  const routeMap = {
    'home': '/',
    'articles': '/articles',
    'social': '/social',
    'about': '/about'
  }
  router.push(routeMap[key])
}
</script>

<template>
  <div class="app-wrapper">
    <n-layout-header class="header" bordered>
      <div class="header-content">
        <div class="logo">
          <n-avatar round size="large" 
                   src="https://img.moegirl.org.cn/common/thumb/c/c1/Yanami_Anna_icon.png/198px-Yanami_Anna_icon.png"
                   :img-props="{ referrerpolicy: 'no-referrer' }" />
          <span class="site-title">子丘的个人博客</span>
        </div>
        <div class="menu-container">
          <n-menu mode="horizontal" 
                  :options="menuOptions" 
                  @update:value="handleMenuClick" />
        </div>
      </div>
    </n-layout-header>

    <n-layout-content class="content">
      <div class="content-container">
        <router-view></router-view>
      </div>
    </n-layout-content>

    <n-layout-footer class="footer" bordered>
      <div class="footer-content">
        <p>© 2024 子丘的个人博客 | 使用 Vue3 + Naive UI 构建</p>
      </div>
    </n-layout-footer>

    <n-back-top :right="30" 
                :bottom="30"
                :visibility-height="100"
                :duration="500"
                class="custom-back-top"
                :style="{
                  borderRadius: '50%',
                  backgroundColor: '#18a058',
                  transition: 'all .3s cubic-bezier(.4, 0, .2, 1)'
                }"
                :on-update:show="show => show">
      <template #icon>
        {{ renderIcon() }}
      </template>
    </n-back-top>
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 64px; /* 为固定定位的header预留空间 */
}

/* 添加全局平滑滚动 */
:root {
  scroll-behavior: smooth;
}

/* 优化滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #c0c0c0;
  border-radius: 4px;
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: #a0a0a0;
}

.header {
  height: 64px;
  padding: 0 20px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: transform 0.3s ease;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
}

.site-title {
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
}

.menu-container {
  margin-left: auto;
}

.content {
  flex: 1;
  padding: 20px;
  background: #f5f5f5;
  min-height: calc(100vh - 124px); /* 100vh - header(64px) - footer(60px) */
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer {
  height: 60px;
  padding: 0 20px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  color: #666;
}

.custom-back-top:hover {
  background-color: #36ad6a !important;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(24, 160, 88, 0.4);
}
</style>
