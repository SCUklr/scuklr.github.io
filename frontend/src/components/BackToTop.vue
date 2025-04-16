<template>
  <button 
    class="back-to-top" 
    @click="scrollToTop"
    :class="{ 'show': isVisible }"
  >
    <span class="arrow">↑</span>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 100
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 40px;
  right: 30px;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 123, 255, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.back-to-top.show {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  background-color: rgba(0, 123, 255, 1);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.arrow {
  font-size: 20px;
  font-weight: bold;
}
</style> 