describe('end-to-end', () => {


  it('Fluxo completo de adição de uma task', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get('#title').type("Task 1")
    cy.get('#summary').type("Summary 1")
    cy.get('[type="submit"]').click()
    cy.get('.task').should("have.length", 1)
  })

  it('Validação do menu modal abreine fechando', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get(".modal").should("have.length", 1)
    cy.get('[type="button"]').click()
    cy.get(".modal").should("not.exist")

  })

  it('Adicionar uma tarefa com categoria urgente', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get('#title').type("Task 1")
    cy.get('#summary').type("Summary 1")
    cy.get('#category').select("urgent")
    cy.get('[type="submit"]').click()
    cy.get('.task').should("contain", "🚨")
  })
  
  it('Adicionar duas ou mais tarefas', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get('#title').type("Task 1")
    cy.get('#summary').type("Summary 1")
    cy.get('[type="submit"]').click()

    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get('#title').type("Task 2")
    cy.get('#summary').type("Summary 2")
    cy.get('[type="submit"]').click()

    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get('#title').type("Task 3")
    cy.get('#summary').type("Summary 3")
    cy.get('[type="submit"]').click()
    cy.get('.task').should("have.length", 3)
  })

  it('Filtrar duas ou mais tarefas', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get('#title').type("Task 1")
    cy.get('#summary').type("Summary 1")
    cy.get('[type="submit"]').click()

    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get('#title').type("Task 2")
    cy.get('#summary').type("Summary 2")
    cy.get('#category').select("important")
    cy.get('[type="submit"]').click()

    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get('#title').type("Task 3")
    cy.get('#summary').type("Summary 3")
    cy.get('#category').select("important")
    cy.get('[type="submit"]').click()

    cy.get('#filter').select("important")
    cy.get('.task').should("have.length", 2)
    cy.get('.task').should("contain", "🔴")
  })

  it('Validação de campos vazios com mensagem de erro ao tentar criar tarefa', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.error-message').should('contain', 'Please provide values for task title, summary and category!')
  })

})