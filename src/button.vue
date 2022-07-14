<template>
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
  props: {
    icon: {},
    iconPosition: {
      default: 'left',
      type: String,
      validator(value) {
        return value === 'left' || value === 'right'
      },
    },
    loading:{
        type:Boolean,
        default:false
    }
  },
  data() {
    return {}
  },
  methods: {},
  components: {},
}
</script>

<style scoped lang="scss">
 @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
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
  .loading{
       animation: spin 2s infinite linear;
  }
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
}
</style>
