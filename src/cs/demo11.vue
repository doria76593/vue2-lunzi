<template>
  <div>
    <!-- <div class="content1">content1</div> -->
    <g-sticky>
      <div class="one">one</div>
    </g-sticky>
    <div class="content2">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
    </div>
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
  /* height: 1200px; */
  background: pink;
  >p{
    height: 30px;
  }
}
.one {
  height: 100px;
  background: rgb(148, 135, 135);
  border: 1px solid red;
}
</style>