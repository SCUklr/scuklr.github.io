<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { NCard, NPagination, NTime, NTag, NSpace } from 'naive-ui'
import { useRouter, useRoute } from 'vue-router'
import frontMatter from 'front-matter'

const router = useRouter()
const route = useRoute()
const articles = ref([])
const page = ref(parseInt(route.query.page) || 1)  // 从路由参数获取页码
const pageSize = 3  // 修改为固定的3篇文章每页

const total = computed(() => articles.value.length)

const displayedArticles = computed(() => {
  const start = (page.value - 1) * pageSize
  const end = start + pageSize
  return articles.value.slice(start, end)
})

onMounted(async () => {
  // 使用 Vite 的 import.meta.glob 获取所有 Markdown 文件的路径
  const markdownFiles = import.meta.glob('../posts/**/*.md', { as: 'raw' })
  console.log('Available markdown files:', Object.keys(markdownFiles))
  const loadedArticles = []

  for (const path in markdownFiles) {
    // 跳过 README.md
    if (path.endsWith('README.md')) {
      continue
    }

    try {
      const content = await markdownFiles[path]()
      console.log('Loading article from path:', path)
      
      // 检查文件内容是否为空
      if (!content || content.trim() === '') {
        console.warn('Empty file:', path)
        continue
      }

      const { attributes } = frontMatter(content)
      console.log('Parsed frontmatter:', attributes)
      
      // 从文件路径中提取 ID
      const pathParts = path.split('/')
      const fileName = pathParts[pathParts.length - 1]
      const id = fileName.replace('.md', '')
      
      // 确保必要的 frontmatter 数据存在
      if (attributes.title && attributes.date) {
        loadedArticles.push({
          id,
          title: attributes.title,
          date: attributes.date,
          tags: attributes.tags || [],
          description: attributes.description || '暂无描述'
        })
      } else {
        console.warn('Missing required frontmatter in:', path)
        console.warn('Current data:', attributes)
      }
    } catch (error) {
      console.error(`Error loading article from ${path}:`, error)
    }
  }

  // 按日期排序，最新的在前面
  articles.value = loadedArticles.sort((a, b) => new Date(b.date) - new Date(a.date))
  
  console.log('Loaded articles:', articles.value)
  console.log('Total articles:', total.value)
})

// 监听路由变化
watch(
  () => route.query.page,
  (newPage) => {
    if (newPage) {
      page.value = parseInt(newPage)
    }
  },
  { immediate: true }  // 添加 immediate: true 确保初始化时也执行
)

const handlePageChange = (newPage) => {
  router.push({
    path: '/articles',
    query: { page: newPage }
  })
}

const handleArticleClick = (articleId) => {
  // 在跳转到文章详情时，传递当前页码
  router.push(`/article/${articleId}?fromPage=${page.value}`)
}
</script>

<template>
  <div class="articles-container">
    <div class="articles-grid">
      <n-card
        v-for="article in displayedArticles"
        :key="article.id"
        class="article-card"
        :class="{ 'hover-effect': true }"
        @click="handleArticleClick(article.id)"
      >
        <div class="article-header">
          <h2 class="article-title">{{ article.title }}</h2>
          <n-time :time="new Date(article.date)" format="yyyy-MM-dd" />
        </div>
        <p class="article-description">{{ article.description }}</p>
        <div class="article-footer">
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
      </n-card>
    </div>
    
    <div class="pagination">
      <n-pagination
        v-model:page="page"
        :page-size="pageSize"
        :total="total"
        :page-count="Math.ceil(total / pageSize)"
        :default-page="parseInt(route.query.page) || 1"
        show-quick-jumper
        @update:page="handlePageChange"
      />
    </div>
  </div>
</template>

<style scoped>
.articles-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  min-height: calc(100vh - 144px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.articles-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 60px;
}

.article-card {
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.article-card.hover-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.article-title {
  margin: 0;
  font-size: 1.5em;
  color: #333;
}

.article-description {
  color: #666;
  margin: 12px 0;
  line-height: 1.6;
}

.article-footer {
  margin-top: 12px;
}

.pagination {
  position: sticky;
  bottom: 20px;
  background: #f5f5f5;
  padding: 20px;
  display: flex;
  justify-content: center;
  width: calc(100% - 40px);
  border-radius: 8px;
  margin: 40px auto 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>

<style>
/* src/assets/article.css */
.article-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.article-content h1 {
  font-size: 2em;
  margin-bottom: 1em;
}

.article-content p {
  line-height: 1.6;
  margin-bottom: 1em;
}

.article-content code {
  background: #f5f5f5;
  padding: 2px 4px;
  border-radius: 4px;
}
</style> 