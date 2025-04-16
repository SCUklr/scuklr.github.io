export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"文章\",\"link\":\"/posts/\"},{\"text\":\"关于\",\"link\":\"/about/\"}],\"sidebar\":{\"/posts/\":[{\"text\":\"所有文章\",\"children\":[\"/posts/2024/03/blog-dev-diary.md\",\"/posts/2024/03/naive-ui-beautify.md\",\"/posts/2024/03/vue3-project-setup.md\",\"/posts/2024/hello-world.md\",\"/posts/2025/03/future-outlook.md\",\"/posts/2025/04/CypressABC.md\"]}]},\"repo\":\"SCUklr/scuklr.github.io\",\"editLink\":true,\"editLinkText\":\"在 GitHub 上编辑此页\",\"docsRepo\":\"SCUklr/scuklr.github.io\",\"docsBranch\":\"main\",\"docsDir\":\"docs\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
