<!-- creat by silin.wang 20.04.20 -->
<!-- 表单组件 - popup底部选择器 -->
<!-- 案列: 
  1.引入: import vantpopup from '@/components/vant-components/vant-popup'
  2.注册: 'vant-popup': vantpopup
  3.使用: <vant-popup label="" placeholder="" inputAlign="" propBoolean="" propMsg="" v-bind:modelfeild.sync=""  flag="" position="" overlay="" round="" proportion="" title="" dataList_label=""></vant-popup>
-->
<!-- 说明: 
  label: label标题
  placeholder: 提示（默认: 请选择）
  inputAlign: 字体对齐方式 (默认: right)
  propBoolean: 是否必填（默认: true）
  propMsg: 必填提示信息（默认: 请输入）
  flag: 是否禁用 （禁用: 'view' 'handle'）
  position: 弹出位置，可选值为 top bottom right left （默认: bottom）
  overlay: 是否显示遮罩层（默认: true）
  round: 是否显示圆角（默认: true）
  proportion:  弹框高度（默认: 自适应）
  title: 弹出框标题（默认: 请选择）
  dataList: picker数据列表 (默认: 空数组)
  isIconClose: 是否显示关闭按钮(默认: false)
-->
<!-- 注意: 
  proportion: 百分比
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
      @click="clickShow"
      :right-icon="iconClose"
      @click-right-icon.stop="clearClick"
      :required="propBoolean === 'true' ? true : false"
      :error-message="propMsg"
      :disabled="(flag === 'view'|| flag === 'handle' )? true : false"/>
    <van-popup v-model="showArea" :position="position" :overlay="overlay" :round="round" :style="`height: ${proportion};`" get-container="body">
        <div class="btnStatusBox">
          <div class="btnStatus" @click="getallstatus(true)" v-show="!showicon">全选</div>
          <div class="btnStatus" @click="getallstatus(false)" v-show="showicon">反选</div>
          <div style="font-size: 14px; line-height: 34px;">{{title}}</div>
          <div class="btnStatus" @click="setAreaConfirm">确定</div>
        </div>
        <van-cell v-for="(item, index) in dataListme" :key="index">
          <div style="display: flex; align-items: center;">
            <img src="../../assets/checked.png"  v-show="item.iscommit" @click="changeicon(item, false)">
            <img src="../../assets/uncheck.png"  v-show="!item.iscommit" @click="changeicon(item, true)">
            <div class="optionStyle" @click="changeItemIcon(item)">{{item.value}}</div>
          </div>
        </van-cell>
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
        type: String,
        default: '请选择'
      },
      inputAlign: {
        type: String,
        default: 'right'
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
        type: Array,
        default: function() {
          return []
        }
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
      dataList: {
        type: Array,
        default: function () {
          return []
        }
      },
      isIconClose: {
        type: Boolean,
        default: false
      },
      isString: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      setTimeout(() => {
        if (this.isString === true) {
          this.modelfeild = this.modelfeild.split(',')
        }
        if (this.dataList) {
          this.dataListme = this.dataList
        }
        if (this.modelfeild.length > 0 && this.dataList) {
          let childLabel = []
          this.modelfeild.forEach(item1 => {
            this.dataListme.forEach(item2 => {
              if (item1 === item2.code) {
                item2.iscommit = true
                childLabel.push(item2.value)
              }
            })
          })
          this.modelfeildme = childLabel.join(', ')
        }
      }, 500)
    },
    data() {
      return {
        isString: false,
        showicon: false,
        showArea: false,
        iconClose: '',
        dataListme: [],
        modelfeildme: '',
      }
    },
    watch: {
      'modelfeildme'(newVal, oldVal) {
        if (newVal !== '' && this.isIconClose) {
          this.iconClose = 'close'
        } else {
          this.iconClose = ''
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
      // 全选 | 反选
      getallstatus (flag) {
        this.dataListme.forEach(function (item) {
          item.iscommit = flag
        })
        this.showicon = flag
      },
      // 点击 选中 勾选框
      changeicon(item1, flag) {
        this.dataListme.forEach(function (item2) {
          if (item1.id === item2.id) {
            item2.iscommit = flag
          }
        })
      },
      // 点击 选中 选项
      changeItemIcon(item) {
        item.iscommit = !item.iscommit
      },
      // 确定按钮
      setAreaConfirm() {
        let childCode = []
        let childLabel = []
        this.dataListme.forEach(item => {
          if (item.iscommit) {
            childCode.push(item.code)
            childLabel.push(item.value)
          }
        })
        this.modelfeildme = childLabel.join(', ')
        if (this.isString) {
          let childCodeString = childCode.join(',')
          this.$emit('update:modelfeild', childCodeString)
        } else {
          this.$emit('update:modelfeild', childCode)
        }
        this.showArea = false
      },
      // 清除按钮
      clearClick() {
        this.modelfeildme = ''
        this.$emit('update:modelfeild', [])
      }
    }
  }
</script>

<style lang="scss">
  .btnStatusBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #dbdbdb;
    padding: 5px 10px;
    .btnStatus {
      width: 64px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      font-size: 12px;
      background-color: #1A7D70;
      border-radius: 5px;
      color: #FFFFFF;
    }
  }
  .optionStyle {
    width: 100%;
    height: 25px;
    padding-left: 20px;
  }
</style>