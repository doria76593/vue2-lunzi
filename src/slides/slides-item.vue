<template>
  <transition name="slide">
    <div class="g-slides-item" v-if="visible" :class="{reverse}">
      <slot :reverse="reverse"></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'GuluSlidesItem',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: undefined,
      reverse: false,
    }
  },
  methods: {},
  computed: {
    visible() {
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
  transition: all 0.5s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-enter.reverse {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-leave-to.reverse {
  transform: translateX(100%);
}
</style>