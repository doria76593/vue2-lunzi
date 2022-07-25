<template>
  <transition name="slide">
    <div class="g-slides-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
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
}
/* 让离开的leave-active定位，其他的元素没有定位，父元素就有高度了。 */
.slide-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 2s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>