<!-- 表单组件 - checkbox多选 -->
<!-- 案列：
  1.引入：import coscolcheckbox from '@/components/form-component/cos-col-checkbox'
  2.注册：'cos-col-checkbox': coscolcheckbox
  3.使用：<cos-col-checkbox coslabel="" :cosprop="" cospropBoolean="" cospropMsg="" v-bind:modelfeild.sync="" min="" max="" :flag="" cosList=""></cos-col-checkbox>
-->
<!-- 说明：
  coltype：宽度样式（默认0.25）
  coslabel：label标题
  cosprop：表单的prop属性
  cospropBoolean：是否必填（默认：true）
  cospropMsg：必填提示信息 (默认：请输入)
  min：最小选择数量
  max：最大选择数量
  flag： 是否禁用 （禁用：'view' 'handle'）
  cosList：选项列表
-->
<!-- 注意：
  cosList: 只能是数组包含字符串格式
 -->

<template>
  <el-col :xs="getColSize('xs',coltype)" :sm="getColSize('sm',coltype)" :md="getColSize('md',coltype)" :lg="getColSize('lg',coltype)">
    <el-form-item :label="coslabel" :prop="cosprop" :rules="(cospropBoolean === 'true')? [{ required: true, message: cospropMsg, trigger: 'blur' }] : []">
      <el-checkbox-group v-model="modelfeildme" @change="setCheckbox" :min="min" :max="max" :disabled=" (flag === 'view'|| flag === 'handle' ) ? true : false">
        <el-checkbox
          v-for="(item, index) in cosList"
          :label="item"
          :key="index">
          {{item}}
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-col>
</template>

<script>
  import colSize from './col-size-js.js'
  export default {
    name: 'costomcheckbox',
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
        type: Array
      },
      min: {
        type: Number
      },
      max: {
        type: Number
      },
      flag: {
        type: String
      },
      cosList: {
        type: Array
      }
    },
    created () {
      if (this.modelfeild) {
        this.modelfeildme = this.modelfeild
      }
    },
    data () {
      return {
        modelfeildme: []
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
      setCheckbox () {
        this.$emit('update:modelfeild', this.modelfeildme)
      }
    }
  }
</script>
