<template>
  <div class="popover" ref="popover" @click="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>{{visible}}
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
.popover {
  border: 1px solid yellowgreen;
  display: inline-block;
  vertical-align: middle;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style> 