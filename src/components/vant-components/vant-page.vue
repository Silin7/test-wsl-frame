<!-- creat by silin.wang 20.05.11 -->
<!-- 表单组件 - page 输入框 -->
<!-- 案列: 
  1.引入: import vantpage from '@/components/vant-components/vant-page'
  2.注册: 'vant-page': vantpage 
  3.使用: <vant-page v-bind:modelfeild.sync="currentPage" :totalItems="totalItems" @update:changePage="changePage"></vant-page>
-->
<!-- 说明: 
  currentPage: 当前页
  totalItems: 数据条数
-->
<!-- 注意: 
  暂无
 -->
 
<template>
  <van-pagination
    v-model="currentPage"
    :total-items="totalItems"
    :items-per-page="10"
    :show-page-size="3"
    force-ellipses
    @change="changePage"
    v-if="totalItems > 10 ? true : false"
    class="vantPage"
  />
</template>

<script>
  export default {
    name: 'vantpage',
    props: {
      modelfeild: {
        type: Number,
        default: 1
      },
      totalItems: {
        type: Number | String,
        default: ''
      }
    },
    mounted() {
      if (this.modelfeild) {
        this.currentPage = this.modelfeild
      }
    },
    data() {
      return {
        currentPage: 1,
      }
    },
     watch: {
      'modelfeild'(newVal, oldVal) {
        this.currentPage = this.modelfeild
      }
    },
    methods: {
      changePage (val) {
        this.$emit('update:changePage', val)
      }
    }
  }
</script>

<style lang="scss">
// .vantPage{
//   width: 100vw;
//   position: absolute;
//   bottom: 0;
//   .van-pagination__item--disabled {
//     opacity: 1;
//   }
// }
</style>
