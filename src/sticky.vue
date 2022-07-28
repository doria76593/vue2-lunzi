<template>
  <div class="gulu-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="gulu-sticky" ref="wrapper2" :class="{sticky}" :style="{left,width,top:distance+'px'}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "GuluSticky",
  props: {
    distance: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    //bug1 元素距离顶部的距离只能获取一次，不然会有bug
    //bug2:用自己的高度给自己，让自己占位，里面的元素去fix
    // bug3:图片资源可能延迟加载，到时获取的高度不正确
    // bug4:要动态设置left和width
    this.top = this.offsetTop().top
    window.addEventListener('scroll', this.windowScrollHandler)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.windowScrollHandler)
  },
  data() {
    return {
      sticky: false,
      top: 0,
      height: undefined,
      left: undefined,
      width: undefined,
    }
  },
  methods: {
    windowScrollHandler() {

      let scrollTop = this.getScroll().scrollTop
      // console.log(`top:${this.top}---scrollTop:${scrollTop}`)

      if (scrollTop > this.top - this.distance) {
        let { left, width } = this.$refs.wrapper.getBoundingClientRect()
        let { height } = this.$refs.wrapper2.getBoundingClientRect()
        // console.log(`height:${height}---left:${left}---width:${width}`)
        this.height = height + 'px'
        this.left = left + 'px'
        this.with = width + 'px'
        this.sticky = true
      } else {
        this.height = undefined
        this.left = undefined
        this.width = undefined
        this.sticky = false
      }
    },
    offsetTop() {
      let { top } = this.$refs.wrapper.getBoundingClientRect()
      let scrollTop = this.getScroll().scrollTop
      return { top: top + scrollTop }
    },
    getScroll() {
      var scrollLeft = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft
      var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
      return { scrollLeft, scrollTop }
    },
  },
};
</script>
<style scoped lang="scss">
.gulu-sticky {
  &.sticky {
    position: fixed;
    width: 100%;
    left: 0px;
    top: 0px;
  }
}
</style>
