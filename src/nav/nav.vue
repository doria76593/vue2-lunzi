<template>
  <div class="g-nav">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluNav',
  props: {
    selected: {
      type: String,
    },
  },
  computed: {
    items() {
      return this.$children.filter((vm) => vm.$options.name === 'GuluNavItem')
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scoped lang="scss">
.g-nav {
  border: 1px solid red;
}
</style>