<!-- 表单组件 -->
<!-- 案列：
1.引入：import coscolradio from '@/components/model-component/model-radio'
2.注册：'cos-col-radio': coscolradio
3.使用：<cos-col-radio v-bind:modelfeild.sync="mainModel.floorPrice" coslabel="是否为补充类合同" cosprop="floorPrice" cosradio1="是" cosradio2="否" :flag="flag"></cos-col-radio>
-->
<!-- 说明：
coltype：宽度样式（默认：0.25）
cospropBoolean: 是否必填（默认：true）
cospropMsg: 必填提示信息 (默认：请输入)
-->
<!-- 注意：暂无 -->

<template>
  <el-col :xs="getColSize('xs',coltype)" :sm="getColSize('sm',coltype)" :md="getColSize('md',coltype)" :lg="getColSize('lg',coltype)">
    <el-form-item :label="coslabel" :prop="cosprop" :rules="(cospropBoolean === 'true')? [{ required: true, message: cospropMsg, trigger: 'blur' }] : []">
      <el-radio-group v-model="modelfeildme" @change="setInput" :disabled=" (flag === 'view'|| flag === 'handle' ) ? true : false">
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
        if (this.modelfeildme !== undefined) {
          this.setInput()
        }
      }
    },
    methods: {
      getColSize (type, val) {
        return colSize.getColSize(type, val)
      },
      setInput () {
        this.$emit('update:modelfeild', this.modelfeildme)
        this.$emit('changeRadio', this.modelfeildme)
      }
    }
  }
</script>
