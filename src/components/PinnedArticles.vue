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
    id: 'future-outlook',
    title: '最近要干的事情',
    category: '生活',
    date: '2025年3月20日'
  },
  {
    id: 'hello-world',
    title: 'Hello World',
    category: '生活',
    date: '2024年3月20日'
  },
  {
    id: 'naive-ui-beautify',
    title: '使用Naive UI美化界面',
    category: '技术',
    date: '2024年3月20日'
  }
])

const handleArticleClick = (article) => {
  router.push(`/article/${article.id}`)
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
}

.section-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--text-color-1);
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.article-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.article-card:hover {
  transform: translateY(-5px);
}

.article-content {
  padding: 16px;
}

.article-title {
  font-size: 18px;
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
  .articles-grid {
    grid-template-columns: 1fr;
  }
}
</style> 