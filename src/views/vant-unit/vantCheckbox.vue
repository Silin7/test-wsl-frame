<template>
  <div>
    <van-form @submit="onSubmit">
      <vant-radio v-bind:modelfeild.sync="mainModel.floorPrice1" label="radio单选按钮" vanradio1="是" vanradio2="否" propBoolean="true" propMsg="填写啊"></vant-radio>
      <vant-chexkbox v-bind:modelfeild.sync="mainModel.floorPrice" label="checkbox多选" :dataList="dataList" :max="2" propBoolean="true" propMsg="填写啊"></vant-chexkbox>
      <vant-field label="filed输入框" v-bind:modelfeild.sync="mainModel.aaa" placeholder="请填写" propBoolean="true" propMsg="填写啊"></vant-field>
      <vant-area label="地区选择" v-bind:modelfeild.sync="mainModel.bbb" flag="" propBoolean="true" propMsg="填写啊"></vant-area>
      <van-button round block type="info" native-type="submit">
      提交
    </van-button>
    </van-form>

    
  </div>
</template>

<script>
  import vantradio from '@/components/vant-component/vant-radio'
  import vantcheckbox from '@/components/vant-component/vant-checkbox'
  import vantfield from '@/components/vant-component/vant-field'
  import vantarea from '@/components/vant-component/vant-area'
  export default {
    components: {
      'vant-radio': vantradio,
      'vant-chexkbox': vantcheckbox,
      'vant-field': vantfield,
      'vant-area': vantarea
    },
    data () {
      return {
        mainModel: {
          floorPrice1: '',
          floorPrice: ['SH', 'BJ'],
          aaa: '11',
          bbb: ''
        },
        dataList: [{label: '上海', value: 'SH'}, {label: '北京', value: 'BJ'}, {label: '广州', value: 'GZ'}, {label: '深圳', value: 'SZ'}]
      }
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
      }
    }
  }
</script>
