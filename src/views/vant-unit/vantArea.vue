<template>
  <div>
    <vant-area label="地区选择" v-bind:modelfeild.sync="mainModel.aaa" flag="view"></vant-area>
  </div>
</template>

<script>
  import vantarea from '@/components/vant-component/vant-area'
  export default {
    components: {
      'vant-area': vantarea
    },
    data() {
      return {
        mainModel: {
          aaa: ''
        }
      }
    }
  }
</script>
