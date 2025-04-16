<script setup>
import { ref } from 'vue'
import { NCard, NAvatar, NDivider, NSpace } from 'naive-ui'

const sections = ref([
  { id: 'about-me', title: 'About Me' },
  { id: 'news', title: 'News' },
  { id: 'publications', title: 'Publications' },
  { id: 'honors', title: 'Honors and Awards' },
  { id: 'services', title: 'Services' }
])

// 平滑滚动到指定部分
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="page-container">
    <div class="content-layout">
      <!-- 左侧信息卡片 -->
      <div class="info-card">
        <n-card>
          <n-space vertical>
            <div class="avatar-container">
              <n-avatar
                round
                size="large"
                src="https://img.moegirl.org.cn/common/thumb/c/c1/Yanami_Anna_icon.png/198px-Yanami_Anna_icon.png"
              />
            </div>
            <div class="basic-info">
              <h2>Kong Lingran</h2>
              <p>Sichuan University</p>
            </div>
            <div class="contact-info">
              <p>Email: 122790291klr@gmail.com</p>
              <p>Location: Chengdu, Chongqing, Hong Kong, China</p>
            </div>
          </n-space>
        </n-card>

        <!-- 导航菜单 -->
        <n-card class="nav-menu">
          <div class="nav-links">
            <a
              v-for="section in sections"
              :key="section.id"
              :href="'#' + section.id"
              @click.prevent="scrollToSection(section.id)"
            >
              {{ section.title }}
            </a>
          </div>
        </n-card>
      </div>

      <!-- 右侧主要内容 -->
      <div class="main-content">
        <n-card>
          <!-- About Me 部分 -->
          <section id="about-me" class="content-section">
            <h2>About Me</h2>
            <div class="section-content">
              <p>
                <strong>Kong Lingran (孔令然)</strong> is an undergraduate student at the College of Computer Science, Sichuan University. 
                He will complete his bachelor's degree in June 2025 and will pursue an MSc degree at The Chinese University of Hong Kong 
                starting from September 2025. His research interests mainly focus on <strong>Multi-view Clustering</strong>.
              </p>

              <h3>Research Interests</h3>
              <ul>
                <li>
                  <strong>Multi-view Clustering:</strong> Developing algorithms that can effectively integrate information from multiple views 
                  or perspectives of data, with a particular focus on incorporating Information Bottleneck theory into the clustering process.
                </li>
              </ul>
            </div>
          </section>

          <n-divider />

          <!-- News 部分 -->
          <section id="news" class="content-section">
            <h2>News</h2>
            <div class="section-content">
              <p>这里添加新闻内容</p>
            </div>
          </section>

          <n-divider />

          <!-- Publications 部分 -->
          <section id="publications" class="content-section">
            <h2>Publications</h2>
            <div class="section-content">
              <p>这里添加论文发表</p>
            </div>
          </section>

          <n-divider />

          <!-- Honors and Awards 部分 -->
          <section id="honors" class="content-section">
            <h2>Honors and Awards</h2>
            <div class="section-content">
              <p>这里添加荣誉奖项</p>
            </div>
          </section>

          <n-divider />

          <!-- Services 部分 -->
          <section id="services" class="content-section">
            <h2>Services</h2>
            <div class="section-content">
              <p>这里添加服务内容</p>
            </div>
          </section>
        </n-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background-color: var(--body-color);
}

.content-layout {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 24px;
}

.info-card {
  width: 300px;
  position: sticky;
  top: 20px;
  height: fit-content;
}

.avatar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.basic-info {
  text-align: center;
}

.basic-info h2 {
  margin: 0;
  font-size: 1.5em;
  color: var(--text-color-1);
}

.basic-info p {
  margin: 8px 0;
  color: var(--text-color-2);
}

.contact-info {
  margin-top: 16px;
}

.contact-info p {
  margin: 8px 0;
  color: var(--text-color-2);
  font-size: 0.9em;
}

.nav-menu {
  margin-top: 16px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-links a {
  padding: 8px 16px;
  color: var(--text-color-2);
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-links a:hover {
  background-color: var(--hover-color);
  color: var(--primary-color);
}

.main-content {
  flex: 1;
  min-width: 0;
}

.content-section {
  margin-bottom: 32px;
}

.content-section:last-child {
  margin-bottom: 0;
}

.content-section h2 {
  margin: 0 0 16px;
  font-size: 1.8em;
  color: var(--text-color-1);
}

.content-section h3 {
  margin: 24px 0 16px;
  font-size: 1.4em;
  color: var(--text-color-1);
}

.section-content {
  color: var(--text-color-2);
  line-height: 1.6;
}

.section-content p {
  margin: 0 0 16px;
}

.section-content ul {
  margin: 0;
  padding-left: 20px;
}

.section-content li {
  margin-bottom: 8px;
}

.section-content strong {
  color: var(--text-color-1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .content-layout {
    flex-direction: column;
  }

  .info-card {
    width: 100%;
    position: static;
  }

  .main-content {
    width: 100%;
  }
}
</style>
