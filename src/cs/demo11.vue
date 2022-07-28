<template>
  <div>
    <div class="content1">content1</div>
    <g-sticky>
      <div class="one">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi3%2F365866548%2FTB2OZpennvI8KJjSspjXXcgjXXa_%21%21365866548.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661507844&t=e9fc9d2acfcc3b05fead7ab3a27d08ac"
          alt="" />
      </div>
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
    <div class="content3"></div>
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
img{
  max-width: 100%;
}
.content1 {
  height: 800px;
  background: yellow;
}
.content3 {
  height: 1800px;
  background: yellowgreen;
}
.content2 {
  height: 1200px;
  background: pink;
  > p {
    height: 30px;
  }
}
.one {
  width: 800px;
  margin: 0 auto;
  background: rgb(148, 135, 135);
  border: 1px solid red;
}
</style>