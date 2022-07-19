<template>
  <div class="g-toast">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
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
      default: 22222,
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: undefined,
        }
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
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
      this.$el.remove() //js 删除自己和子节点
      this.$destroy() //删除事件绑定等
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this) //this === toast实例
      }
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
  min-height: $toast-height;
  line-height: 1.8;
  background: $toast-bg;
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0px 16px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  .close {
    padding-left: 16px;
    flex-shrink: 0;
    cursor: pointer;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>