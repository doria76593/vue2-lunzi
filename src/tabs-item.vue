<template>
  <div class="tabs-item" :class="classes" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GTabsItem',
  inject: ['eventBus'],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String | Number,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
      console.log('name', name)
      this.active = name === this.name
    })
  },
  computed: {
    classes() {
      return {
        active: this.active,
      }
    },
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    },
  },
}
</script>

<style scoped lang="scss">
.tabs-item {
  padding: 0 1em;
  flex-shrink: 0;
  cursor: pointer;
  &.active {
    background: red;
  }
}
</style>
