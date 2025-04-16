<script setup>
import { ref } from 'vue'
import { NCard, NTag } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()

// 精选文章数据
const pinnedArticles = ref([
  {
    id: 'How to deploy my personal blog project on GitHub to your local',
    title: '如何把本博客部署到你的本地',
    category: '项目',
    date: '2025年4月8日'
  },
  {
    id: 'blog-dev-diary',
    title: '博客开发日记',
    category: '技术',
    date: '2024年3月20日'
  },
  {
    id: 'CypressABC',
    title: 'Cypress入门教程',
    category: '技术',
    date: '2025年4月8日'
  },
  {
    id: 'naive-ui-beautify',
    title: '使用Naive UI美化界面',
    category: '技术',
    date: '2024年3月20日'
  }
])

const handleArticleClick = (article) => {
  router.push({
    path: `/article/${article.id}`,
    query: {
      from: router.currentRoute.value.fullPath
    }
  })
}
</script>

<template>
  <div class="pinned-section">
    <h2 class="section-title">精选文章</h2>
    <div class="articles-grid">
      <n-card
        v-for="article in pinnedArticles"
        :key="article.id"
        class="article-card"
        hoverable
        @click="handleArticleClick(article)"
        role="article"
        :aria-label="article.title"
      >
        <div class="article-content">
          <h3 class="article-title">{{ article.title }}</h3>
          <div class="article-meta">
            <n-tag size="small" :bordered="false" type="success" style="--n-color: rgba(24, 160, 88, 0.16); --n-text-color: #0a5a30;">{{ article.category }}</n-tag>
            <span class="article-date">{{ article.date }}</span>
          </div>
        </div>
      </n-card>
    </div>
  </div>
</template>

<style scoped>
.pinned-section {
  width: 100%;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--text-color-1);
}

.articles-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.article-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px !important;
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(10px);
  width: 100%;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1) !important;
}

.article-content {
  padding: 20px;
}

.article-title {
  font-size: 20px;
  margin-bottom: 12px;
  color: var(--text-color-1);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.article-date {
  color: var(--text-color-3);
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .pinned-section {
    padding: 0 15px;
  }
}
</style> 