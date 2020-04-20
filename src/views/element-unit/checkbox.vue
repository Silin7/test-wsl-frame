<template>
  <div>
    <el-form>
      <cos-col-checkbox v-bind:modelfeild.sync="mainModel.floorPrice" coslabel="checkbox多选按钮" cosprop="floorPrice" :flag="flag" :cosList="cosList" coltype="0.75"></cos-col-checkbox>
    </el-form>
  </div>
</template>

<script>
  import coscolcheckbox from '@/components/element-component/cos-col-checkbox'
  export default {
    components: {
      'cos-col-checkbox': coscolcheckbox
    },
    data () {
      return {
        mainModel: {
          floorPrice: ['上海', '深圳']
        },
        floorPrice: '',
        flag: '',
        cosList: ['上海', '北京', '广州', '深圳']
      }
    },
    methods: {
      changeCheckbox (val) {
        this.mainModel.floorPrice = val
      }
    }
  }
</script>
