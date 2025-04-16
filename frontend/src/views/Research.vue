<script setup>
import { NCard, NAvatar, NDivider } from 'naive-ui'

// 平滑滚动到指定部分
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
    <div class="research-container">
        <!-- 左侧固定导航 -->
        <div class="sidebar">
            <!-- 个人信息卡片 -->
            <n-card class="profile-card">
                <div class="profile-content">
                  <n-avatar
                    round
                    size="large"
                    src="https://img.moegirl.org.cn/common/thumb/c/c1/Yanami_Anna_icon.png/198px-Yanami_Anna_icon.png"
                  />
                  <h2>Kong Lingran</h2>
                  <p>Sichuan University</p>
                  <div class="contact-info">
                        <p><i class="fas fa-envelope"></i> Email: 122790291klr@gmail.com</p>
                        <p><i class="fas fa-map-marker"></i> Location: Chengdu, Chongqing, Hong Kong, China</p>
                  </div>
                    <div class="social-links">
                        <a href="https://github.com/yourusername" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </n-card>

            <!-- 导航菜单 -->
            <n-card class="nav-menu">
              <div class="nav-links">
                    <a href="#about-me" @click.prevent="scrollToSection('about-me')">About Me</a>
                    <a href="#news" @click.prevent="scrollToSection('news')">News</a>
                    <a href="#publications" @click.prevent="scrollToSection('publications')">Publications</a>
                    <a href="#honors" @click.prevent="scrollToSection('honors')">Honors and Awards</a>
                    <a href="#services" @click.prevent="scrollToSection('services')">Services</a>
              </div>
            </n-card>
        </div>

        <!-- 右侧内容区 -->
        <div class="main-content">
          <n-card>
            <!-- About Me 部分 -->
                <section id="about-me">
              <h2>About Me</h2>
                    <div class="research-interests">
                        <p><strong>Kong Lingran (孔令然)</strong> is an undergraduate student at the College of Computer Science, Sichuan University. He will complete his bachelor's degree in June 2025 and will pursue an MSc degree at The Chinese University of Hong Kong starting from September 2025. His research interests mainly focus on <strong>Multi-view Clustering</strong>.</p>

                <h3>Research Interests</h3>
                <ul>
                            <li><strong>Multi-view Clustering</strong>: Developing algorithms that can effectively integrate information from multiple views or perspectives of data, with a particular focus on incorporating Information Bottleneck theory into the clustering process.</li>
                </ul>
              </div>
            </section>

            <n-divider />

            <!-- News 部分 -->
                <section id="news">
              <h2>News</h2>
                <p>这里添加新闻内容</p>
            </section>

            <n-divider />

            <!-- Publications 部分 -->
                <section id="publications">
              <h2>Publications</h2>
                <p>这里添加论文发表</p>
            </section>

            <n-divider />

            <!-- Honors and Awards 部分 -->
                <section id="honors">
              <h2>Honors and Awards</h2>
                <p>这里添加荣誉奖项</p>
            </section>

            <n-divider />

            <!-- Services 部分 -->
                <section id="services">
              <h2>Services</h2>
                <p>这里添加服务内容</p>
            </section>
          </n-card>
        </div>
    </div>
</template>

<style scoped>
.research-container {
    display: flex;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.sidebar {
    flex: 0 0 300px;
    position: sticky;
    top: 20px;
    height: fit-content;
    background: white;
    border-radius: 8px;
    padding: 20px;
}

.profile-card {
    margin-bottom: 20px;
    background: transparent !important;
    box-shadow: none !important;
}

.profile-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
}

.contact-info {
    width: 100%;
    text-align: left;
    margin-top: 15px;
}

.contact-info p {
    margin: 8px 0;
    font-size: 14px;
    color: #666;
}

.social-links {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.social-links a {
    color: #666;
    font-size: 20px;
    transition: color 0.3s;
}

.social-links a:hover {
    color: var(--primary-color);
}

.nav-menu {
    margin-top: 30px;
    background: transparent !important;
    box-shadow: none !important;
}

.nav-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.nav-links a {
    color: #333;
    text-decoration: none;
    padding: 10px;
    border-radius: 6px;
    transition: all 0.3s;
    font-size: 16px;
}

.nav-links a:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: var(--primary-color);
}

.main-content {
    flex: 1;
    background: white;
    border-radius: 8px;
    padding: 30px;
}

section {
    margin-bottom: 40px;
}

section h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
    font-weight: 600;
}

.research-interests {
    line-height: 1.6;
}

.research-interests h3 {
    font-size: 22px;
    color: #2c3e50;
    margin: 20px 0 15px;
    font-weight: 500;
}

.research-interests p {
    font-size: 16px;
    color: #333;
    margin-bottom: 15px;
}

.research-interests ul {
    padding-left: 20px;
}

.research-interests li {
    margin-bottom: 10px;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .research-container {
        flex-direction: column;
    }

    .sidebar {
        position: static;
        width: 100%;
    }
}
</style>
