<template>
  <div class="g-slides-item" v-if="visible">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: undefined,
    }
  },
  methods: {},
  computed: {
    visible() {
      //   console.log(`我的name是${this.name}`)
      //   console.log(`我的方向是${this.reverse ? '反向' : '正向'}`)
      return this.selected === this.name
    },
  },
}
</script>
<style scoped lang="scss">
.g-slides-item {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
</style>