
<template>
  <div>
    <vant-time label="日历选择" placeholder="日历选择" inputAlign="right" v-bind:modelfeild.sync="mainModel.aaa" typeme="datetime"></vant-time>
  </div>
</template>

<script>
  import vanttime from '@/components/vant-component/vant-time'
  export default {
    components: {
      'vant-time': vanttime
    },
    data() {
      return {
        mainModel: {
          aaa: '2020-02-02'
        }
      }
    }
  }
</script>
