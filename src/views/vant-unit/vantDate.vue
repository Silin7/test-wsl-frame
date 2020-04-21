<template>
  <div>
    <vant-date label="日历选择" placeholder="日历选择" inputAlign="right" v-bind:modelfeild.sync="mainModel.aaa" typeme="range"></vant-date>
  </div>
</template>

<script>
  import vantdate from '@/components/vant-component/vant-date'
  export default {
    components: {
      'vant-date': vantdate
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
