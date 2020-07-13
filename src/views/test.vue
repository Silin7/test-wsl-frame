
<template>
  <div>
    <vant-date label="TEST" placeholder="TEST" v-bind:modelfeild.sync="area"></vant-date>
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
      area: ''
    }
  },
  watch: {
    area(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>
