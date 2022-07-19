import Vue from 'vue'
import App from './App.vue'
import Button from './button.vue'
import Icon from './Icon.vue'
import buttonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row'
import Col from './col'
import Layout from './layout.vue'
import Header from './header.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Sider from './sider.vue'
import Toast from './toast.vue'
import plugin from './plugin'

Vue.config.productionTip = false
Vue.component('g-icon',Icon)
Vue.component('g-button',Button)
Vue.component('g-button-group',buttonGroup)
Vue.component('g-input',Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
