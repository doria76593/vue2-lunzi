<template>
  <div class="demo4box">
    <div class="hhh"></div>
    <!-- <g-tabs :selected="selectedTab" @update:selected="selectedTab=$event"> 等价于以下 -->
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-head>
        <template slot="actions">
          <button>设置</button>
        </template>
        <g-tabs-item name="woman">
          <g-icon name="settings"></g-icon>美女美女美
        </g-tabs-item>
        <g-tabs-item name="finance" disabled>
          财经财
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
      selectedTab: 'sports',
    }
  },
  methods: {},
}
</script>
<style scoped lang="scss">
.demo4box{
  /* padding-left: 1000px; */
}
.hhh{
  /* height: 2000px; */
}

</style>