<template>
  <div class="home">
    <router-link to="radio">radio</router-link>
    <br/>
    <router-link to="checkbox">checkbox</router-link>
    <br/>
    <router-link to="select">select</router-link>
    <br/>
    <router-link to="select-mul">select-mul</router-link>
    <br/>
    <router-link to="date">date</router-link>
    <br/>
    <router-link to="date-mul">date-mul</router-link>
    <br/>
    <router-link to="input">input</router-link>
    <br/>
    <router-link to="input-number">input-number</router-link>

    <div>
      <button @click="getLogin">111</button>
    </div>
  </div>
</template>

<script>
import api from '@/api/api'
export default {
  name: 'Home',
  components: {
  },
  methods: {
    getLogin() {
      let req = {
        name: 'silin.wang',
        password: '123456'
      }
      console.log(api)
      api.apiLogin(req, function (res) {
        console.log(res)
      })
    }
  }
}
</script>
