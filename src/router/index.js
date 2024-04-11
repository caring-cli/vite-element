/*
 * @Author: Wanko
 * @Date: 2024-04-11 09:48:05
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-11 10:07:56
 * @Description:
 */
import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    }
  ]
})

export default router
