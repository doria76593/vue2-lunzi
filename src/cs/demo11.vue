<template>
  <div>
    <div class="content1">content1</div>
    <g-sticky>
      <div class="one">one</div>
    </g-sticky>
    <div class="content2">content2</div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scoped lang="scss">
.content1 {
  height: 800px;
  background: yellow;
}
.content2 {
  height: 1200px;
  background: pink;
}
.one {
  height: 100px;
  background: rgb(148, 135, 135);
  border: 1px solid red;
}
</style>