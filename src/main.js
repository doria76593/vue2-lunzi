import Vue from 'vue'
import App from './App.vue'
import Button from './button.vue'
import Icon from './Icon.vue'
import buttonGroup from './button-group.vue'
import Input from './input.vue'


Vue.config.productionTip = false
Vue.component('g-icon',Icon)
Vue.component('g-button',Button)
Vue.component('g-button-group',buttonGroup)
Vue.component('g-input',Input)

new Vue({
  render: h => h(App),
}).$mount('#app')
