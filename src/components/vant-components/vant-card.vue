<!-- creat by silin.wang 20.04.22 -->
<!-- vant组件 - card卡片 -->
<!-- 案列: 
  1.引入: import vantcard from '@/components/vant-components/vant-card'
  2.注册: 'vant-card': vantcard
  3.使用: <vant-card :indexme="" :itemTitle="" :itemContent="" :dataList="" :itemStyle=""></vant-card>
-->
<!-- 说明: 
  dataList: 数组格式的数据列表
  indexme: 行数（默认: 3行）
  itemStyle: 样式
  itemTitle: 行标题
  itemContent: 行内容
-->
<!-- 注意: 
  indexme: 3,
  itemTitle: ['物料', '供应商', '状态'],
  itemContent: ['maktx', 'suppliername', 'state'],
  dblistData: [{maktx: '物料1', suppliername: '供应商1', state: '状态1'}, {maktx: '物料2', suppliername: '供应商2', state: '状态2'}, {maktx: '物料3', suppliername: '供应商3', state: '状态3'}],
  itemStyle: ['vantCard-cellTitle', 'vantCard-cellTitle', 'vantCard-cellTitle vantCard-stateTitle'],
-->

<template>
  <div>
    <div v-for="(item, index) in dataList" :key="index">
      <div class="vantCard-cardGroup" @click="clickCard(item)">
        <div class="vantCard-detailButton">{{operateTxt}}</div>
        <div :class="itemStyle[index-1]" v-for="index in indexme" :key="index">
          <span>{{itemTitle[index-1]}}：</span>
          <span>{{item[itemContent[index-1]]}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import './style/vant-card.scss'
  export default {
    name: 'vantcard',
    props: {
      dataList: {
        type: Array,
        default: function() {
          return []
        }
      },
      operateTxt: {
        type: String,
        default: '详情 > '
      },
      indexme: {
        type: Number,
        default: 3
      },
      itemStyle: {
        type: Array,
        default: function() {
          return []
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
      clickCard(item) {
        this.$emit('clickCard', item)
      }
    }
  }
</script>

