<template>
  <div class="layout">
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
.layout{
  border:  1px solid green;
  display: flex;
  flex-direction: column;
}
</style>
