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
    path: '/login',
    component: () => import('../views/Login/Login'),
  },
  {
    path: '/updown',
    component: () => import('../views/UpDown/UpDown'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
