<!-- creat by silin.wang 20.04.20 -->
<!-- vant表单组件 - radio单选 -->
<!-- 案列: 
  1.引入: import vantradio from '@/components/vant-components/vant-radio'
  2.注册: 'vant-radio': vantradio
  3.使用: <vant-radio label="" v-bind:modelfeild.sync="" flag="" ></vant-radio>
-->
<!-- 说明: 
  label: label标题
  propMsg: 必填提示信息 
  direction: 单选框的排列方式（默认(横): 'horizontal', (竖): 'vertical'）
  flag:  是否禁用 （禁用: 'view'）
  shape: 单选框的形状（默认(圆): 'round', (方): 'square'）
  iconSize: 单选框大小（默认: 16px）
  checkedColor: 单选框颜色
  radioData: 按钮数据(默认: [ label: '是', value: '0'},{ label: '否', value: '1'}])
-->
<!-- 注意: 
  radioData: 数组类型, 控制radio个数, value, label
 -->

<template>
  <van-field name="radio" :label="label" :error-message="propMsg">
    <template #input>
      <van-radio-group v-model="modelfeildme" @change="setRadio" :direction="direction" :disabled="flag === 'view' ? true : false">
        <van-radio v-for="(item, index) in radioData" :key="index" :shape="shape" :icon-size="iconSize" :checked-color="checkedColor" :name="item.value">{{item.label}}</van-radio>
      </van-radio-group>
    </template>
  </van-field>
</template>

<script>
  export default {
    name: 'vantradio',
    props: {
      label: {
        type: String
      },
      propMsg: {
        type: String,
      },
      modelfeild: {
        type: String
      },
      flag: {
        type: String
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      shape: {
        type: String
      },
      iconSize: {
        type: String,
        default: '16px'
      },
      checkedColor: {
        type: String
      },
      radioData: {
        type: Array,
        default: function () {
          return [
            { label: '是', value: '0'},
            { label: '否', value: '1'}
          ]
        }
      }
    },
    mounted () {
      if (this.modelfeild) {
        this.modelfeildme = this.modelfeild
      }
    },
    data () {
      return {
        modelfeildme: ''
      }
    },
    watch: {
      'modelfeild'(newVal, oldVal) {
        this.modelfeildme = this.modelfeild
      }
    },
    methods: {
      setRadio () {
        this.$emit('update:modelfeild', this.modelfeildme)
      }
    }
  }
</script>
