<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" :class="{ [`position-${position}`]: true }" v-if="visible">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
// 思路：1-通过两个node.contains来判断是否触发事件
// 2- 可以通过延迟来设置 当hover触发的时候，鼠标移动到内容上 内容是否显示
export default {
  name: 'GPopover',
  data() {
    return { visible: false }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      },
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      },
    },
  },
  mounted() {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  beforeDestroy() {
    if (this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.onClick)
    } else {
      this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover.removeEventListener('mouseleave', this.close)
    }
  },
  methods: {
    close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },

    onClickDocument(e) {
      let popover = this.$refs.popover
      if (e.target.contains(popover)) {
        this.close()
      }
    },
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs
      document.body.appendChild(contentWrapper)

      let { width, height, left, top } = triggerWrapper.getBoundingClientRect()
      let { height: height2 } = contentWrapper.getBoundingClientRect()
      let { x, y } = this.getScroll()

      let positions = {
        top: {
          top: y + top,
          left: x + left,
        },
        bottom: {
          top: y + top + height,
          left: x + left,
        },
        left: {
          top: y + top + (height - height2) / 2,
          left: x + left,
        },
        right: {
          top: y + top + (height - height2) / 2,
          left: x + left + width,
        },
      }
      contentWrapper.style.left = positions[this.position].left + 'px'
      contentWrapper.style.top = positions[this.position].top + 'px'
    },
    onClick(ev) {
      let bool = this.$refs.triggerWrapper.contains(ev.target)
      if (bool) {
        if (this.visible === false) {
          this.open()
        } else {
          this.close()
        }
      }
    },
    getScroll() {
      var supportPageOffset = window.pageXOffset !== undefined
      var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat")
      var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft
      var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
      return { x, y }
    },
  },
}
</script>

<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: middle;
  position: relative;
}
.content-wrapper {
  position: absolute;
  /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.5); */
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;

  padding: 0.5em 1em;
  max-width: 20em;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  word-break: break-all;
  &::before,
  &::after {
    content: '';
    display: block;
    border: 10px solid transparent;
    /* border-top: 10px solid yellow;
    border-bottom: 10px solid yellowgreen;
    border-left: 10px solid green;
    border-right: 10px solid red; */
    width: 0;
    height: 0;
    position: absolute;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before,
    &::after {
      left: 10px;
      /* 解决抖动 */
      border-bottom: none;
    }
    &::before {
      border-top-color: $border-color;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
      border-top: none;
    }
    &::before {
      border-bottom-color: $border-color;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: #fff;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      border-right: none;
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left-color: $border-color;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      border-left: none;
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: $border-color;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>
