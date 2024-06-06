import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/完整DM',
    name: '完整DM',
    component: () => import('../views/AView.vue')
  },
  {
    path: '/檔期活動',
    name: '檔期活動',
    component: () => import('../views/BView.vue')
  },
  {
    path: '/買一送一專區',
    name: '買一送一專區',
    component: () => import('../views/CView.vue')
  },
  {
    path: '/111元起專區',
    name: '111元起專區',
    component: () => import('../views/DView.vue')
  },
  {
    path: '/時髦獨具',
    name: '時髦獨具',
    component: () => import('../views/EView.vue')
  },
  {
    path: '/歡享佳餚',
    name: '歡享佳餚',
    component: () => import('../views/FView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
