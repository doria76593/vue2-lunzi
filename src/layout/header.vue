<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'gHeader',
  data() {
    return {}
  },
  methods: {},
  components: {},
}
</script>

<style scoped lang="scss">
.header {
  height: 100px;
}
</style>
