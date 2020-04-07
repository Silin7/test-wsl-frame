<template>
  <div>
    <el-form>
      <cos-col-date-mul datetype="datetimerange" v-bind:modelfeild.sync="mainModel.floorPrice" :cosprop="floorPrice" coslabel="date日期选择器" :flag="flag"></cos-col-date-mul>
    </el-form>
  </div>
</template>

<script>
  import coscoldatemul from '@/components/form-component/cos-col-date-mul'
  export default {
    components: {
      'cos-col-date-mul': coscoldatemul
    },
    mounted () {
      this.$http({
        method: 'get',
        url: '/api/stpwin/list?t=1585893511126&spl=&matnr=&state=&bukrs=&page=1&limit=10',
      }).then(res => {
        console.log('res');
      }).catch(function(err){
          console.log(err)
      })
    },
    data () {
      return {
        mainModel: {
          floorPrice: []
        },
        floorPrice: '',
        flag: ''
      }
    },
    methods: {
      changeDateMul (val) {
        this.mainModel.floorPrice = val
      }
    }
  }
</script>
