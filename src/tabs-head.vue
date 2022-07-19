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
      console.log(item)
      console.log(vm)
    })
  },

  methods: {},
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
$blue: #409eff;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    height: 2px;
    background: $blue;
    width: 100px;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
