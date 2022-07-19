import Toast from './toast.vue'

export default {
    install(Vue, options) {
        Vue.prototype.$toast = (msg) => {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default=[msg]//1-createElement中children是放在数组中；2-内容必须放在mount之前，注意顺序
            toast.$mount()//mount1
            document.body.appendChild(toast.$el)//mount2
        }
    }
}