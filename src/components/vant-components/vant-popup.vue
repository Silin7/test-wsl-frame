<!-- creat by silin.wang 20.04.20 -->
<!-- vant组件 - popup单选弹出框 -->
<!-- 案列: 
  1.引入: import vantpopup from '@/components/vant-components/vant-popup'
  2.注册: 'vant-popup': vantpopup
  3.使用: <vant-popup label="" placeholder="" title="" v-bind:modelfeild.sync="" :dataList_label="" :dataList_value=""></vant-popup>
-->
<!-- 说明: 
  label: label标题
  placeholder: 提示
  inputAlign: 字体对齐方式 (默认: right)
  propMsg: 必填提示信息
  flag: 是否禁用 （禁用: 'view'）
  position: 弹出位置，可选值为 top bottom right left （默认: bottom）
  overlay: 是否显示遮罩层（默认: true）
  round: 是否显示圆角（默认: true）
  proportion:  弹框高度（默认: 自适应）
  title: 弹出框标题（默认: 请选择）
  dataList_label: picker数据列表 (默认: 空数组)
  dataList_value:picker数据列表对应的数据
-->
<!-- 注意: 
  proportion: 百分比
  dataList_label: 为数组包含字符串格式
  dataList_value: 数据顺序要和label数组对应
  get-container="body"  挂载在bady节点上
 -->

<template>
  <div>
    <van-field
      readonly
      :label="label"
      :value="modelfeildme"
      :placeholder="placeholder"
      :input-align="inputAlign"
      :error-message="propMsg"
      :disabled="flag === 'view' ? true : false"
      @click="clickShow"/>
      <van-popup v-model="showArea" :position="position" :overlay="overlay" :round="round" :style="`height: ${proportion};`" get-container="body">
        <van-picker show-toolbar :title="title" :columns="dataList_label" @cancel="cancelConfirm" @confirm="setAreaConfirm"/>
      </van-popup>
  </div>
</template>

<script>
  import { setTimeout } from 'timers';
  export default {
    name: 'vantpopup',
    props: {
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
      proportion: {
        type: String
      },
      title: {
        type: String,
        default: '请选择'
      },
      dataList_label: {
        type: Array,
        default: function () {
          return []
        }
      },
      dataList_value: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    mounted() {
      setTimeout(() => {
        if (this.dataList_value && this.modelfeild) {
          this.dataList_value.forEach((item, index) => {
            if (item === this.modelfeild) {
              this.modelfeildme = this.dataList_label[index]
            }
          })
        }
      }, 500)
    },
    data() {
      return {
        showArea: false,
        modelfeildme: '',
        indexme: ''
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
        this.modelfeildme = ''
        this.$emit('update:modelfeild', this.modelfeildme)
        this.showArea = false
      },
      // 确定按钮
      setAreaConfirm(value, index) {
        this.modelfeildme = value
        this.indexme = index
        this.$emit('update:modelfeild', this.dataList_value[this.indexme])
        this.showArea = false
      }
    }
  }
</script>
