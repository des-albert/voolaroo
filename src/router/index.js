import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import Resume from '@/views/Resume.vue'
import About from '@/views/About.vue'

import Javelin from '@/views/Javelin.vue'
import Tokens from '@/views/Tokens.vue'
import Soap from '@/views/Soap.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/javelin',
    name: 'Javelin',
    component: Javelin
  },
  {
    path: '/tokens',
    name: 'Tokens',
    component: Tokens
  },
  {
    path: '/soap',
    name: 'Soap',
    component: Soap
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes

})

export default router
