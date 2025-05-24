<script setup>
import { ref } from "vue";
import { NCard, NAvatar, NDivider, NSpace } from "naive-ui";

const sections = ref([
  { id: "about-me", title: "About Me" },
  { id: "news", title: "News" },
  { id: "publications", title: "Publications" },
  { id: "honors", title: "Honors and Awards" },
  { id: "services", title: "Services" },
]);

// 平滑滚动到指定部分
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
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
              <h2>XXX</h2>
              <p>Sichuan University</p>
            </div>
            <div class="contact-info">
              <p>Email: XXX</p>
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
                <strong>XXX</strong> is an undergraduate
                student at the College of Computer Science(Software Engineering), Sichuan University.
                He will complete his bachelor's degree in June 2025 and will
                pursue an MSc degree at The Chinese University of Hong Kong
                starting from September 2025. His research interests mainly
                focus on <strong>Multi-view Clustering</strong>.
              </p>

              <h3>Research Interests</h3>
              <ul>
                <li>
                  <strong>Multi-view Clustering:</strong> Developing algorithms
                  that can effectively integrate information from multiple views
                  or perspectives of data, with a particular focus on
                  incorporating Information Bottleneck theory into the
                  clustering process.
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
              <p>这里添加出版物内容</p>
            </div>
          </section>

          <n-divider />

          <!-- Honors and Awards 部分 -->
          <section id="honors" class="content-section">
            <h2>Honors and Awards</h2>
            <div class="section-content">
              <p>这里添加荣誉和奖项内容</p>
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
  min-height: calc(100vh - 144px);
  display: flex;
  justify-content: center;
  padding: 20px;
}

.content-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
}

.info-card {
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
  margin-bottom: 16px;
}

.basic-info h2 {
  margin: 0;
  color: #333;
}

.basic-info p {
  margin: 4px 0;
  color: #666;
}

.contact-info {
  text-align: center;
}

.contact-info p {
  margin: 4px 0;
  color: #666;
}

.nav-menu {
  margin-top: 20px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-links a:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.main-content {
  background: #fff;
}

.content-section {
  margin-bottom: 32px;
}

.content-section h2 {
  color: #333;
  margin-bottom: 16px;
}

.section-content {
  color: #666;
  line-height: 1.6;
}

.section-content h3 {
  color: #333;
  margin: 16px 0 8px;
}

.section-content ul {
  margin: 8px 0;
  padding-left: 20px;
}

.section-content li {
  margin-bottom: 8px;
}

@media screen and (max-width: 768px) {
  .content-layout {
    grid-template-columns: 1fr;
  }

  .info-card {
    position: static;
  }
}
</style>
