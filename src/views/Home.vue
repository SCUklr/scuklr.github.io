<script setup>
import { ref, computed } from 'vue'
import { NCard, NTag } from 'naive-ui'
import { useRouter } from 'vue-router'
import KanaAnna from '../assets/Kana_Anna.jpg'  // 添加图片导入

const router = useRouter()

const bgColors = [
  'rgba(255, 182, 193, 0.7)',  // 粉色
  'rgba(173, 216, 230, 0.7)',  // 浅蓝
  'rgba(144, 238, 144, 0.7)',  // 浅绿
  'rgba(255, 218, 185, 0.7)',  // 桃色
  'rgba(221, 160, 221, 0.7)',  // 梅红
  'rgba(176, 196, 222, 0.7)',  // 钢蓝
  'rgba(255, 255, 224, 0.7)',  // 浅黄
  'rgba(230, 230, 250, 0.7)'   // 薰衣草
]

const projects = ref([
  { 
    title: '会写点前端',
    description: '🎨 Vue3 / TypeScript',
    color: 'rgba(0, 0, 0, 0.2)',
    backgroundImage: `url(${KanaAnna})`,
    titleColor: '#ffffff',
    descriptionColor: '#ffffff',
    fontFamily: "'Noto Sans SC', 'Source Code Pro', sans-serif",
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
    cardContentStyle: {
      padding: '15px'
    }
  },
  { 
    title: '憧憬成为测开工程师',
    description: '🔧 Python / Selenium / Pytest',
    color: 'rgba(0, 0, 0, 0.2)',
    backgroundImage: 'url(https://images.dmzj.com/resource/news/2023/08/16/1692180208566984.png)',
    titleColor: '#ffffff',
    descriptionColor: '#ffffff',
    fontFamily: "'Noto Sans SC', sans-serif",
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
    cardContentStyle: {
      padding: '15px'
    }
  },
  { 
    title: '⚽ Manchester City',
    description: 'Pride in Battle',
    color: bgColors[Math.floor(Math.random() * bgColors.length)],
    hoverImage: 'url(https://th.bing.com/th/id/OIP.X2xqiicXCy0nz2Aq6a9iSAAAAA)',
    titleColor: '#6CADDF',
    descriptionColor: '#ffffff',
    fontFamily: "'Roboto', sans-serif"
  },
  { 
    title: '🎵 音乐偏好 & 最近在玩',
    description: '万青 · 花儿乐队 · 崔健 | 消逝的光芒2 · FM2024',
    color: bgColors[Math.floor(Math.random() * bgColors.length)],
    fontFamily: "'Noto Serif SC', serif"
  }
])

// 添加精选文章数据
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

const handleMouseOver = (e, project) => {
  if (project.hoverImage) {
    e.currentTarget.style.setProperty('--hover-image', project.hoverImage)
  }
}

const handleMouseOut = (e) => {
  e.currentTarget.style.setProperty('--hover-image', 'none')
}

</script>

