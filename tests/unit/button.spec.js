import chai,{ expect } from 'chai'
import Vue from 'vue'
import { mount, createWrapper } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai);


import Button from '@/button.vue'
import Icon from '@/Icon'
Vue.component('g-icon', Icon)

describe('Button', () => {
    it('存在', () => {
        expect(Button).to.exist
    })
    it('可以设置icon.', () => {

        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings'
            }
        })
        const useElement = wrapper.find('use')
        expect(useElement.attributes()['href']).to.equal('#i-settings')
    })

    it('可以设置loading.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        const vm = wrapper.vm
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
    })

    xit('设置 iconPosition 可以改变 order', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        })
        const vm = wrapper.vm
        const icon = vm.$el.querySelector('svg')
        let aa = getComputedStyle(icon)
        console.log('aa');
        console.log(aa.order);//undefined 无法检测css

        expect(aa.order).to.eq('2')
    })

    it('点击 button 触发 click 事件', () => {
        const wrapper = mount(Button, {
          propsData: {
            icon: 'settings',
          }
        })
        const vm = wrapper.vm
    
        const callback = sinon.fake();//需要安装yarn add sinon sinon-chai 函数这个是sinon-chai提供
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called
    
      })
})