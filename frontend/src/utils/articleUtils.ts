import axios from 'axios';
import { Article } from '../types/article';

const USE_API = import.meta.env.VITE_USE_API === 'true';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchArticles(): Promise<Article[]> {
  try {
    if (USE_API) {
      const response = await axios.get(`${API_BASE_URL}/articles`);
      return response.data;
    } else {
      // TODO: 从 Markdown 文件获取文章列表
      return [];
    }
  } catch (error) {
    console.error('获取文章列表失败:', error);
    return [];
  }
}

export async function fetchArticleById(id: string): Promise<Article | null> {
  try {
    if (USE_API) {
      const response = await axios.get(`${API_BASE_URL}/articles/${id}`);
      return response.data;
    } else {
      // TODO: 从 Markdown 文件获取特定文章
      return null;
    }
  } catch (error) {
    console.error(`获取文章 ${id} 失败:`, error);
    return null;
  }
} 