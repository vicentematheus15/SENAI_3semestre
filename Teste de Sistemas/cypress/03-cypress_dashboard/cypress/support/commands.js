
Cypress.Commands.add('clearOrders', () => {
    cy.window().then((win) => {
        win.localStorage.removeItem('techstore_orders')
    })
})

Cypress.Commands.add('seedOrders', (orders) => {
    cy.window().then((win) => {
        win.localStorage.setItem('techstore_orders', JSON.stringify(orders))
    })
})

Cypress.Commands.add('navigateTo', (page) => {
    if(page === 'dashboard') {
        cy.get('[data-testid="nav-dashboard"]').click()
    }else if(page === 'orders') {
        cy.get('[data-testid="nav-orders"]').click()

    }
})