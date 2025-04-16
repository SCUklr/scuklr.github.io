export interface Article {
  id: number;
  title: string;
  content: string;
  date: string;
  description: string;
  tags: string;
  category: string;
  created_at: string;
  updated_at: string;
}

// 用于创建新文章的接口
export interface CreateArticleDto {
  title: string;
  content: string;
  date: string;
  description: string;
  tags: string;
  category: string;
} 