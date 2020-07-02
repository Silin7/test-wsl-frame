<!-- creat by silin.wang 20.04.20 -->
<!-- vant组件 - uploader上传文件 -->
<!-- 案列: 
  1.引入: import vantuploader from '@/components/vant-components/vant-uploader'
  2.注册: 'vant-uploader': vantuploader
  3.使用: <vant-uploader label="" v-bind:modelfeild.sync=""></vant-uploader></vant-uploader>
-->
<!-- 说明: 
  label: label标题
  propMsg: 必填提示信息
  inputAlign: 上传按钮的位置 (默认: right)
  flag:  是否禁用 （禁用: 'view'）
  multiple: 是否开启图片多选，部分安卓机型不支持
  maxCount: 文件上传数量限制
-->
<!-- 注意: 
  上传和下载 的url需要和后台对接
  token存储在localstorage里面
 -->

<template>
  <div>
    <van-field name="uploader" :label="label" :error-message="propMsg" :input-align="inputAlign">
      <template #input>
        <van-uploader 
          :multiple="multiple"
          :max-count="maxCount"
          :after-read="setUploader"
          :preview-image="false"
          :disabled="flag === 'view' ? true : false">
          <div class="uploadeBtn"><van-icon name="upgrade" color="#FFFFFF"/>上传文件</div>
        </van-uploader>
      </template>
    </van-field>
    <div v-for="(item, index) in dataFileList" :key="index">
      <div class="file_card">
        <div class="file_card_information">
          <span class="file_card_information_filetitle">文件名称：</span>
          <span class="file_card_information_filename">{{item.name}}</span>
        </div>
        <div class="file_card_button">
          <div class="file_card_button_delete" @click="clickDelete(item)">删除</div>
          <div class="file_card_button_download" @click="clickDownload(item)">下载</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import config from '@/api/baseConfig.js'
  import './style/vant-uploader.scss'
  export default {
    name: 'vantuploader',
    props: {
      label: {
        type: String
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
      modelfileList: {
        type: Array,
        default: function() {
          return []
        }
      },
      inputAlign: {
        type: String,
        default: 'right'
      },
      flag: {
        type: String
      },
      multiple: {
        type: Boolean,
        default: false
      },
      maxCount: {
        type: Number | String,
        default: '1'
      }
    },
    mounted () {
      this.tokenme = localStorage.getItem('token')
      if (this.modelfileList.length > 0) {
        this.dataFileList = this.modelfileList
        this.dataFileList.forEach(item => {
          this.parentFiles.push(item.fileId)
        })
      }
    },
    data () {
      return {
        tokenme: '',
        fileIds: [],
        dataFileList: [],
        parentFiles: [],
      }
    },
    methods: {
      // 上传附件
      setUploader (file) {
        let _this = this
        var formData = new FormData(); //构造一个 FormData，把后台需要发送的参数添加
        formData.append('file', file.file); //接口需要传的参数
        axios({
          method: "post",
          url: `${config.baseURL}/nfm/uploadfile?token=${this.tokenme}`,
          data: formData,//（名字是后台接口参数确定的）
          headers: {
            // 修改请求头
            "Content-Type": "multipart/form-data"
          }
        }).then(res => {
          _this.fileIds = []
          _this.dataFileList.push({ 'name': file.file.name, 'fileId': res.data.fileId})
          _this.dataFileList.forEach(item => {
            _this.fileIds.push(item.fileId)
          })
          _this.$emit('update:modelfeild', this.fileIds)
        })
      },
      // 下载查看附件
      clickDownload(item) {
        window.location.href = `${config.baseURL}/nfm/download/${item.fileId}?token=${this.tokenme}`
      },
      // 删除附件
      clickDelete(item) {
        this.fileIds = []
        this.dataFileList.forEach((item2, index) => {
          if (item.fileId === item2.fileId) {
            this.dataFileList.splice(index, 1)
          }
        })
        this.dataFileList.forEach(item => {
          this.fileIds.push(item.fileId)
        })
        this.$emit('update:modelfeild', this.fileIds)
      }
    }
  }
</script>
