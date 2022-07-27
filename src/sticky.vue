<template>
  <div class="gulu-sticky-wrapper" :class="{sticky}" ref="wrapper">
    <slot></slot>
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
    let {top} = this.offsetTop()//注意点1 元素距离顶部的距离只能获取一次，不然会有bug
    console.log('top', top)
    window.addEventListener('scroll', () => {
      let scrollTop = this.getScroll().scrollTop
      console.log('scrollTop', scrollTop)
      if (scrollTop > top) {
        console.log('sticky了')
        this.sticky = true
      } else {
        console.log('没有',top)
        this.sticky = false
      }
    })
  },
  data() {
    return {
      sticky: false
    }
  },
  methods: {
    offsetTop() {
      let { top } = this.$refs.wrapper.getBoundingClientRect()
      let scrollTop = this.getScroll().scrollTop
      console.log(`top:${top}---scrollTop:${scrollTop}`)
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
.gulu-sticky-wrapper {
  &.sticky {
    position: fixed;
    width: 100%;
    left: 0px;
    top: 0px;
  }
}
</style>
