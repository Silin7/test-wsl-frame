<!-- creat by silin.wang 20.04.20 -->
<!-- vant组件 - time时间选择器 -->
<!-- 案列: 
  1.引入: import vanttime from '@/components/vant-components/vant-time'
  2.注册: 'vant-time': vanttime
  3.使用: <vant-time  typeme= "" label="" placeholder="" v-bind:modelfeild.sync=""></vant-time>
-->
<!-- 说明: 
  typeme: datetime（yyyy-mm-dd hh:mm）、date（yyyy-mm-dd）、year-month（yyyy-mm）、time（hh:mm）
  label: label标题
  placeholder: 提示
  inputAlign: 字体对齐方式 (默认: right)
  propMsg: 必填提示信息
  flag: 是否禁用 （禁用: 'view'）
  position: 弹出位置，可选值为 top bottom right left （默认: bottom）
  overlay: 是否显示遮罩层（默认: true）
  round: 是否显示圆角（默认: true）
  title: 弹出框标题（默认: 请选择）
  proportion:  弹框高度（默认: 自适应）
-->
<!-- 注意: 
  proportion: 百分比
-->

<template>
  <div>
    <van-field
      readonly
      :label="label"
      :value="modelfeildme"
      :placeholder="placeholder"
      :input-align="inputAlign"
      @click="clickShow"
      @click-right-icon.stop="modelfeildme = ''"
      :error-message="propMsg"
      :disabled="flag === 'view' ? true : false"/>
      <van-popup v-model="showArea" :position="position" :overlay="overlay" :round="round" :style="`height: ${proportion};`" >
        <van-datetime-picker v-if="typeme !== 'time'" :type="typeme" :title="title" v-model="currentDate" :min-date="minDate" :max-date="maxDate" @cancel="cancelConfirm" @confirm="setAreaConfirm"/>
        <van-datetime-picker v-if="typeme === 'time'" type="time" :title="title" v-model="currentTime" @cancel="cancelConfirm" @confirm="setAreaConfirm"/>
      </van-popup>
  </div>
</template>

<script>
  export default {
    name: 'vanttime',
    props: {
      typeme: {
        type: String,
        default: 'datetime'
      },
      label: {
        type: String
      },
      placeholder: {
        type: String
      },
      inputAlign: {
        type: String,
        default: 'right'
      },
      propMsg: {
        type: String,
        default: ''
      },
      modelfeild: {
        type: String,
        default: ''
      },
      flag: {
        type: String
      },
      position: {
        type: String,
        default: 'bottom'
      },
      overlay: {
        type: Boolean,
        default: true
      },
      round: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: '请选择'
      },
      proportion: {
        type: String
      }
    },
    mounted () {
      if (this.modelfeild) {
        this.modelfeildme = this.modelfeild
      }
      if (this.typeme) {
        this.typeFlag = this.typeme
      }
    },
    data() {
      return {
        typeFlag: '',
        showArea: false,
        modelfeildme: '',
        currentTime: '12:00',
        currentDate: new Date(),
        minDate: new Date(1970, 0, 1),
        maxDate: new Date(9999, 12, 31)
      }
    },
    watch: {
      'modelfeild'(newVal, oldVal) {
        this.modelfeildme = this.modelfeild
      }
    },
    methods: {
      // 弹出框
      clickShow() {
        if (this.flag !== 'view') {
          this.showArea = true
        }
      },
      // 取消按钮
      cancelConfirm () {
        this.showArea = false
        this.modelfeildme = ''
        this.$emit('update:modelfeild', this.modelfeildme)
      },
      // 确定按钮
      setAreaConfirm(date) {
        this.modelfeildme = this.formatDate(date)
        this.showArea = false;
        this.$emit('update:modelfeild', this.modelfeildme)
      },
      // 日期、时间格式函数
      formatDate(date) {
        if (this.typeFlag === 'datetime') {
          return `${date.getFullYear()}-${date.getMonth()+1 > 9 ? date.getMonth()+1 : '0'+(date.getMonth()+1)}-${date.getDate() > 9 ? date.getDate() : '0'+date.getDate()} ${date.getHours() > 9 ? date.getHours(): '0'+date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes(): '0'+date.getMinutes()}`;
        }
        if (this.typeFlag === 'date') {
          return `${date.getFullYear()}-${date.getMonth()+1 > 9 ? date.getMonth()+1 : '0'+(date.getMonth()+1)}-${date.getDate() > 9 ? date.getDate() : '0'+date.getDate()}`;
        }
        if (this.typeFlag === 'year-month') {
          return `${date.getFullYear()}-${date.getMonth()+1 > 9 ? date.getMonth()+1 : '0'+(date.getMonth()+1)}`;
        }
        if (this.typeFlag === 'time') {
          return `${date}`
        }
      }
    }
  }
</script>
