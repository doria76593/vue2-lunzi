<template>
  <div class="gulu-table-wrapper">
    <table class="gulu-table" :class="{bordered, compact, striped: striped}">
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th v-if="numberVisible">#</th>
          <th v-for="(column,index) in columns" :key="index">{{column.text}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in dataSource" :key="item.id">
          <td>
            <input type="checkbox" @change="onChangeItem(item, index, $event)" />
          </td>
          <td v-if="numberVisible">{{index}}</td>
          <td v-for="column in columns" :key="column.field">{{item[column.field]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "GuluTable",
  props: {
    columns: {
      type: Array,
      required: true
    },
    dataSource: {
      type: Array,
      required: true,
    },
    numberVisible: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: true
    },
    compact: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {}
  },
  methods: {
    onChangeItem(item, index, e) {
      let selected = e.target.checked
      this.$emit('changeItem', { item, index, selected })
    }
  },
}
</script>
<style scoped lang="scss">
$grey: darken($grey, 10%);
.gulu-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-bottom: 1px solid $grey;
  &.bordered {
    border: 1px solid $grey;
    td,
    th {
      border: 1px solid $grey;
    }
  }
  &.compact {
    td,
    th {
      padding: 4px;
    }
  }
  td,
  th {
    border-bottom: 1px solid $grey;
    text-align: left;
    padding: 8px;
  }
  &.striped {
    tbody {
      > tr {
        &:nth-child(odd) {
          background: white;
        }
        &:nth-child(even) {
          background: lighten($grey, 13%);
        }
      }
    }
  }
}
</style>