<!-- creat by silin.wang 20.04.20 -->
<!-- vant组件 - field输入框 -->
<!-- 案列: 
  1.引入: import vantfield from '@/components/vant-components/vant-field'
  2.注册: 'vant-field': vantfield
  3.使用: <vant-field typeme="" label="" placeholder="" v-bind:modelfeild.sync="" @setField="" @blurField="" @clickField=""></vant-field>
-->
<!-- 说明: 
  typeme: 判断field框样式【text、tel、digit、number、password、textarea 】（默认: text）
  label: label标题
  placeholder: 提示符
  inputAlign: 字体对齐方式 (默认: right)
  errorMsg: 必填提示信息
  rows: textarea行数
  maxlength: 允许最多字符数
  wordLimit: 是否显示字数统计
  flag:  是否禁用 （禁用: 'view'）
  readFlag 是否只读 （禁用: 'view'）
  setField: 输入框输入时回调函数
  blurField: 输入框失去焦点时回调函数
  clickField: 输入框点击时回调函数
-->
<!-- 注意: 
  show-word-limit: Boolean类型，需要设置maxlength属性
 -->
 
<template>
  <van-field
    :type="typeme"
    :label="label"
    v-model="modelfeildme"
    :placeholder="placeholder"
    :input-align="inputAlign"
    @input="setField"
    @blur="blurField"
    @click="clickField"
    clearable
    :rows="rows"
    :maxlength="maxlength"
    :show-word-limit="wordLimit"
    :error-message="errorMsg"
    :disabled="flag === 'view' ? true : false"
    :readonly="readFlag === 'view' ? true : false">
  </van-field>
</template>

<script>
  export default {
    name: 'vantfield',
    props: {
      typeme: {
        type: String,
        default: 'text'
      },
      label: {
        type: String
      },
      placeholder: {
        type: String
      },
      inputAlign: {
        type: String,
        default: 'right'
      },
      errorMsg: {
        type: String,
      },
      modelfeild: {
        type: String,
        default:''
      },
      maxlength: {
        type: String,
      },
      wordLimit: {
        type: Boolean,
        default: false
      },
      rows: {
        type: Number,
        default: 2
      },
      flag: {
        type: String
      },
      readFlag: {
        type: String
      }
    },
    mounted () {
      if (this.modelfeild) {
        this.modelfeildme = this.modelfeild
      }
    },
    data() {
      return {
        modelfeildme: ''
      }
    },
    watch: {
      'modelfeild' (newVal, oldVal) {
        this.modelfeildme = this.modelfeild
      }
    },
    methods: {
      setField () {
        this.$emit('update:modelfeild', this.modelfeildme)
        this.$emit('setField', this.modelfeildme)
      },
      blurField () {
        this.$emit('blurField', this.modelfeildme)
      },
      clickField () {
        this.$emit('clickField', this.modelfeildme)
      }
    }
  }
</script>
