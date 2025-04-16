import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/blog-fullstack/',  // 修改为仓库名，因为是部署在GitHub Pages上
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          'styles': ['src/style.css'],
          'vendor': ['vue', 'vue-router', 'naive-ui']
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,  // 使用轮询监听文件变化
      interval: 100  // 轮询间隔
    },
    cors: true,  // 启用 CORS
    headers: {
      'Cache-Control': 'public, max-age=31536000',
      'Access-Control-Allow-Origin': '*'
    },
    hmr: {
      overlay: true,  // 显示错误提示
      clientPort: 5173,
      host: 'localhost',
      protocol: 'ws'
    }
  }
})
