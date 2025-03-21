<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { NCard, NPagination, NTime, NTag, NSpace, NInput } from 'naive-ui'
import { useRouter, useRoute } from 'vue-router'
import frontMatter from 'front-matter'

const router = useRouter()
const route = useRoute()
const articles = ref([])
const allArticles = ref([])  // 存储所有文章
const searchKeyword = ref('')  // 搜索关键词
const page = ref(parseInt(route.query.page) || 1)
const pageSize = 3

// 根据搜索关键词过滤文章
const filteredArticles = computed(() => {
  if (!searchKeyword.value) return allArticles.value
  const keyword = searchKeyword.value.toLowerCase()
  return allArticles.value.filter(article => 
    article.title.toLowerCase().includes(keyword) ||
    article.description.toLowerCase().includes(keyword) ||
    article.tags.some(tag => tag.toLowerCase().includes(keyword))
  )
})

const total = computed(() => filteredArticles.value.length)

const displayedArticles = computed(() => {
  const start = (page.value - 1) * pageSize
  const end = start + pageSize
  return filteredArticles.value.slice(start, end)
})

// 处理搜索
const handleSearch = () => {
  page.value = 1  // 重置页码到第一页
  router.push({
    path: '/articles',
    query: { 
      page: 1,
      search: searchKeyword.value
    }
  })
}

onMounted(async () => {
  const markdownFiles = import.meta.glob('../posts/**/*.md', { as: 'raw' })
  const loadedArticles = []

  for (const path in markdownFiles) {
    if (path.endsWith('README.md')) continue

    try {
      const content = await markdownFiles[path]()
      
      if (!content || content.trim() === '') {
        console.warn('Empty file:', path)
        continue
      }

      const { attributes } = frontMatter(content)
      
      const pathParts = path.split('/')
      const fileName = pathParts[pathParts.length - 1]
      const id = fileName.replace('.md', '')
      
      if (attributes.title && attributes.date) {
        loadedArticles.push({
          id,
          title: attributes.title,
          date: attributes.date,
          tags: attributes.tags || [],
          description: attributes.description || '暂无描述'
        })
      }
    } catch (error) {
      console.error(`Error loading article from ${path}:`, error)
    }
  }

  allArticles.value = loadedArticles.sort((a, b) => new Date(b.date) - new Date(a.date))
  
  // 如果URL中有搜索参数，设置搜索关键词
  if (route.query.search) {
    searchKeyword.value = route.query.search
  }
})

watch(
  () => route.query,
  (newQuery) => {
    if (newQuery.page) {
      page.value = parseInt(newQuery.page)
    }
    if (newQuery.search !== undefined) {
      searchKeyword.value = newQuery.search
    }
  },
  { immediate: true }
)

const handlePageChange = (newPage) => {
  router.push({
    path: '/articles',
    query: { 
      page: newPage,
      search: searchKeyword.value
    }
  })
}

const handleArticleClick = (articleId) => {
  router.push(`/article/${articleId}?fromPage=${page.value}&search=${searchKeyword.value}`)
}
</script>

<template>
  <div class="articles-container">
    <!-- 搜索框 -->
    <div class="search-container">
      <n-input
        v-model:value="searchKeyword"
        type="text"
        placeholder="搜索文章标题、描述或标签..."
        @keyup.enter="handleSearch"
      >
        <template #prefix>
          🔍
        </template>
      </n-input>
    </div>
    <!-- 文章栏 -->
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
    <!-- 页数栏 -->
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
  justify-content: flex-start;
  gap: 20px;
}

/* 搜索框容器样式 */
.search-container {
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.articles-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

.article-card {
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 0;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article-card.hover-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.article-title {
  margin: 0;
  font-size: 1.3em;
  color: #333;
}

.article-description {
  color: #666;
  margin: 8px 0;
  line-height: 1.5;
  flex-grow: 1;
}

.article-footer {
  margin-top: 8px;
}

.pagination {
  position: sticky;
  bottom: 20px;
  background: #f5f5f5;
  padding: 15px;
  display: flex;
  justify-content: center;
  width: calc(100% - 30px);
  border-radius: 8px;
  margin: 20px auto 0;
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