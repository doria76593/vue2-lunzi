<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  components: {},
}
</script>

<style scoped lang="scss">
.g-button-group {
  > .g-button {
    border-radius: 0;
    margin-left: -1px;
    &:hover {
      /* border-color: var(--border-color-hover) !important; */
      position: relative;
      z-index: 10;
    }
    &:first-child {
      margin-left: 0px;
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }
}
</style>
