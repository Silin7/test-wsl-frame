<!-- creat by silin.wang 20.04.20 -->
<!-- 表单组件 - area地区选择器 -->
<!-- 案列: 
  1.引入: import vantarea from '@/components/vant-component/vant-area'
  2.注册: 'vant-area': vantarea
  3.使用: <vant-area  typeme= "" label="" placeholder="" inputAlign="" propBoolean="" propMsg="" v-bind:modelfeild.sync="" flag="" position="" overlay="" round="" title="" proportion=""></vant-area>
-->
<!-- 说明: 
  typeme: datetime（yyyy-mm-dd hh:mm:ss）、date（yyyy-mm-dd）、year-month（yyyy-mm）
  label: label标题
  placeholder: 提示（默认: 选择省市区）
  inputAlign: 字体对齐方式 (默认: center)
  propBoolean: 是否必填（默认: true）
  propMsg: 必填提示信息（默认: 请输入）
  flag: 是否禁用 （禁用: 'view' 'handle'）
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
      :right-icon="iconClose"
      @click-right-icon.stop="modelfeildme = ''"
      :rules="(propBoolean === 'true')? [{ required: true, message: propMsg }] : []"
      :disabled="(flag === 'view'|| flag === 'handle' )? true : false"/>
      <van-popup v-model="showArea" :position="position" :overlay="overlay" :round="round" :style="`height: ${proportion};`" >
        <van-datetime-picker v-if="typeme !== 'time'" :type="typeme" :title="title" v-model="currentDate" :min-date="minDate" :max-date="maxDate" @cancel="cancelConfirm" @confirm="setAreaConfirm"/>
        <van-datetime-picker v-if="typeme === 'time'" type="time" :title="title" v-model="currentTime" @cancel="cancelConfirm" @confirm="setAreaConfirm"/>
      </van-popup>
  </div>
</template>

<script>
  export default {
    name: 'vantarea',
    props: {
      typeme: {
        type: String,
        default: 'datetime'
      },
      label: {
        type: String
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      inputAlign: {
        type: String,
        default: 'center'
      },
      propBoolean: {
        type: String,
        default: 'true'
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
        iconClose: '',
        currentTime: '12:00',
        currentDate: new Date(),
        minDate: new Date(1970, 0, 1),
        maxDate: new Date(9999, 12, 31)
      }
    },
    watch: {
      'modelfeild'(newVal, oldVal) {
        this.modelfeildme = this.modelfeild
      },
      'modelfeildme'(newVal, oldVal) {
        if (newVal !== '') {
          this.iconClose = 'close'
        } else {
          this.iconClose = ''
          this.$emit('update:modelfeild', this.modelfeildme)
        }
      }
    },
    methods: {
      // 弹出框
      clickShow() {
        if (this.flag !== 'view' && this.flag !== 'handle') {
          this.showArea = true
        }
      },
      // 取消按钮
      cancelConfirm () {
        this.showArea = false
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
          return `${date.getFullYear()}-${date.getMonth()+1 > 9 ? date.getMonth()+1 : '0'+(date.getMonth()+1)}-${date.getDate() > 9 ? date.getDate() : '0'+date.getDate()} ${date.getHours() > 9 ? date.getHours(): '0'+date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes(): '0'+date.getMinutes()}:00`;
        }
        if (this.typeFlag === 'date') {
          return `${date.getFullYear()}-${date.getMonth()+1 > 9 ? date.getMonth()+1 : '0'+(date.getMonth()+1)}-${date.getDate() > 9 ? date.getDate() : '0'+date.getDate()}`;
        }
        if (this.typeFlag === 'time') {
          return `${date}`
        }
        if (this.typeFlag === 'year-month') {
          return `${date.getFullYear()}-${date.getMonth()+1 > 9 ? date.getMonth()+1 : '0'+(date.getMonth()+1)}`;
        }
      }
    }
  }
</script>
