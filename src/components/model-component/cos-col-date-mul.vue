<!--日期 表单组件-->
<!--案列：-->
<!--说明：
  coltype：宽度样式(默认0.25，不可以用分数) 例:coltype="0.5"
  cospropBoolean: 是否必填（默认true） true false
  cospropMsg: 必填提示信息(默认请输入)
  startDate：范围限制时间开始时间
  endDate:范围限制时间结束时间
-->
<!--注意：
  modelfeild：type格式为数组
-->
<template>
  <el-col :xs="getColSize('xs',coltype)" :sm="getColSize('sm',coltype)" :md="getColSize('md',coltype)" :lg="getColSize('lg',coltype)">
    <el-form-item :label="coslabel" :prop="cosprop" :rules="(cospropBoolean === 'true')? [{ required: true, message: cospropMsg }] : []">
      <el-date-picker
        v-model="modelfeildme"
        type="daterange"
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
  import colSize from '@/components/model-javaScript/model-js-01'
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
        datetype: String,
        default: '1970-01-01'
      },
      endDate: {
        datetype: String,
        default: '9999-12-31'
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
        this.$emit('update:modelfeild', colSize.formartDate3(this.modelfeildme))
      }
    }
  }
</script>
