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
      this.$toast('你的智商需要充值！', {
        position: 'top',
        enableHtml: false,
        closeButton: {
          text: '已充值',
          callback() {
            console.log('他说已经充值智商了')
          },
        },
        autoClose: false,
        autoCloseDelay: 3,
      })
    },
  },
}
</script>
<style scoped lang="scss">
</style>