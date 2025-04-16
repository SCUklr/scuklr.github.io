export const data = JSON.parse("{\"key\":\"v-dcd17c88\",\"path\":\"/posts/2024/hello-world.html\",\"title\":\"Hello World\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Hello World\",\"date\":\"2024-03-20T00:00:00.000Z\",\"tags\":[\"生活\"],\"description\":\"欢迎来到我的个人博客\"},\"headers\":[{\"level\":2,\"title\":\"关于我\",\"slug\":\"关于我\",\"link\":\"#关于我\",\"children\":[]},{\"level\":2,\"title\":\"博客计划\",\"slug\":\"博客计划\",\"link\":\"#博客计划\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"posts/2024/hello-world.md\"}")

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
