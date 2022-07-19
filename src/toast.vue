<template>
  <div class="wrapper" :class="toastClasses">
    <div class="g-toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">
        {{closeButton.text}}
      </span>
    </div>
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
      type: [Boolean, Number],
      default: 3,
      validator(value) {
        return value === false || typeof value === 'number'
      },
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
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      },
    },
  },
  data() {
    return {}
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true,
      }
    },
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  methods: {
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`
      })
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    close() {
      this.$el.remove() //js 删除自己和子节点
      this.$emit('beforeClose')
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
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  /* wrapper只通过定位来负责左右的居中,让里面的toast通过transform来负责上下的居中 */
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration: 300ms;
  &.position-top {
    top: 0;
    .g-toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .g-toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .g-toast {
      animation: fade-in $animation-duration;
    }
  }

  .g-toast {
    font-size: $font-size;
    min-height: $toast-height;
    line-height: 1.8;
    background: $toast-bg;
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0px 16px;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    .message {
      padding: 8px 0;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
      cursor: pointer;
    }
    .line {
      /* height: 100%;父元素设置了min-height，没设置height，则子元素设置height: 100%无效 */
      border-left: 1px solid #666;
      margin-left: 16px;
    }
  }
}
</style>