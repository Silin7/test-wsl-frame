<template>
  <div>
    <vant-area label="选择" placeholder="请选择地区" v-bind:modelfeild.sync="vantarea" ></vant-area>
  </div>
</template>

<script>
import vantarea from '@/components/vant-components/vant-area'
export default {
  components: {
    'vant-area': vantarea 
  },
  data() {
    return {
      vantarea: ''
    }
  }
}
</script>
