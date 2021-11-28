import Vue from 'vue'
import VueRouter from 'vue-router'
import * as path from "path";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/Home/Home'),
  },
  {
    path: '/login',
    component: () => import('../views/Login/Login'),
  },
  {
    path: '/updown',
    component: () => import('../views/UpDown/UpDown'),
  },
  {
    path: '/money',
    component: () => import('../views/Money/Money'),
  },
  {
    path: '/settings',
    component: () => import('../views/Settings/Settings'),
    children: [
      {
        path: '/',
        component: () => import('../views/Settings/SettingsPanel')
      },
      {
        path: 'change-pass',
        component: () => import('../views/Settings/ChangePass')
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
