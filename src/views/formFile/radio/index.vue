<template>
  <div>
    <el-form>
      <cos-col-radio v-bind:modelfeild.sync="mainModel.floorPrice" coslabel="radio单选按钮" cosprop="floorPrice" cosradio1="是" cosradio2="否" :flag="flag" :border="true"></cos-col-radio>
    </el-form>
  </div>
</template>

<script>
  import coscolradio from '@/components/form-component/cos-col-radio'
  export default {
    components: {
      'cos-col-radio': coscolradio
    },
    data () {
      return {
        mainModel: {
          floorPrice: '0'
        },
        floorPrice: '',
        flag: ''
      }
    },
    methods: {
      changeRadio (val) {
        this.mainModel.floorPrice = val
      }
    }
  }
</script>
