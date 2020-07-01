<template>
  <div>
    <vant-card :indexme="indexme" :itemTitle="itemTitle" :itemContent="itemContent" :dataList="dblistData" :itemStyle="itemStyle"></vant-card>
  </div>
</template>

<script>
import vantcard from '@/components/vant-components/vant-card'
export default {
  components: {
    'vant-card': vantcard
  },
  data() {
    return {
      indexme: 3,
      itemTitle: ['物料', '供应商', '状态'],
      itemContent: ['maktx', 'suppliername', 'state'],
      dblistData: [{maktx: '物料1', suppliername: '供应商1', state: '状态1'}, {maktx: '物料2', suppliername: '供应商2', state: '状态2'}, {maktx: '物料3', suppliername: '供应商3', state: '状态3'}],
      itemStyle: ['vantCard-cellTitle', 'vantCard-cellTitle', 'vantCard-cellTitle vantCard-stateTitle'],
    }
  }
}
</script>
