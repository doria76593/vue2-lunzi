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
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        console &&
          console.warn &&
          console.warn(
            'tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件'
          )
      }
    },
    selectTab() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'GTabsHead') {
          vm.$children.forEach((childVm) => {
            if (
              childVm.$options.name === 'GTabsItem' &&
              childVm.name === this.selected
            ) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    },
  },
  mounted() {
    this.checkChildren()
    this.selectTab()
  },
}
</script>

<style scoped lang="scss">
</style>
