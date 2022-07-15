<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div class="border">
        <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GuluCol',
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
  },
  data() {
    return {
      gutter: 0,
    }
  },
  computed: {
    colClass() {
      let { span, offset } = this
      return [span && `col-${span}`, offset && `offset-${offset}`]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px',
      }
    },
  },
  // 执行顺序：row created --> col created--> col mounted-->row mounted.
  //   设置gutter的思路：1-用户从row进行传参，在row mounted 那里进行赋值传递
  // 2-css方面，col通过padding来设置空隙，row通过marginLeft和marginRight来抵消左右的空隙
}
</script>
<style scoped lang="scss">
.col {
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
.border {
  background: pink;
}
</style> 