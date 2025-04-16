from app.utils.migrate import migrate_markdown_to_db
from app.database import init_db
import os

if __name__ == "__main__":
    # 初始化数据库
    init_db()
    
    # 获取前端 posts 目录的绝对路径
    current_dir = os.path.dirname(os.path.abspath(__file__))
    markdown_dir = os.path.join(current_dir, "..", "frontend", "src", "posts")
    
    print(f"开始迁移文章，源目录: {markdown_dir}")
    migrate_markdown_to_db(markdown_dir) 