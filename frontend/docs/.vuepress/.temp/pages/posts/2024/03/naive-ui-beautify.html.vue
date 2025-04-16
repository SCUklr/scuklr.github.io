<template><div><p>在做这个 Vue3框架的博客的时候，看着默认的界面实在是太丑了，得换个皮。</p>
<p>找了一圈UI框架，最后选了Naive UI，主要是因为它：</p>
<ol>
<li>TypeScript支持好（虽然我也不怎么会ts）</li>
<li>组件全（这个确实全）</li>
<li>文档写的还行（至少比Element Plus强）</li>
</ol>
<h2 id="安装过程" tabindex="-1"><a class="header-anchor" href="#安装过程" aria-hidden="true">#</a> 安装过程</h2>
<h3 id="_1-装包" tabindex="-1"><a class="header-anchor" href="#_1-装包" aria-hidden="true">#</a> 1. 装包</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i naive-ui
<span class="token comment"># 顺便把这些也装了</span>
<span class="token function">npm</span> i vfonts @vicons/ionicons5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-配置主题" tabindex="-1"><a class="header-anchor" href="#_2-配置主题" aria-hidden="true">#</a> 2. 配置主题</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> themeOverrides<span class="token operator">:</span> GlobalThemeOverrides <span class="token operator">=</span> <span class="token punctuation">{</span>
  common<span class="token operator">:</span> <span class="token punctuation">{</span>
    primaryColor<span class="token operator">:</span> <span class="token string">'#18a058'</span><span class="token punctuation">,</span>
    primaryColorHover<span class="token operator">:</span> <span class="token string">'#36ad6a'</span><span class="token punctuation">,</span>
    primaryColorPressed<span class="token operator">:</span> <span class="token string">'#0c7a43'</span><span class="token punctuation">,</span>
    <span class="token comment">// 一堆配置</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调了半天总算调出个能看的颜色，要是让我再调一次我肯定不干（逃。</p>
<h3 id="_3-组件使用" tabindex="-1"><a class="header-anchor" href="#_3-组件使用" aria-hidden="true">#</a> 3. 组件使用</h3>
<p>主要用了这些组件：</p>
<ul>
<li><code v-pre>NCard</code>：文章卡片</li>
<li><code v-pre>NTag</code>：标签</li>
<li><code v-pre>NButton</code>：按钮</li>
<li><code v-pre>NInput</code>：搜索框</li>
</ul>
<p>代码我就不贴了，反正都是体力活，复制粘贴改改样式的事。</p>
<h2 id="踩坑记录" tabindex="-1"><a class="header-anchor" href="#踩坑记录" aria-hidden="true">#</a> 踩坑记录</h2>
<ol>
<li><strong>暗色模式适配</strong>
这个是真的烦，每个组件都得写两套样式，而且还得考虑切换时的动画，搞得我头都大了。</li>
<li><strong>响应式布局</strong>
手机上看总是有点问题，调了好久才勉强能看。</li>
<li><strong>TypeScript报错</strong></li>
</ol>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 这种报错看得我头疼</span>
Type <span class="token string">'{ size: "small"; bordered: false; }'</span> <span class="token keyword">is</span> not assignable to <span class="token keyword">type</span> <span class="token string">'never'</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>总的来说Naive UI还是挺好用的，就是配置有点多，得慢慢调。</p>
<p>下一步准备给博客加个评论功能（？）。</p>
</div></template>


