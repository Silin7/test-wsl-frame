<template>
  <div>
    <el-form>
      <cos-col-select-mul v-bind:modelfeild.sync="mainModel.floorPrice" coslabel="select多选选择器" :flag="flag" :cosList="cosList"></cos-col-select-mul>
    </el-form>
  </div>
</template>

<script>
  import coscolselectmul from '@/components/form-component/cos-col-select-mul'
  export default {
    components: {
      'cos-col-select-mul': coscolselectmul
    },
    data () {
      return {
        mainModel: {
          floorPrice: ['1', '2']
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
      changeSelectMul (val) {
        this.mainModel.floorPrice = val
      }
    }
  }
</script>
