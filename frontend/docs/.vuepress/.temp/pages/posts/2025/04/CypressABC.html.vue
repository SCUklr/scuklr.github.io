<template><div><h1 id="一、核心概念" tabindex="-1"><a class="header-anchor" href="#一、核心概念" aria-hidden="true">#</a> 一、核心概念</h1>
<h3 id="_1-1-cypress-是什么" tabindex="-1"><a class="header-anchor" href="#_1-1-cypress-是什么" aria-hidden="true">#</a> 1.1 Cypress 是什么</h3>
<p>Cypress 是一个现代化的前端测试框架，具有以下特点：</p>
<ul>
<li>🌐 <strong>端到端测试</strong>：模拟真实用户操作</li>
<li>⚡ <strong>实时重载</strong>：修改代码自动重新测试</li>
<li>🕰️ <strong>时间旅行</strong>：记录测试每一步的快照</li>
<li>🧩 <strong>内置工具</strong>：包含断言库、Mock 工具等</li>
</ul>
<h3 id="_1-2-与-selenium-对比" tabindex="-1"><a class="header-anchor" href="#_1-2-与-selenium-对比" aria-hidden="true">#</a> 1.2 与 Selenium 对比</h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>Cypress</th>
<th>Selenium</th>
</tr>
</thead>
<tbody>
<tr>
<td>架构</td>
<td>浏览器内直接运行</td>
<td>通过驱动协议通信</td>
</tr>
<tr>
<td>速度</td>
<td>更快</td>
<td>较慢</td>
</tr>
<tr>
<td>语言支持</td>
<td>仅 JS/TS</td>
<td>多语言支持</td>
</tr>
<tr>
<td>调试体验</td>
<td>内置调试工具</td>
<td>依赖外部工具</td>
</tr>
<tr>
<td>移动端支持</td>
<td>有限</td>
<td>通过 Appium 扩展</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="二、快速入门" tabindex="-1"><a class="header-anchor" href="#二、快速入门" aria-hidden="true">#</a> 二、快速入门</h2>
<h3 id="_2-1-环境准备" tabindex="-1"><a class="header-anchor" href="#_2-1-环境准备" aria-hidden="true">#</a> 2.1 环境准备</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 检查 Node.js 和 npm</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>  <span class="token comment"># 需要 v14+</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>   <span class="token comment"># 需要 v6+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-项目初始化" tabindex="-1"><a class="header-anchor" href="#_2-2-项目初始化" aria-hidden="true">#</a> 2.2 项目初始化</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 创建项目</span>
<span class="token function">mkdir</span> cypress-demo <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> cypress-demo
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>

<span class="token comment"># 安装 Cypress</span>
<span class="token function">npm</span> <span class="token function">install</span> cypress --save-dev

<span class="token comment"># 启动 Cypress (生成默认目录结构)</span>
npx cypress <span class="token function">open</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成目录结构：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cypress/
├── e2e/          # 测试用例
├── fixtures/     # 测试数据
├── support/      # 全局配置
└── downloads/    # 文件下载
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="三、测试开发" tabindex="-1"><a class="header-anchor" href="#三、测试开发" aria-hidden="true">#</a> 三、测试开发</h2>
<h3 id="_3-1-第一个测试用例" tabindex="-1"><a class="header-anchor" href="#_3-1-第一个测试用例" aria-hidden="true">#</a> 3.1 第一个测试用例</h3>
<p>创建 <code v-pre>cypress/e2e/baidu.cy.js</code>：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'百度测试'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'应正确加载首页'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">'https://www.baidu.com'</span><span class="token punctuation">)</span>
    <span class="token comment">// 断言标题包含"百度"</span>
    cy<span class="token punctuation">.</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">'include'</span><span class="token punctuation">,</span> <span class="token string">'百度'</span><span class="token punctuation">)</span>
    <span class="token comment">// 断言搜索框可见</span>
    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'#kw'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">'be.visible'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-核心-api" tabindex="-1"><a class="header-anchor" href="#_3-2-核心-api" aria-hidden="true">#</a> 3.2 核心 API</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>cy.visit()</td>
