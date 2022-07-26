<template>
  <div class="cascader" ref="cascader" v-click-outside="close">
    <div class="trigger" @click="toggle">
      {{result}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <g-cascader-item :items="source" class="popover" :loading-item="loadingItem" :loadData="loadData" :height="popoverHeight" :selected="selected"
        @update:selected="onUpdateSelected"></g-cascader-item>
    </div>
  </div>
</template>

<script>
import ClickOutside from '../click-outside'
export default {
  name: 'GuluCascader',
  directives: { ClickOutside },
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
      loadingItem: {},
    }
  },
  methods: {
    open() {
      this.popoverVisible = true
    },
    close() {
      this.popoverVisible = false
    },
    toggle() {
      if (this.popoverVisible === true) {
        this.close()
      } else {
        this.open()
      }
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
      let lastItem = newSelected[newSelected.length - 1]
      //  通过 lastItem中的id去找到对应元素，把请求的结果添加children属性上

      let complex = (children, id) => {
        for (let i = 0; i < children.length; i++) {
          let child = children[i]
          if (child.id === id) {
            return child
          } else {
            if (child.children && child.children.length) {
              let res=complex(child.children, id)
              if(res){
                return res
              }
            }
          }
        }
        return null
      }

      let updateSource = (result) => {
        this.loadingItem = {}
        let copy = JSON.parse(JSON.stringify(this.source))
        let toUpdate = complex(copy, lastItem.id)
        console.log('toUpdate', toUpdate)

        toUpdate.children = result
        this.$emit('update:source', copy)
      }
      if (!lastItem.isLeaf) {
        this.loadData && this.loadData(lastItem, updateSource)
        this.loadingItem = lastItem
      }
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
@import '../var';
.cascader {
  position: relative;
  display: inline-block;
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