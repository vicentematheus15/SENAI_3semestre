/// <reference types="cypress" />

describe('Fluxo completo de compra', () => {
    it('Deve completar uma compra do início até o fim', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-product-id="1"] > .product-info > [data-cy="btn-ver-produto"]').as("produto-1")
        cy.get('@produto-1').click()

        cy.screenshot()
        //validação da página
        cy.url().should('include', '/product/1')
        cy.get('[data-cy="size-select"]').select("43")
        cy.get('[data-cy="quantity-select"]').select("2")
        cy.get('[data-cy="product-detail-name"]').should('contain', "Tênis Nike Air Max 270")
        cy.get('[data-cy="btn-adicionar-carrinho"]').click()

        //validação toast
        cy.get('[data-cy="toast"]').should('have.class', 'toast show')
        cy.get('[data-cy="toast"]').should('contain', 'Produto adicionado ao carrinho!')
        cy.get('[data-cy="toast"] > a').click()

        //validação quantidade de itens, valor do item e valor final do carrinho
        cy.get('#cart-badge').contains('2')
        cy.get('[data-cy="cart-item"] > :nth-child(2)').contains('R$ 299,90')
        cy.get('[data-cy="cart-total"]').contains('R$ 599,80')
        cy.get('[data-cy="btn-finalizar-compra"]').click()

        //validação checkout
        //nome, email, cep, cidade, endereço, numero, complemento e estado
        cy.get('[data-cy="input-nome"]').click()
        cy.get('#nome').type("Matheus Vicente")

        cy.get('[data-cy="input-email"]').click()
        cy.get('#email').type("matheus@email.com")

        cy.get('[data-cy="input-cep"]').click()
        cy.get('#cep').type("12345678")

        cy.get('[data-cy="input-cidade"]').click()
        cy.get('#cidade').type("Rio de Janeiro")

        cy.get('[data-cy="input-cidade"]').click()
        cy.get('#endereco').type("Avenida Brasil")

        cy.get('[data-cy="input-numero"]')
        cy.get('#numero').type("422")

        cy.get('[data-cy="input-complemento"]')
        cy.get('#complemento').type("Apto 401")

        cy.get('[data-cy="select-estado"]').select('Santa Catarina (SC)')

        //adivionando e validando valor do frete
        cy.get('[data-cy="select-frete"]').select('⚡ Expresso — 2 a 3 dias úteis — R$ 39,90')
        cy.get('[data-cy="summary-frete"]').contains('R$ 39,90')

        //validando novo valor total
        cy.get('[data-cy="summary-total"]').contains('R$ 639,70')

        //selecionando método de pagamento
        cy.get('[data-cy="select-pagamento"]').select('⚡ PIX — 5% de desconto')

        //validando desconto do metodo de pagamento
        cy.get('[data-cy="summary-desconto"]').contains('− R$ 29,99')

       

        

        
  })
})