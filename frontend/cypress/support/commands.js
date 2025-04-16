// 自定义命令：等待页面加载完成
Cypress.Commands.add('waitForPageLoad', () => {
  cy.window().should('have.property', 'document').its('readyState').should('eq', 'complete')
})

// 自定义命令：检查元素是否在视图中
Cypress.Commands.add('isInViewport', { prevSubject: 'element' }, (subject) => {
  const bottom = Cypress.$(cy.state('window')).height()
  const rect = subject[0].getBoundingClientRect()
  expect(rect.top).to.be.lessThan(bottom)
  expect(rect.bottom).to.be.greaterThan(0)
  return subject
})

// 自定义命令：滚动到元素
Cypress.Commands.add('scrollIntoView', { prevSubject: 'element' }, (subject) => {
  subject[0].scrollIntoView({ behavior: 'smooth', block: 'center' })
  return subject
}) 