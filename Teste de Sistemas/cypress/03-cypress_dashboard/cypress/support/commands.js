Cypress.Commands.add('clearOrders', () => {
    cy.window().then((win) => {
        win.localStorage.removeItem('techstore_orders')
    })
})