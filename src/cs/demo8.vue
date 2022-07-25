<template>
  <div class="demo8">
    {{selected}}
    <g-slides class="wrapper" :selected.sync="selected">
      <g-slides-item name="老大">
        <div class="box">0</div>
      </g-slides-item>
      <g-slides-item name="老二">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="老三">
        <div class="box">2</div>
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
      selected: '老二',
    }
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.demo8 {
  padding: 100px;
  width: 500px;
}
.box {
  width: 100%;
  height: 200px;
  background: #ddd;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
