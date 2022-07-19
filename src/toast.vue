<template>
  <div class="g-toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {}
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000)
    }
  },
  methods: {
    close() {
      console.log('this.$el',this.$el)
      this.$el.remove()//js 删除自己和子节点
      this.$destroy()//删除事件绑定等
    },
  },
}
</script>
<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.g-toast {
  font-size: $font-size;
  line-height: $toast-height;
  background: $toast-bg;
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
}
</style>