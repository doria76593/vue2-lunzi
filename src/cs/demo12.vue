<template>
  <div>
    <h2>表格1--{{orderBy}}</h2>
    <div style="margin: 20px;">
      <g-table :columns="columns" :data-source="dataSource" bordered :selectedItems.sync="selected" :order-by.sync="orderBy" @update:orderBy="x" :loading="loading"></g-table>
    </div>
    <h2>表格2</h2>
    <div style="margin: 20px;">
      <g-table :columns="columns" :data-source="dataSource" numberVisible compact :striped="false" :loading="loading"></g-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: [],
      columns: [
        { text: '姓名', field: 'name' },
        { text: '分数', field: 'score' },
      ],
      orderBy: { // true - 开启排序，但是不确定asc desc
        score: 'desc'
      },
      dataSource: [
        { id: 1, name: '方方', score: 100 },
        { id: 2, name: '圆圆', score: 99 },
        { id: 3, name: '张三', score: 100 },
        { id: 4, name: '李四', score: 99 },
        { id: 5, name: '超人', score: 100 },
        { id: 6, name: '蝙蝠侠', score: 99 },
        { id: 7, name: '蜘蛛侠', score: 100 },
        { id: 8, name: '钢铁侠', score: 99 },
      ],
      loading: false,
    }
  },
  methods: {
    x() {
      this.loading = true
      setTimeout(() => {
        this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
        this.loading = false
      }, 3000)
    }
  },
}
</script>
<style scoped lang="scss">
</style>