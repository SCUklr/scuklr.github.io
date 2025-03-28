<script setup>
import { 
  NLayout, 
  NLayoutHeader, 
  NLayoutContent, 
  NLayoutFooter,
  NMenu,
  NAvatar,
  NProgress,
  NButton
} from 'naive-ui'
import { 
  HomeOutline,
  BookOutline,
  PeopleOutline,
  SettingsOutline,
  ArrowUpOutline
} from '@vicons/ionicons5'
import { h, ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import backgroundImage from '@/assets/background/Too_Many_Losing_Heroines!.svg'  // 更新背景图片路径

const router = useRouter()
const scrollProgress = ref(0)  // 添加滚动进度状态
const showBackToTop = ref(false)  // 添加控制按钮显示的状态

// 计算滚动进度的函数
const calculateScrollProgress = () => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight - windowHeight
  const scrolled = window.scrollY
  scrollProgress.value = (scrolled / documentHeight) * 100
  showBackToTop.value = scrolled > 300  // 当滚动超过300px时显示按钮
}

// 添加和移除滚动事件监听器
onMounted(() => {
  window.addEventListener('scroll', calculateScrollProgress)
})

onUnmounted(() => {
  window.removeEventListener('scroll', calculateScrollProgress)
})

// 添加路由导航守卫，每次路由变化时滚动到顶部
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

// 添加回到顶部函数
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // 平滑滚动
  })
}

const menuOptions = [
  {
    label: '首页',
    key: 'home',
    icon: () => h(HomeOutline)
  },
  {
    label: '文章',
    key: 'articles',
    icon: () => h(BookOutline)
  },
  {
    label: '社交',
    key: 'social',
    icon: () => h(PeopleOutline)
  },
  {
    label: '关于',
    key: 'about',
    icon: () => h(SettingsOutline)
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
      <n-progress
        type="line"
        :percentage="scrollProgress"
        :height="4"
        :border-radius="0"
        :show-indicator="false"
        :color="'#18a058'"
        class="reading-progress"
      />
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

    <!-- 添加回到顶部按钮 -->
    <n-button
      v-show="showBackToTop"
      circle
      type="primary"
      size="large"
      class="back-to-top"
      @click="scrollToTop"
    >
      <template #icon>
        <n-icon size="24"><arrow-up-outline /></n-icon>
      </template>
    </n-button>
  </div>
</template>

<style scoped>
/* 重置基本样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* 定义一个元素的盒模型为边框盒模型，此外还有content-box内容盒模型和padding-box内边距盒模型 */
}

/* 调整整体容器样式 */
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url('@/assets/background/Too_Many_Losing_Heroines!.svg') center/cover no-repeat fixed;
  position: relative;
}

/* 修改顶部栏样式 */
.header {
  height: 64px;
  padding: 4px 20px 0;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 修改内容区域样式 */
.content {
  flex: 1;
  padding: 20px;
  margin-top: 64px; /* 为固定顶部栏留出空间 */
  background: transparent;
  position: relative;
  z-index: 1;
}

/* 修改底部栏样式 */
.footer {
  height: 60px;
  padding: 0 20px;
  background: #fff;
  position: relative;
  z-index: 2;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  /* 添加弹性布局使内容居中 */
  display: flex; /* 定义一个元素的显示类型为弹性布局，此外还有block块级元素inline行内元素和grid网格布局 */
  align-items: center;      /* 垂直居中 */
  justify-content: center;  /* 水平居中 */
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  color: #666;
  /* 添加文本居中 */
  text-align: center;
  /* 移除可能的默认边距 */
  padding: 0;
  /* 确保内容不会超出容器 */
  width: 100%;
}

/* 确保段落没有额外边距 */
.footer-content p {
  margin: 0;
  padding: 0;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100% - 4px);
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

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* 修改进度条样式 */
.reading-progress {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
}

/* 修改进度条容器样式 */
:deep(.n-progress) {
  background-color: transparent !important;
}

:deep(.n-progress-content) {
  background-color: transparent !important;
}

/* 添加回到顶部按钮样式 */
.back-to-top {
  position: fixed;
  right: 40px;  /* 从20px改为40px，向左移动 */
  bottom: 80px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  width: 48px;  /* 设置固定宽度 */
  height: 48px;  /* 设置固定高度 */
}

.back-to-top:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* 移除按钮点击时的黑色边框 */
.back-to-top:focus {
  outline: none !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* 确保按钮在点击时保持原有样式 */
.back-to-top:active {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
