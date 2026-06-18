/// <reference types="Cypress" />
/// <reference types="Cypress" />

import { type } from "os";

describe("Orders", () => {

beforeEach(() => {
    cy.clearOrders()
    cy.fixture('orders.json').then((orders)=> {
        cy.seedOrders(orders)
    })
    cy.visit('/')
    cy.navigateTo('orders')

})

afterEach(() => {
    cy.clearOrders()
})

it('Deve adicionar um novo pedido ao submeter o formualrio', () =>{
    cy.fillOrderForm('Carlos Souza', 'Monitor 27', '550')
    cy.get('[data-testid="submit-order"]').click()
    cy.get('[data-testid="orders-list"]').first().should('contain', 'Carlos Souza')
    cy.get('[data-testid="orders-list"]').first().should('contain', 'Monitor 27')
    cy.get('[data-testid="orders-list"]').first().should('contain', '550')
})

it("Deve exibir o badge Pendente para pedidos novos", () => {
    cy.fillOrderForm('Joao Pedro', 'Mouse gamer', '200')
    cy.get('[data-testid="submit-order"]').click()
    cy.get('[data-testid="order-row-4"] > :nth-child(5) > .badge').should('be.visible')
    
})

// it("Deve filtrar pedidos por status", () => {

// })

// it('Deve concluir um pedido pendente', () => {

// })

// it("Deve cancelar um pedido pendente", () => {
    
// })

})