<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'gLayout',
  data() {
    return {
      layoutClass: {
        hasSider: false,
      },
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      console.log(vm.$options.name)
      if (vm.$options.name === 'gSider') {
        this.layoutClass.hasSider = true
      }
    })
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.layout {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
