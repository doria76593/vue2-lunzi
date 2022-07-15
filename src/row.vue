<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GRow',
  props: {
    gutter: {
      type: [Number, String],
    },
    align: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right', 'center'].includes(value)
      },
    },
  },
  data() {
    return {}
  },
  computed: {
    rowStyle() {
      let { gutter } = this
      return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }
    },
    rowClass() {
      let { align } = this
      return [align && `align-${align}`]
    },
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  },
}
</script>

<style scoped lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
  /* margin: 0 -12px;   这个是为了让col设置gutter(padding)抵消最左边和最右边的空隙*/
}
</style>
