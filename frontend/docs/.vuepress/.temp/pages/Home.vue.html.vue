<template><div><h1 id="home-vue-代码结构说明" tabindex="-1"><a class="header-anchor" href="#home-vue-代码结构说明" aria-hidden="true">#</a> Home.vue 代码结构说明</h1>
<h2 id="文件概述" tabindex="-1"><a class="header-anchor" href="#文件概述" aria-hidden="true">#</a> 文件概述</h2>
<p><code v-pre>Home.vue</code>是个人博客的主页组件，使用Vue3的组合式API开发，实现了一个现代化的个人主页布局。</p>
<h2 id="代码结构" tabindex="-1"><a class="header-anchor" href="#代码结构" aria-hidden="true">#</a> 代码结构</h2>
<h3 id="_1-脚本部分-script-setup" tabindex="-1"><a class="header-anchor" href="#_1-脚本部分-script-setup" aria-hidden="true">#</a> 1. 脚本部分 (<code v-pre>&lt;script setup&gt;</code>)</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 导入必要的Vue函数和组件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NCard<span class="token punctuation">,</span> NTag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'naive-ui'</span>
<span class="token keyword">import</span> KanaAnna <span class="token keyword">from</span> <span class="token string">'../assets/Kana_Anna.jpg'</span>

<span class="token comment">// 定义背景颜色数组</span>
<span class="token keyword">const</span> bgColors <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">'rgba(255, 182, 193, 0.7)'</span><span class="token punctuation">,</span>  <span class="token comment">// 粉色</span>
  <span class="token string">'rgba(173, 216, 230, 0.7)'</span><span class="token punctuation">,</span>  <span class="token comment">// 浅蓝</span>
  <span class="token comment">// ... 其他颜色</span>
<span class="token punctuation">]</span>

<span class="token comment">// 定义项目卡片数据</span>
<span class="token keyword">const</span> projects <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'会写点前端'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'🎨 Vue3 / TypeScript'</span><span class="token punctuation">,</span>
    <span class="token comment">// ... 其他属性</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ... 其他项目</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 事件处理函数</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleMouseOver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> project</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleMouseOut</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-模板部分-template" tabindex="-1"><a class="header-anchor" href="#_2-模板部分-template" aria-hidden="true">#</a> 2. 模板部分 (<code v-pre>&lt;template&gt;</code>)</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 主要内容区域 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 项目卡片网格 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>projects-grid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 项目卡片 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(project, index) in projects<span class="token punctuation">"</span></span> <span class="token attr-name">...</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 卡片内容 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

  <span class="token comment">&lt;!-- 侧边栏 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sidebar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 个人信息卡片 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-样式部分-style-scoped" tabindex="-1"><a class="header-anchor" href="#_3-样式部分-style-scoped" aria-hidden="true">#</a> 3. 样式部分 (<code v-pre>&lt;style scoped&gt;</code>)</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/* 主容器样式 */</span>
