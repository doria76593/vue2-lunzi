<template>
  <svg class="g-icon" aria-hidden="true">
    <use :xlink:href='`#i-${name}`'></use>
  </svg>
</template>

<script>
import './svg'
export default {
  name:'GIcon',//通过name,可以在dev-tool上方便调试
  props: ['name'],
}
</script>

<style scoped lang="scss">
.g-icon {
  width: 1em;
  height: 1em;
}
</style>
