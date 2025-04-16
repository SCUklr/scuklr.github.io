// 路由映射
export const ROUTE_MAP = {
  'home': '/',
  'articles': '/articles',
  'social': '/social',
  'about': '/about',
  'research': '/research'
}

// 导航菜单配置
export const MENU_OPTIONS = [
  {
    label: '首页',
    key: 'home',
    icon: 'HomeOutline'
  },
  {
    label: '文章',
    key: 'articles',
    icon: 'BookOutline'
  },
  {
    label: '友链',
    key: 'social',
    icon: 'PeopleOutline'
  },
  {
    label: '科研',
    key: 'research',
    icon: 'research'
  },
  {
    label: '关于我',
    key: 'about',
    icon: 'PersonOutline'
  }
]

// 主题颜色配置
export const THEME_COLORS = {
  primary: '#18a058',
  menuText: '#0a5a30',
  menuHover: '#036b28',
  menuActive: '#036b28',
  titleColor: '#2c3e50'
}

// 布局配置
export const LAYOUT_CONFIG = {
  maxWidth: '1200px',
  headerHeight: '64px',
  footerHeight: '80px',
  mobileBreakpoint: '768px'
}

// 滚动配置
export const SCROLL_CONFIG = {
  showBackTopThreshold: 300,
  scrollBehavior: 'smooth'
} 