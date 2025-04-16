import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // 修改为根路径，因为是部署在根域名
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
      usePolling: true,
      interval: 100
    },
    cors: true,
    headers: {
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    },
    hmr: {
      overlay: true,
      clientPort: 5173,
      host: 'localhost',
      protocol: 'ws'
    }
  },
  optimizeDeps: {
    force: true,
    include: ['vue', 'vue-router', 'naive-ui']
  }
})
