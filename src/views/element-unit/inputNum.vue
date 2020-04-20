<template>
  <div>
    <el-form>
      <cos-col-input-number
        coslabel="input-number测试"
        :cosprop="floorPrice"
        cospropMsg="这是必填的，你咋咋不填呢？"
        v-bind:modelfeild.sync="mainModel.floorPrice"
        placeholder="随便输"
        :min="0"
        :max="10"
        :step="2"
        :precision="3"
        controlsPosition="right"
        :flag="flag">
      </cos-col-input-number>
    </el-form>
  </div>
</template>

<script>
  import coscolinputnumber from '@/components/element-component/cos-col-input-number'
  export default {
    components: {
     'cos-col-input-number': coscolinputnumber
    },
    data () {
      return {
        mainModel: {
          floorPrice: 0
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
