<template>
  <vant-uploader label="上传文件" v-bind:modelfeild.sync="mainModel.url" maxCount="3" :multiple="true"></vant-uploader>
</template>

<script>
  import vantuploader from '@/components/vant-component/vant-uploader'
  export default {
    components: {
      'vant-uploader': vantuploader
    },
    data() {
      return {
         mainModel: {
          url: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }]
        },
      }
    },
    watch: {
      'mainModel.url'(newval) {
        console.log(newval, 'newval')
      }
    }
  }
</script>
