<template>
  <div>
    <vant-date label="" placeholder="" v-bind:modelfeild.sync="vantdate"></vant-date>
  </div>
</template>

<script>
import vantdate from '@/components/vant-components/vant-date'
export default {
  components: {
    'vant-date': vantdate 
  },
  data() {
    return {
      vantdate: ''
    }
  }
}
</script>
