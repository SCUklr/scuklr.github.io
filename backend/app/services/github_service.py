import os
import base64
from github import Github
from datetime import datetime
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

class GitHubService:
    def __init__(self):
        github_token = os.getenv('GITHUB_TOKEN')
        github_repo = os.getenv('GITHUB_REPO')
        
        if not github_token or not github_repo:
            raise ValueError("GITHUB_TOKEN 和 GITHUB_REPO 环境变量必须设置")
            
        self.github = Github(github_token)
        self.repo = self.github.get_repo(github_repo)
        self.branch = 'main'  # 或者其他分支名

    async def sync_article(self, article):
        """
        将文章同步到 GitHub 仓库
        """
        try:
            # 生成 Markdown 内容
            content = self._generate_markdown(article)
            
            # 生成文件路径
            file_path = self._generate_file_path(article)
            
            try:
                # 检查文件是否存在
                file = self.repo.get_contents(file_path, ref=self.branch)
                # 更新文件
                self.repo.update_file(
                    file_path,
                    f"Update article: {article.title}",
                    content,
                    file.sha,
                    branch=self.branch
                )
            except Exception:
                # 文件不存在，创建新文件
                self.repo.create_file(
                    file_path,
                    f"Create article: {article.title}",
                    content,
                    branch=self.branch
                )
            
            return True
        except Exception as e:
            print(f"同步文章到 GitHub 失败: {str(e)}")
            return False

    def _generate_markdown(self, article):
        """
        生成 Markdown 格式的文章内容
        """
        frontmatter = f"""---
title: {article.title}
date: {article.date}
tags: {article.tags}
description: {article.description}
---

{article.content}"""
        return frontmatter

    def _generate_file_path(self, article):
        """
        生成文章的文件路径
        """
        date = datetime.strptime(article.date, "%Y-%m-%d")
        year = date.strftime("%Y")
        month = date.strftime("%m")
        
        # 文件名使用文章标题的 URL 友好版本
        filename = article.title.lower().replace(' ', '-')
        
        return f"frontend/src/posts/{year}/{month}/{filename}.md" 