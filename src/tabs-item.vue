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
  border: 1px solid red;
  padding: 0 1em;
  flex-shrink: 0;
  cursor: pointer;
  border: 1px solid green;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    background: red;
  }
}
</style>
