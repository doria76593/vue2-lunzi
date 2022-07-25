<template>
  <div class="demo8">
    <g-slides class="wrapper" :selected.sync="selected">
      <g-slides-item name="1">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides>
  </div>
</template>

<script>
import GSlides from '../slides.vue'
import GSlidesItem from '../slides-item'
export default {
  components: {
    GSlides,
    GSlidesItem,
  },
  data() {
    return {
      selected: '2',
    }
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.demo8{
    padding: 20px;
}
.box {
  width: 100%;
  height: 350px;
  background: #ddd;
  border: 1px solid red;
}
</style>
