<template>
  <div id="app">
    <h2>按钮</h2>
    <g-button icon="left">按钮1</g-button>
    <g-button icon="left" :loading="loading" @click="handleClick">按钮1</g-button>
    <g-button>按钮2</g-button>
    <g-button :loading="loading"  @click="handleClick">按钮2</g-button>
    <g-button icon="settings" iconPosition="right">按钮2</g-button>
    <g-button icon="settings"  @click="handleClick" :loading="loading" iconPosition="right">按钮2</g-button>
    <g-icon name="download"></g-icon>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    }
  },
  methods:{
    handleClick(){
      console.log(111)
      this.loading=!this.loading
    }
  }
}
</script>

<style lang="scss">
</style>
