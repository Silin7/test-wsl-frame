import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'    //引入axios 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.prototype.$http = axios //修改Vue的原型属性
// axios.defaults.timeout = 5000 // 请求超时
// axios.defaults.baseURL = 'http://192.168.5.198:8686/srmApi'  // api 即上面 vue.config.js 中配置的地址

// import httpRequest from '@/utils/httpRequest'
// Vue.prototype.$http = httpRequest // ajax请求方法

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
