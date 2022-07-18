<template>
  <!-- <g-layout style="height:100vh">
    <g-header class="demo">header</g-header>
    <g-content class="demo">content</g-content>
    <g-footer class="demo">footer</g-footer>
  </g-layout> -->
  <g-layout style="height: 100vh;">
    <g-sider class="demo">sider</g-sider>
    <g-layout>
      <g-header class="demo">header</g-header>
      <g-content class="demo">content</g-content>
      <g-footer class="demo">footer</g-footer>
    </g-layout>
  </g-layout>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scoped lang="scss">
.demo {
  border: 1px solid red;
}
</style>