<template>
  <div class="g-slides">
    <div class="g-slides-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selected: {
      type: String,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {
    this.$children.forEach((vm) => (vm.selected = this.selected))
  },
}
</script>
<style scoped lang="scss">
.g-slides {
  border: 1px solid black;
  .g-slides-wrapper {
    position: relative;
  }
}
</style>