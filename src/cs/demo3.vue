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
      this.$toast(
        `你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`,
        {
          position: 'middle',
          enableHtml: false,
          closeButton: {
            text: '已充值',
            callback() {
              console.log('他说已经充值智商了')
            },
          },
          autoClose: false,
        }
      )
    },
  },
}
</script>
<style scoped lang="scss">
</style>