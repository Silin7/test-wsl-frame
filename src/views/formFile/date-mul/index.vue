<template>
  <div>
    <el-form>
      <cos-col-date-mul datetype="datetimerange" v-bind:modelfeild.sync="mainModel.floorPrice" :cosprop="floorPrice" coslabel="date日期选择器" :flag="flag"></cos-col-date-mul>
    </el-form>
  </div>
</template>

<script>
  import coscoldatemul from '@/components/form-component/cos-col-date-mul'
  export default {
    components: {
      'cos-col-date-mul': coscoldatemul
    },
    data () {
      return {
        mainModel: {
          floorPrice: []
        },
        floorPrice: '',
        flag: ''
      }
    },
    methods: {
      changeDateMul (val) {
        this.mainModel.floorPrice = val
      }
    }
  }
</script>
