<!-- creat by silin.wang 20.04.22 -->
<!-- 表单组件 - card卡片 -->
<!-- 案列: 
  1.引入: import vantcard from '@/components/vant-component/vant-card'
  2.注册: 'vant-card': vantcard
  3.使用: <vant-card :dataList="" :itemStyle="" :indexme="" :itemTitle="" :itemContent=""></vant-card>
-->
<!-- 说明: 
  dataList: 数组格式的数据列表
  itemStyle: 样式（默认: ['vantCard-cellTitle', 'vantCard-cellTitle', 'vantCard-cellTitle vantCard-stateTitle']）
  indexme: 行数（默认: 3行）
  itemTitle: 行标题
  itemContent: 行内容
-->
<!-- 注意: 
  itemTitle：格式为数组包含字符串，例：['物料', '供应商', '状态'],
  itemContent: 参数为对象item的键值，例：['maktx', 'suppliername', 'state']
-->

<template>
  <div>
    <div v-for="(item, index) in dataList" :key="index">
      <div class="vantCard-cardGroup">
        <div class="vantCard-detailButton">详情 > </div>
        <div :class="itemStyle[index-1]" v-for="index in indexme" :key="index"><span>{{itemTitle[index-1]}}：</span><span>{{item[itemContent[index-1]]}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vantcard',
    props: {
      dataList: {
        type: Array,
        default: function() {
          return []
        }
      },
      indexme: {
        type: Number,
        default: 3
      },
      itemStyle: {
        type: Array,
        default: function() {
          return ['vantCard-cellTitle', 'vantCard-cellTitle', 'vantCard-cellTitle vantCard-stateTitle']
        }
      },
      itemTitle: {
        type: Array,
        default: function() {
          return []
        }
      },
      itemContent: {
        type: Array,
        default: function() {
          return []
        }
      }
    },
    mounted () {
    },
    data() {
      return {
      }
    },
    watch: {
    },
    methods: {
    }
  }
</script>