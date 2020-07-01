<!-- creat by silin.wang 20.05.12 -->
<!-- 表单组件 - button按钮 -->
<!-- 案列: 
  1.引入: import vantbutton from '@/components/vant-components/vant-button'
  2.注册: 'vant-button': vantbutton
  3.使用: <vant-button ></vant-button>
-->
<!-- 说明:
  position: 按钮位置 (默认: center) flex-start、flex-end、center、space-between、space-around五种类型
  type: 按钮类型  (默认: primary) default、primary、info、warning、danger五种类型
  size: 按钮大小 (默认: normal) large、normal、small、mini四种尺寸
  round: 是否圆形按钮 (默认: false)
  label: label按钮名称
-->
<!-- 注意: 
暂无
 -->

<template>
  <div class="buttonBox" :style="`justify-content: ${position};`">
    <van-button :type="type" :color="color" :size="size" :round="round" @click="clickme">{{label}}</van-button>
  </div>
</template>

<script>
  export default {
    name: 'vantbutton',
    props: {
      position: {
        type: String
      },
      type: {
        type: String,
        default: 'primary'
      },
      color: {
        type: String
      },
      size: {
        type: String,
        default: 'normal'
      },
      label: {
        type: String,
        default: '按钮'
      },
      round: {
        type: Boolean,
        default: false
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
      clickme() {
        this.$emit('clickBtn')
      }
    }
  }
</script>

<style lang="scss">
  .buttonBox {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    .van-button--normal {
      padding: 0 20px;
    }
  }
</style>
