<template>
  <div class="gulu-pager">
    <span v-for="page in pages" :key="page" class="gulu-pager-item" :class="{ active: page === currentPage, separator: page === '...' }">
      {{ page }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    hideIfOnePage: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    console.log(this.totalPage);
    console.log(this.currentPage);
    console.log(this.hideIfOnePage);
    console.log(this.num);
    return {
      num: 10,
    };
  },
  computed: {
    pages() {
      let pages = unique(
        [1, this.totalPage, this.currentPage, this.currentPage - 1, this.currentPage - 2, this.currentPage + 1, this.currentPage + 2].sort((a, b) => a - b)
      ).reduce((prev, current, index, array) => {
        prev.push(current);
        array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push("...");
        return prev;
      }, []);
      return pages;
    },
  },
  methods: {},
};
function unique(array) {
  const object = {};
  array.map((number) => {
    object[number] = true;
  });
  return Object.keys(object).map((s) => parseInt(s, 10));
}
</script>

<style scoped lang="scss">
.gulu-pager {
  &-item {
    border: 1px solid #e1e1e1;
    border-radius: $border-radius;
    padding: 0 8px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    min-width: 20px;
    height: 24px;
    margin: 0 4px;
    cursor: pointer;
    &.separator {
      border: none;
    }
    &.active,
    &:hover {
      border-color: $blue;
    }
    &.active {
      cursor: default;
    }
  }
}
</style>
