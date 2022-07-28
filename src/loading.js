import Vue from 'vue'
import MyLoading from './loading.vue'

const myLoading = {
  inserted(el, binding) {
    console.log('自定义指令', el)
    // console.log('binding', binding)
    const Loading = Vue.extend(MyLoading)
    const loading = new Loading().$mount()
    // console.log('loading', loading)
    // console.log('el.instance1', el.instance)
    el.instance = loading
    // console.log('el.instance2', el.instance)
    if (binding.value) {
      append(el)
    }
  },
  update(el, binding) {
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  },
}

function append(el) {
  //   console.log('自定义指令el', el.instance.$el)
  el.appendChild(el.instance.$el)
}

function remove(el) {
  el.removeChild(el.instance.$el)
}

export default myLoading
