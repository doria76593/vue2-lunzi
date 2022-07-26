<template>
  <div>
    <h2>{{selected}}</h2>
    <g-nav :selected.sync="selected">
      <g-nav-item name="home">首页</g-nav-item>
      <g-nav-item name="about">关于</g-nav-item>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selected: 'about',
    }
  },
  methods: {

  },
}
</script>
<style scoped lang="scss">
</style>