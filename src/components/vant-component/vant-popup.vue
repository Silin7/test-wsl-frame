<!-- creat by silin.wang 20.04.20 -->
<!-- 表单组件 - area地区选择器 -->
<!-- 案列: 
  1.引入: import vantarea from '@/components/vant-component/vant-area'
  2.注册: 'vant-area': vantarea
  3.使用: <vant-area label="" placeholder="" inputAlign="" propBoolean="" propMsg="" v-bind:modelfeild.sync=""  flag="" position="" overlay="" round="" title="" dataList=""></vant-area>
-->
<!-- 说明: 
  label: label标题
  placeholder: 提示（默认: 选择省市区）
  inputAlign: 字体对齐方式 (默认: center)
  propBoolean: 是否必填（默认: true）
  propMsg: 必填提示信息（默认: 请输入）
  flag: 是否禁用 （禁用: 'view' 'handle'）
  position: 弹出位置，可选值为 top bottom right left （默认: bottom）
  overlay: 是否显示遮罩层（默认: true）
  round: 是否显示圆角（默认: true）
  title: 弹出框标题（默认: 选择省市区）
  dataList: picker数据列表 (默认: 空数组)
-->
<!-- 注意: 
  dataList: 为数组包含字符串格式
 -->

<template>
  <div>
    <van-field
      readonly
      :label="label"
      :value="modelfeildme"
      :placeholder="placeholder"
      :input-align="inputAlign"
      @click="clickShow"
      :right-icon="statusClose"
      @click-right-icon.stop="modelfeildme = ''"
      :rules="(propBoolean === 'true')? [{ required: true, message: propMsg }] : []"
      :disabled="(flag === 'view'|| flag === 'handle' )? true : false"/>
      <van-popup v-model="showArea" :position="position" :overlay="overlay" :round="round">
        <van-picker show-toolbar :title="title" :columns="dataList" @cancel="cancelConfirm" @confirm="setAreaConfirm"/>
      </van-popup>
  </div>
</template>

<script>
  export default {
    name: 'vantarea',
    props: {
      label: {
        type: String
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      inputAlign: {
        type: String,
        default: 'center'
      },
      propBoolean: {
        type: String,
        default: 'true'
      },
      propMsg: {
        type: String,
        default: ''
      },
      modelfeild: {
        type: String,
        default: ''
      },
      flag: {
        type: String
      },
      position: {
        type: String,
        default: 'bottom'
      },
      overlay: {
        type: Boolean,
        default: true
      },
      round: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: '请选择'
      },
      dataList: {
        type: Array,
        default: []
      }
    },
    mounted () {
      if (this.modelfeild) {
        this.modelfeildme = this.modelfeild
      }
    },
    data() {
      return {
        showArea: false,
        statusClose: '',
        modelfeildme: ''
      }
    },
    watch: {
      'modelfeild'(newVal, oldVal) {
        this.modelfeildme = this.modelfeild
      },
      'modelfeildme'(newVal, oldVal) {
        if (newVal !== '') {
          this.statusClose = 'close'
        } else {
          this.statusClose = ''
        }
      }
    },
    methods: {
      // 弹出框
      clickShow() {
        if (this.flag !== 'view' && this.flag !== 'handle') {
          this.showArea = true
        }
      },
      // 取消按钮
      cancelConfirm () {
        this.showArea = false
      },
      // 确定按钮
      setAreaConfirm(values) {
        this.modelfeildme = values
        this.$emit('update:modelfeild', this.modelfeildme)
        this.showArea = false
      }
    }
  }
</script>
