import Vue from 'vue'
import App from './App.vue'
import Button from './button.vue'
import Icon from './Icon.vue'


Vue.config.productionTip = false
Vue.component('g-icon',Icon)
Vue.component('g-button',Button)

new Vue({
  render: h => h(App),
}).$mount('#app')
