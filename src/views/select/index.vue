<template>
  <div>
    <el-form>
      <cos-col-select v-bind:modelfeild.sync="mainModel.floorPrice" coslabel="select单选选择器" :flag="flag" :cosList="cosList"></cos-col-select>
    </el-form>
  </div>
</template>

<script>
  import coscolselect from '@/components/model-component/cos-col-select'
  export default {
    components: {
      'cos-col-select': coscolselect
    },
    data () {
      return {
        mainModel: {
          floorPrice: ''
        },
        floorPrice: '',
        flag: '',
        multiple: 'true',
        cosList:[
          {label: '选项1', value: '1'},
          {label: '选项2', value: '2'},
          {label: '选项3', value: '3'},
          {label: '选项4', value: '4'}
        ]
      }
    },
    methods: {
      changeSelect (val) {
        this.mainModel.floorPrice = val
      }
    }
  }
</script>
