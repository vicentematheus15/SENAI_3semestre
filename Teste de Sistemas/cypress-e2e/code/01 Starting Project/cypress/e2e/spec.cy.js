describe('end-to-end', () => {
  it('Fluxo completo de adição de task', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get(".modal").should("have.length", 1)
    cy.get('#title').type("Task 1")
    cy.get('#summary').type("Summary 1")
    cy.get('[type="submit"]').click()
    cy.get('.task').should("have.length", 1)

  })
})