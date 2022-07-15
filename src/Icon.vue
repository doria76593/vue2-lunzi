<template>
  <svg class="g-icon" aria-hidden="true">
    <use :xlink:href='`#i-${name}`'></use>
  </svg>
</template>

<script>
import './svg'
export default {
  name:'GIcon',
  props: ['name'],
}
</script>

<style scoped lang="scss">
.g-icon {
  width: 1em;
  height: 1em;
}
</style>
