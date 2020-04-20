<template>
  <div>
    <van-form @submit="onSubmit">
      <vant-radio v-bind:modelfeild.sync="mainModel.floorPrice1" coslabel="radio单选按钮" vanradio1="是" vanradio2="否" cospropBoolean="true" cospropMsg="填写啊"></vant-radio>
      <vant-chexkbox v-bind:modelfeild.sync="mainModel.floorPrice" coslabel="checkbox多选" :dataList="dataList" :max="2" cospropBoolean="true" cospropMsg="填写啊"></vant-chexkbox>
      <van-button round block type="info" native-type="submit">
      提交
    </van-button>
    </van-form>

    
  </div>
</template>

<script>
  import vantradio from '@/components/vant-component/vant-radio'
  import vantcheckbox from '@/components/vant-component/vant-checkbox'
  export default {
    components: {
      'vant-radio': vantradio,
      'vant-chexkbox': vantcheckbox
    },
    data () {
      return {
        mainModel: {
          floorPrice1: '',
          floorPrice: ['SH', 'BJ']
        },
        dataList: [{lable: '上海', value: 'SH'}, {lable: '北京', value: 'BJ'}, {lable: '广州', value: 'GZ'}, {lable: '深圳', value: 'SZ'}]
      }
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
      }
    }
  }
</script>
