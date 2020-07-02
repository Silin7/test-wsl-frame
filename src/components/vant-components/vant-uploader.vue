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

<style lang="scss" scoped>
.uploadeBtn  {
  width: 100px;
  height: 36px;
  background-color: #1A7D70;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  font-weight: 700;
  border-radius: 5px;
}
.file_card {
  width: 96%;
  height: 60px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  box-sizing: border-box;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding: 6px 0px 6px 10px;
  .file_card_information {
    width: 80%;
    height: 50px;
    line-height: 50px;
    .file_card_information_filetitle {
      font-size: 12px;
      display: inline-block;
      width: 23%;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .file_card_information_filename {
      font-size: 14px;
      display: inline-block;
      width: 76%;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
  .file_card_button {
    width: 58px;
    height: 50px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    .file_card_button_delete {
      font-size: 12px;
      width: 40px;
      height: 18px;
      line-height: 18px;
      text-align: center;
      color: #1A7D70;
      border: 1px solid #1A7D70;
    }
    .file_card_button_download {
      font-size: 12px;
      width: 40px;
      height: 18px;
      line-height: 18px;
      text-align: center;
      color: #FFFFFF;
      background-color: #1A7D70;
    }
  }
}
</style>
