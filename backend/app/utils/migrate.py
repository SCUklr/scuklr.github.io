import os
import frontmatter
from datetime import datetime
from sqlalchemy.orm import Session
from ..models import Article
from ..database import SessionLocal

def migrate_markdown_to_db(markdown_dir: str):
    """
    将 Markdown 文件迁移到数据库
    :param markdown_dir: Markdown 文件目录
    """
    db = SessionLocal()
    try:
        for root, _, files in os.walk(markdown_dir):
            for file in files:
                if file.endswith('.md') and file != 'README.md':
                    file_path = os.path.join(root, file)
                    
                    # 读取并解析 Markdown 文件
                    with open(file_path, 'r', encoding='utf-8') as f:
                        post = frontmatter.load(f)
                    
                    # 从文件路径生成文章 ID
                    relative_path = os.path.relpath(file_path, markdown_dir)
                    article_id = os.path.splitext(relative_path)[0].replace('\\', '/').replace('/', '-')
                    
                    # 检查文章是否已存在
                    existing_article = db.query(Article).filter(
                        Article.title == post.metadata.get('title')
                    ).first()
                    
                    if not existing_article:
                        # 创建新文章
                        article = Article(
                            title=post.metadata.get('title', '未命名'),
                            content=post.content,
                            date=post.metadata.get('date', datetime.now().strftime('%Y-%m-%d')),
                            description=post.metadata.get('description', ''),
                            tags=','.join(post.metadata.get('tags', [])),
                            category=post.metadata.get('category', '')
                        )
                        db.add(article)
                        print(f"添加文章: {article.title}")
                    else:
                        print(f"文章已存在: {existing_article.title}")
        
        db.commit()
        print("迁移完成")
    
    except Exception as e:
        print(f"迁移过程中出错: {str(e)}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    # 设置 Markdown 文件目录路径
    markdown_dir = "../../frontend/src/posts"
    migrate_markdown_to_db(markdown_dir) 