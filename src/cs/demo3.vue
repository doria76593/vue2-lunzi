<template>
  <div>
    <button @click="handleClick">点击</button>
  </div>
</template>
<script>
export default {

  data() {
    return {}
  },

  methods: {
    handleClick() {
      this.$toast('我是msg')
    },
  },
}
</script>
<style scoped lang="scss">
</style>