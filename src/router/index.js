import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home',component: Home },
  { path: '/home',name: 'home',component: () => import('../views/Home.vue') },
  { path: '/radio',name: 'radio',component: () => import('../views/formFile/radio') },
  { path: '/checkbox',name: 'checkbox',component: () => import('../views/formFile/checkbox') },
  { path: '/select',name: 'select',component: () => import('../views/formFile/select') },
  { path: '/select-mul',name: 'select-mul',component: () => import('../views/formFile/select-mul') },
  { path: '/date',name: 'date',component: () => import('../views/formFile/date') },
  { path: '/date-mul', name: 'date-mul', component: () => import('../views/formFile/date-mul') },
  { path: '/input',name: 'input',component: () => import('../views/formFile/input') },
  { path: '/input-number',name: 'input-number',component: () => import('../views/formFile/input-number') }
]

const router = new VueRouter({
  routes
})

export default router
