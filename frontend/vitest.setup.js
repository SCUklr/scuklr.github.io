import '@testing-library/jest-dom'
import { config } from '@vue/test-utils'

// 配置 Vue Test Utils
config.global.mocks = {
  // 添加全局 mock
}

// 添加自定义匹配器
expect.extend({
  toBeInViewport(received) {
    const rect = received.getBoundingClientRect()
    const isInViewport = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    )
    return {
      message: () => `expected ${received} to be in viewport`,
      pass: isInViewport,
    }
  },
}) 