<span class="token selector">.home-container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 300px<span class="token punctuation">;</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 项目卡片样式 */</span>
<span class="token selector">.project-card</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 其他样式 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主要功能说明" tabindex="-1"><a class="header-anchor" href="#主要功能说明" aria-hidden="true">#</a> 主要功能说明</h2>
<h3 id="_1-响应式数据管理" tabindex="-1"><a class="header-anchor" href="#_1-响应式数据管理" aria-hidden="true">#</a> 1. 响应式数据管理</h3>
<ul>
<li>使用<code v-pre>ref</code>创建响应式数据</li>
<li>使用<code v-pre>computed</code>创建计算属性</li>
<li>数据变化时自动更新视图</li>
</ul>
<h3 id="_2-布局结构" tabindex="-1"><a class="header-anchor" href="#_2-布局结构" aria-hidden="true">#</a> 2. 布局结构</h3>
<ul>
<li>使用CSS Grid实现左右两栏布局</li>
<li>左侧为主要内容区域</li>
<li>右侧为个人信息侧边栏</li>
</ul>
<h3 id="_3-项目卡片功能" tabindex="-1"><a class="header-anchor" href="#_3-项目卡片功能" aria-hidden="true">#</a> 3. 项目卡片功能</h3>
<ul>
<li>支持背景图片</li>
<li>支持悬停效果</li>
<li>支持点击跳转</li>
<li>支持自定义样式</li>
</ul>
<h3 id="_4-交互效果" tabindex="-1"><a class="header-anchor" href="#_4-交互效果" aria-hidden="true">#</a> 4. 交互效果</h3>
<ul>
<li>卡片悬停动画</li>
<li>图片切换效果</li>
<li>文字阴影效果</li>
<li>渐变背景</li>
</ul>
<h3 id="_5-样式特点" tabindex="-1"><a class="header-anchor" href="#_5-样式特点" aria-hidden="true">#</a> 5. 样式特点</h3>
<ul>
<li>使用CSS Grid和Flexbox布局</li>
<li>使用CSS变量实现动态样式</li>
<li>使用<code v-pre>scoped</code>确保样式隔离</li>
<li>响应式设计适配不同屏幕</li>
</ul>
<h2 id="vue3特性使用" tabindex="-1"><a class="header-anchor" href="#vue3特性使用" aria-hidden="true">#</a> Vue3特性使用</h2>
<h3 id="_1-组合式api" tabindex="-1"><a class="header-anchor" href="#_1-组合式api" aria-hidden="true">#</a> 1. 组合式API</h3>
<ul>
<li><code v-pre>&lt;script setup&gt;</code>语法</li>
<li><code v-pre>ref</code>和<code v-pre>computed</code>的使用</li>
<li>响应式数据管理</li>
</ul>
<h3 id="_2-模板语法" tabindex="-1"><a class="header-anchor" href="#_2-模板语法" aria-hidden="true">#</a> 2. 模板语法</h3>
<ul>
<li><code v-pre>v-for</code>列表渲染</li>
<li><code v-pre>:class</code>和<code v-pre>:style</code>绑定</li>
<li>事件处理</li>
<li>条件渲染</li>
</ul>
<h3 id="_3-组件化" tabindex="-1"><a class="header-anchor" href="#_3-组件化" aria-hidden="true">#</a> 3. 组件化</h3>
<ul>
<li>使用Naive UI组件</li>
<li>自定义组件样式</li>
<li>组件间通信</li>
</ul>
<h2 id="前端三件套应用" tabindex="-1"><a class="header-anchor" href="#前端三件套应用" aria-hidden="true">#</a> 前端三件套应用</h2>
<h3 id="_1-html" tabindex="-1"><a class="header-anchor" href="#_1-html" aria-hidden="true">#</a> 1. HTML</h3>
<ul>
<li>语义化标签使用</li>
<li>结构化的页面布局</li>
<li>组件化结构</li>
</ul>
<h3 id="_2-css" tabindex="-1"><a class="header-anchor" href="#_2-css" aria-hidden="true">#</a> 2. CSS</h3>
<ul>
<li>现代布局技术</li>
<li>动画和过渡效果</li>
<li>响应式设计</li>
<li>样式隔离</li>
</ul>
<h3 id="_3-javascript" tabindex="-1"><a class="header-anchor" href="#_3-javascript" aria-hidden="true">#</a> 3. JavaScript</h3>
<ul>
<li>事件处理</li>
<li>数据管理</li>
<li>动态样式控制</li>
</ul>
<h2 id="开发建议" tabindex="-1"><a class="header-anchor" href="#开发建议" aria-hidden="true">#</a> 开发建议</h2>
<ol>
<li>
<p>代码组织</p>
<ul>
<li>保持逻辑清晰</li>
<li>合理使用注释</li>
<li>遵循Vue3最佳实践</li>
</ul>
</li>
<li>
<p>性能优化</p>
<ul>
<li>合理使用计算属性</li>
<li>避免不必要的渲染</li>
<li>优化图片加载</li>
</ul>
</li>
<li>
<p>维护性</p>
<ul>
<li>组件化开发</li>
<li>样式模块化</li>
<li>代码复用</li>
</ul>
</li>
</ol>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2>
<ol>
<li>
<p>图片资源</p>
<ul>
<li>注意图片大小</li>
<li>使用适当的图片格式</li>
<li>考虑加载优化</li>
</ul>
</li>
<li>
<p>样式兼容</p>
<ul>
<li>注意浏览器兼容性</li>
<li>使用CSS前缀</li>
<li>考虑降级方案</li>
</ul>
</li>
<li>
<p>性能考虑</p>
<ul>
<li>避免过度动画</li>
<li>优化渲染性能</li>
<li>合理使用计算属性</li>
</ul>
</li>
</ol>
</div></template>


