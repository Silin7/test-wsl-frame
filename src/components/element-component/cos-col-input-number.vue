<!-- creat by silin.wang 20.04.02 -->
<!-- 表单组件 - input输入框 -->
<!-- 案列：
  1.引入：import coscolinputnumber from '@/components/element-component/cos-col-input-number'
  2.注册：'cos-col-input-number': coscolinputnumber
  3.使用：<cos-col-input-number coslabel="" :cosprop="" cospropBoolean="" cospropMsg="" v-bind:modelfeild.sync="" :min="" :max="" :step="" :precision="" controlsPosition="" :flag="" ></cos-col-input-number>
-->
<!-- 说明：
  coltype：宽度样式(默认0.25)
  coslabel：label标题
  cosprop：表单的prop属性
  cospropBoolean：是否必填（默认：true）
  cospropMsg：必填提示信息（默认：请输入）
  min：设置计数器允许的最小值
  max：设置计数器允许的最大值
  step：计数器步长
  precision：数值精度
  controlsPosition：控制按钮位置
  flag： 是否禁用 （禁用：'view' 'handle'）
-->
<!-- 注意：暂无 -->
<template>
  <el-col :xs="getColSize('xs',coltype)" :sm="getColSize('sm',coltype)" :md="getColSize('md',coltype)" :lg="getColSize('lg',coltype)">
    <el-form-item :label="coslabel" :prop="cosprop" :rules="(cospropBoolean === 'true')? [{ required: true, message: cospropMsg }] : []">
      <el-input-number
        v-model="modelfeildme"
        @change="setInputNumber"
        :min="min"
        :max="max"
        :step="step"
        :precision="precision"
        :controls-position="controlsPosition"
        :disabled="(flag === 'view'|| flag === 'handle' )? true : false">
      </el-input-number>
    </el-form-item>
  </el-col>
</template>

<script>
  import colSize from './col-size-js.js'
  export default {
    name: 'costominputnumber',
    props: {
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
        type: Number,
        default: 0
      },
      min: {
        type: Number
      },
      max: {
        type: Number
      },
      step: {
        type: Number
      },
      precision: {
        type: Number
      },
      controlsPosition: {
        type: String
      },
      flag: {
        type: String
      }
    },
    created () {
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
      getColSize(type, val) {
        return colSize.getColSize(type, val)
      },
      setInputNumber () {
        this.$emit('update:modelfeild', this.modelfeildme)
      }
    }
  }
</script>
