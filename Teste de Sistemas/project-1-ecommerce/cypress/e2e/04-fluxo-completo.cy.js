/// <reference types="cypress" />

describe('Fluxo completo de compra', () => {
    it('Deve completar uma compra do início até o fim', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-product-id="1"] > .product-info > [data-cy="btn-ver-produto"]').as("produto-1")
        cy.get('@produto-1').click()

        //validação da página
        cy.url().should('include', '/product/1')
        cy.get('[data-cy="size-select"]').select("43")
        cy.get('[data-cy="quantity-select"]').select("1")
        cy.get('[data-cy="product-detail-name"]').should('contain', "Tênis Nike Air Max 270")
        cy.get('[data-cy="btn-adicionar-carrinho"]').click()

        //validação toast
        cy.get('[data-cy="toast"] > a').should('have.class', 'toast show')
        cy.get('[data-cy="toast"] > a').should('contain', 'Produto adicionado ao carrinho!')

        cy.get('[data-cy="toast"] > a').click()
        cy.get('[data-cy="btn-finalizar-compra"]').click()

        cy.get('[data-cy="input-nome"]').click()
        cy.get('#input-nome').type("Matheus")
  })
})