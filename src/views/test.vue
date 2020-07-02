<template>
  <div>
    <vant-time typeme="time" label="时间选择器" placeholder="时间选择器" v-bind:modelfeild.sync="vanttime"></vant-time>
  </div>
</template>

<script>
import vanttime from '@/components/vant-components/vant-time'
export default {
  components: {
    'vant-time': vanttime 
  },
  data() {
    return {
      vanttime: ''
    }
  }
}
</script>
