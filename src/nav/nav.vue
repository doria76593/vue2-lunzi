<template>
  <div class="g-nav">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluNav',
  provide() {
    return {
      root: this,
    }
  },
  props: {
    selected: {
      type: String,
    },
  },
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.listenToChildren()
  },
  methods: {
    addItem(vm) {
      console.log('addItem')
      console.log(vm)
      this.items.push(vm)
    },
    listenToChildren() {
      this.items.forEach((vm) => {
        vm.$on('add:selected', (name) => {
          this.$emit('update:selected', name)
        })
      })
    },
  },
  watch: {
    selected: {
      immediate: true,
      deep: true,
      handler(val) {
        console.log('val', val)
        this.$nextTick(() => {
          this.items.forEach((vm) => {
            if (this.selected === vm.name) {
              vm.selected = true
            } else {
              vm.selected = false
            }
          })
        })
      },
    },
  },
}
</script>
<style scoped lang="scss">
.g-nav {
  border: 1px solid red;
  display: flex;
  cursor: pointer;
}
</style>