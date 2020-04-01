<!--表单组件-->
<!--案列：-->
<!--说明：
coltype：宽度样式(默认0.25，不可以用分数) 例:coltype="0.5"
cospropBoolean: 是否必填（默认true） true false
cospropMsg: 必填提示信息(默认请输入)
-->
<!--注意：-->
<template>
  <el-col :xs="getColSize('xs',coltype)" :sm="getColSize('sm',coltype)" :md="getColSize('md',coltype)" :lg="getColSize('lg',coltype)">
    <el-form-item :label="coslabel" :prop="cosprop" :rules="(cospropBoolean === 'true')? [{ required: true, message: cospropMsg }] : []">
      <el-select
        style="width: 100%"
        v-model="modelfeildme"
        placeholder="请输入关键词"
        filterable
        clearable
        :allow-create="true"
        @change="setInput"
        :loading="loading"
        loading-text='正在加载中，请稍后......'
        :disabled="(flag === 'view'|| flag === 'handle' )? true : false">
        <el-option
          v-for="item in cosList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
  </el-col>
</template>

<script>
  import colSize from '@/components/model-javaScript/model-js-01'
  export default {
    name: 'costomselect',
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
        type: String,
        default:''
      },
      flag: {
        type: String
      },
      cosList: {
        type: Array,
        default:[]
      }
    },
    created () {
      if (this.modelfeild) {
        this.modelfeildme = this.modelfeild
      }
    },
    data() {
      return {
        // 是否正在从远程获取数据
        loading: true,
        modelfeildme: ''
      }
    },
    watch: {
      'modelfeild' (newVal, oldVal) {
        this.modelfeildme = this.modelfeild
        if (this.modelfeildme !== undefined) {
          this.setInput()
        }
      }
    },
    methods: {
      getColSize(type, val) {
        return colSize.getColSize(type, val)
      },
      setInput () {
        this.$emit('update:modelfeild', this.modelfeildme)
        this.$emit('changeSelect', this.modelfeildme)
      }
    }
  }
</script>
