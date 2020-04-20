<template>
  <div>
    <vant-field label="filed输入框" v-bind:modelfeild.sync="mainModel.aaa" placeholder="placeholder"></vant-field>
  </div>
</template>

<script>
  import vantfield from '@/components/vant-component/vant-field'
  export default {
    components: {
      'vant-field': vantfield
    },
    data() {
      return {
        mainModel: {
          aaa: '11'
        }
      }
    }
  }
</script>
