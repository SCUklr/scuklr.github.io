<script setup>
import { NCard, NAvatar, NSpace, NButton } from 'naive-ui'
import { 
  LogoGithub,
  LogoWechat,
  MailOutline
} from '@vicons/ionicons5'
</script>

<template>
  <div class="social-container">
    <div class="main-content">
      <n-card title="友情链接">
        <div class="friends-content">
          <div class="friend-links">
            <a href="https://yangy.co/" target="_blank" class="friend-item">
              <img src="https://img.moegirl.org.cn/common/thumb/b/b1/Yanami_Anna_icon2.jpg/420px-Yanami_Anna_icon2.jpg" alt="Jackie's Blog" />
              <div class="friend-info">
                <h3>yangyang</h3>
                <p>一个充满活力的技术博主</p>
              </div>
            </a>
            <a href="https://shizuka.icu/dashboard" target="_blank" class="friend-item">
              <img src="https://img.moegirl.org.cn/common/thumb/b/b1/Yanami_Anna_icon2.jpg/420px-Yanami_Anna_icon2.jpg" alt="Peerless" />
              <div class="friend-info">
                <h3>shizuka.icu</h3>
                <!-- <p>分享技术与生活的点滴</p> -->
              </div>
            </a>
            <a href="https://blog.shiinafan.top/blog/" target="_blank" class="friend-item">
              <img src="https://blog.shiinafan.top/avatar/avatar2.jpg" alt="Shiina's Blog" />
              <div class="friend-info">
                <h3>Shiina's Blog</h3>
                <p>记录编程学习的心得体会</p>
              </div>
            </a>
          </div>
        </div>
      </n-card>
    </div>

    <div class="sidebar">
      <!-- 保持与其他页面相同的侧边栏结构 -->
    </div>
  </div>
</template>

<style scoped>
.social-container {
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

.friends-content {
  padding: 20px 0;
}

.friend-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.friend-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.02);
  text-decoration: none;
  transition: all 0.3s ease;
}

.friend-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.04);
}

.friend-item img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.friend-info {
  flex: 1;
}

.friend-info h3 {
  margin: 0 0 4px 0;
  color: #333;
  font-size: 16px;
}

.friend-info p {
  margin: 0;
  color: #666;
  font-size: 14px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style> 