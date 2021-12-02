import Vue from 'vue'
import VueRouter from 'vue-router'

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
    path: '/settings/login',
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
  {
    path: '/money/fund/:id',
    component: () => import('../views/Money/Fund')
  },
  {
    path: '/money/all-logs',
    component: () => import('../views/Money/AllLogs')
  },
  {
    path: '/money/add-fund',
    component: () => import('../views/Money/AddFund')
  },
  {
    path: '/money/edit-fund/:id',
    component: () => import('../views/Money/EditFund')
  },
  {
    path: '/money/add-log',
    component: () => import('../views/Money/AddLog')
  },
  {
    path: '/money/edit-log/:id',
    component: () => import('../views/Money/EditLog')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
