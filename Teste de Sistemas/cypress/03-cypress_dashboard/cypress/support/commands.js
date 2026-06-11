Cypress.Commands.add('clearOrdes', () => {
    cy.window().then((win) => {
        win.localStorage.removeItem('techstore_orders')
    })
})