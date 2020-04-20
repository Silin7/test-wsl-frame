<!-- creat by silin.wang 20.04.20 -->
<!-- 表单组件 - checkbox多选 -->
<!-- 案列：
  1.引入：import vantcheckbox from '@/components/vant-component/vant-checkbox'
  2.注册：'vant-checkbox': vantcheckbox
  3.使用：<vant-checkbox coslabel="" cospropBoolean="" cospropMsg="" v-bind:modelfeild.sync="" direction="" flag="" max="" shape="" iconSize="" checkedColor="" dataList=""></vant-checkbox>
-->
<!-- 说明：
  coslabel：label标题
  cospropBoolean：是否必填（默认：true）
  cospropMsg：必填提示信息 (默认：请输入)
  direction：单选框的排列方式（默认：'horizontal'）
  flag： 是否禁用 （禁用：'view' 'handle'）
  max：限制最大选择数量
  shape：单选框的形状（方框：'square'）
  iconSize：单选框大小（默认：16px）
  checkedColor：单选框颜色
  dataList：多选框数据列表
-->
<!-- 注意：暂无 -->

<template>
  <van-field name="checkbox" :label="coslabel" :rules="(cospropBoolean === 'true')? [{ required: true, message: cospropMsg }] : []">
    <template #input>
      <van-checkbox-group v-model="modelfeildme" :direction="direction" @change="setCheckbox" :disabled="(flag === 'view'|| flag === 'handle' ) ? true : false" :max="max">
        <van-checkbox v-for="(item, index) in dataList" :name="item.value" :key="index" :shape="shape" :icon-size="iconSize" :checked-color="checkedColor">
          {{item.lable}}
        </van-checkbox>
      </van-checkbox-group>
    </template>
  </van-field>
</template>

<script>
  export default {
    name: 'vantcheckbox',
    props: {
      coslabel: {
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
      dataList: {
        type: Array
      }
    },
    created () {
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
