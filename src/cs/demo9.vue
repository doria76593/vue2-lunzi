<template>
  <div>
    <g-nav :selected.sync="selected" style=" margin: 20px;">
      <g-nav-item name="home">
        <a href="https://jirengu.com" target="_blank">
          首页
        </a>
      </g-nav-item>
      <g-sub-nav name="about">
        <template slot="title">关于</template>
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">QQ</g-nav-item>
          <g-sub-nav name="phone">
            <template slot="title">手机</template>
            <g-nav-item name="cm">移动</g-nav-item>
            <g-nav-item name="cu">联通</g-nav-item>
            <g-nav-item name="cn">电信</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>

      </g-sub-nav>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
    <g-nav :selected.sync="selected" vertical style="width: 200px; margin: 200px 20px 0;">
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav name="about">
        <template slot="title">关于</template>
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">QQ</g-nav-item>
          <g-sub-nav name="phone">
            <template slot="title">手机</template>
            <g-nav-item name="cm">移动</g-nav-item>
            <g-nav-item name="cu">联通</g-nav-item>
            <g-nav-item name="cn">电信</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>

      </g-sub-nav>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
    <p>你好，我是中文</p>
    <p>你好，我是中文</p>
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