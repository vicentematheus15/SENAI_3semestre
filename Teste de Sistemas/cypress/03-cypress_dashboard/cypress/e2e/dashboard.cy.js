/// <reference types="cypress" />

describe('Dashboard', ()=> {

    beforeEach(() => {
        cy.clearOrders()
        cy.visit('/')

    })

    afterEach(() => {
        cy.clearOrders()
    })
    
    it('Deve carregar o título da aplicação', () => {
      
    });
    
    it('Deve exibir estatísticas zeradas sem pedidos', () => {
      
    });
    
    it('Deve exibir mensagem de vazio quando não há pediodos', () => {
      
    });
    
    it('Deve navegar na pagina de pedidos e retornar ao dashboard', () => {
      
    })
    
  })