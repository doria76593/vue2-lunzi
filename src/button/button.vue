<template>
  <!-- 只有原生的dom能触发原生的click事件，否则，需要手动触发click事件 -->
  <button @click="$emit('click')" class="g-button" :class="[`icon-${iconPosition}`]">
    <g-icon class="icon" v-if="icon&&!loading" :name="icon" />
    <g-icon class="icon loading" v-if="loading" name="loading" />
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  name:'GButton',
  props: {
    icon: {},
    iconPosition: {
      default: 'left',
      type: String,
      validator(value) {
        return value === 'left' || value === 'right'
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {},
  components: {},
}
</script>

<style scoped lang="scss">
.g-button {
  font-size:$font-size;
  height: $input-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer;
  > .icon {
    order: 1;
    margin-right: 0.2rem;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.2rem;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }
}
</style>
