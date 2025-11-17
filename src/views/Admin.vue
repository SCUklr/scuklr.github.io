<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'
import { NCard, NButton, NInput, NForm, NFormItem } from 'naive-ui'

const posts = ref([])
const form = ref({ title: '', description: '', content: '', tags: '' })
const loading = ref(false)
const editingId = ref(null)

const loadPosts = async () => {
  loading.value = true
  try {
    const res = await api.get('/posts')
    posts.value = res.data
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

const submitForm = async () => {
  const payload = {
    title: form.value.title,
    description: form.value.description,
    content: form.value.content,
    tags: form.value.tags ? form.value.tags.split(',').map(t => t.trim()) : []
  }
  try {
    if (editingId.value) {
      const res = await api.put(`/posts/${editingId.value}`, payload)
      // replace in posts
      posts.value = posts.value.map(p => (p.id === res.data.id ? res.data : p))
      editingId.value = null
    } else {
      const res = await api.post('/posts', payload)
      posts.value.unshift(res.data)
    }
    form.value = { title: '', description: '', content: '', tags: '' }
  } catch (e) {
    console.error(e)
    alert(editingId.value ? '更新失败，请查看控制台' : '创建失败，请查看控制台')
  }
}

const startEdit = (post) => {
  editingId.value = post.id
  form.value = {
    title: post.title || '',
    description: post.description || '',
    content: post.content || '',
    tags: Array.isArray(post.tags) ? post.tags.join(',') : (post.tags || '')
  }
}

const cancelEdit = () => {
  editingId.value = null
  form.value = { title: '', description: '', content: '', tags: '' }
}

const handleFileChange = async (e) => {
  const file = e.target.files && e.target.files[0]
  if (!file) return
  const fd = new FormData()
  fd.append('file', file)
  try {
    const res = await api.post('/uploads', fd, { headers: { 'Content-Type': 'multipart/form-data' } })
    const url = res.data.url
    // insert markdown image at the end of content
    form.value.content = (form.value.content || '') + `\n![](${url})\n`
  } catch (err) {
    console.error('upload failed', err)
    alert('图片上传失败')
  }
}

const deletePost = async (id) => {
  if (!confirm('确认删除这篇文章？')) return
  try {
    await api.delete(`/posts/${id}`)
    posts.value = posts.value.filter(p => p.id !== id)
  } catch (e) {
    console.error(e)
    alert('删除失败')
  }
}

onMounted(() => {
  loadPosts()
})
</script>

<template>
  <div class="admin-page" style="max-width:900px;margin:20px auto;padding:16px">
    <h2>后台管理（Admin）</h2>

    <section style="margin-bottom:24px">
      <h3>{{ editingId ? '编辑文章' : '创建文章' }}</h3>
      <div style="display:flex;flex-direction:column;gap:8px">
        <input v-model="form.title" placeholder="标题" />
        <input v-model="form.description" placeholder="描述" />
        <input v-model="form.tags" placeholder="标签（逗号分隔）" />
        <textarea v-model="form.content" rows="8" placeholder="正文（Markdown）"></textarea>
        <div>
          <button @click="submitForm">{{ editingId ? '保存更新' : '创建' }}</button>
          <button v-if="editingId" @click="cancelEdit" style="margin-left:8px">取消</button>
        </div>
      </div>
    </section>

    <section>
      <h3>文章列表</h3>
      <div v-if="loading">加载中...</div>
      <ul v-else>
        <li v-for="p in posts" :key="p.id" style="margin-bottom:12px">
          <strong>{{ p.title }}</strong> — <small>{{ p.created_at }}</small>
          <div style="margin-top:6px">
          <button @click="startEdit(p)">编辑</button>
          <button @click="deletePost(p.id)" style="margin-left:8px">删除</button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
