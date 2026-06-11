/// reference types="Cypress" />

describe('Dashboard', () => {

  beforeEach(() => {
    cy.clearOrders()
    cy.visit('/')
  })

  afterEach(() => {
    cy.clearOrders()
  })

  it("Deve carregar o titulo da pagina", () => {
    cy.get('h1').should('have.text', 'TechStore Dashboard')

  })

  it("Deve exibir estatisticas zeradas sem pedido", () => {
    cy.get('[data-testid="stat-revenue"] > .value').should('have.text', 'R$ 0,00')
    cy.get('[data-testid="stat-orders"] > .value').should('have.text', '0')
    cy.get('[data-testid="stat-pending"] > .value').should('have.text', '0')
    cy.get('[data-testid="stat-cancelled"] > .value').should('have.text', '0')

  } )

  it('Deve exibir mensagem de vazio quando nao há pedidos', () => {
    cy.get('[data-testid="recent-orders"]').should('be.visible')
    cy.get('[data-testid="empty-orders"]').should("have.text", 'Nenhum pedido encontrado.')


  })

  it("Deve navegar para a pagina de Pedidos e retornar ao dashboard", () => {
    cy.get('[data-testid="nav-orders"]').click()
    cy.get('[data-testid="order-form"]').should('be.visible')
    cy.url().should('include', '#orders')

    cy.get('[data-testid="nav-dashboard"]').click()
    cy.get('[data-testid="recent-orders"]').should('be.visible')
    cy.url().should('include', '#dashboard')
  
  
  })
  
//fixture

  describe("Testes com injecao de dados usando fixture", () => {

      beforeEach(() => {

        cy.fixture('orders.json').then((orders) => {
          cy.seedOrders(orders)
          cy.visit('/')
        })

      })

      it("Deve calcular receita total apenas de pedidos concluidos", () => {

        cy.get('[data-testid="stat-revenue"] > .value').should("have.text", "R$ 4.500,00")

      })

      it("Deve exibir as estatisticas corretamente", () => {

        cy.get('[data-testid="stat-orders"] > .value').should('have.text', '3')
        cy.get('[data-testid="stat-pending"] > .value').should('have.text', '1')
        cy.get('[data-testid="stat-cancelled"] > .value').should('have.text', '1')

      })

      it("Deve listar os 3 pedidos mais recentes", () => {
        cy.get('[data-testid="recent-orders"] tbody tr').should('have.length', 3)
        cy.get('[data-testid="recent-orders"] tbody tr').first().should('contain', 'Carla')


      })


    })



  })
