<template><div><p>这次决定用 Vue3 + TypeScript + Vite 从头开始写一个博客，练前端开发。</p>
<h2 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型" aria-hidden="true">#</a> 技术选型</h2>
<h3 id="_1-核心框架" tabindex="-1"><a class="header-anchor" href="#_1-核心框架" aria-hidden="true">#</a> 1. 核心框架</h3>
<p>-<strong>Vue3</strong>: 选择 Vue3 主要是因为 Composition API 写起来真的很舒服</p>
<p>-<strong>TypeScript</strong>: 类型系统确实能避免很多低级错误</p>
<p>-<strong>Vite</strong>: 开发体验比 Webpack 好太多了</p>
<h3 id="_2-ui-框架" tabindex="-1"><a class="header-anchor" href="#_2-ui-框架" aria-hidden="true">#</a> 2. UI 框架</h3>
<p>最后选择了 Naive UI，原因如下：</p>
<ul>
<li>TypeScript 支持完善</li>
<li>组件库丰富，文档清晰</li>
<li>主题定制灵活</li>
<li>社区活跃</li>
</ul>
<h3 id="_3-状态管理" tabindex="-1"><a class="header-anchor" href="#_3-状态管理" aria-hidden="true">#</a> 3. 状态管理</h3>
<p>考虑到项目规模，没有用 Vuex 或 Pinia，而是选择了轻量级的 nanostores。</p>
<h2 id="开发过程" tabindex="-1"><a class="header-anchor" href="#开发过程" aria-hidden="true">#</a> 开发过程</h2>
<h3 id="_1-项目初始化" tabindex="-1"><a class="header-anchor" href="#_1-项目初始化" aria-hidden="true">#</a> 1. 项目初始化</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
<span class="token function">npm</span> createvite@latest

<span class="token comment"># 选择 Vue + TypeScript</span>

<span class="token builtin class-name">cd</span> my-blog

<span class="token function">npm</span> <span class="token function">install</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-目录结构设计" tabindex="-1"><a class="header-anchor" href="#_2-目录结构设计" aria-hidden="true">#</a> 2. 目录结构设计</h3>
<p>src/</p>
<p>├── components/ # 公共组件</p>
<p>├── views/ # 页面组件</p>
<p>├── posts/ # Markdown 文章</p>
<p>├── store/ # 状态管理</p>
<p>├── styles/ # 全局样式</p>
<p>├── types/ # TypeScript 类型定义</p>
<p>└── utils/ # 工具函数</p>
<h3 id="_3-主要功能实现" tabindex="-1"><a class="header-anchor" href="#_3-主要功能实现" aria-hidden="true">#</a> 3. 主要功能实现</h3>
<h4 id="markdown-渲染" tabindex="-1"><a class="header-anchor" href="#markdown-渲染" aria-hidden="true">#</a> Markdown 渲染</h4>
<p>这部分花了不少时间，主要解决了这些问题：</p>
<ul>
<li>文章元数据解析（frontmatter）</li>
<li>代码高亮</li>
<li>自定义组件嵌入</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// markdown 解析配置</span>
<span class="token keyword">const</span> markdownConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  highlight<span class="token operator">:</span> <span class="token punctuation">{</span>
    theme<span class="token operator">:</span> <span class="token string">'dracula'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 其他配置...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="路由设计" tabindex="-1"><a class="header-anchor" href="#路由设计" aria-hidden="true">#</a> 路由设计</h4>
<p>采用了嵌套路由的方式：</p>
<ul>
<li><code v-pre>/</code>: 首页</li>
<li><code v-pre>/posts</code>: 文章列表</li>
<li><code v-pre>/posts/:id</code>: 文章详情</li>
<li><code v-pre>/tags</code>: 标签页</li>
<li><code v-pre>/about</code>: 关于页面</li>
</ul>
<h4 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h4>
<ol>
<li>路由懒加载</li>
</ol>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">'/posts'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/Posts.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>图片懒加载</li>
<li>虚拟列表（文章列表）</li>
</ol>
<h2 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h2>
<h3 id="_1-typescript-类型定义" tabindex="-1"><a class="header-anchor" href="#_1-typescript-类型定义" aria-hidden="true">#</a> 1. TypeScript 类型定义</h3>
<p>最开始对 TS 不太熟，写类型定义时经常遇到问题：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 文章类型定义</span>
<span class="token keyword">interface</span> <span class="token class-name">Post</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  date<span class="token operator">:</span> <span class="token builtin">string</span>
  tags<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-样式适配" tabindex="-1"><a class="header-anchor" href="#_2-样式适配" aria-hidden="true">#</a> 2. 样式适配</h3>
<ul>
<li>响应式布局适配</li>
<li>暗色模式支持</li>
<li>主题切换动画</li>
</ul>
<h3 id="_3-构建优化" tabindex="-1"><a class="header-anchor" href="#_3-构建优化" aria-hidden="true">#</a> 3. 构建优化</h3>
<ul>
<li>静态资源处理</li>
<li>打包体积优化</li>
<li>部署配置</li>
</ul>
<h2 id="后续计划" tabindex="-1"><a class="header-anchor" href="#后续计划" aria-hidden="true">#</a> 后续计划</h2>
<ol>
<li>添加评论功能</li>
<li>优化 SEO</li>
<li>添加文章搜索</li>
<li>优化加载性能</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这次重构让我对 Vue3 和 TypeScript 有了更深的理解。虽然过程中遇到了不少问题，但最终还是完成了一个相对满意的版本。</p>
<p>当然，博客还有很多可以改进的地方。不过，先这样吧，下一步准备把评论功能加上。</p>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>
<ol>
<li><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue3 文档<ExternalLinkIcon/></a></li>
<li><a href="https://www.naiveui.com/" target="_blank" rel="noopener noreferrer">Naive UI<ExternalLinkIcon/></a></li>
<li><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite 官方文档<ExternalLinkIcon/></a></li>
</ol>
</div></template>


