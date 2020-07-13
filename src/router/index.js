import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home }, 
  { path: "/404", name: "404", component: () => import('../views/notFound/404.vue') },
  { path: '/home', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/test', name: 'test', component: () => import('../views/test.vue') },
  // element 组件
  { path: '/radio', name: 'radio', component: () => import('../views/element-unit/radio.vue') },
  { path: '/checkbox', name: 'checkbox', component: () => import('../views/element-unit/checkbox.vue') },
  { path: '/select', name: 'select', component: () => import('../views/element-unit/select.vue') },
  { path: '/select-mul', name: 'select-mul', component: () => import('../views/element-unit/selectMul.vue') },
  { path: '/date', name: 'date', component: () => import('../views/element-unit/date.vue') },
  { path: '/date-mul',  name: 'date-mul',  component: () => import('../views/element-unit/dateMul.vue') },
  { path: '/input', name: 'input', component: () => import('../views/element-unit/input.vue') },
  { path: '/input-number', name: 'input-number', component: () => import('../views/element-unit/inputNum.vue') },
  // 重定向404，此处需特别注意置于最底部 
  { path: "*", redirect: "/404" }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
