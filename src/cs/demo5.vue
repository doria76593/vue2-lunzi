<template>
  <div style="padding-top: 100px; padding-left: 100px;">
    <div style="overflow: hidden;  border: 1px solid red;">
      <g-popover position="top">
        <template slot="content">
          <div>popover内容1-top-topaskdjsakdjsakjdslkjdlskjdlsjkdlskjdlsjkdlskjdlsajkdlajkdlkajdlksajdladjk</div>
        </template>
        <g-button>点我-top</g-button>
      </g-popover>
      <g-popover position="bottom">
        <template slot="content">
          <div>askdjsakdjsakjdslkjdlskjdlsjkdlskjdlsjkdlskjdlsajkdlajkdlkajdlksajdladjk</div>
        </template>
        <g-button>点我-bottom</g-button>
      </g-popover>
      <g-popover position="left">
        <template slot="content">
          <div>popover内容3-leftaskdjsakdjsakjdslkjdlskjdlsjkdlskjdlsjkdlskjdlsajkdlajkdlkajdlksajdladjk</div>
        </template>
        <g-button>点我-left</g-button>
      </g-popover>
      <g-popover position="right">
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
  methods: {},
  components: {},
}
</script>

<style scoped lang="scss">
</style>
