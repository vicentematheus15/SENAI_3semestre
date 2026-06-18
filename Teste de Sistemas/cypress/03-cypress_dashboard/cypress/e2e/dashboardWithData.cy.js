/// <reference types="Cypress" />

describe('Dashboard com dados', () => {

  beforeEach(() => {
    cy.clearOrders()
    cy.fixture('orders.json').then((orders) => {
     cy.seedOrders(orders)
     cy.visit('/')
    })

  })

  afterEach(() => {
    cy.clearOrders()
  })

  it("Deve calcular receita total apenas de pedidos concluidos", () => {
    cy.get('[data-testid="stat-revenue"] > .value').should('have.text', 'R$ 5.000,00')
  })

  it("Deve exibir os contadores corretamente", () => {
    cy.get('[data-testid="stat-orders"] > .value').should("have.text", '3')
    cy.get('[data-testid="stat-pending"] > .value').should('have.text', '1')
    cy.get('[data-testid="stat-cancelled"] > .value').should('have.text', '1')
  })

  it("Deve listar os ultimos 3 pedidos", () => {
    cy.get('[data-testid="recent-orders"] tbody tr').should('have.length', 3)
    cy.get('[data-testid="recent-orders"] tbody tr').first().should('contain', 'Bruno Costa')
    cy.get('[data-testid="recent-orders"] tbody tr').eq(1).should('contain', 'Maria Souza')
    cy.get('[data-testid="recent-orders"] tbody tr').eq(2).should('contain', 'Daniel Silva')



  })

})