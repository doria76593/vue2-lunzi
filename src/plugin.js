import Toast from './toast.vue'
let currentToast
export default {
    install(Vue, options) {
        Vue.prototype.$toast = (message, toastOptions) => {
            console.log('toastOptions', toastOptions)
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast({ Vue, message, propsData: toastOptions })
        }
    }
}

function createToast({ Vue, message, propsData }) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({ propsData })
    toast.$slots.default = [message] //1-createElement中children是放在数组中；2-内容必须放在mount之前，注意顺序
    toast.$mount() //mount1
    document.body.appendChild(toast.$el) //mount2
    return toast
}