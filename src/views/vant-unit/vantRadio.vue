<template>
  <div>
    <van-form>
      <vant-radio v-bind:modelfeild.sync="mainModel.floorPrice" coslabel="radio单选按钮" vanradio1="是" vanradio2="否" ></vant-radio>
    </van-form>
  </div>
</template>

<script>
  import vantradio from '@/components/vant-component/vant-radio'
  export default {
    components: {
      'vant-radio': vantradio
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
