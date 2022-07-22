<template>
  <div style="padding:20px">
    <p>{{selected &&selected[0] &&selected[0].name || '空'}}</p>
    <p>{{selected &&selected[1] &&selected[1].name || '空'}}</p>
    <p>{{selected &&selected[2] &&selected[2].name || '空'}}</p>
    <g-cascader :source.sync="source" popover-height="200px" :selected.sync="selected" :load-data="loadData"></g-cascader>

  </div>
</template>

<script>
import db from '../db'
// console.log('db',db)
function ajax(parentId = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id == parentId)
      result.forEach((node) => {
        if (db.filter((item) => item.parent_id === node.id).length > 0) {
          node.isLeaf = false
        } else {
          node.isLeaf = true
        }
      })
      console.log('ajax-result', result)
      resolve(result)
    }, 300)
  })
}
export default {
  data() {
    return {
      db,
      selected: [],
      source: [],
      source2: [
        {
          name: '浙江',
          children: [
            {
              name: '杭州',
              children: [{ name: '上城' }, { name: '下城' }, { name: '江干' }],
            },
            {
              name: '嘉兴',
              children: [{ name: '南湖' }, { name: '秀洲' }, { name: '嘉善' }],
            },
          ],
        },
        {
          name: '福建',
          children: [
            {
              name: '福州',
              children: [{ name: '鼓楼' }, { name: '台江' }, { name: '仓山' }],
            },
          ],
        },
        {
          name: '安徽',
          children: [
            {
              name: '合肥',
              children: [
                {
                  name: '瑶海',
                },
                {
                  name: '庐阳',
                },
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {
    loadData({ id }, updateSource) {
      ajax(id).then((result) => {
        updateSource(result) // 回调:把别人传给我的函数调用一下
      })
    },
  },
  components: {},
  created() {
    ajax(0).then((result) => {
      this.source = result
    })
  },
}
</script>

<style scoped lang="scss">
</style>
