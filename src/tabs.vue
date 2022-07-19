<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'GTabs',
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  props: {
    selected: {
      type: String | Number,
      required: true,
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  mounted() {
     this.eventBus.$emit('update:selected', this.selected)
  },
}
</script>

<style scoped lang="scss">
</style>
