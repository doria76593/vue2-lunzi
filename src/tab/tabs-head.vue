<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GTabsHead',
  inject: ['eventBus'],
  data() {
    return {}
  },

  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect()
      console.log(width, height, top, left)
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    })
  },

  methods: {},
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
$blue: #409eff;
$border-color: #ddd;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    height: 2px;
    background: $blue;
    transition: all 350ms;
  }
  > .actions-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    flex-shrink: 0;
  }
}
</style>
