<template>
  <div class="loading-wrapper">
    <g-icon name="loading" />
  </div>
</template>
<script>
export default {
  data() {
    return { }
  }
};
</script>
<style lang="scss" scoped>
.loading-wrapper {
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
    height: 50px;
    @include spin;
  }
}
</style>
