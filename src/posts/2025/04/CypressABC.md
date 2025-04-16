---
title: Cypress入门ABC
date: 2025-04-12
tags: ['测试']
description: 'web自动化测试的"特斯拉"'
---
# 一、核心概念

### 1.1 Cypress 是什么

Cypress 是一个现代化的前端测试框架，具有以下特点：

- 🌐 **端到端测试**：模拟真实用户操作
- ⚡ **实时重载**：修改代码自动重新测试
- 🕰️ **时间旅行**：记录测试每一步的快照
- 🧩 **内置工具**：包含断言库、Mock 工具等

### 1.2 与 Selenium 对比

| 特性       | Cypress          | Selenium         |
| ---------- | ---------------- | ---------------- |
| 架构       | 浏览器内直接运行 | 通过驱动协议通信 |
| 速度       | 更快             | 较慢             |
| 语言支持   | 仅 JS/TS         | 多语言支持       |
| 调试体验   | 内置调试工具     | 依赖外部工具     |
| 移动端支持 | 有限             | 通过 Appium 扩展 |

---

## 二、快速入门

### 2.1 环境准备

```bash
# 检查 Node.js 和 npm
node -v  # 需要 v14+
npm -v   # 需要 v6+
```

### 2.2 项目初始化

```bash
# 创建项目
mkdir cypress-demo && cd cypress-demo
npm init -y

# 安装 Cypress
npm install cypress --save-dev

# 启动 Cypress (生成默认目录结构)
npx cypress open
```

生成目录结构：

```
cypress/
├── e2e/          # 测试用例
├── fixtures/     # 测试数据
├── support/      # 全局配置
└── downloads/    # 文件下载
```

---

## 三、测试开发

### 3.1 第一个测试用例

创建 `cypress/e2e/baidu.cy.js`：

```javascript
describe('百度测试', () => {
  it('应正确加载首页', () => {
    cy.visit('https://www.baidu.com')
    // 断言标题包含"百度"
    cy.title().should('include', '百度')
    // 断言搜索框可见
    cy.get('#kw').should('be.visible')
  })
})
```

### 3.2 核心 API

| API            | 示例                        | 说明               |
| -------------- | --------------------------- | ------------------ |
| cy.visit()     | cy.visit('/login')          | 访问页面           |
| cy.get()       | cy.get('.btn')              | 获取 DOM 元素      |
| cy.type()      | cy.get('#kw').type('Hi')    | 输入文本           |
| cy.click()     | cy.get('#submit').click()   | 点击元素           |
| cy.contains()  | cy.contains('登录')         | 查找包含文本的元素 |
| cy.intercept() | cy.intercept('GET', '/api') | 拦截网络请求       |

---

## 四、运行配置

### 4.1 运行方式

```bash
# 图形化界面运行
npx cypress open

# 命令行运行 (无头模式)
npx cypress run --browser chrome

# 运行指定测试文件
npx cypress run --spec "cypress/e2e/baidu.cy.js"
```

### 4.2 高级配置

`cypress.config.js` 示例：

```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.baidu.com',
    chromeWebSecurity: false, // 允许跨域
    viewportWidth: 1920,     // 浏览器宽度
    viewportHeight: 1080,    // 浏览器高度
    setupNodeEvents(on, config) {
      // 插件配置
    }
  }
})
```

---

## 五、最佳实践

- **使用钩子函数管理测试状态**

```javascript
beforeEach(() => {
  cy.visit('/login')
})

afterEach(() => {
  cy.clearCookies()
})
```

- **Page Object 模式**

```javascript
// pages/login-page.js
export class LoginPage {
  visit() {
    cy.visit('/login')
  }
  
  fillCredentials(username, password) {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
  }
}
```

- **环境变量管理**

```bash
# 命令行设置
CYPRESS_API_URL=https://api.example.com npx cypress run
```

---

## 六、常见问题

**Q1: 元素定位失败？**
解决方案：

```javascript
// 增加超时时间
cy.get('.loader', { timeout: 10000 })

// 使用更精准的选择器
cy.get('[data-testid="submit-btn"]')
```

**Q2: 如何处理登录状态？**

```javascript
// 通过编程方式登录
cy.request('POST', '/login', {
  username: 'test',
  password: '123456'
}).then((res) => {
  cy.setCookie('auth_token', res.body.token)
})
```

**Q3: 如何生成测试报告？**

```bash
# 安装报告插件
npm install cypress-mochawesome-reporter --save-dev
```

配置 `cypress.config.js`：

```javascript
module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  }
})
```

---

通过本指南，您已掌握 Cypress 的核心用法！接下来可以探索：

- 组件测试
- CI/CD 集成
- 可视化测试
