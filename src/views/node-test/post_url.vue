<template>
  <div class="home">
    <van-form @submit="onSubmit">
      <van-field
        v-model="name"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"> 注 册 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import api from '@/api/api'
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      name: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      let req = {
        name: this.name,
        password: this.password
      }
      api.apiLogin2(req, function (res) {
        if (res && res.data.code === 0) {
          alert('注册成功')
        } else {
          alert('注册失败')
        }
      })
    }
  }
}
</script>
