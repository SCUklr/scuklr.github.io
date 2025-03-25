import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { NButton, NIcon } from 'naive-ui'
import { ArrowUpOutline } from '@vicons/ionicons5'

// 模拟滚动事件
const mockScrollEvent = {
  scrollY: 400,
  innerHeight: 800,
  document: {
    documentElement: {
      scrollHeight: 2000
    }
  }
}

describe('BackToTop Component', () => {
  let wrapper
  let scrollHandler

  beforeEach(() => {
    // 模拟 window 对象
    global.window = {
      scrollY: 0,
      innerHeight: 800,
      document: {
        documentElement: {
          scrollHeight: 2000
        }
      },
      scrollTo: vi.fn(),
      addEventListener: vi.fn((event, handler) => {
        scrollHandler = handler
      }),
      removeEventListener: vi.fn()
    }

    // 创建组件包装器
    wrapper = mount({
      template: `
        <n-button
          v-show="showBackToTop"
          circle
          type="primary"
          size="large"
          class="back-to-top"
          @click="scrollToTop"
        >
          <template #icon>
            <n-icon size="24"><arrow-up-outline /></n-icon>
          </template>
        </n-button>
      `,
      components: {
        NButton,
        NIcon,
        ArrowUpOutline
      },
      data() {
        return {
          showBackToTop: false
        }
      },
      methods: {
        calculateScrollProgress() {
          const windowHeight = window.innerHeight
          const documentHeight = window.document.documentElement.scrollHeight - windowHeight
          const scrolled = window.scrollY
          this.showBackToTop = scrolled > 300
        },
        scrollToTop() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }
      },
      mounted() {
        window.addEventListener('scroll', this.calculateScrollProgress)
      },
      beforeUnmount() {
        window.removeEventListener('scroll', this.calculateScrollProgress)
      }
    })
  })

  it('should not show button initially', () => {
    expect(wrapper.find('.back-to-top').exists()).toBe(false)
  })

  it('should show button when scrolled past threshold', () => {
    window.scrollY = 400
    scrollHandler()
    expect(wrapper.find('.back-to-top').exists()).toBe(true)
  })

  it('should call scrollTo when clicked', async () => {
    window.scrollY = 400
    scrollHandler()
    await wrapper.find('.back-to-top').trigger('click')
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    })
  })
}) 