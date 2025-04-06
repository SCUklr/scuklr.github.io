<script setup>
import { ref, computed } from 'vue'
import { NCard, NTag } from 'naive-ui'
import KanaAnna from '../assets/Kana_Anna.jpg'  // 添加图片导入

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
    color: 'rgba(0, 0, 0, 0.2)',  // 降低遮罩深度
    backgroundImage: `url(${KanaAnna})`,
    titleColor: '#ffffff',  // 保持白色标题
    descriptionColor: '#ffffff',  // 描述文字也改为白色
    fontFamily: "'Noto Sans SC', 'Source Code Pro', sans-serif",
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',  // 加重文字阴影
    cardContentStyle: {  // 只保留内边距
      padding: '15px'
    }
  },
  { 
    title: '憧憬成为测开工程师',
    description: '🔧 Python / Selenium / Pytest',
    color: 'rgba(0, 0, 0, 0.2)',  // 降低遮罩深度
    backgroundImage: 'url(https://images.dmzj.com/resource/news/2023/08/16/1692180208566984.png)',
    titleColor: '#ffffff',  // 保持白色标题
    descriptionColor: '#ffffff',  // 描述文字也改为白色
    fontFamily: "'Noto Sans SC', sans-serif",
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',  // 加重文字阴影
    cardContentStyle: {  // 只保留内边距
      padding: '15px'
    }
  },
  { 
    title: '⚽ Manchester City',
    description: 'Pride in Battle',
    color: bgColors[Math.floor(Math.random() * bgColors.length)],
    hoverImage: 'url(https://th.bing.com/th/id/OIP.X2xqiicXCy0nz2Aq6a9iSAAAAA)',
    titleColor: '#6CADDF',  // 曼城天蓝色
    descriptionColor: '#ffffff',  // 白色
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
    </div>

    <div class="sidebar">
      <n-card class="sidebar-card">
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
</template>

<style scoped>
.home-container {
  display: grid; /* 使用网格布局 */
  grid-template-columns: 1fr 300px; /* 定义两列，第一列自适应，第二列宽300px */
  gap: 20px; /* 列间距为20px */
  max-width: 1200px; /* 最大宽度为1200px */
  margin: 0 auto 40px; /* 上边距为0，左右居中，下边距为40px */
  position: relative; /* 相对定位 */
}

.main-content {
  display: flex; /* 使用弹性布局 */
  flex-direction: column; /* 垂直排列子元素 */
  gap: 20px; /* 子元素间距为20px */
}

.projects-grid {
  display: flex; /* 使用弹性布局 */
  flex-direction: column; /* 垂直排列子元素 */
  gap: 20px; /* 子元素间距为20px */
  padding: 20px; /* 内边距为20px */
}

.project-card {
  padding: 30px; /* 内边距为30px */
  border-radius: 16px; /* 圆角半径为16px */
  backdrop-filter: blur(10px); /* 背景模糊效果 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); /* 过渡效果 */
  cursor: pointer; /* 鼠标悬停时显示为手型 */
  height: 250px; /* 高度为250px */
  width: 66.67%; /* 宽度为66.67% */
  display: flex; /* 使用弹性布局 */
  align-items: center; /* 垂直居中对齐 */
  justify-content: center; /* 水平居中对齐 */
  background-size: cover !important; /* 背景图像覆盖 */
  background-position: center !important; /* 背景图像居中 */
  position: relative; /* 相对定位 */
  overflow: hidden; /* 超出部分隐藏 */
  background-blend-mode: overlay;  /* 添加混合模式 */
}

.card-content {
  text-align: center; /* 文本居中对齐 */
  z-index: 1; /* 设置层级 */
}

.project-card h3 {
  margin: 0 0 10px 0; /* 上边距为0，下边距为10px */
  font-size: 24px; /* 字体大小为24px */
  color: #333; /* 字体颜色为深灰色 */
}

.description {
  font-size: 16px; /* 字体大小为16px */
  color: #666; /* 字体颜色为灰色 */
  margin: 0; /* 上下边距为0 */
}

.project-card::before {
  content: ''; /* 伪元素内容为空 */
  position: absolute; /* 绝对定位 */
  top: 0; /* 顶部对齐 */
  left: 0; /* 左侧对齐 */
  right: 0; /* 右侧对齐 */
  bottom: 0; /* 底部对齐 */
  background: none; /* 背景为空 */
  transition: all 0.3s ease; /* 过渡效果 */
}

.project-card:hover::before {
  background: var(--hover-image, none); /* 悬停时背景图像 */
  background-size: cover; /* 背景图像覆盖 */
  background-position: center; /* 背景图像居中 */
  opacity: 0.8; /* 不透明度为0.8 */
}

.project-card.odd {
  margin-right: 33.33%; /* 右边空出1/3 */
  animation-delay: calc(0.1s * var(--index, 0)); /* 动画延迟 */
}

.project-card.even {
  margin-left: 33.33%; /* 左边空出1/3 */
  animation-delay: calc(0.1s * var(--index, 0)); /* 动画延迟 */
}

.project-card:hover {
  transform: translateY(-5px) scale(1.02); /* 悬停时向上移动5px并放大 */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15); /* 悬停时阴影效果 */
}