<td>cy.visit('/login')</td>
<td>访问页面</td>
</tr>
<tr>
<td>cy.get()</td>
<td>cy.get('.btn')</td>
<td>获取 DOM 元素</td>
</tr>
<tr>
<td>cy.type()</td>
<td>cy.get('#kw').type('Hi')</td>
<td>输入文本</td>
</tr>
<tr>
<td>cy.click()</td>
<td>cy.get('#submit').click()</td>
<td>点击元素</td>
</tr>
<tr>
<td>cy.contains()</td>
<td>cy.contains('登录')</td>
<td>查找包含文本的元素</td>
</tr>
<tr>
<td>cy.intercept()</td>
<td>cy.intercept('GET', '/api')</td>
<td>拦截网络请求</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="四、运行配置" tabindex="-1"><a class="header-anchor" href="#四、运行配置" aria-hidden="true">#</a> 四、运行配置</h2>
<h3 id="_4-1-运行方式" tabindex="-1"><a class="header-anchor" href="#_4-1-运行方式" aria-hidden="true">#</a> 4.1 运行方式</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 图形化界面运行</span>
npx cypress <span class="token function">open</span>

<span class="token comment"># 命令行运行 (无头模式)</span>
npx cypress run <span class="token parameter variable">--browser</span> chrome

<span class="token comment"># 运行指定测试文件</span>
npx cypress run <span class="token parameter variable">--spec</span> <span class="token string">"cypress/e2e/baidu.cy.js"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-高级配置" tabindex="-1"><a class="header-anchor" href="#_4-2-高级配置" aria-hidden="true">#</a> 4.2 高级配置</h3>
<p><code v-pre>cypress.config.js</code> 示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'cypress'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">e2e</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">baseUrl</span><span class="token operator">:</span> <span class="token string">'https://www.baidu.com'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">chromeWebSecurity</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 允许跨域</span>
    <span class="token literal-property property">viewportWidth</span><span class="token operator">:</span> <span class="token number">1920</span><span class="token punctuation">,</span>     <span class="token comment">// 浏览器宽度</span>
    <span class="token literal-property property">viewportHeight</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>    <span class="token comment">// 浏览器高度</span>
    <span class="token function">setupNodeEvents</span><span class="token punctuation">(</span><span class="token parameter">on<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 插件配置</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="五、最佳实践" tabindex="-1"><a class="header-anchor" href="#五、最佳实践" aria-hidden="true">#</a> 五、最佳实践</h2>
<ul>
<li><strong>使用钩子函数管理测试状态</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  cy<span class="token punctuation">.</span><span class="token function">clearCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>Page Object 模式</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// pages/login-page.js</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LoginPage</span> <span class="token punctuation">{</span>
  <span class="token function">visit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">fillCredentials</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span> password</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'#username'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span>
    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'#password'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>环境变量管理</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 命令行设置</span>
<span class="token assign-left variable">CYPRESS_API_URL</span><span class="token operator">=</span>https://api.example.com npx cypress run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="六、常见问题" tabindex="-1"><a class="header-anchor" href="#六、常见问题" aria-hidden="true">#</a> 六、常见问题</h2>
<p><strong>Q1: 元素定位失败？</strong>
解决方案：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 增加超时时间</span>
cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'.loader'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 使用更精准的选择器</span>
cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'[data-testid="submit-btn"]'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q2: 如何处理登录状态？</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 通过编程方式登录</span>
cy<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> <span class="token string">'/login'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'test'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">'123456'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  cy<span class="token punctuation">.</span><span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">'auth_token'</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>body<span class="token punctuation">.</span>token<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q3: 如何生成测试报告？</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 安装报告插件</span>
<span class="token function">npm</span> <span class="token function">install</span> cypress-mochawesome-reporter --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 <code v-pre>cypress.config.js</code>：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">reporter</span><span class="token operator">:</span> <span class="token string">'mochawesome'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reporterOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">reportDir</span><span class="token operator">:</span> <span class="token string">'cypress/reports'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">overwrite</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">json</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>通过本指南，您已掌握 Cypress 的核心用法！接下来可以探索：</p>
<ul>
<li>组件测试</li>
<li>CI/CD 集成</li>
<li>可视化测试</li>
</ul>
</div></template>


