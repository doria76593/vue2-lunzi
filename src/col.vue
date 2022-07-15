<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]" :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}">
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
  // 执行顺序：row created --> col created--> col mounted-->row mounted.
  //   设置gutter的思路：1-用户从row进行传参，在row mounted 那里进行赋值传递
  // 2-css方面，col通过padding来设置空隙，row通过marginLeft和marginRight来抵消左右的空隙
  created() {
    console.log('col created')
  },
  mounted() {
    console.log('col mounted')
  },
}
</script>
<style scoped lang="scss">
.col {
  height: 100px;
  width: 50%;
  /* background: grey; */
  /* border: 1px solid red; */
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