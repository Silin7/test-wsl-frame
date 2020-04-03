<!-- 表单组件 - input输入框 -->
<!-- 案列：
  1.引入：import coscolinput from '@/components/form-component/cos-col-input'
  2.注册：'cos-col-input': coscolinput
  3.使用：<cos-col-input type="" coslabel="" :cosprop="" cospropBoolean="" cospropMsg="" v-bind:modelfeild.sync="" placeholder="" :flag="" :rows="" maxlength=""></cos-col-input>
-->
<!-- 说明：
  type：判断input框样式【text、password、textarea】（默认：text）
  coltype：宽度样式(默认0.25)
  coslabel：label标题
  cosprop：表单的prop属性
  cospropBoolean：是否必填（默认：true）
  cospropMsg：必填提示信息（默认：请输入）
  placeholder：提示符
  rows：textarea行数
  maxlength：允许最多字符数
  flag： 是否禁用 （禁用：'view' 'handle'）
-->

<!-- 注意：
  rows：只有textarea格式下存在
 -->
<template>
  <el-col :xs="getColSize('xs',coltype)" :sm="getColSize('sm',coltype)" :md="getColSize('md',coltype)" :lg="getColSize('lg',coltype)">
    <el-form-item :label="coslabel" :prop="cosprop" :rules="(cospropBoolean === 'true')? [{ required: true, message: cospropMsg }] : []">
      <el-input
        v-if="typeme === 'text'"
        v-model="modelfeildme"
        :placeholder="placeholder"
        @input="setInput"
        clearable
        :maxlength="maxlength"
        show-word-limit
        :disabled="(flag === 'view'|| flag === 'handle' )? true : false">
      </el-input>
      <el-input
        v-if="typeme === 'password'"
        v-model="modelfeildme"
        :placeholder="placeholder"
        @input="setInput"
        show-password
        :disabled="(flag === 'view'|| flag === 'handle' )? true : false">
      </el-input>
      <el-input
        v-if="typeme === 'textarea'"
        v-model="modelfeildme"
        :placeholder="placeholder"
        type="textarea"
        :rows="rows"
        @input="setInput"
        clearable
        :maxlength="maxlength"
        show-word-limit
        :disabled="(flag === 'view'|| flag === 'handle' )? true : false">
      </el-input>
    </el-form-item>
  </el-col>
</template>

<script>
  import colSize from './col-size-js.js'
  export default {
    name: 'costominput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      coltype: {
        type: String
      },
      coslabel: {
        type: String
      },
      cosprop: {
        type: String
      },
      cospropBoolean: {
        type: String,
        default: 'true'
      },
      cospropMsg: {
        type: String,
        default: '请输入'
      },
      modelfeild: {
        type: String,
        default:''
      },
      placeholder: {
        type: String,
        default: '请输入'
      },
      maxlength: {
        type: String,
      },
      rows: {
        type: Number,
        default: 2
      },
      flag: {
        type: String
      }
    },
    created () {
      if (this.type) {
        this.typeme = this.type
      }
      if (this.modelfeild) {
        this.modelfeildme = this.modelfeild
      }
    },
    data() {
      return {
        typeme: '',
        modelfeildme: ''
      }
    },
    watch: {
      'modelfeild' (newVal, oldVal) {
        this.modelfeildme = this.modelfeild
      }
    },
    methods: {
      getColSize(type, val) {
        return colSize.getColSize(type, val)
      },
      setInput () {
        this.$emit('update:modelfeild', this.modelfeildme)
      }
    }
  }
</script>
