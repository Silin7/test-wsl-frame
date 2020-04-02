<template>
  <div>
    <el-form>
      <cos-col-input
        type="textarea"
        :rows="10"
        coslabel="input测试"
        :cosprop="floorPrice"
        cospropMsg="这是必填的，你咋咋不填呢？"
        v-bind:modelfeild.sync="mainModel.floorPrice"
        placeholder="随便输"
        :flag="flag"
        maxlength="20000">
      </cos-col-input>
    </el-form>
  </div>
</template>

<script>
  import coscolinput from '@/components/model-component/cos-col-input'
  export default {
    components: {
     'cos-col-input': coscolinput
    },
    data () {
      return {
        mainModel: {
          floorPrice: ''
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
