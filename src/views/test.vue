<template>
  <div>
    <vant-field label="field1" placeholder="field1" v-bind:modelfeild.sync="field1" @setField="setField1" :errorMsg="errorMsg1"></vant-field>
  </div>
</template>

<script>
import vantfield from '@/components/vant-components/vant-field'
export default {
  components: {
    'vant-field': vantfield
  },
  data() {
    return {
      field1: '',
      errorMsg1: '',
    }
  },
  methods: {
    setField1(value) {
      if (value === '123') {
        this.errorMsg1 = '格式错误'
      } else {
        this.errorMsg1 = ''
      }
    },
    
  }
}
</script>
