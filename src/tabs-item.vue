<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GTabsItem',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {},
  components: {},
}
</script>

<style scoped lang="scss">
</style>
