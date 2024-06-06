import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/whole-dm',
    name: 'whole-dm',
    component: () => import('../views/AView.vue')
  },
  {
    path: '/schedule-activities',
    name: 'schedule-activities',
    component: () => import('../views/BView.vue')
  },
  {
    path: '/buy-one-get-one',
    name: 'buy-one-get-one',
    component: () => import('../views/CView.vue')
  },
  {
    path: '/111',
    name: '111',
    component: () => import('../views/DView.vue')
  },
  {
    path: '/stylish-unique',
    name: 'stylish-unique',
    component: () => import('../views/EView.vue')
  },
  {
    path: '/enjoy-delicious-food',
    name: 'enjoy-delicious-food',
    component: () => import('../views/FView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
