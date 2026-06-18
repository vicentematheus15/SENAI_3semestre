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


})

it("Deve exibir o badge Pendente para pedidos novos", () => {

})

it("Deve filtrar pedidos por status", () => {

})

it('Deve concluir um pedido pendente', () => {

})

it("Deve cancelar um pedido pendente", () => {
})

})