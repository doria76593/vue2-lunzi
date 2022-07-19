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
      // this.$toast('我是消息啊~~')
      this.$toast('我是消息啊~!!', {
        closeButton: {
          text: '点我××',
          callback(toast) {
            console.log('toast', toast)
          },
        },
      })
    },
  },
}
</script>
<style scoped lang="scss">
</style>