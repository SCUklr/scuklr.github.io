from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class ArticleBase(BaseModel):
    title: str
    content: str
    date: str
    description: str
    tags: str
    category: str

class ArticleCreate(ArticleBase):
    pass

class ArticleUpdate(ArticleBase):
    title: Optional[str] = None
    content: Optional[str] = None
    date: Optional[str] = None
    description: Optional[str] = None
    tags: Optional[str] = None
    category: Optional[str] = None

class Article(ArticleBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True 