<template>
  <div>
    <vant-radio label="单选" v-bind:modelfeild.sync="radio" flag="" ></vant-radio>
  </div>
</template>

<script>
import vantRadio from '../components/vant-components/vant-radio'
export default {
  components: {
    'vant-radio': vantRadio
  },
  data() {
    return {
      radio: '',
      
    }
  }
}
</script>
