<script setup>
import { ref, computed, onMounted, defineAsyncComponent } from "vue";
import { NCard, NTag } from "naive-ui";
import { useRouter } from "vue-router";
import KanaAnna from "../assets/Kana_Anna.jpg"; // 添加图片导入
import frontMatter from "front-matter";

// 使用异步组件延迟加载非关键内容
const PinnedArticles = defineAsyncComponent(() =>
  import("../components/PinnedArticles.vue")
);

const router = useRouter();
const recentArticles = ref([]);

const bgColors = [
  "rgba(255, 182, 193, 0.7)", // 粉色
  "rgba(173, 216, 230, 0.7)", // 浅蓝
  "rgba(144, 238, 144, 0.7)", // 浅绿
  "rgba(255, 218, 185, 0.7)", // 桃色
  "rgba(221, 160, 221, 0.7)", // 梅红
  "rgba(176, 196, 222, 0.7)", // 钢蓝
  "rgba(255, 255, 224, 0.7)", // 浅黄
  "rgba(230, 230, 250, 0.7)", // 薰衣草
];

const projects = ref([
  {
    title: "Web Development",
    description:
      "🎨 JavaSE | Spring Boot | MySQL | Redis | Kafka | Maven | Vue3 ",
    color: "rgba(0, 0, 0, 0.2)",
    backgroundImage: `url(${KanaAnna})`,
    titleColor: "#ffffff",
    descriptionColor: "#ffffff",
    fontFamily: "'Noto Sans SC', 'Source Code Pro', sans-serif",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
    cardContentStyle: {
      padding: "15px",
    },
  },
  {
    title: "Test Development",
    description: "🔧  Selenium / PlayWright / Cypress / Postman / Pytest",
    color: "rgba(0, 0, 0, 0.2)",
    backgroundImage:
      "url(https://images.dmzj.com/resource/news/2023/08/16/1692180208566984.png)",
    titleColor: "#ffffff",
    descriptionColor: "#ffffff",
    fontFamily: "'Noto Sans SC', sans-serif",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
    cardContentStyle: {
      padding: "15px",
    },
  },
  {
    title: "⚽ Manchester City",
    description: "Pride in Battle",
    color: bgColors[Math.floor(Math.random() * bgColors.length)],
    hoverImage: "url(https://mancity-oss.glossa-ai.com/wxxcc/wesite/logo.svg)",
    titleColor: "#6CADDF",
    descriptionColor: "#ffffff",
    fontFamily: "'Roboto', sans-serif",
  },
  {
    title: "🎵 Music & Game",
    description: "万青 · 花儿乐队 · 崔健 | 消逝的光芒2 · FM2024",
    color: "rgba(0, 0, 0, 0.2)",
    backgroundImage:
      "url(https://theglorioblog.com/wp-content/uploads/2024/04/vlcsnap-2024-04-14-15h59m11s763.png?w=1397)",
    titleColor: "#ffffff",
    descriptionColor: "#ffffff",
    fontFamily: "'Noto Sans SC', 'Source Code Pro', sans-serif",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
    cardContentStyle: {
      padding: "15px",
    },
  },
]);

// 获取最近文章
const loadRecentArticles = async () => {
  try {
    const markdownFiles = import.meta.glob("../posts/**/*.md", { as: "raw" });
    const articles = [];

    for (const path in markdownFiles) {
      if (path.endsWith("README.md")) continue;

      const content = await markdownFiles[path]();
      const { attributes } = frontMatter(content);
      const pathParts = path.split("/");
      const fileName = pathParts[pathParts.length - 1];
      const id = fileName.replace(".md", "");

      if (attributes.title && attributes.date) {
        articles.push({
          id,
          title: attributes.title,
          date: attributes.date,
        });
      }
    }

    // 按日期排序并获取最新的5篇
    recentArticles.value = articles
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
  } catch (error) {
    console.error("Failed to load recent articles:", error);
  }
};

// 处理文章点击
const handleArticleClick = (article) => {
  router.push(`/article/${article.id}`);
};

const handleMouseOver = (e, project) => {
  if (project.hoverImage) {
    e.currentTarget.style.setProperty("--hover-image", project.hoverImage);
  }
};

const handleMouseOut = (e) => {
  e.currentTarget.style.setProperty("--hover-image", "none");
};

// 预加载图片列表
const criticalImages = [
  "https://img.moegirl.org.cn/common/thumb/e/e9/Yanami_Anna.jpg/560px-Yanami_Anna.jpg",
  KanaAnna,
];

const socialIcons = [
  "../assets/github-fill.svg",
  "../assets/bilibili-fill.svg",
  "../assets/QQ.svg",
];

// 优化资源预加载
const preloadResources = () => {
  // 预加载关键图片
  criticalImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  // 预加载社交图标
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => {
      socialIcons.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }

  // 预加载关键样式
  const linkElement = document.createElement("link");
  linkElement.rel = "preload";
  linkElement.as = "style";
  linkElement.href = "/assets/index-C7w07H3h.css";
  document.head.appendChild(linkElement);
};

