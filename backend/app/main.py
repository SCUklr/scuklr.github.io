from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
from dotenv import load_dotenv
import os
from . import models, schemas, database
from .services.github_service import GitHubService

# 加载环境变量
load_dotenv()

# 创建数据库表
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

# 初始化 GitHub 服务
try:
    github_service = GitHubService()
except Exception as e:
    print(f"初始化 GitHub 服务失败: {str(e)}")
    github_service = None

# 配置 CORS
origins = os.getenv('CORS_ORIGINS', '').split(',')
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API 路由

# 获取文章列表
@app.get("/articles/", response_model=List[schemas.Article])
def get_articles(
    skip: int = 0,
    limit: int = 10,
    db: Session = Depends(database.get_db)
):
    articles = db.query(models.Article).offset(skip).limit(limit).all()
    return articles

# 获取单篇文章
@app.get("/articles/{article_id}", response_model=schemas.Article)
def get_article(article_id: int, db: Session = Depends(database.get_db)):
    article = db.query(models.Article).filter(models.Article.id == article_id).first()
    if article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    return article

# 创建文章
@app.post("/articles/", response_model=schemas.Article)
async def create_article(article: schemas.ArticleCreate, db: Session = Depends(database.get_db)):
    # 创建数据库记录
    db_article = models.Article(**article.model_dump())
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    
    # 同步到 GitHub
    await github_service.sync_article(db_article)
    
    return db_article

# 更新文章
@app.put("/articles/{article_id}", response_model=schemas.Article)
async def update_article(
    article_id: int,
    article: schemas.ArticleUpdate,
    db: Session = Depends(database.get_db)
):
    db_article = db.query(models.Article).filter(models.Article.id == article_id).first()
    if not db_article:
        raise HTTPException(status_code=404, detail="Article not found")
    
    # 更新数据库记录
    for key, value in article.model_dump(exclude_unset=True).items():
        setattr(db_article, key, value)
    db.commit()
    
    # 同步到 GitHub
    await github_service.sync_article(db_article)
    
    return db_article

# 删除文章
@app.delete("/articles/{article_id}")
def delete_article(article_id: int, db: Session = Depends(database.get_db)):
    db_article = db.query(models.Article).filter(models.Article.id == article_id).first()
    if db_article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    
    db.delete(db_article)
    db.commit()
    return {"message": "Article deleted successfully"} 