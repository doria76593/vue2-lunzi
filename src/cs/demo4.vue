<template>
  <div>
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-head>
        <template slot="actions">
          <button>设置</button>
        </template>
        <g-tabs-item name="woman">
          <g-icon name="settings"></g-icon>美女
        </g-tabs-item>
        <g-tabs-item name="finance" disabled>
          财经
        </g-tabs-item>
        <g-tabs-item name="sports">
          体育
        </g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="woman">
          美女相关资讯
        </g-tabs-pane>
        <g-tabs-pane name="finance">
          财经相关资讯
        </g-tabs-pane>
        <g-tabs-pane name="sports">
          体育相关资讯
        </g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
       selectedTab: 'sports'
    }
  },
  methods: {},
}
</script>
<style scoped lang="scss">
</style>