<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GButtonGroup',
  data() {
    return {}
  },
  mounted() {
    let nodes = this.$el.childNodes
    for (let node of nodes) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(
          `g-button-group 的子元素应该全是 g-button，但是你写的是 ${name}`
        )
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import 'var.scss';
.g-button-group {
  display: inline-flex;
  align-items: center;
  > .g-button {
    border-radius: 0;
    margin-left: -1px;
    &:hover {
      position: relative;
      z-index: 10;
    }
    &:first-child {
      margin-left: 0px;
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
}
</style>
