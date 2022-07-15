import chai, { expect } from 'chai'
import Vue from 'vue'
import { mount, createWrapper } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai);


import Input from '@/input.vue'
import Icon from '@/Icon'
Vue.component('g-icon', Icon)

describe('Input', () => {
    it('存在', () => {
        expect(Input).to.exist
    })

    // it('Input 触发 click 事件', async () => {
    //   const callback = sinon.fake(); //需要安装yarn add sinon sinon-chai 函数这个是sinon-chai提供
    //     const wrapper = mount(Input, {
    //         propsData: {
    //             value: '点我啊',
    //             listeners: {
    //               callback
    //             }
    //         }
    //     })
    //     let el = wrapper.find('input')

    //     await el.trigger('click')
    //     console.log('change.called')
    //     expect(callback).to.have.been.called

    // })
})