<template>
  <div class="page-container">
    <div class="home-container">
      <div class="main-content">
        <div class="projects-grid">
          <div v-for="(project, index) in projects" 
               :key="project.title" 
               class="project-card"
               :class="{ 'odd': index % 2 === 0, 'even': index % 2 === 1 }"
               :style="{ 
                 background: project.color,
                 backgroundImage: project.backgroundImage,
                 fontFamily: project.fontFamily,
                 height: '250px'
               }"
               @click="project.link ? window.open(project.link, '_blank') : null"
               @mouseover="e => handleMouseOver(e, project)"
               @mouseout="e => handleMouseOut(e, project)">
            <div class="card-content" :style="project.cardContentStyle">
              <h3 :style="{ 
                color: project.titleColor || '#333',
                textShadow: project.textShadow
              }">{{ project.title }}</h3>
              <p class="description" :style="{ 
                color: project.descriptionColor || '#666',
                textShadow: project.textShadow
              }">{{ project.description }}</p>
            </div>
          </div>
        </div>

        <div class="pinned-section">
          <h2 class="section-title">精选文章</h2>
          <div class="articles-grid">
            <n-card
              v-for="article in pinnedArticles"
              :key="article.id"
              class="article-card"
              hoverable
              @click="handleArticleClick(article)"
            >
              <div class="article-content">
                <h3 class="article-title">{{ article.title }}</h3>
                <div class="article-meta">
                  <n-tag size="small" :bordered="false" type="info">{{ article.category }}</n-tag>
                  <span class="article-date">{{ article.date }}</span>
                </div>
              </div>
            </n-card>
          </div>
        </div>
      </div>

      <div class="sidebar-container">
        <n-card class="profile-card">
          <div class="title" style="text-align: center; font-family: 'Noto Sans JP', sans-serif; background: linear-gradient(to right, #00f, #0ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            暴食海獺小姐
          </div>
          <div class="about-content">
            <img src="https://img.moegirl.org.cn/common/thumb/e/e9/Yanami_Anna.jpg/560px-Yanami_Anna.jpg" 
                 alt="Yanami Anna" 
                 class="profile-image"
                 referrerpolicy="no-referrer" />
            <div class="skills">
              <p>西郊有密林，祝君出重围</p>
            </div>
            <div class="favorites">
              <p>
                我永远喜欢
                <a href="https://mzh.moegirl.org.cn/%E5%B1%B1%E7%94%B0%E6%9D%8F%E5%A5%88" target="_blank">山田杏奈</a>
                和
                <a href="https://mzh.moegirl.org.cn/%E5%85%AB%E5%A5%88%E8%A7%81%E6%9D%8F%E8%8F%9C" target="_blank">八奈见杏菜</a>
              </p>
            </div>
            <div class="social-icons">
              <a href="https://github.com/SCUklr" target="_blank">
                <img src="../assets/github-fill.svg" alt="GitHub" class="social-icon" />
              </a>
              <a href="https://space.bilibili.com/123352664?spm_id_from=333.1007.0.0" target="_blank">
                <img src="../assets/bilibili-fill.svg" alt="Bilibili" class="social-icon" />
              </a>
              <div class="qq-container">
                <img src="../assets/QQ.svg" alt="QQ" class="social-icon" />
                <span class="qq-tooltip">3761297418</span>
              </div>
            </div>
          </div>
        </n-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-container {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.main-content {
  width: 100%;
  margin-right: 320px; /* 给固定定位的sidebar留出空间 */
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.project-card {
  padding: 30px;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  height: 250px;
  width: 66.67%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover !important;
  background-position: center !important;
  position: relative;
  overflow: hidden;
  background-blend-mode: overlay;
}

.project-card.odd {
  margin-right: 33.33%;
}

.project-card.even {
  margin-left: 33.33%;
}

.card-content {
  text-align: center;
  z-index: 1;
}

.project-card h3 {
  margin: 0 0 10px 0;
  font-size: 24px;
  color: #333;
}

.description {
  font-size: 16px;
  color: #666;
  margin: 0;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: none;
  transition: all 0.3s ease;
}

.project-card:hover::before {
  background: var(--hover-image, none);
  background-size: cover;
  background-position: center;
  opacity: 0.8;
}

.project-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

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

.sidebar-container {
  width: 300px;
  position: fixed;
  right: calc((100% - 1200px) / 2 + 20px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  top: 100px; /* 调整顶部位置，原来是124px */
}

.profile-card {
  height: 520px;
  border-radius: 16px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  background-color: #f9f9f9 !important;
  overflow: hidden;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  height: 100%;
}

.profile-image {
  width: 100%;
  max-width: 180px;
  height: auto;
  border-radius: 8px;
}

.skills {
  text-align: center;
  margin-top: 10px;
}

.skills p {
  color: #666;
  margin: 5px 0;
  font-size: 13px;
  line-height: 1.5;
}

.favorites {
  text-align: center;
  margin-top: 10px;
}

.favorites p {
  color: #666;
  margin: 5px 0;
  font-size: 13px;
  line-height: 1.5;
}

.favorites a {
  color: #18a058;
  text-decoration: none;
  transition: color 0.3s;
}

.favorites a:hover {
  color: #36ad6a;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 5px 0;
  margin-top: auto;
}

.social-icon {
  width: 22px;
  height: 22px;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
  opacity: 1;
}

.qq-container {
  position: relative;
  display: inline-block;
}

.qq-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  margin-bottom: 5px;
}

.qq-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
}

.qq-container:hover .qq-tooltip {
  opacity: 1;
  visibility: visible;
}

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .home-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }

  .main-content {
    order: 2;
    margin-right: 0;
  }

  .sidebar-container {
    position: static;
    width: 100%;
    right: auto;
    margin-bottom: 20px;
  }

  .profile-card {
    margin-top: 0;
    height: auto;
  }

  .project-card {
    width: 100% !important;
    margin: 0 !important;
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 480px) {
  .home-container {
    padding: 0 5px;
  }

  .project-card {
    height: 180px;
  }

  .profile-image {
    max-width: 120px;
  }
}
</style> 