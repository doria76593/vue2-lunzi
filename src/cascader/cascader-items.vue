<template>
  <div class="cascaderItem" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item in items" :key="item.name" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <g-icon class="loading" name="loading"></g-icon>
          </template>
          <template v-else>
            <g-icon class="next" v-if="rightArrowVisible(item)" name="right"></g-icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :loading-item="loadingItem" :items="rightItems" :loadData="loadData" :height="height" :selected="selected" :level="level+1"
        @update:selected="onUpdateSelected">
      </gulu-cascader-items>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluCascaderItems',
  props: {
    items: {
      type: Array,
    },
    height: {
      type: String,
    },
    selected: {
      type: Array,
      default: () => [],
    },
    level: {
      type: Number,
      default: 0,
    },
    loadData: {
      type: Function,
    },
    loadingItem: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      leftSelected: null,
    }
  },
  methods: {
    rightArrowVisible(item) {
      return this.loadData ? !item.isLeaf : item.children
    },
    onClickLabel(item) {
      // 因为点击选中的就是最后一项
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    },
  },
  computed: {
    rightItems() {
      if (this.selected[this.level]) {
        let selected = this.items.filter(
          (item) => item.name === this.selected[this.level].name
        )
        if (
          selected &&
          selected[0].children &&
          selected[0].children.length > 0
        ) {
          return selected[0].children
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">
.cascaderItem {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;

  .left {
    overflow: auto;
    height: 100%;
    padding: 0.3em 0;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .label {
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    white-space: nowrap;
    &:hover {
      background: $grey;
    }
    > .name {
      margin-right: 1em;
      user-select: none;
    }
    .icons {
      margin-left: auto;
      .next {
        transform: scale(0.6);
      }
      .loading {
         transform: scale(0.7);
        animation: spin 2s infinite linear;
      }
    }
  }
}
</style>