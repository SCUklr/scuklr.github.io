<script setup>
import { ref, computed } from 'vue'
import { NCard, NTag } from 'naive-ui'

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
    description: '🎨 Vue3 / React / TypeScript',
    color: bgColors[Math.floor(Math.random() * bgColors.length)],
    fontFamily: "'Noto Sans SC', 'Source Code Pro', sans-serif"
  },
  { 
    title: '憧憬成为测开工程师',
    description: '🔧 Python / Selenium / Pytest',
    color: bgColors[Math.floor(Math.random() * bgColors.length)],
    backgroundImage: 'url(https://images.dmzj.com/resource/news/2023/08/16/1692180208566984.png)',
    fontFamily: "'Noto Sans SC', sans-serif"
  },
  { 
    title: '⚽ 曼城死忠',
    description: 'CITY TILL I DIE',
    color: bgColors[Math.floor(Math.random() * bgColors.length)],
    hoverImage: 'url(https://th.bing.com/th/id/OIP.X2xqiicXCy0nz2Aq6a9iSAAAAA)',
    fontFamily: "'Roboto', sans-serif"
  },
  { 
    title: '🎵 音乐偏好',
    description: '万青 · 花儿乐队 · 崔健',
    color: bgColors[Math.floor(Math.random() * bgColors.length)],
    fontFamily: "'Noto Serif SC', serif"
  },
  { 
    title: '🎮 最近在玩',
    description: '消逝的光芒2 · FM2024',
    color: bgColors[Math.floor(Math.random() * bgColors.length)],
    fontFamily: "'Noto Sans SC', sans-serif"
  },
  { 
    title: '📚 文学偏好',
    description: '伊塔洛·卡尔维诺',
    link: 'https://zh.wikipedia.org/wiki/%E4%BC%8A%E5%A1%94%E7%BD%97%C2%B7%E5%8D%A1%E5%B0%94%E7%BB%B4%E8%AF%BA',
    color: bgColors[Math.floor(Math.random() * bgColors.length)],
    fontFamily: "'Noto Serif SC', serif"
  },
  { 
    title: '想去的地方',
    description: '🇦🇷 阿根廷 · 🇵🇹 葡萄牙',
    color: bgColors[Math.floor(Math.random() * bgColors.length)],
    fontFamily: "'Noto Sans SC', sans-serif"
  },
  { 
    title: '🚗 驾龄',
    description: computed(() => {
      const start = new Date('2024-02-22')
      const now = new Date()
      const days = Math.floor((now - start) / (1000 * 60 * 60 * 24))
      return `${days} 天`
    }),
    color: bgColors[Math.floor(Math.random() * bgColors.length)],
    fontFamily: "'Noto Sans SC', 'Monaco', monospace"
  },
  { 
    title: '🍜 最爱美食',
    description: '开水白菜',
    color: bgColors[Math.floor(Math.random() * bgColors.length)],
    fontFamily: "'Noto Serif SC', serif"
  },
  { 
    title: '最喜欢的话',
    description: '愿君多采摘，此物最相思',
    color: bgColors[Math.floor(Math.random() * bgColors.length)],
    fontFamily: "'Ma Shan Zheng', 'Noto Serif SC', serif"
  }
])

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
          <div class="card-content">
            <h3>{{ project.title }}</h3>
            <p class="description">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar">
      <n-card class="sidebar-card">
        <div class="title" style="text-align: center; font-family: 'Noto Sans JP', sans-serif; background: linear-gradient(to right, #00f, #0ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          暴食海獺小姐
        </div>
        <div class="about-content">
          <img src="/images/profile.jpg" 
               alt="山田杏奈" 
               class="profile-image" />
          <div class="skills">
            <p>前端开发、测试开发、多视图</p>
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
</template>

<style scoped>
.home-container {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  margin-bottom: 40px;
  max-width: 1200px;
  margin: 0 auto 40px;
  position: relative;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
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

.project-card.odd {
  margin-right: 33.33%; /* 右边空出1/3 */
  animation-delay: calc(0.1s * var(--index, 0));
}

.project-card.even {
  margin-left: 33.33%; /* 左边空出1/3 */
  animation-delay: calc(0.1s * var(--index, 0));
}

.project-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.project-card .status {
  font-size: 14px;
  color: #666;
  background: rgba(24, 160, 88, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
}

.sidebar {
  position: fixed;
  top: 84px; /* header height (64px) + content padding (20px) */
  width: 300px;
  height: calc(100vh - 154px); /* 100vh - header(64px) - footer(60px) - padding(10px) */
  right: max(calc((100vw - 1200px) / 2 + 20px), 20px);
}

.sidebar-card {
  height: 100%;
  background: #fff;
  overflow-y: auto;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
}

.profile-image {
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 8px;
}

.skills {
  text-align: center;
}

.skills p {
  color: #666;
  margin: 0;
}

.favorites {
  text-align: center;
}

.favorites p {
  color: #666;
  margin: 0;
  line-height: 1.6;
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
  gap: 20px;
  margin-top: 20px;
}

.social-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
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
</style> 