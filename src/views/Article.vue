<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NCard, NTag, NSpace, NButton } from 'naive-ui'
import frontMatter from 'front-matter'
import { marked } from 'marked'

const route = useRoute()
const router = useRouter()
const article = ref(null)

onMounted(async () => {
  const articleId = route.params.id
  try {
    // 动态导入对应的 Markdown 文件
    const markdownFiles = import.meta.glob('../posts/**/*.md', { as: 'raw' })
    const matchingFile = Object.keys(markdownFiles).find(path => path.includes(articleId))
    
    if (matchingFile) {
      const content = await markdownFiles[matchingFile]()
      const { attributes, body } = frontMatter(content)
      
      article.value = {
        ...attributes,
        content: marked(body)  // 将 Markdown 转换为 HTML
      }
    }
  } catch (error) {
    console.error('Failed to load article:', error)
  }
})

const goBack = () => {
  // 获取来源页码，如果没有则默认为1
  const fromPage = route.query.fromPage || 1
  router.push({
    path: '/articles',
    query: { page: fromPage }
  })
}
</script>

<template>
  <div class="article-container" v-if="article">
    <div class="main-content">
      <n-card>
        <template #header>
          <div class="article-header">
            <n-button text @click="goBack">
              ← 返回文章列表
            </n-button>
          </div>
        </template>
        
        <div class="article-meta">
          <h1>{{ article.title }}</h1>
          <div class="article-info">
            <span class="date">{{ article.date }}</span>
            <n-space>
              <n-tag
                v-for="tag in article.tags"
                :key="tag"
                :bordered="false"
                type="success"
                size="small"
              >
                {{ tag }}
              </n-tag>
            </n-space>
          </div>
        </div>

        <div class="article-content markdown-body" v-html="article.content"></div>
      </n-card>
    </div>
  </div>
</template>

<style scoped>
.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article-meta {
  margin-bottom: 2em;
}

.article-meta h1 {
  margin: 0 0 0.5em 0;
  font-size: 2em;
  color: #333;
}

.article-info {
  display: flex;
  align-items: center;
  gap: 1em;
  color: #666;
}

.date {
  font-size: 0.9em;
}

.article-content {
  line-height: 1.8;
  color: #333;
}

.article-content h1,
.article-content h2,
.article-content h3 {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

.article-content p {
  margin: 1em 0;
}

/* 增强 Markdown 样式 */
:deep(.markdown-body) {
  font-size: 16px;
  line-height: 1.8;
  color: #24292e;
  margin: -60px 0 0 0;  /* 添加负的上边距 */
}

:deep(.markdown-body h1) {
  font-size: 2em;
  margin: 0.67em 0;
  padding-bottom: 0.3em;
  border-bottom: 1px solid #eaecef;
}

:deep(.markdown-body h2) {
  font-size: 1.5em;
  margin-top: 24px;
  margin-bottom: 16px;
  padding-bottom: 0.3em;
  border-bottom: 1px solid #eaecef;
}

:deep(.markdown-body h3) {
  font-size: 1.25em;
  margin-top: 24px;
  margin-bottom: 16px;
}

:deep(.markdown-body p) {
  margin-top: 0;
  margin-bottom: 16px;
  line-height: 1.8;
}

:deep(.markdown-body blockquote) {
  margin: 0;
  padding: 0 1em;
  color: #6a737d;
  border-left: 0.25em solid #dfe2e5;
}

:deep(.markdown-body ul),
:deep(.markdown-body ol) {
  padding-left: 2em;
  margin-top: 0;
  margin-bottom: 16px;
}

:deep(.markdown-body li) {
  margin-top: 0.25em;
}

:deep(.markdown-body code) {
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(27,31,35,0.05);
  border-radius: 3px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
}

:deep(.markdown-body pre) {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
}

:deep(.markdown-body pre code) {
  display: block;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

:deep(.markdown-body img) {
  max-width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 4px;
  margin: 16px 0;
}

:deep(.markdown-body table) {
  display: block;
  width: 100%;
  overflow: auto;
  margin-top: 0;
  margin-bottom: 16px;
  border-spacing: 0;
  border-collapse: collapse;
}

:deep(.markdown-body table th) {
  font-weight: 600;
  padding: 6px 13px;
  border: 1px solid #dfe2e5;
  background-color: #f6f8fa;
}

:deep(.markdown-body table td) {
  padding: 6px 13px;
  border: 1px solid #dfe2e5;
}

:deep(.markdown-body hr) {
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: #e1e4e8;
  border: 0;
}

/* 文章卡片样式优化 */
.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.main-content :deep(.n-card) {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.article-meta {
  margin-bottom: 2em;
  padding-bottom: 1em;
  border-bottom: 1px solid #eaecef;
}

.article-meta h1 {
  margin: 0 0 0.5em 0;
  font-size: 2.2em;
  color: #2c3e50;
  font-weight: 600;
}

.article-info {
  display: flex;
  align-items: center;
  gap: 1em;
  color: #666;
}

.date {
  font-size: 0.9em;
  color: #666;
}

/* 代码高亮主题 */
:deep(.markdown-body pre) {
  background: #282c34;
  color: #abb2bf;
  border-radius: 6px;
  padding: 1em;
  margin: 1em 0;
}

:deep(.markdown-body pre code) {
  color: inherit;
  background: none;
  padding: 0;
}
</style> 