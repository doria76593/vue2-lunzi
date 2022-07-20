<template>
  <div style="padding-top: 100px; padding-left: 100px;">
    <div style="overflow: hidden;">
      <g-popover position="top">
        <template slot="content" slot-scope="{close}">
          <div>popover内容1-top</div>
          <g-button @click="close">关闭</g-button>
        </template>
        <g-button>点我-top-关闭</g-button>
      </g-popover>
      <span class="w10"></span>
      <g-popover position="bottom">
        <template slot="content">
          <div>askdjsakdjsakjdslkjdlskjdlsjkdlskjdlsjkdlskjdlsajkdlajkdlkajdlksajdladjk</div>
        </template>
        <g-button>点我-bottom</g-button>
      </g-popover>
      <span class="w10"></span>
      <g-popover position="left">
        <template slot="content">
          <div>popover内容3-leftaskdjsakdjsakjdslkjdlskjdlsjkdlskjdlsjkdlskjdlsajkdlajkdlkajdlksajdladjk</div>
        </template>
        <g-button>点我-left</g-button>
      </g-popover>
      <span class="w10"></span>
      <g-popover position="right">
        <template slot="content">
          <div>popover内容-rightaskdjsakdjsakjdslkjdlskjdlsjkdlskjdlsjkdlskjdlsajkdlajkdlkajdlksajdladjk</div>
        </template>
        <g-button>点我-right</g-button>
      </g-popover>

      <hr>
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>popover内容1-top-topaskdjsakdjsakjdslkjdlskjdlsjkdlskjdlsjkdlskjdlsajkdlajkdlkajdlksajdladjk</div>
        </template>
        <g-button>点我-top</g-button>
      </g-popover>
      <span class="w10"></span>
      <g-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>askdjsakdjsakjdslkjdlskjdlsjkdlskjdlsjkdlskjdlsajkdlajkdlkajdlksajdladjk</div>
        </template>
        <g-button>点我-bottom</g-button>
      </g-popover>
      <span class="w10"></span>
      <g-popover position="left" trigger="hover">
        <template slot="content">
          <div>popover内容3-leftaskdjsakdjsakjdslkjdlskjdlsjkdlskjdlsjkdlskjdlsajkdlajkdlkajdlksajdladjk</div>
        </template>
        <g-button>点我-left</g-button>
      </g-popover>
      <span class="w10"></span>
      <g-popover position="right" trigger="hover">
        <template slot="content">
          <div>popover内容-rightaskdjsakdjsakjdslkjdlskjdlsjkdlskjdlsjkdlskjdlsajkdlajkdlkajdlksajdladjk</div>
        </template>
        <g-button>点我-right</g-button>
      </g-popover>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.w10 {
  padding: 0 10px;
}
</style>
