<!-- creat by silin.wang 20.04.20 -->
<!-- 表单组件 - radio单选 -->
<!-- 案列：
  1.引入：import coscolradio from '@/components/vant-component/vant-radio'
  2.注册：'vant-radio': vantradio
  3.使用：<vant-radio coslabel="" :cosprop="" cospropBoolean="" cospropMsg="" v-bind:modelfeild.sync="" :flag="" vanradio1="" vanradio2="" ></vant-radio>
-->
<!-- 说明：
  coslabel：label标题
  cosprop：表单的prop属性
  cospropBoolean: 是否必填（默认：true）
  cospropMsg: 必填提示信息 (默认：请输入)
  direction: 单选框的排列方式（默认：'horizontal'）
  flag： 是否禁用 （禁用：'view' 'handle'）
  shape：单选框的形状（方框：'square'）
  iconSize：单选框大小（默认：16px）
  checkedColor：单选框颜色
  vanradio1：按钮文本1
  vanradio2：按钮文本2
-->
<!-- 注意：暂无 -->


<template>
  <van-field name="radio" :label="coslabel" :rules="(cospropBoolean === 'true')? [{ required: true, message: cospropMsg }] : []">
    <template #input>
      <van-radio-group v-model="modelfeildme" @change="setRadio" :direction="direction" :disabled="(flag === 'view'|| flag === 'handle' ) ? true : false">
        <van-radio name="0" :shape="shape" :icon-size="iconSize" :checked-color="checkedColor">{{vanradio1}}</van-radio>
        <van-radio name="1" :shape="shape" :icon-size="iconSize" :checked-color="checkedColor">{{vanradio2}}</van-radio>
      </van-radio-group>
    </template>
  </van-field>
</template>

<script>
  export default {
    name: 'vantradio',
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
        default: '请选择'
      },
      modelfeild: {
        type: String
      },
      flag: {
        type: String
      },
      direction: {
        type: String,
        default: 'horizontal'
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
      vanradio1: {
        type: String
      },
      vanradio2: {
        type: String
      }
    },
    created () {
      if (this.modelfeild) {
        this.modelfeildme = this.modelfeild
      }
    },
    data () {
      return {
        modelfeildme: ''
      }
    },
    watch: {
      'modelfeild'(newVal, oldVal) {
        this.modelfeildme = this.modelfeild
      }
    },
    methods: {
      setRadio () {
        this.$emit('update:modelfeild', this.modelfeildme)
      }
    }
  }
</script>


