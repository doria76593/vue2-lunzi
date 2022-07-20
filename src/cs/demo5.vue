<template>
  <div style="padding-top: 100px; padding-left: 100px;  border: 1px solid red;">
    <g-popover>
      <template #content>
        <div>popover内容</div>
      </template>
      <button>点我</button>
    </g-popover>
    <g-popover>
      <template #content>
        <div>popover内容</div>
      </template>
      <button>点我</button>
    </g-popover>
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
