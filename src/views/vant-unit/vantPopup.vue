<template>
  <div>
    <vant-popup label="地区选择" v-bind:modelfeild.sync="mainModel.aaa" :dataList="dataList"></vant-popup>
  </div>
</template>

<script>
  import vantpopup from '@/components/vant-component/vant-popup'
  export default {
    components: {
      'vant-popup': vantpopup
    },
    data() {
      return {
        mainModel: {
          aaa: ''
        },
        dataList: ['未询价', '已询价', '已报价', '已议价', '价格已存在无合同', '价格已存在有合同']
      }
    }
  }
</script>
