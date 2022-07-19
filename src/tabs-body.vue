<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GBody',
  inject: ['eventBus'],
  data() {
    return {}
  },

  mounted() {
    // console.log('儿子,', this.eventBus)
  },
  methods: {},
  components: {},
}
</script>

<style scoped lang="scss">
</style>