.project-card .status {
  font-size: 14px; /* 字体大小为14px */
  color: #666; /* 字体颜色为灰色 */
  background: rgba(24, 160, 88, 0.1); /* 背景颜色为淡绿色 */
  padding: 4px 8px; /* 内边距为4px上下，8px左右 */
  border-radius: 4px; /* 圆角半径为4px */
}

.sidebar {
  position: fixed; /* 固定定位 */
  top: 104px; /* 距离顶部104px */
  width: 300px; /* 宽度为300px */
  height: 520px; /* 高度为520px */
  right: max(calc((100vw - 1200px) / 2 + 20px), 20px); /* 右侧位置计算 */
}

.sidebar-card {
  height: 100%; /* 高度为100% */
  background: #fff; /* 背景颜色为白色 */
  border-radius: 16px; /* 圆角半径为16px */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  overflow: hidden; /* 超出部分隐藏，防止出现滚动条 */
}

.about-content {
  display: flex; /* 使用弹性布局 */
  flex-direction: column; /* 垂直排列子元素 */
  align-items: center; /* 水平居中对齐 */
  gap: 15px; /* 子元素间距为15px */
  padding: 15px 0; /* 内边距为15px上下 */
}

.profile-image {
  width: 100%; /* 宽度为100% */
  max-width: 200px; /* 最大宽度为200px */
  height: auto; /* 高度自适应 */
  border-radius: 8px; /* 圆角半径为8px */
}

.skills {
  text-align: center; /* 文本居中对齐 */
}

.skills p {
  color: #666; /* 字体颜色为灰色 */
  margin: 0; /* 上下边距为0 */
  font-size: 14px; /* 字体大小为14px */
}

.favorites {
  text-align: center; /* 文本居中对齐 */
}

.favorites p {
  color: #666; /* 字体颜色为灰色 */
  margin: 0; /* 上下边距为0 */
  line-height: 1.4; /* 行高为1.4 */
  font-size: 14px; /* 字体大小为14px */
}

.favorites a {
  color: #18a058; /* 链接颜色为绿色 */
  text-decoration: none; /* 去掉下划线 */
  transition: color 0.3s; /* 颜色过渡效果 */
}

.favorites a:hover {
  color: #36ad6a; /* 悬停时链接颜色变为更亮的绿色 */
}

.social-icons {
  display: flex; /* 使用弹性布局 */
  justify-content: center; /* 水平居中对齐 */
  align-items: center; /* 垂直居中对齐 */
  gap: 20px; /* 子元素间距为20px */
  margin-top: 15px; /* 顶部边距为15px */
}

.social-icon {
  width: 24px; /* 图标宽度为24px */
  height: 24px; /* 图标高度为24px */
  cursor: pointer; /* 鼠标悬停时显示为手型 */
  transition: transform 0.3s ease; /* 变换过渡效果 */
}

.social-icon:hover {
  transform: scale(1.2); /* 悬停时放大1.2倍 */
}

.qq-container {
  position: relative; /* 相对定位 */
  display: inline-block; /* 行内块元素 */
}

.qq-tooltip {
  position: absolute; /* 绝对定位 */
  bottom: 100%; /* 底部对齐 */
  left: 50%; /* 左侧居中 */
  transform: translateX(-50%); /* 水平居中 */
  padding: 5px 10px; /* 内边距为5px上下，10px左右 */
  background-color: rgba(0, 0, 0, 0.8); /* 背景颜色为黑色，透明度为0.8 */
  color: white; /* 字体颜色为白色 */
  border-radius: 4px; /* 圆角半径为4px */
  font-size: 14px; /* 字体大小为14px */
  white-space: nowrap; /* 不换行 */
  opacity: 0; /* 初始不透明度为0 */
  visibility: hidden; /* 初始不可见 */
  transition: all 0.3s ease; /* 过渡效果 */
  margin-bottom: 5px; /* 下边距为5px */
}

.qq-tooltip::after {
  content: ''; /* 伪元素内容为空 */
  position: absolute; /* 绝对定位 */
  top: 100%; /* 底部对齐 */
  left: 50%; /* 左侧居中 */
  transform: translateX(-50%); /* 水平居中 */
  border-width: 5px; /* 边框宽度为5px */
  border-style: solid; /* 边框样式为实线 */
  border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent; /* 边框颜色 */
}

.qq-container:hover .qq-tooltip {
  opacity: 1; /* 悬停时不透明度变为1 */
  visibility: visible; /* 悬停时可见 */
}
</style> 