<template>
  <div class="demo8">
    {{selected}}
    <g-slides class="wrapper" :selected.sync="selected">
      <g-slides-item name="老大">
        <template slot-scope="{reverse}">
          <div class="box box1">老大---0-{{reverse}}--{{reverse ? '反向' : '正向'}}</div>
        </template>

      </g-slides-item>
      <g-slides-item name="老二">
        <template slot-scope="{reverse}">
          <div class="box box2">老二---1--{{reverse}}--{{reverse ? '反向' : '正向'}}</div>
        </template>

      </g-slides-item>
      <g-slides-item name="老三">
        <template slot-scope="{reverse}">
          <div class="box box3">老三---2--{{reverse}}--{{reverse ? '反向' : '正向'}}</div>
        </template>

      </g-slides-item>
      <g-slides-item name="老四">
        <template slot-scope="{reverse}">
          <div class="box box4">老四---3--{{reverse}}--{{reverse ? '反向' : '正向'}}</div>
        </template>

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
      selected: '老三',
    }
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.demo8 {
  margin: 50px;
}
.box {
  width: 100%;
  height: 350px;
  background: #ddd;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  &.box1 {
    background: pink;
  }
  &.box2 {
    background: yellow;
  }
  &.box3 {
    background: blueviolet;
  }
  &.box4 {
    background: rgb(30, 143, 58);
  }
}
</style>
