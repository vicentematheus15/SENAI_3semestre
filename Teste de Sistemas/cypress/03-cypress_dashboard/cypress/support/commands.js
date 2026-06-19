
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

Cypress.Commands.add('fillOrderForm', (customer, product, amount) => {
    cy.get('[data-testid="input-customer"]').clear().type(customer)
    cy.get('[data-testid="input-product"]').clear().type(product)
    cy.get('[data-testid="input-amount"]').clear().type(amount)
    cy.get('[data-testid="submit-order"]').click()
})