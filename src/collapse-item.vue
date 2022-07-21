<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GCollapseItem',
  inject: ['eventBus'],
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      open: false,
      single: true,
    }
  },
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
      if (this.single) {
        if (name === this.name) {
          this.show()
        } else {
          this.close()
        }
      } else {
        if (name.indexOf(this.name) > -1) {
          this.show()
        } else {
          this.close()
        }
      }
    })
  },
  methods: {
    show() {
      this.open = true
    },
    close() {
      this.open = false
    },
    toggle() {
      if (this.open === false) {
        this.eventBus.$emit('update:addSelected', this.name)
      } else {
        this.eventBus.$emit('update:removeSelected', this.name)
      }
    },
  },
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
     background: lighten($grey, 8%);
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
