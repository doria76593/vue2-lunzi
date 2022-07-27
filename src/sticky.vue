<template>
  <div class="gulu-sticky-wrapper" ref="wrapper">
    <div class="gulu-sticky" :class="{sticky}">
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
    let { top, height } = this.offsetTop()//注意点1 元素距离顶部的距离只能获取一次，不然会有bug
    console.log('top', top, height)
    this.$refs.wrapper.style.height = height + 'px'//bug2:用自己的高度给自己，让自己占位，里面的元素去fix
    window.addEventListener('scroll', () => {
      let scrollTop = this.getScroll().scrollTop
      console.log(`top:${top}---scrollTop:${scrollTop}`)
      if (scrollTop > top) {
        console.log('sticky了')
        this.sticky = true
      } else {
        console.log('没有')
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
      let { top, height } = this.$refs.wrapper.getBoundingClientRect()
      let scrollTop = this.getScroll().scrollTop
      return { top: top + scrollTop, height }
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
