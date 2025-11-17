<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { NCard, NPagination, NTime, NTag, NSpace, NInput, NSpin } from 'naive-ui'
import { useRouter, useRoute } from 'vue-router'
import api from '../api'
import { onBeforeUnmount } from 'vue'

const router = useRouter()
const route = useRoute()
const articles = ref([])
const allArticles = ref([])
const searchKeyword = ref('')
const page = ref(parseInt(route.query.page) || 1)
const pageSize = 5
const isLoading = ref(true)  // 添加加载状态
let _searchDebounceTimer = null

onBeforeUnmount(() => {
  if (_searchDebounceTimer) clearTimeout(_searchDebounceTimer)
})

// 标签类型到颜色的映射
const tagTypeMap = {
  '技术': 'success',
  '项目': 'warning',
  '生活': 'info',
  '其它': 'default'
}

// 预加载文章列表
const preloadArticles = async () => {
  try {
    // 从后端 API 获取文章列表
    isLoading.value = true
    const res = await api.get('/posts')
    const data = res.data || []
    // 后端返回的可能包含 created_at 或 date 字段
    allArticles.value = data
      .map(item => ({
        id: String(item.id),
        title: item.title,
        date: item.created_at || item.date || item.createdAt || null,
        tags: item.tags || [],
        description: item.description || item.desc || ''
      }))
      .filter(Boolean)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
    isLoading.value = false
  } catch (error) {
    console.error('加载文章失败:', error)
    isLoading.value = false
  }
}

// 根据搜索关键词过滤文章
const filteredArticles = computed(() => {
  const articles = allArticles.value || []
  const keyword = searchKeyword.value ? searchKeyword.value.toLowerCase() : ''
  
  if (!keyword) {
    return articles
  }
  
  return articles.filter(article => {
    if (!article) return false
    
    const title = article.title ? article.title.toLowerCase() : ''
    const description = article.description ? article.description.toLowerCase() : ''
    const tags = article.tags || []
    const categoryMatch = tags.some(tag => {
      if (!tag) return false
      return tag.toLowerCase().includes(keyword)
    })
    
    return title.includes(keyword) || 
           description.includes(keyword) || 
           categoryMatch
  })
})

const total = computed(() => filteredArticles.value.length)

const displayedArticles = computed(() => {
  const start = (page.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredArticles.value.slice(start, end);
})

// 处理搜索
const handleSearch = () => {
  page.value = 1  // 重置页码到第一页
  router.push({
    path: '/articles',
    query: { 
      page: 1,
      ...(searchKeyword.value ? { search: searchKeyword.value } : {})
    }
  })
}

// 防抖：当用户输入时延迟更新路由 query，使搜索更即时且不会频繁导航
watch(searchKeyword, (val) => {
  // 防止当 route.query.search 与输入相同时重复触发替换
  const routeSearch = route.query.search ? String(route.query.search) : ''
  if (routeSearch === String(val || '')) return
  page.value = 1
  if (_searchDebounceTimer) clearTimeout(_searchDebounceTimer)
  _searchDebounceTimer = setTimeout(() => {
    router.replace({
      path: '/articles',
      query: {
        page: 1,
        ...(val ? { search: val } : {})
      }
    })
  }, 400)
})

// 在路由变化时重新加载文章
watch(
  () => route.path,
  () => {
    if (route.path === '/articles') {
      preloadArticles()
    }
  },
  { immediate: true }
)

// 在组件挂载时加载文章
onMounted(() => {
  preloadArticles()
  
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
      searchKeyword.value = newQuery.search ? String(newQuery.search) : ''
    }
  },
  { immediate: true }
)

const handlePageChange = (newPage) => {
  router.push({
    path: '/articles',
    query: { 
      page: newPage,
      ...(searchKeyword.value ? { search: searchKeyword.value } : {})
    }
  })
}

const handleArticleClick = (articleId) => {
  router.push({
    path: `/article/${articleId}`,
    query: {
      fromPage: page.value,
      ...(searchKeyword.value ? { search: searchKeyword.value } : {})
    }
  })
}
</script>

<template>
  <div class="articles-container">
    <!-- 搜索框 -->
    <div class="search-container">
      <n-input
        v-model="searchKeyword"
        type="text"
        placeholder="搜索文章标题、描述或标签..."
        @keyup.enter="handleSearch"
      >
        <template #prefix>
          🔍
        </template>
      </n-input>
    </div>

    <!-- 加载状态 -->
    <div v-if="isLoading" class="loading-container">
      <n-spin size="large" description="加载中..." />
    </div>

    <!-- 文章列表 -->
    <template v-else>
      <div v-if="displayedArticles.length > 0" class="articles-grid">
        <n-card
          v-for="article in displayedArticles"
          :key="article.id"
          class="article-card"
          :class="{ 'hover-effect': true }"
          @click="handleArticleClick(article.id)"
        >
          <div class="article-header">
            <h2 class="article-title">{{ article.title }}</h2>
            <n-time :time="article.date" format="yyyy-MM-dd" />
          </div>
          <p class="article-description">{{ article.description }}</p>
          <div class="article-footer">
            <n-space>
              <n-tag
                v-for="tag in article.tags"
                :key="tag"
                :bordered="false"
                :type="tagTypeMap[tag] || 'default'"
                size="small"
              >
                {{ tag }}
              </n-tag>
            </n-space>
          </div>
        </n-card>
      </div>
      <div v-else class="no-results">
        没有找到相关文章
      </div>

      <!-- 分页 -->
      <div v-if="total > pageSize" class="pagination">
        <n-pagination
          v-model="page"
          :page-size="pageSize"
          :total="total"
          :page-count="Math.ceil(total / pageSize)"
          :default-page="Number(route.query.page) || 1"
          show-quick-jumper
          @update:page="handlePageChange"
        />
      </div>
    </template>
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

/* 添加加载状态样式 */
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
}

/* 添加无结果样式 */
.no-results {
  text-align: center;
  padding: 40px;
  color: #666;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  backdrop-filter: blur(10px);
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