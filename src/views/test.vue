<template>
  <div>{{popups}}
    <vant-popups label="popups" placeholder="popups" v-bind:modelfeild.sync="popups" :dataList="dataList_Array"></vant-popups>
  </div>
</template>

<script>
import vantpopups from '@/components/vant-components/vant-popups'
export default {
  components: {
    'vant-popups': vantpopups
  },
  data() {
    return {
      popups: ['1', '4'],
      dataList_Array: [
        { value: '标题1', code: '1', id: '1', iscommit: false },
        { value: '标题2', code: '2', id: '2', iscommit: false },
        { value: '标题3', code: '3', id: '3', iscommit: false },
        { value: '标题4', code: '4', id: '4', iscommit: false },
        { value: '标题5', code: '5', id: '5', iscommit: false }
      ],
    }
  }
}
</script>
