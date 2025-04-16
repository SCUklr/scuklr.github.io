import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceDir = path.join(__dirname, '../src/posts')
const targetDir = path.join(__dirname, '../docs/posts')

// 确保目标目录存在
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
}

// 递归复制文件
function copyFiles(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true })
  }

  const files = fs.readdirSync(source)
  
  files.forEach(file => {
    const sourcePath = path.join(source, file)
    const targetPath = path.join(target, file)
    
    const stat = fs.statSync(sourcePath)
    
    if (stat.isDirectory()) {
      copyFiles(sourcePath, targetPath)
    } else if (file.endsWith('.md')) {
      // 读取原文件内容
      let content = fs.readFileSync(sourcePath, 'utf-8')
      
      // 添加 VuePress frontmatter
      if (!content.startsWith('---')) {
        const title = path.basename(file, '.md')
        content = `---\ntitle: ${title}\ndate: ${new Date().toISOString().split('T')[0]}\n---\n\n${content}`
      }
      
      // 写入新文件
      fs.writeFileSync(targetPath, content)
      console.log(`Migrated: ${file}`)
    }
  })
}

// 开始迁移
copyFiles(sourceDir, targetDir)
console.log('Migration completed!') 