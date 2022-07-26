<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GTabsPane',
  inject: ['eventBus'],
  props: {
    name: {
      type: String | Number,
      required: true,
    },
  },
  data() {
    return { active: false }
  },
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
  computed: {
    classes() {
      return {
        active: this.active,
      }
    },
  },
  methods: {},
  components: {},
}
</script>

<style scoped lang="scss">
.tabs-pane {
  padding: 1em;
  &.active {
  }
}
</style>
