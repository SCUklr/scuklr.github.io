<script setup>
import { NCard, NTimeline, NTimelineItem, NDivider } from 'naive-ui'
</script>

<template>
  <div class="about-container">
    <div class="main-content">
      <n-card>
        <div class="about-content">
          <h1 class="main-title">About me</h1>

          <h2 class="section-title">教育背景 (Education Background)</h2>
          <div class="school-info">
            <div class="school-header">
              <h2>四川大学 (Sichuan University)</h2>
              <span class="date">2021.9-2025.6</span>
            </div>
            <div class="degree-info">
              <span class="major">软件工程 (Software Engineering)</span>
              <span class="degree">工学学士 (Bachelor of Engineering)</span>
            </div>
          </div>

          <div class="school-info">
            <div class="school-header">
              <h2>香港中文大学 (The Chinese University of Hong Kong)</h2>
              <span class="date">2025.9-2026.11</span>
            </div>
            <div class="degree-info">
              <span class="major">信息工程 (Information Engineering)</span>
              <span class="degree">理学硕士 (Master of Science)</span>
            </div>
          </div>
          
          <n-divider />
          
          <h2 class="section-title">技术栈</h2>
          <div class="skills">
            <p><strong>测试开发(Test Development):</strong> Selenium, Pytest, Apifox, Postman</p>
            <p><strong>前端开发(Frontend):</strong> HTML, CSS, JavaScript, Vue3, TypeScript</p>
            <p><strong>深度学习(Deep Learning):</strong> NLP、Multi-view Clustering</p>
          </div>

          <n-divider />

          <h2>科研成果</h2>
          <p>To be continued...</p>

          <n-divider />

          <h2>时间线</h2>
          <n-timeline>
            <n-timeline-item type="success" title="2025.2-">
              开始多模态聚类科研项目
            </n-timeline-item>
            <n-timeline-item type="success" title="2024.7-2024.9">
              腾讯（实娱商管）前端实习
            </n-timeline-item>
            <n-timeline-item type="warning" title="2023">
              开始接触前端开发
            </n-timeline-item>
            <n-timeline-item type="info" title="2021">
              本科入学，开始学习软件工程
            </n-timeline-item>
          </n-timeline>
        </div>
      </n-card>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  width: 100%;
  min-height: calc(100vh - 144px);  /* 减去头部和底部的高度 */
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-content {
  padding: 20px 0;
}

.about-content h2 {
  color: #333;
  margin: 16px 0;
  font-size: 18px;
}

.about-content p {
  color: #666;
  line-height: 1.6;
}

.skills {
  margin: 16px 0;
}

.skills p {
  margin: 8px 0;
  color: #666;
}

.sidebar {
  /* 保持与首页相同的布局结构 */
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.education-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
}

.education-left {
  flex: 1;
}

.education-right {
  flex: 1;
  text-align: right;
}

.date {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.university {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.university-en {
  font-size: 14px;
  color: #666;
  font-style: italic;
}

.major {
  color: #333;
  font-size: 14px;
  font-weight: 500;
}

.degree {
  color: #666;
  font-size: 16px;
  font-style: italic;
}

/* 添加新的内容项样式 */
.content-item {
  margin: 8px 0 16px 0;
  padding: 12px;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
}

.content-item p {
  margin: 4px 0;
}

/* 学校信息样式 */
.school-info {
  margin-bottom: 24px;
}

.school-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.school-header h2 {
  color: #333;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.date {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.degree-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
}

.major {
  color: #333;
  font-size: 14px;
  font-weight: 500;
}

.degree {
  color: #666;
  font-size: 14px;
  font-style: italic;
}

/* 主标题样式 */
.main-title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
}

/* 章节标题样式 */
.section-title {
  color: #333;
  font-size: 20px;
  font-weight: bold;
  margin: 24px 0 16px 0;
}
</style> 