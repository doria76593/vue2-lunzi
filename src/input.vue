<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" @change="$emit('change', $event.target.value)" @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)" @blur="$emit('blur', $event.target.value)" @click="$emit('click', $event.target.value)">
    <template v-if="error">
      <g-icon name="error" class="icon-error"></g-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
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
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5rem;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &:hover {
      border-color: $border-color-hover;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .errorMessage {
    color: $red;
  }
}
</style>
