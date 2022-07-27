import Vue from 'vue'
import App from './App.vue'
import Button from './button/button.vue'
import buttonGroup from './button/button-group.vue'
import Icon from './Icon.vue'
import Input from './input.vue'
import Row from './grid/row.vue'
import Col from './grid/col.vue'

import Layout from './layout/layout.vue'
import Header from './layout/header.vue'
import Content from './layout/content.vue'
import Footer from './layout/footer.vue'
import Sider from './layout/sider.vue'

import Toast from './toast.vue'
import plugin from './plugin'

import Tabs from './tab/tabs.vue'
import TabsBody from './tab/tabs-body.vue'
import TabsHead from './tab/tabs-head.vue'
import TabsItem from './tab/tabs-item.vue'
import TabsPane from './tab/tabs-pane.vue'

import Popover from './popover.vue'
import Collapse from './collapse/collapse.vue'
import CollapseItem from './collapse/collapse-item.vue'

import Cascader from './cascader/cascader.vue'
import CascaderItems from './cascader/cascader-items.vue'

import GSlides from './slides/slides.vue'
import GSlidesItem from './slides/slides-item.vue'
import GNav from './nav/nav.vue'
import GNavItem from './nav/nav-item.vue'
import GSubNav from './nav/sub-nav.vue'
import GPager from './pager.vue'


Vue.config.productionTip = false
Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
Vue.component('g-button-group', buttonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-cascader', Cascader)
Vue.component('g-cascader-item', CascaderItems)
Vue.component('g-slides', GSlides)
Vue.component('g-slides-item', GSlidesItem)
Vue.component('g-nav', GNav)
Vue.component('g-nav-item', GNavItem)
Vue.component('g-sub-nav', GSubNav)
Vue.component('g-pager', GPager)

Vue.use(plugin)

new Vue({
    render: h => h(App),
}).$mount('#app')