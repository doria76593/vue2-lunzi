<template>
  <div id="app">
    <h2>按钮</h2>
    <g-button icon="left">按钮1</g-button>
    <g-button icon="left" :loading="loading" @click="handleClick">按钮1</g-button>
    <g-button>按钮2</g-button>
    <g-button :loading="loading" @click="handleClick">按钮2</g-button>
    <g-button icon="settings" iconPosition="right">按钮2</g-button>
    <g-button icon="settings" @click="handleClick" :loading="loading" iconPosition="right">按钮2</g-button>
    <g-icon name="download"></g-icon>
    <hr>
    <g-button-group>
      <g-button icon="left">按钮1</g-button>
      <g-button>按钮2</g-button>
      <g-button icon="settings" iconPosition="right">按钮3</g-button>
    </g-button-group>
    <h2>input</h2>
    <g-input v-model="msg"></g-input>
    {{msg}}

    <g-input value="李四" readonly></g-input>
    <g-input value="王五" disabled></g-input>
    <g-input value="王五" error="错啦错啦错啦"></g-input>
    <h2>布局</h2>
    <g-row>
      <g-col span="23" offset="1" :narrow-pc="{span:12, offset:12}">
        <div class="demo"></div>
      </g-col>
    </g-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      msg: '你好啊',
    }
  },
  methods: {
    handleClick() {
      this.loading = !this.loading
    },
  },
}
</script>

<style scoped lang="scss">
h2 {
  margin: 20px;
}
.demo {
  background: #ddd;
  border: 1px solid #666;
  height: 100px;
}
</style>
