<template>
  <div>
    <component is='eventBus1'></component>
    <component is='eventBus2'></component>
  </div>
</template>

<script>
import EventBus from '../../api/eventBus.js'
import eventBus1 from './event-bus1.vue'
import eventBus2 from './event-bus2.vue'
export default {
  components: {
    'eventBus1': eventBus1,
    'eventBus2': eventBus2
  }
}
</script>
