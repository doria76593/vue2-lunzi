<template>
  <div style="padding:20px">
    <p>{{selected &&selected[0] &&selected[0].name || '空'}}</p>
    <p>{{selected &&selected[1] &&selected[1].name || '空'}}</p>
    <p>{{selected &&selected[2] &&selected[2].name || '空'}}</p>
    <g-cascader :source="source" popover-height="200px" :selected.sync="selected"></g-cascader>
  </div>
</template>

<script>
import db from '../db'
console.log('db', db)
let ajax = (pid = 0) => {
  return db.filter((item) => item.parent_id == pid)
}
console.log(ajax())
export default {
  data() {
    return {
      selected: [],
      source: ajax(),
    }
  },
  methods: {},
  components: {},
}
</script>

<style scoped lang="scss">
</style>
