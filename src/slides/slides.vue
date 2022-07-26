<template>
  <div class="g-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span @click="onClickPrev" data-action="prev">
        <g-icon name="left"></g-icon>
      </span>
      <span v-for="n in childrenLength" :key="n" :class="{active: selectedIndex === n-1}" @click="select(n-1)">
        {{n}}
      </span>
      <span @click="onClickNext" data-action="next">
        <g-icon name="right"></g-icon>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selected: {
      type: String,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      timerId: null,
      childrenLength: 0,
      lastSelectedIndex: undefined,
      startTouch: undefined,
    }
  },
  mounted() {
    this.childrenLength = this.items.length
    this.playAutomatically()
  },
  methods: {
    playAutomatically() {
      console.log('自动执行了')
      if (this.timerId) {
        this.clearInterval()
      }
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        this.select(newIndex) // 告诉外界选中 newIndex
        this.timerId = setTimeout(run, 3000)
      }
      this.timerId = setTimeout(run, 3000)
    },
    onMouseEnter() {
      this.pause()
    },
    onMouseLeave() {
      this.playAutomatically()
    },
    onTouchStart(e) {
      this.pause()
      if (e.touches.length > 1) {
        return
      }
      this.startTouch = e.touches[0]
    },
    onTouchEnd(e) {
      let endTouch = e.changedTouches[0]
      let { clientX: x1, clientY: y1 } = this.startTouch
      let { clientX: x2, clientY: y2 } = endTouch

      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
      let deltaY = Math.abs(y2 - y1)
      let rate = distance / deltaY
      if (rate > 2) {
        if (x2 > x1) {
          this.select(this.selectedIndex - 1)
        } else {
          this.select(this.selectedIndex + 1)
        }
      }
      this.$nextTick(() => {
        this.playAutomatically()
      })
    },
    clearInterval() {
      window.clearTimeout(this.timerId)
      this.timerId = null
    },
    pause() {
      this.clearInterval()
    },
    onClickPrev() {
      this.select(this.selectedIndex - 1)
    },
    onClickNext() {
      this.select(this.selectedIndex + 1)
    },
    getSelected() {
      let first = this.$children[0]
      return this.selected || first.name
    },
    select(newIndex) {
      this.lastSelectedIndex = this.selectedIndex
      if (newIndex < 0) {
        newIndex = this.names.length - 1
      }
      if (newIndex > this.names.length - 1) {
        newIndex = 0
      }
      this.$emit('update:selected', this.names[newIndex])
    },
  },
  watch: {
    selected: {
      deep: true,
      immediate: true,
      handler(val) {
        this.$nextTick(() => {
          this.$children.forEach((vm) => {
            vm.selected = val
            console.log(
              'reverse====',
              this.selectedIndex,
              this.lastSelectedIndex
            )
            let reverse =
              this.selectedIndex > this.lastSelectedIndex ? false : true
            if (this.lastSelectedIndex === undefined) {
              reverse = false
            }
            if (
              this.lastSelectedIndex === this.items.length - 1 &&
              this.selectedIndex === 0
            ) {
              reverse = false
            }
            if (
              this.lastSelectedIndex === 0 &&
              this.selectedIndex === this.items.length - 1
            ) {
              reverse = true
            }
            vm.reverse = reverse
          })
        })
      },
    },
  },
  computed: {
    names() {
      return this.items.map((vm) => vm.name)
    },
    items() {
      return this.$children.filter(
        (vm) => vm.$options.name === 'GuluSlidesItem'
      )
    },
    selectedIndex() {
      let index = this.names.indexOf(this.selected)
      return index === -1 ? 0 : index
    },
  },
}
</script>
<style scoped lang="scss">
.g-slides {
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      width: 20px;
      height: 20px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: #ddd;
      border-radius: 50%;
      margin: 0 8px;
      font-size: 12px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background: black;
        color: white;
        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>