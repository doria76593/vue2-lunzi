import Toast from './toast.vue'
let currentToast
export default {
    install(Vue, options) {
        Vue.prototype.$toast = (message, toastOptions) => {

            if (currentToast) {
                console.log('currentToast11', currentToast)
                currentToast.close()
            }
            currentToast = createToast({
                Vue,
                message,
                propsData: toastOptions,
                onClose: () => {
                    currentToast = null
                }
            })
            console.log('currentToas222', currentToast)
        }
    }
}

function createToast({ Vue, message, propsData, onClose }) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({ propsData })
    toast.$slots.default = [message] //1-createElement中children是放在数组中；2-内容必须放在mount之前，注意顺序
    toast.$mount() //mount1
    document.body.appendChild(toast.$el) //mount2
    toast.$on('beforeClose', onClose)
    return toast
}