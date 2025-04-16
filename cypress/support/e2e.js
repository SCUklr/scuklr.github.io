// 导入 Cypress 测试库
import '@testing-library/cypress/add-commands'

// 隐藏 XHR 请求日志
const app = window.top;
if (app) {
  app.console.log = () => {};
}

// 全局配置
Cypress.on('uncaught:exception', (err, runnable) => {
  // 返回 false 防止 Cypress 在未捕获的异常时失败
  return false
}) 