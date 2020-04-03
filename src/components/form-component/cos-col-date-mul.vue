<!-- creat by silin.wang 20.04.01 -->
<!-- 表单组件 - 开始结束日期 -->
<!-- 案列：
  1.引入：import coscoldate from '@/components/form-component/cos-col-date'
  2.注册：'cos-col-date': coscoldate
  3.使用：<cos-col-date coslabel="" :cosprop="" cospropBoolean="" cospropMsg="" datetype="" v-bind:modelfeild.sync="" startPlaceholder="" endPlaceholder="" startDate="" endDate="" :flag=""></cos-col-date>
-->
<!--说明：
  coltype：宽度样式（默认0.25）
  coslabel：label标题
  cosprop：表单的prop属性
  cospropBoolean：是否必填（默认：true）
  cospropMsg：必填提示信息(默认：请输入)
  datetype：日期格式（默认：daterange）
  startPlaceholder：开始日期格式
  endPlaceholder：结束日期格式
  placeholder：提示符
  startDate：范围限制时间开始时间
  endDate：范围限制时间结束时间
  picker-options：控制日期选择范围
  flag： 是否禁用 （禁用：'view' 'handle'）
-->
<!--注意：
  daterange：daterange日期格式，datetimerange日期时间格式
  modelfeild：type格式为数组
  picker-options：object类型，固定写法
-->
<template>
  <el-col :xs="getColSize('xs',coltype)" :sm="getColSize('sm',coltype)" :md="getColSize('md',coltype)" :lg="getColSize('lg',coltype)">
    <el-form-item :label="coslabel" :prop="cosprop" :rules="(cospropBoolean === 'true')? [{ required: true, message: cospropMsg }] : []">
      <el-date-picker
        v-model="modelfeildme"
        :type="datetype"
        @change="setDateMul"
        range-separator="至"
        :start-placeholder="startPlaceholder"
        :end-placeholder="endPlaceholder"
        :startDate="startDate"
        :endDate="endDate"
        :picker-options="pickerOptions"
        :disabled=" (flag === 'view'|| flag === 'handle' )? true : false"
        style="width: 100%;">
      </el-date-picker>
    </el-form-item>
  </el-col>
</template>

<script>
  import colSize from './col-size-js.js'
  export default {
    name: 'costomdatemul',
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
        default: '请输入日期'
      },
      datetype: {
        type: String,
        default: 'daterange'
      },
      modelfeild: {
        type: Array
      },
      startPlaceholder: {
        datetype: String,
        default: '选择开始日期'
      },
      endPlaceholder: {
        datetype: String,
        default: '选择结束日期'
      },
      startDate: {
        datetype: String
      },
      endDate: {
        datetype: String
      },
      flag: {
        type: String
      }
    },
    created() {
      this.modelfeildme = this.modelfeild
    },
    data() {
      return {
        modelfeildme: []
      }
    },
    computed: {
      // 时间范围限制函数对象
      pickerOptions() {
        let _this = this
        return {
          disabledDate (time) {
            let start = new Date(_this.startDate)
            let end = new Date(_this.endDate)
            return time.getTime() < start.getTime() || time.getTime() > end.getTime()
          }
        }
      }
    },
    watch: {
      'modelfeild' (newVal, oldVal) {
        this.modelfeildme = this.modelfeild
      }
    },
    methods: {
      getColSize (type, val) {
        return colSize.getColSize(type, val)
      },
      setDateMul () {
        this.$emit('update:modelfeild', colSize.formartDateTypeArry(this.modelfeildme, this.datetype))
        console.log(colSize.formartDateTypeArry(this.modelfeildme, this.datetype))
      }
    }
  }
</script>
