<template>
  <div>{{currentPage}}
    <vant-page v-bind:modelfeild.sync="currentPage" :totalItems="totalItems"></vant-page>
  </div>
</template>

<script>
import vantpage from '@/components/vant-components/vant-page'
export default {
  components: {
    'vant-page': vantpage 
  },
  data() {
    return {
      currentPage: 1,
      totalItems: 100,
    }
  }
}
</script>
