<!-- creat by silin.wang 20.04.20 -->
<!-- 表单组件 - popups多选弹出框 -->
<!-- 案列: 
  1.引入: import vantpopups from '@/components/vant-components/vant-popups'
  2.注册: 'vant-popups': vantpopups
  3.使用: <vant-popups label="" placeholder="" v-bind:modelfeild.sync="" :dataList=""></vant-popups>
-->
<!-- 说明: 
  label: label标题
  placeholder: 提示（默认: 请选择）
  inputAlign: 字体对齐方式 (默认: right)
  propMsg: 必填提示信息（默认: 请输入）
  flag: 是否禁用 （禁用: 'view'）
  position: 弹出位置，可选值为 top bottom right left （默认: bottom）
  overlay: 是否显示遮罩层（默认: true）
  round: 是否显示圆角（默认: true）
  proportion:  弹框高度（默认: 自适应）
  title: 弹出框标题（默认: 请选择）
  dataList: picker数据列表 (默认: 空数组)
  isString: 定义参数类型(字符串 或 数组)
-->
<!-- 注意: 
  proportion: 百分比
  get-container="body"  挂载在bady节点上
  dataList: (value, code, id, iscommit)4个参数,缺一不可
  isString: 为true时,传modelstring; 为false时,传modelfeild
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
      :error-message="propMsg"
      :disabled="flag === 'view' ? true : false"/>
    <van-popup v-model="showArea" :position="position" :overlay="overlay" :round="round" :style="`height: ${proportion};`" get-container="body">
      <div class="btnStatusBox">
        <div class="btnStatus" @click="getallstatus(true)" v-show="!showicon">全选</div>
        <div class="btnStatus" @click="getallstatus(false)" v-show="showicon">反选</div>
        <div style="font-size: 14px; line-height: 34px;">{{title}}</div>
        <div class="btnStatus" @click="setAreaConfirm">确定</div>
      </div>
      <van-cell v-for="(item, index) in dataListme" :key="index">
        <div style="display: flex; align-items: center;">
          <img src="./images/checked.png" v-show="item.iscommit" @click="changeicon(item, false)">
          <img src="./images/uncheck.png" v-show="!item.iscommit" @click="changeicon(item, true)">
          <div class="optionStyle" @click="changeItemIcon(item)">{{item.value}}</div>
        </div>
      </van-cell>
    </van-popup>
  </div>
</template>

<script>
  import { setTimeout } from 'timers'
  export default {
    name: 'vantpopups',
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
        type: Array,
        default: function() {
          return []
        }
      },
      modelstring: {
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
      this.modelArray = this.modelfeild
      setTimeout(() => {
        if (this.isString === true) {
          this.isStringme = true
          this.modelArray = this.modelstring.split(',')
        }
        if (this.dataList) {
          this.dataListme = this.dataList
        }
        if (this.modelArray.length > 0 && this.dataList) {
          let childLabel = []
          this.modelArray.forEach(item1 => {
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
        isStringme: false,
        showicon: false,
        showArea: false,
        iconClose: '',
        dataListme: [],
        modelfeildme: '',
        modelArray: [],
      }
    },
    methods: {
      // 弹出框
      clickShow() {
        if (this.flag !== 'view') {
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
        if (this.isStringme) {
          let childCodeString = childCode.join(',')
          this.$emit('update:modelstring', childCodeString)
        } else {
          this.$emit('update:modelfeild', childCode)
        }
        this.showArea = false
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