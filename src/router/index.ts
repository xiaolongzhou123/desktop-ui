import { createRouter, createWebHistory, type RouteLocationNamedRaw, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import type { Menu, Nav } from '@/typeing'
import { useMenu } from '@/stores'
import { useLogin } from '@/stores'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/user/index',
      children: [
        {
          path: '/flow/all',
          name: 'flowall',
          component: () => import('../views/flow/all.vue')
        },
        {
          path: '/flow/ip',
          name: 'flowip',
          component: () => import('../views/flow/ip.vue')
        },
        {
          path: '/user/index',
          name: 'userindex',
          component: () => import('../views/user/center.vue')
        },
        {
          path: '/user/add',
          name: 'useradd',
          component: () => import('../views/user/add.vue')
        },
        {
          path: '/user/list',
          name: 'userlist',
          component: () => import('../views/user/list.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },

    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404.vue')
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '404',
    }
  ]
})







export default router
