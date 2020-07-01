<!-- creat by silin.wang 20.04.20 -->
<!-- 表单组件 - field输入框 -->
<!-- 案列: 
  1.引入: import vantfield from '@/components/vant-components/vant-field'
  2.注册: 'vant-field': vantfield
  3.使用: <vant-field typeme="" label="" placeholder="" inputAlign="" propBoolean="" errorMsg="" v-bind:modelfeild.sync="" rows="" maxlength="" wordLimit="" flag="" readFlag=""></vant-field>
-->
<!-- 说明: 
  typeme: 判断field框样式【text、tel、digit、number、password、textarea 】（默认: text）
  label: label标题
  placeholder: 提示符
  inputAlign: 字体对齐方式 (默认: right)
  propBoolean: 是否必填（默认: true）
  errorMsg: 必填提示信息（默认: 请输入）
  rows: textarea行数
  maxlength: 允许最多字符数
  wordLimit: 是否显示字数统计
  flag:  是否禁用 （禁用: 'view' 'handle'）
  readFlag 是否只读 （禁用: 'view' 'handle'）
-->
<!-- 注意: 
  show-word-limit: Boolean类型，需要设置maxlength属性
  blurInput; 别忘了写
 -->
 
<template>
  <van-field
    :type="typeme"
    :label="label"
    v-model="modelfeildme"
    :placeholder="placeholder"
    :input-align="inputAlign"
    @input="setInput"
    @blur="blurInput"
    @click="clickField"
    clearable
    :rows="rows"
    :maxlength="maxlength"
    :show-word-limit="wordLimit"
    :required="propBoolean === 'true' ? true : false"
    :error-message="errorMsg"
    :disabled="(flag === 'view'|| flag === 'handle' )? true : false"
    :readonly="(readFlag === 'view'|| readFlag === 'handle' )? true : false">
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
        type: String,
        default: '请输入'
      },
      inputAlign: {
        type: String,
        default: 'right'
      },
      propBoolean: {
        type: String,
        default: 'true'
      },
      errorMsg: {
        type: String,
        default: ''
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
      setInput () {
        this.$emit('update:modelfeild', this.modelfeildme)
      },
      blurInput () {
        this.$emit('blurInput', {  'label': this.label , 'value': this.modelfeildme })
      },
      clickField () {
        this.$emit('clickField')
      }
    }
  }
</script>
