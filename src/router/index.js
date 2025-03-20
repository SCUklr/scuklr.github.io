import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Articles from '../views/Articles.vue'
import Article from '../views/Article.vue'
import About from '../views/About.vue'
import Social from '../views/Social.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/social',
    name: 'Social',
    component: Social
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory('/blog-frontend/'),
  routes
})

export default router 