// 优化图片错误处理
const handleImageError = (event) => {
  console.warn("Image failed to load:", event.target.src);
  event.target.style.opacity = "0.5"; // 显示加载失败的视觉反馈
};

onMounted(() => {
  preloadResources();
  loadRecentArticles();
});
</script>

<template>
  <div class="page-container">
    <div class="home-container">
      <div class="main-content">
        <div class="projects-grid">
          <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="project-card"
            :class="{ odd: index % 2 === 0, even: index % 2 === 1 }"
            :style="{
              background: project.color,
              backgroundImage: project.backgroundImage,
              fontFamily: project.fontFamily,
              height: '250px',
            }"
            @click="project.link ? window.open(project.link, '_blank') : null"
            @mouseover="(e) => handleMouseOver(e, project)"
            @mouseout="(e) => handleMouseOut(e, project)"
          >
            <div class="card-content" :style="project.cardContentStyle">
              <h3
                :style="{
                  color: project.titleColor || '#333',
                  textShadow: project.textShadow,
                }"
              >
                {{ project.title }}
              </h3>
              <p
                class="description"
                :style="{
                  color: project.descriptionColor || '#666',
                  textShadow: project.textShadow,
                }"
              >
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- 使用异步组件延迟加载精选文章部分 -->
        <Suspense>
          <PinnedArticles />
          <template #fallback>
            <div class="loading" role="status" aria-live="polite">
              <n-spin size="medium" />
              <span>正在加载文章...</span>
            </div>
          </template>
        </Suspense>
      </div>

      <div class="sidebar-container">
        <n-card class="profile-card">
          <div
            class="title"
            style="
              text-align: center;
              font-family: 'Noto Sans JP', sans-serif;
              background: linear-gradient(to right, #00f, #0ff);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            "
          >
            Ziqiu's Blog
          </div>
          <div class="about-content">
            <img
              src="/images/YanamiAnna.jpg"
              alt="八奈见杏菜个人头像"
              width="250"
              height="250"
              fetchpriority="high"
              loading="eager"
              decoding="async"
              class="profile-image"
              referrerpolicy="no-referrer"
              @error="handleImageError"
            />
            <div class="skills">
              <p>西郊有密林，祝君出重围</p>
            </div>
            <div class="favorites">
              <p>
                我永远喜欢
                <a
                  href="https://mzh.moegirl.org.cn/%E6%9C%89%E9%A9%AC%E5%8A%A0%E5%A5%88#google_vignette"
                  target="_blank"
                  >有马加奈(Arima Kana)</a
                >
                和
                <a
                  href="https://mzh.moegirl.org.cn/%E5%85%AB%E5%A5%88%E8%A7%81%E6%9D%8F%E8%8F%9C"
                  target="_blank"
                  >八奈见杏菜(Yanami Anna)</a
                >
              </p>
            </div>
            <div class="social-icons">
              <a href="https://github.com/SCUklr" target="_blank">
                <img
                  src="../assets/github-fill.svg"
                  alt="GitHub"
                  class="social-icon"
                />
              </a>
              <a
                href="https://space.bilibili.com/123352664?spm_id_from=333.1007.0.0"
                target="_blank"
              >
                <img
                  src="../assets/bilibili-fill.svg"
                  alt="Bilibili"
                  class="social-icon"
                />
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
  content: "";
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
  display: flex;
  flex-direction: column;
  gap: 0;
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
  top: 100px;
}

.profile-card {
  border-radius: 16px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  background-color: #f9f9f9 !important;
  overflow: hidden;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.profile-image {
  width: 100%;
  max-width: 150px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.skills {
  text-align: center;
  margin: 15px 0;
}

.skills p {
  color: #666;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

.favorites {
  text-align: center;
  margin: 15px 0;
}

.favorites p {
  color: #666;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

.favorites a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s;
}

.favorites a:hover {
  color: var(--primary-color-hover);
  text-decoration: underline;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
}

.social-icon {
  width: 24px;
  height: 24px;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.social-icon:hover {
  opacity: 1;
  transform: scale(1.1);
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
  content: "";
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

.reading-progress {
  aria-label: "阅读进度";
}

/* 添加关键样式 */
:root {
  --text-color-1: #333;
  --text-color-3: #666;
  --primary-color: #0a5a30; /* 更深的绿色，提高对比度 */
  --primary-color-hover: #036b28;
  --tag-bg-color: rgba(10, 90, 48, 0.16); /* 更深的背景色 */
}

/* 添加加载状态样式 */
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px 0;
}

/* 添加键盘导航支持 */
.article-card:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.article-card[role="article"] {
  position: relative;
}

/* 添加高对比度标签样式 */
:deep(.n-tag) {
  --n-color: var(--tag-bg-color) !important;
  --n-text-color: var(--primary-color) !important;
  font-weight: 500;
}

/* 删除近期文章卡片样式 */
.recent-posts-card,
.recent-post-item,
.post-title,
.post-date {
  display: none;
}
</style>
