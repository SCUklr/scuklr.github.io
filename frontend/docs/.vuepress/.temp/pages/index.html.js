export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/hero.png\",\"heroText\":\"Kong Lingran's Blog\",\"tagline\":\"技术博客 & 生活随笔\",\"actions\":[{\"text\":\"开始阅读 →\",\"link\":\"/posts/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"技术分享\",\"details\":\"分享 Web 开发、测试自动化等技术文章\"},{\"title\":\"学习笔记\",\"details\":\"记录学习过程中的心得体会和经验总结\"},{\"title\":\"生活随笔\",\"details\":\"记录生活中的点点滴滴，分享有趣的故事\"}],\"footer\":\"MIT Licensed | Copyright © 2024-present Kong Lingran\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
