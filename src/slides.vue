<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
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
      lastSelectedIndex: undefined,
    }
  },
  mounted() {
    let index = this.names.indexOf(this.getSelected())

    // 正向
    // let run = () => {
    //   index++
    //   if (index > this.$children.length - 1) {
    //     index = 0
    //   }
    //   this.lastSelectedIndex = index
    //   this.$emit('update:selected', this.names[index])
    //   setTimeout(run, 3000)
    // }

    // 反向
    let run = () => {
      index--
      if (index < 0) {
        index = this.$children.length - 1
      }
      this.lastSelectedIndex = index
      this.$emit('update:selected', this.names[index])
      setTimeout(run, 3000)
    }
    run() //立即执行 或者3秒后再执行
    // setTimeout(run, 3000)
  },
  methods: {
    getSelected() {
      let first = this.$children[0]
      return this.selected || first.name
    },
  },
  watch: {
    selected: {
      deep: true,
      immediate: true,
      handler(val) {
        this.$children.forEach((vm) => {
          this.$nextTick(() => {
            vm.selected = val
            let itemIndex = this.names.indexOf(vm.selected)
           
            let reverse =itemIndex > this.lastSelectedIndex ? true : false
             console.log('itemIndex--',itemIndex,this.lastSelectedIndex)
            vm.reverse = reverse
          })
        })
      },
    },
  },
  computed: {
    names() {
      return this.$children.map((vm) => vm.name)
    },
  },
}
</script>
<style scoped lang="scss">
.g-slides {
  border: 1px solid black;
  .g-slides-window {
    overflow: hidden;
  }
  .g-slides-wrapper {
    position: relative;
  }
}
</style>