# Blog Fullstack Project

这是一个基于 Vue3 + FastAPI 的全栈博客项目，是对 [主站点](https://scuklr.github.io/) 的全栈重构版本。

## 项目说明

- 主站点 (Production): [https://scuklr.github.io/](https://scuklr.github.io/)
  - 静态博客站点
  - 基于 GitHub Pages 部署
  - 用于实际内容展示

- 开发版本 (Development): [https://scuklr.github.io/blog-fullstack/](https://scuklr.github.io/blog-fullstack/)
  - 全栈开发版本
  - 包含前后端完整功能
  - 用于功能测试和开发

## 技术栈

### 前端
- Vue 3
- Vite
- Vue Router
- Naive UI
- TypeScript

### 后端
- FastAPI
- SQLAlchemy
- SQLite
- Python 3.11

## 开发计划

1. [ ] 完成基础全栈功能
2. [ ] 实现文章管理系统
3. [ ] 添加评论功能
4. [ ] 优化性能和用户体验
5. [ ] 完善测试用例
6. [ ] 部署到生产环境

## 本地开发

```bash
# 前端开发
cd frontend
npm install
npm run dev

# 后端开发
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## 部署

- 前端通过 GitHub Pages 自动部署
- 后端计划部署到云服务器

## 贡献

欢迎提交 Issue 和 Pull Request！ 