<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'GCollapse',
  props: {
    selected: {
      type: [String, Array],
      required: true,
    },
    single: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.single = this.single
    })
    this.eventBus.$emit('update:selected', this.selected)

    this.eventBus.$on('update:addSelected', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      if (this.single) {
        selectedCopy = name
      } else {
        selectedCopy.push(name)
      }
      this.$emit('update:selected', selectedCopy)
      this.eventBus.$emit('update:selected', selectedCopy)
    })
    this.eventBus.$on('update:removeSelected', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      if (this.single) {
        selectedCopy = name
      } else {
        let index = selectedCopy.indexOf(name)
        selectedCopy.splice(index, 1)
      }
      this.$emit('update:selected', selectedCopy)
      this.eventBus.$emit('update:selected', selectedCopy)
    })
  },
  methods: {},
}
</script>
<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
