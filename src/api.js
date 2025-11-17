import axios from 'axios'

// 根据环境切换 API 地址
// 本地开发：http://localhost:8000/api
// 生产环境：使用 VITE_API_BASE 环境变量或默认值
const baseURL = import.meta.env.VITE_API_BASE || (
  import.meta.env.DEV
    ? 'http://localhost:8000/api'
    : 'https://blog-api.onrender.com/api'  // 替换为你的 Render API URL
)

const api = axios.create({
  baseURL: baseURL
})

export default api
