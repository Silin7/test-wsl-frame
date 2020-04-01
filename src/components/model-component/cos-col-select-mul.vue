<!-- 表单组件 - select多选 -->
<!-- 案列：
  1.引入：import coscolselectmul from '@/components/model-component/model-select-mul'
  2.注册：'cos-col-select-mul': coscolselect
  3.使用：<cos-col-select-mul v-bind:modelfeild.sync="mainModel.floorPrice" coslabel="select选择器" :flag="flag" :cosList="cosList"></cos-col-select-mul>
-->
<!-- 说明：
  coltype：宽度样式(默认0.25)
  coslabel：label标题
  cospropBoolean：是否必填（默认：true）
  cospropMsg：必填提示信息(默认：请输入)
  filterable：是否可搜索
  allow-create：是否允许用户创建新条目，需配合 filterable 使用（默认：true
  remote：是否为远程搜索
  allow-create：是否允许用户创建新条目，需配合 filterable 使用
  default-first-option：在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用
  reserve-keyword：多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词
  loading：是否正在从远程获取数据
  loading-text：远程加载时显示的文字
-->
<!-- 注意：暂无-->
<template>
  <el-col :xs="getColSize('xs',coltype)" :sm="getColSize('sm',coltype)" :md="getColSize('md',coltype)" :lg="getColSize('lg',coltype)">
    <el-form-item :label="coslabel" :prop="cosprop" :rules="(cospropBoolean === 'true')? [{ required: true, message: cospropMsg }] : []">
      <el-select
        style="width: 100%"
        v-model="modelfeildme"
        placeholder="请输入关键词"
        multiple
        clearable
        filterable
        :allow-create="true"
        remote
        default-first-option
        reserve-keyword
        @change="setInput"
        :loading="loading"
        loading-text='正在加载中，请稍后.......'
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
    name: 'costomselectmul',
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
        type:Array
      },
      flag: {
        type: String
      },
      cosList: {
        type: Array,
        default: []
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
        loading: false,
        modelfeildme: []
      }
    },
    watch: {
      'modelfeild' (newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    },
    methods: {
      getColSize(type, val) {
        return colSize.getColSize(type, val)
      },
      setInput() {
        this.$emit('update:modelfeild', this.modelfeildme)
        this.$emit('changeSelectMul', this.modelfeildme)
      }
    }
  }
</script>
