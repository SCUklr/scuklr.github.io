import axios from 'axios'

// 创建 axios 实例
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 文章相关的 API
export const articleApi = {
  // 获取文章列表
  getArticles: async (page = 1, limit = 10) => {
    const response = await api.get(`/posts?skip=${(page - 1) * limit}&limit=${limit}`)
    return response.data
  },

  // 获取单篇文章
  getArticle: async (id) => {
    const response = await api.get(`/posts/${id}`)
    return response.data
  },

  // 创建文章
  createArticle: async (articleData) => {
    const response = await api.post('/posts', articleData)
    return response.data
  },

  // 更新文章
  updateArticle: async (id, articleData) => {
    const response = await api.put(`/posts/${id}`, articleData)
    return response.data
  },

  // 删除文章
  deleteArticle: async (id) => {
    const response = await api.delete(`/posts/${id}`)
    return response.data
  }
}

// 可以添加其他 API 服务，比如用户认证等
export const authApi = {
  // 这里可以添加登录、注册等认证相关的 API
}

export default api 