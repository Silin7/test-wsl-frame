<!-- creat by silin.wang 20.04.20 -->
<!-- 表单组件 - uploader上传文件 -->
<!-- 案列: 
  1.引入: import vantuploader from '@/components/vant-component/vant-uploader'
  2.注册: 'vant-uploader': vantuploader
  3.使用: <vant-uploader label="" propBoolean="" propMsg="" v-bind:modelfeild.sync="" multiple="" maxCount="" flag=""></vant-uploader>
-->
<!-- 说明: 
  label: label标题
  propBoolean: 是否必填（默认: true）
  propMsg: 必填提示信息 (默认: 请输入)
  flag:  是否禁用 （禁用: 'view' 'handle'）
  multiple: 是否开启图片多选，部分安卓机型不支持
  maxCount: 文件上传数量限制
-->
<!-- 注意: 暂无 -->

<template>
  <van-field name="uploader" :label="label" :rules="(propBoolean === 'true')? [{ required: true, message: propMsg }] : []">
    <template #input>
      <van-uploader
        v-model="modelfeildme"
        :multiple="multiple"
        :max-count="maxCount"
        :after-read="setUploader"
        :disabled="(flag === 'view'|| flag === 'handle' ) ? true : false"/>
    </template>
  </van-field>
</template>

<script>
  export default {
    name: 'vantuploader',
    props: {
      label: {
        type: String
      },
      propBoolean: {
        type: String,
        default: 'true'
      },
      propMsg: {
        type: String,
        default: '至少上传一个文件'
      },
      modelfeild: {
        type: Array
      },
      flag: {
        type: String
      },
      multiple: {
        type: Boolean,
        default: false
      },
      maxCount: {
        type: Boolean | String,
        default: '1'
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
      setUploader (file) {
        console.log('file', file)
        // file.status = 'uploading';
        // file.message = '上传中...';

        // setTimeout(() => {
        //   file.status = 'failed';
        //   file.message = '上传失败';
        // }, 1000)
        this.$emit('update:modelfeild', this.modelfeildme)
      }
    }
  }
</script>


