<template>
  <div class="popover" ref="popover" @click="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>

  </div>
</template>

<script>
export default {
  name: 'GPopover',
  data() {
    return { visible: false }
  },
  methods: {
    close() {
      this.visible = false
      // console.log('document 隐藏 popover')
      // document.removeEventListener('click', this.onClickDocument)
    },
    open() {
      this.visible = true
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
    onClickDocument() {},
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
      console.log('ev,,,', ev)
      this.visible = !this.visible
      if (this.visible === true) {
        this.$nextTick(() => {
          // this.close()
          this.positionContent()
          // document.addEventListener('click', this.onClickDocument)
        })
      } else {
        // console.log('vm 隐藏 popover')
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