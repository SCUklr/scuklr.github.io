<script setup>
import { NCard, NTimeline, NTimelineItem, NDivider } from 'naive-ui'
</script>

<template>
  <div class="about-container">
    <div class="main-content">
      <n-card title="关于我">
        <div class="about-content">
          <h2>院校背景 (Educational Background)</h2>
          <div class="education-item">
            <div class="education-left">
              <p class="date">2021.9-2025.6</p>
              <p class="university">四川大学</p>
              <p class="university-en">Sichuan University</p>
            </div>
            <div class="education-right">
              <p class="major">软件工程</p>
              <p class="major-en">Software Engineering</p>
              <p class="degree">工学学士</p>
              <p class="degree-en">Bachelor of Engineering</p>
            </div>
          </div>
          <div class="education-item">
            <div class="education-left">
              <p class="date">2025.9-2026.11</p>
              <p class="university">香港中文大学</p>
              <p class="university-en">The Chinese University of Hong Kong</p>
            </div>
            <div class="education-right">
              <p class="major">信息工程</p>
              <p class="major-en">Information Engineering</p>
              <p class="degree">理学硕士</p>
              <p class="degree-en">Master of Science</p>
            </div>
          </div>
          
          <n-divider />
          
          <h2>技术栈</h2>
          <div class="skills">
            <p><strong>测试开发(Test Development):</strong> Selenium, Pytest, Apifox, Postman</p>
            <p>前端开发(Frontend): HTML, CSS, JavaScript, Vue3, TypeScript</p>
            <p>其他技能(Other Skills):Git, Docker</p>
          </div>

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

      <n-card title="联系方式" class="contact-card">
        <div class="contact-info">
          <p>邮箱:johnsmith10151997@gmail.com</p>
        </div>
      </n-card>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  display: contents;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px; /* 增加与底部的距离 */
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

.contact-card {
  margin-top: 20px;
  background: #fff;
}

.contact-info {
  padding: 16px 0;
}

.contact-info p {
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
  font-size: 16px;
  color: #18a058;
  margin-bottom: 4px;
}

.major-en {
  font-size: 14px;
  color: #666;
  font-style: italic;
}

.degree {
  font-size: 14px;
  color: #666;
  margin-top: 8px;
  margin-bottom: 2px;
}

.degree-en {
  font-size: 13px;
  color: #666;
  font-style: italic;
}
</style> 