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
      // lastSelectedIndex: undefined,
    }
  },
  mounted() {
    let index = this.names.indexOf(this.getSelected())
    setInterval(() => {
      index++
      if (index > this.$children.length - 1) {
        index = 0
      }
      this.$emit('update:selected', this.names[index])
    }, 2000)
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
        this.$nextTick(() => {
          this.$children.forEach((vm) => (vm.selected = val))
        })
      },
    },
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected) || 0
    },
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
    /* height: 200px; */
  }
}
</style>