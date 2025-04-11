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
                        <p><i class="fas fa-envelope"></i> Email: your.email@example.com</p>
                        <p><i class="fas fa-map-marker"></i> Location: Chengdu, China</p>
                    </div>
                    <div class="social-links">
                        <a href="https://github.com/yourusername" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                        <!-- 添加其他社交媒体链接 -->
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
                    <p>这里添加您的个人介绍</p>
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
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.sidebar {
    position: sticky;
    top: 80px;
    height: fit-content;
}

.profile-card {
    margin-bottom: 20px;
}

.profile-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
}

.contact-info {
    width: 100%;
    text-align: left;
    margin-top: 10px;
}

.contact-info p {
    margin: 5px 0;
    font-size: 14px;
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
    margin-bottom: 20px;
}

.nav-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.nav-links a {
    color: #333;
    text-decoration: none;
    padding: 8px;
    border-radius: 4px;
    transition: all 0.3s;
}

.nav-links a:hover {
    background-color: #f5f5f5;
    color: var(--primary-color);
}

.main-content {
    min-height: 100vh;
}

section {
    margin-bottom: 40px;
}

section h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .research-container {
        grid-template-columns: 1fr;
    }

    .sidebar {
        position: static;
        margin-bottom: 20px;
    }
}
</style>
