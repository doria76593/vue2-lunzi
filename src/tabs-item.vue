<template>
  <div class="tabs-item" :class="classes" @click="onClick">
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
          disabled: this.disabled
      }
    },
  },
  methods: {
    onClick() {
       if (this.disabled) { return }
      this.eventBus.$emit('update:selected', this.name, this)
    },
  },
}
</script>

<style scoped lang="scss">
$blue: #409eff;
  $disabled-text-color: grey;
.tabs-item {
  padding: 0 1em;
  flex-shrink: 0;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
   &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
}
</style>
