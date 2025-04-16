const fs = require('fs')
const path = require('path')

// 获取当前日期
const now = new Date()
const year = now.getFullYear()
const month = String(now.getMonth() + 1).padStart(2, '0')
const day = String(now.getDate()).padStart(2, '0')

// 获取文章标题（从命令行参数）
const title = process.argv[2] || 'untitled'

// 创建文章内容模板
const content = `---
title: ${title}
date: ${year}-${month}-${day}
tags: []
description: 文章描述
---

# ${title}

在这里开始写你的文章内容...

## 引言

## 正文

## 总结
`

// 确保目录存在
const postsDir = path.join(__dirname, '../src/posts', year.toString(), month)
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true })
}

// 生成文件名
const fileName = `${day}-${title.toLowerCase().replace(/\s+/g, '-')}.md`
const filePath = path.join(postsDir, fileName)

// 写入文件
fs.writeFileSync(filePath, content, 'utf8')

console.log(`文章已创建：${filePath}`) 