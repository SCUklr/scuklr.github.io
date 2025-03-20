<script setup>
import { ref, onMounted } from 'vue'
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

/* 添加 Markdown 样式 */
:deep(.markdown-body) {
  font-size: 16px;
  line-height: 1.8;
}

:deep(.markdown-body h1) {
  font-size: 2em;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 0.3em;
}

:deep(.markdown-body h2) {
  font-size: 1.5em;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 0.3em;
}

:deep(.markdown-body code) {
  background-color: rgba(27,31,35,0.05);
  padding: 0.2em 0.4em;
  border-radius: 3px;
}
</style> 