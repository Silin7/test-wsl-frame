<!-- 表单组件 - radio单选 -->
<!-- 案列：
  1.引入：import coscolradio from '@/components/model-component/cos-col-radio'
  2.注册：'cos-col-radio': coscolradio
  3.使用：<cos-col-radio coslabel="" cosprop="" cospropBoolean="" cospropMsg="" v-bind:modelfeild.sync="" flag="" cosradio1="" cosradio2="" ></cos-col-radio>
-->
<!-- 说明：
  coltype：宽度样式（默认：0.25）
  coslabel：label标题
  cosprop：表单的prop属性
  cospropBoolean: 是否必填（默认：true）
  cospropMsg: 必填提示信息 (默认：请输入)
  flag： 是否禁用 （禁用：'view' 'handle'）
  cosradio1：按钮文本1
  cosradio2：按钮文本2
-->
<!-- 注意：暂无 -->

<template>
  <el-col :xs="getColSize('xs',coltype)" :sm="getColSize('sm',coltype)" :md="getColSize('md',coltype)" :lg="getColSize('lg',coltype)">
    <el-form-item :label="coslabel" :prop="cosprop" :rules="(cospropBoolean === 'true')? [{ required: true, message: cospropMsg, trigger: 'blur' }] : []">
      <el-radio-group v-model="modelfeildme" @change="setRadio" :disabled=" (flag === 'view'|| flag === 'handle' ) ? true : false">
        <el-radio label="0" border>{{cosradio1}}</el-radio>
        <el-radio label="1" border>{{cosradio2}}</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-col>
</template>

<script>
  import colSize from '@/components/model-javaScript/model-js-01'
  export default {
    name: 'costomradio',
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
        default: '请选择'
      },
      modelfeild: {
        type: String
      },
      flag: {
        type: String
      },
      cosradio1: {
        type: String
      },
      cosradio2: {
        type: String
      }
    },
    created () {
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
      getColSize (type, val) {
        return colSize.getColSize(type, val)
      },
      setRadio () {
        // this.modelfeildme： 0 1
        this.$emit('update:modelfeild', this.modelfeildme)
      }
    }
  }
</script>
