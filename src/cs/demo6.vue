<template>
  <div style="padding: 20px;">
    <h2>单选--{{selected1}}</h2>
    <g-collapse :selected.sync="selected1">
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
    <h2>多选--{{selected2}}</h2>
    <g-collapse :selected.sync="selected2" :single="false">
      <g-collapse-item title="标题4" name="4">内容4</g-collapse-item>
      <g-collapse-item title="标题5" name="5">内容5</g-collapse-item>
      <g-collapse-item title="标题6" name="6">内容6</g-collapse-item>
    </g-collapse>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selected1: '2',
      selected2: ['4', '5'],
    }
  },
  methods: {},
}
</script>
<style scoped lang="scss">
</style>
