<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">{{result}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items :items="source" class="popover" :height="popoverHeight" :selected="selected" @update:selected="onUpdateSelected"></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from './cascader-items'
export default {
  name: 'GuluCascader',
  components: { CascaderItems },
  props: {
    source: {
      type: Array,
    },
    popoverHeight: {
      type: String,
    },
    selected: {
      type: Array,
      default: () => [],
    },
    loadData: {
      type: Function,
    },
  },
  data() {
    return {
      popoverVisible: false,
    }
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
      let lastItem = newSelected[newSelected.length - 1]
      //  通过 lastItem中的id去找到对应元素，把请求的结果添加children属性上

      let complex = (children, id) => {
        for (let i = 0; i < children.length; i++) {
          let child = children[i]
          if (!child.children || child.children.length == 0) {
            if (child.id === id) {
              return child
            }
          } else {
            complex(child.children, id)
          }
        }
      }

      let updateSource = (result) => {
        let copy = JSON.parse(JSON.stringify(this.source))
        let toUpdate = complex(copy, lastItem.id)
        console.log('toUpdate', toUpdate)
        toUpdate.children = result
        this.$emit('update:source', copy)
      }

      this.loadData(lastItem, updateSource)
    },
  },
  computed: {
    result() {
      return this.selected.map((item) => item.name).join('/')
    },
  },
}
</script>

<style scoped lang="scss">
@import 'var';
.cascader {
  position: relative;
  .trigger {
    height: $input-height;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    min-width: 10em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    margin-top: 8px;
    @extend .box-shadow;
  }
}
</style>