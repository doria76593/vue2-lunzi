<template>
  <div class="g-nav-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluNavItem',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scoped lang="scss">
</style>