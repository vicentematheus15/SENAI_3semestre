/// <reference types="Cypress" />

describe('Dashboard sem dados', () => {

  beforeEach(() => {
    cy.clearOrders()
    cy.visit('/')

  })

  afterEach(() => {
    cy.clearOrders()
  })

  it("Deve carregar o titulo da aplicacao", () => {
    cy.get('h1').should('have.text', 'TechStore Dashboard')

  })

  it("Deve exibir estatisticas zeradas sem pedidos", () => {
    cy.get('[data-testid="stat-revenue"] > .value').should('have.text', 'R$ 0,00')
    cy.get('[data-testid="stat-orders"] > .value').should('have.text', '0')
    cy.get('[data-testid="stat-pending"] > .value').should('have.text', '0')
    cy.get('[data-testid="stat-cancelled"] > .value').should('have.text', '0')
  })

  it("Deve exibir mensagem de vazio quando nao ha pedidos", () => {
    cy.get('[data-testid="recent-orders"]').should('be.visible')
    cy.get('[data-testid="empty-orders"]').should('contain', "Nenhum pedido encontrado")
  })

  it("deve navegar para a pagina de pedidos e rertornar ao dashboard", () => {
    cy.get('[data-testid="nav-orders"]').click()
    cy.url().should('include', '#orders')
    cy.get('[data-testid="order-form"]').should('be.visible')
    cy.get('[data-testid="nav-dashboard"]')  .click()
    cy.url().should('include', '#dashboard')
    cy.get('main.container').should('be.visible') 
    
})

})