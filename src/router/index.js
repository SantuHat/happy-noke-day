import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/a',
    name: 'About',
    component: () => import('../views/AView.vue')
  },
  {
    path: '/b',
    name: 'b',
    component: () => import('../views/BView.vue')
  },
  {
    path: '/c',
    name: 'c',
    component: () => import('../views/CView.vue')
  },
  {
    path: '/d',
    name: 'd',
    component: () => import('../views/DView.vue')
  },
  {
    path: '/e',
    name: 'e',
    component: () => import('../views/EView.vue')
  },
  {
    path: '/f',
    name: 'f',
    component: () => import('../views/FView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
