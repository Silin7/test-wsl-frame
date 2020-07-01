<!-- creat by silin.wang 20.04.20 -->
<!-- vant组件 - checkbox多选 -->
<!-- 案列: 
  1.引入: import vantcheckbox from '@/components/vant-components/vant-checkbox'
  2.注册: 'vant-checkbox': vantcheckbox
  3.使用: <vant-checkbox label="" v-bind:modelfeild.sync="" :checkboxData="" flag="" max=""></vant-checkbox>
-->
<!-- 说明: 
  label: label标题
  propMsg: 必填提示信息
  direction: 复选框的排列方式（默认(横): 'horizontal', (竖): 'vertical'）
  flag:  是否禁用 （禁用: 'view'）
  max: 限制最大选择数量
  shape: 复选框的形状（默认(圆): 'round', (方): 'square'）
  iconSize: 复选框大小（默认: 16px）
  checkedColor: 多选框颜色
  checkboxData: 多选框数据列表
-->
<!-- 注意: 
  checkboxData: 数组类型, 控制checkbox个数, value, label
 -->

<template>
  <van-field name="checkbox" :label="label" :error-message="propMsg">
    <template #input>
      <van-checkbox-group v-model="modelfeildme" :direction="direction" @change="setCheckbox" :disabled="flag === 'view' ? true : false" :max="max">
        <van-checkbox v-for="(item, index) in checkboxData" :key="index" :shape="shape" :icon-size="iconSize" :checked-color="checkedColor" :name="item.value">{{item.label}}</van-checkbox>
      </van-checkbox-group>
    </template>
  </van-field>
</template>

<script>
  export default {
    name: 'vantcheckbox',
    props: {
      label: {
        type: String
      },
      propMsg: {
        type: String,
      },
      modelfeild: {
        type: Array
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      flag: {
        type: String
      },
      max: {
        type: Number | String
      },
      shape: {
        type: String
      },
      iconSize: {
        type: String,
        default: '16px'
      },
      checkedColor: {
        type: String
      },
      checkboxData: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    mounted () {
      if (this.modelfeild) {
        this.modelfeildme = this.modelfeild
      }
    },
    data () {
      return {
        modelfeildme: []
      }
    },
    watch: {
      'modelfeild'(newVal, oldVal) {
        this.modelfeildme = this.modelfeild
      }
    },
    methods: {
      setCheckbox () {
        this.$emit('update:modelfeild', this.modelfeildme)
      }
    }
  }
</script>
