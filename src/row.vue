<template>
  <div class="row" :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}">
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
  },
  data() {
    return {}
  },
  created() {
    console.log('row created')
  },
  mounted() {
    console.log('row mounted')
    console.log(this.$children)
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  },
}
</script>

<style scoped lang="scss">
.row {
  display: flex;
  /* margin: 0 -12px;   这个是为了让col设置gutter(padding)抵消最左边和最右边的空隙*/
}
</style>
