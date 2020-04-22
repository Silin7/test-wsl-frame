<!-- creat by silin.wang 20.04.20 -->
<!-- 表单组件 - popup底部选择器 -->
<!-- 案列: 
  1.引入: import vantpopup from '@/components/vant-component/vant-popup'
  2.注册: 'vant-popup': vantpopup
  3.使用: <vant-popup label="" placeholder="" inputAlign="" propBoolean="" propMsg="" v-bind:modelfeild.sync=""  flag="" position="" overlay="" round="" proportion="" title="" dataList=""></vant-popup>
-->
<!-- 说明: 
  label: label标题
  placeholder: 提示（默认: 请选择）
  inputAlign: 字体对齐方式 (默认: center)
  propBoolean: 是否必填（默认: true）
  propMsg: 必填提示信息（默认: 请输入）
  flag: 是否禁用 （禁用: 'view' 'handle'）
  position: 弹出位置，可选值为 top bottom right left （默认: bottom）
  overlay: 是否显示遮罩层（默认: true）
  round: 是否显示圆角（默认: true）
  proportion:  弹框高度（默认: 自适应）
  title: 弹出框标题（默认: 请选择）
  dataList: picker数据列表 (默认: 空数组)
-->
<!-- 注意: 
  proportion: 百分比
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
      :right-icon="iconClose"
      @click-right-icon.stop="modelfeildme = ''"
      :rules="(propBoolean === 'true')? [{ required: true, message: propMsg }] : []"
      :disabled="(flag === 'view'|| flag === 'handle' )? true : false"/>
      <van-popup v-model="showArea" :position="position" :overlay="overlay" :round="round" :style="`height: ${proportion};`" >
        <van-picker show-toolbar :title="title" :columns="dataList" @cancel="cancelConfirm" @confirm="setAreaConfirm"/>
      </van-popup>
  </div>
</template>

<script>
  export default {
    name: 'vantpopup',
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
      proportion: {
        type: String
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
        iconClose: '',
        modelfeildme: ''
      }
    },
    watch: {
      'modelfeild'(newVal, oldVal) {
        this.modelfeildme = this.modelfeild
      },
      'modelfeildme'(newVal, oldVal) {
        if (newVal !== '') {
          this.iconClose = 'close'
        } else {
          this.iconClose = ''
          this.$emit('update:modelfeild', this.modelfeildme)
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
