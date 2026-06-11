describe("Orders", () => {

    beforeEach(()=> {
        cy.clearOrders()
        cy.fixture('orders.json').then((orders) => {
            cy.seedOrders(orders)
        })
        cy.visit('/')
        cy.navigateTo('orders')
    })

    afterEach(()=> {
        cy.clearOrders()
    })

    it("Deve adicionar um novo pedido ao submter o formulario", () => {
        cy.fillOrderForm("Daniel Lima", "Monitor 27", "1200.0")
        cy.get('[data-testid="submit-order"]').click()

        cy.get('[data-testid="orders-list"] tbody tr').first().should("contain", "Daniel Lima")
        cy.get('[data-testid="orders-list"] tbody tr').eq(0).should("contain", "Daniel Lima")

    })

    it('Deve exibir badge "Pendente" para pedidos novos', () => {

    })

    it("Deve filtrar pedidos por status", () => {

    })

    it('Deve mostrar todos os pedidos ao selecionar "Todos"', () => {

    })

    it("Deve concluir um pedido pedente ao clicar em Concluir", () => {

    })

    it('Deve cancelar um pedido pendente ao clicar em Cancelar', () => {
        
    })

})