import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home',component: Home },
  { path: '/home',name: 'home',component: () => import('../views/Home.vue') },
  { path: '/radio',name: 'radio',component: () => import('../views/radio') },
  { path: '/checkbox',name: 'checkbox',component: () => import('../views/checkbox') },
  { path: '/select',name: 'select',component: () => import('../views/select') },
  { path: '/select-mul',name: 'select-mul',component: () => import('../views/select-mul') },
  { path: '/date',name: 'date',component: () => import('../views/date') },
  { path: '/date-mul',name: 'date-mul',component: () => import('../views/date-mul') }
]

const router = new VueRouter({
  routes
})

export default router
