<template>
  <div class="popover" ref="popover" @click="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>

  </div>
</template>

<script>
// 思路：1-通过两个node.contains来判断是否触发事件
export default {
  name: 'GPopover',
  data() {
    return { visible: false }
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
      let contentWrapper = this.$refs.contentWrapper
      let popover = this.$refs.popover
      let { left, top } = popover.getBoundingClientRect()

      document.body.appendChild(contentWrapper)
      let scroll = this.getScroll()
      contentWrapper.style.left = `${scroll.x + left}px`
      contentWrapper.style.top = `${scroll.y + top}px`
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
      var x =
        window.pageXOffset !== undefined
          ? window.pageXOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollLeft
      var y =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop
      return {
        x,
        y,
      }
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
  transform: translateY(-100%);
  margin-top: -10px;
  padding: 0.5em 1em;
  max-width: 20em;
  border: 1px solid $border-color;
  border-radius: $border-radius;

  &::before,
  &::after {
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
    left: 10px;
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
</style> 