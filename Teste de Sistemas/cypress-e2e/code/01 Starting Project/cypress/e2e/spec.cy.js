describe('end-to-end', () => {


  it('Fluxo completo de adição de uma task', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="start-add-task-button"]').click()
    // cy.get(".modal").should("have.length", 1)
    cy.get('#title').type("Task 1")
    cy.get('#summary').type("Summary 1")
    cy.get('[type="submit"]').click()
    cy.get('.task').should("have.length", 1)
  })

  it('Validação do menu modal abreine fechando', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get('[type="button"]').click()
  })

  
})