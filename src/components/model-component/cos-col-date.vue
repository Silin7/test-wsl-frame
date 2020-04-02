<!-- 表单组件 - 单个日期 -->
<!-- 案列：
  1.引入：import coscoldate from '@/components/model-component/cos-col-date'
  2.注册：'cos-col-date': coscoldate
  3.使用：<cos-col-date coslabel="" cosprop="" cospropBoolean="" cospropMsg="" v-bind:modelfeild.sync="" placeholder="" startDate="" endDate="" flag=""></cos-col-date>
-->
<!--说明：
  coltype：宽度样式（默认0.25）
  coslabel：label标题
  cosprop：表单的prop属性
  cospropBoolean：是否必填（默认：true）
  cospropMsg：必填提示信息(默认：请输入)
  datetype：日期格式
  placeholder：提示符
  startDate：范围限制时间开始时间
  endDate：范围限制时间结束时间
  picker-options：当前时间日期选择器特有的选项参考下表
  flag： 是否禁用 （禁用：'view' 'handle'）
-->
<!--注意：
  picker-options：object类型
-->
<template>
  <el-col :xs="getColSize('xs',coltype)" :sm="getColSize('sm',coltype)" :md="getColSize('md',coltype)" :lg="getColSize('lg',coltype)">
    <el-form-item :label="coslabel" :prop="cosprop" :rules="(cospropBoolean === 'true')? [{ required: true, message: cospropMsg }] : []">
      <el-date-picker
        v-model="modelfeildme"
        type="date"
        @change="setDate"
        :placeholder="placeholder"
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
  import colSize from '@/components/model-javaScript/model-js-01'
  export default {
    name: 'costomdate',
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
      modelfeild: {
        type: String
      },
      placeholder: {
        type: String,
        default: '选择一个日期'
      },
      startDate: {
        type: String,
        default: '1970-01-01'
      },
      endDate: {
        type: String,
        default: '9999-12-31'
      },
      flag: {
        type: String
      },
      cosdate: {
        type: String
      }
    },
    created() {
      this.modelfeildme = this.modelfeild
    },
    data() {
      return {
        modelfeildme: ''
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
      setDate () {
        this.$emit('update:modelfeild', colSize.formartDate2(this.modelfeildme, 'date'))
      }
    }
  }
</script>
