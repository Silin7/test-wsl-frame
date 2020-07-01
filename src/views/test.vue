<template>
  <div>
    <vant-checkbox label="多选" v-bind:modelfeild.sync="checkbox" :checkboxData="checkboxData" flag="" max="2"></vant-checkbox>
  </div>
</template>

<script>
import vantcheckbox from '../components/vant-components/vant-checkbox'
export default {
  components: {
    'vant-checkbox': vantcheckbox
  },
  data() {
    return {
      checkbox: [],
      checkboxData: [
        { label: '选择1', value: '1'},
        { label: '选择2', value: '2'},
        { label: '选择3', value: '3'},
      ]
    }
  }
}
</script>
