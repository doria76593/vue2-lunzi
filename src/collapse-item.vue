<template>
  <div class="collapseItem">
    <div class="title" @click="open=!open">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GCollapseItem',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {},
}
</script>
<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapseItem {
  border-bottom: 1px solid $grey;
  &:last-child {
    border-bottom: none;
  }
  > .title {
    cursor: pointer;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  > .content {
    border-top: 1px solid $grey;
    padding: 8px;
  }
}
</style>
