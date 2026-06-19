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
    cy.get('[data-testid="orders-list"]').first().should('contain', 'Carlos Souza')
    cy.get('[data-testid="orders-list"]').first().should('contain', 'Monitor 27')
    cy.get('[data-testid="orders-list"]').first().should('contain', '550')
})

it("Deve exibir o badge Pendente para pedidos novos", () => {
    cy.fillOrderForm('Joao Pedro', 'Mouse gamer', '200')
    cy.get('[data-testid="order-row-4"] > :nth-child(5) > .badge').should('be.visible')

})

it("Deve filtrar pedidos por status", () => {
    //todos
    cy.get('[data-testid="orders-list"] tbody tr').should('have.length', 3)
    //pendendes
    cy.get('[data-testid="filter-status"]').select('Pendentes')
    cy.get('[data-testid="orders-list"] tbody tr').should('have.length', 1)
    //cancelados
    cy.get('[data-testid="filter-status"]').select('Cancelados')
    cy.get('[data-testid="orders-list"] tbody tr').should('have.length', 1)
    //concluido
    cy.get('[data-testid="filter-status"]').select('Concluídos')
    cy.get('[data-testid="orders-list"] tbody tr').should('have.length', 1)
})

it('Deve concluir um pedido pendente', () => {
    cy.get('[data-testid="complete-btn-2"]').click()
    cy.get('[data-testid="filter-status"]').select('Concluídos')
    cy.get('[data-testid="orders-list"] tbody tr').should('have.length', 2)
    cy.get('[data-testid="toast-success"]').should('be.visible')
})

it("Deve cancelar um pedido pendente", () => {
    cy.get('[data-testid="cancel-btn-2"]').click()
    cy.get('[data-testid="filter-status"]').select('Cancelados')
    cy.get('[data-testid="orders-list"] tbody tr').should('have.length', 2)
    cy.get('[data-testid="toast-success"]').should('be.visible')
})

})