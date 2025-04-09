import { mount } from '@vue/test-utils'
import BackToTop from '../BackToTop.vue'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

describe('BackToTop', () => {
  let wrapper: ReturnType<typeof mount>
  
  beforeEach(() => {
    wrapper = mount(BackToTop)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  // 测试1：组件是否正确渲染
  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.back-to-top').exists()).toBe(true)
    expect(wrapper.find('.arrow').exists()).toBe(true)
  })

  // 测试2：初始状态下按钮应该是隐藏的
  it('button should be hidden initially', () => {
    const button = wrapper.find('.back-to-top')
    expect(button.classes()).not.toContain('show')
  })

  // 测试3：滚动超过100px时按钮应该显示
  it('button should show when scrolled more than 100px', async () => {
    const button = wrapper.find('.back-to-top')
    
    // 模拟滚动事件
    window.scrollY = 150
    window.dispatchEvent(new Event('scroll'))
    
    // 等待Vue更新DOM
    await wrapper.vm.$nextTick()
    
    expect(button.classes()).toContain('show')
  })

  // 测试4：滚动小于100px时按钮应该隐藏
  it('button should hide when scrolled less than 100px', async () => {
    const button = wrapper.find('.back-to-top')
    
    // 先设置滚动位置大于100px
    window.scrollY = 150
    window.dispatchEvent(new Event('scroll'))
    await wrapper.vm.$nextTick()
    
    // 然后设置滚动位置小于100px
    window.scrollY = 50
    window.dispatchEvent(new Event('scroll'))
    await wrapper.vm.$nextTick()
    
    expect(button.classes()).not.toContain('show')
  })

  // 测试5：点击按钮时应该调用scrollTo方法
  it('calls scrollTo when clicked', () => {
    const scrollToMock = vi.fn()
    window.scrollTo = scrollToMock

    wrapper.find('.back-to-top').trigger('click')

    expect(scrollToMock).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    })
  })
}) 