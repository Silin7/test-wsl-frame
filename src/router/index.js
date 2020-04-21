import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home }, 
  { path: '/home', name: 'home', component: () => import('../views/Home.vue') },
  // element 组件
  { path: '/radio', name: 'radio', component: () => import('../views/element-unit/radio.vue') },
  { path: '/checkbox', name: 'checkbox', component: () => import('../views/element-unit/checkbox.vue') },
  { path: '/select', name: 'select', component: () => import('../views/element-unit/select.vue') },
  { path: '/select-mul', name: 'select-mul', component: () => import('../views/element-unit/selectMul.vue') },
  { path: '/date', name: 'date', component: () => import('../views/element-unit/date.vue') },
  { path: '/date-mul',  name: 'date-mul',  component: () => import('../views/element-unit/dateMul.vue') },
  { path: '/input', name: 'input', component: () => import('../views/element-unit/input.vue') },
  { path: '/input-number', name: 'input-number', component: () => import('../views/element-unit/inputNum.vue') },
  // vant 组件
  { path: '/vantRadio', name: 'vantRadio', component: () => import('../views/vant-unit/vantRadio.vue') },
  { path: '/vantCheckbox', name: 'vantCheckbox', component: () => import('../views/vant-unit/vantCheckbox.vue') },
  { path: '/vantField', name: 'vantField', component: () => import('../views/vant-unit/vantField.vue') },
  { path: '/vantUploader', name: 'vantUploader', component: () => import('../views/vant-unit/vantUploader.vue') },
  { path: '/vantArea', name: 'vantArea', component: () => import('../views/vant-unit/vantArea.vue') },
  { path: '/vantPopup', name: 'vantPopup', component: () => import('../views/vant-unit/vantPopup.vue') },
  { path: '/vantDate', name: 'vantDate', component: () => import('../views/vant-unit/vantDate.vue') }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
