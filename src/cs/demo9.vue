<template>
  <div>
    <!-- <h2>{{selected}}</h2> -->
    <!-- <g-nav :selected.sync="selected">
      <g-nav-item name="home">首页</g-nav-item>
      <g-nav-item name="about">关于</g-nav-item>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav> -->
    <h2>demo2--{{selected}}--支持任意层级</h2>
    <g-nav :selected.sync="selected">
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav>
        <template #title>关于</template>
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-sub-nav>
          <template #title>联系方式</template>
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">QQ</g-nav-item>
          <g-sub-nav>
            <template #title>手机</template>
            <g-nav-item name="cm">移动</g-nav-item>
            <g-nav-item name="cu">联通</g-nav-item>
            <g-nav-item name="cn">电信</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selected: 'culture',
    }
  },
  methods: {},
}
</script>
<style scoped lang="scss">
</style>