<template><div><p>你是不是刚打开GitHub，满眼英文按钮一头雾水？是不是看到&quot;Fork&quot;、&quot;Clone&quot;、&quot;Pull Request&quot;这些词就头皮发麻？别慌！这篇文章就是为你准备的——<strong>零基础也能看懂</strong>的GitHub入门教程。</p>
<p>我们会通过一个 <strong>真实案例</strong> （把我的博客的源码部署到你的电脑上并运行）来手把手教你：
✅ 如何&quot;下载&quot;GitHub上的代码（其实叫Clone）
✅ 怎么运行这些代码
✅ 遇到问题该怎么求助</p>
<p>全程就像学做菜一样： <strong>准备食材（下载代码）→ 跟着菜谱操作（运行项目）→ 尝味道调咸淡（调试）</strong> 。保证你学完就能自信地说：&quot;原来GitHub也没那么可怕嘛！&quot;</p>
<p>要一起试试吗？👉 接下来我们开始第一步...</p>
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<p>在开始之前，请确保你的电脑上已经安装了以下工具：</p>
<ul>
<li>Node.js (建议使用 16.0 或更高版本)</li>
<li>Git</li>
<li>npm 或 yarn 包管理器</li>
</ul>
<h2 id="部署步骤" tabindex="-1"><a class="header-anchor" href="#部署步骤" aria-hidden="true">#</a> 部署步骤</h2>
<p>https://github.com/SCUklr/scuklr.github.io</p>
<p>点击以上链接进入到我的个人博客的仓库。</p>
<h3 id="_1-克隆项目" tabindex="-1"><a class="header-anchor" href="#_1-克隆项目" aria-hidden="true">#</a> 1. 克隆项目</h3>
<p>首先，打开终端（Windows 用户可以使用 PowerShell 或 CMD），win+r，输入cmd回车进入终端。</p>
<p>cd到你想要下载到的地方的目录。执行以下命令克隆项目：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
<span class="token function">git</span> clone https://github.com/SCUklr/scuklr.github.io.git

<span class="token builtin class-name">cd</span> scuklr.github.io

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-安装依赖" tabindex="-1"><a class="header-anchor" href="#_2-安装依赖" aria-hidden="true">#</a> 2. 安装依赖</h3>
<p>进入项目目录后，安装项目所需的依赖包：1234567</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment"># 或者使用 yarn（我个人不太推荐这么做哈）</span>

<span class="token function">yarn</span> <span class="token function">install</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-启动开发服务器" tabindex="-1"><a class="header-anchor" href="#_3-启动开发服务器" aria-hidden="true">#</a> 3. 启动开发服务器</h3>
<p>依赖安装完成后，启动开发服务器：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
<span class="token function">npm</span> run dev

<span class="token comment"># 或者使用 yarn</span>

<span class="token function">yarn</span> dev

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动成功后，终端会显示一个本地服务器地址（通常是 <code v-pre>http://localhost:5173</code>），在浏览器中打开这个地址即可看到项目。</p>
<h3 id="_4-构建生产版本" tabindex="-1"><a class="header-anchor" href="#_4-构建生产版本" aria-hidden="true">#</a> 4. 构建生产版本</h3>
<p>如果你想构建生产版本，可以执行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
<span class="token function">npm</span> run build

<span class="token comment"># 或者使用 yarn</span>

<span class="token function">yarn</span> build

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建完成后，可以在 <code v-pre>dist</code> 目录下找到生成的文件。</p>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
<p>1.<strong>依赖安装失败</strong></p>
<ul>
<li>检查 Node.js 版本是否符合要求</li>
<li>尝试清除 npm 缓存：<code v-pre>npm cache clean --force</code></li>
<li>使用淘宝镜像：<code v-pre>npm config set registry https://registry.npmmirror.com</code></li>
</ul>
<p>2.<strong>启动失败</strong></p>
<ul>
<li>检查端口是否被占用</li>
<li>确保所有依赖都正确安装</li>
<li>查看终端错误信息进行排查</li>
</ul>
<p>3.<strong>页面显示异常</strong></p>
<ul>
<li>清除浏览器缓存</li>
<li>检查控制台是否有错误信息</li>
<li>确保所有静态资源路径正确</li>
</ul>
</div></template>


