<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible=false">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'gSider',
  data() {
    return {
      visible: true,
    }
  },
  methods: {},
  components: {},
}
</script>

<style scoped lang="scss">
.sider {
    width: 150px;
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  margin-left: -200px;
}
</style>
