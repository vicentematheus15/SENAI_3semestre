// ============================================================
//  ✏️  PASSO 1 — PREENCHA SEUS DADOS AQUI
//
//  Substitua os valores abaixo com seu RA e nome completo.
//  Este comando fará seu RA aparecer no painel do Cypress
//  em cada execução — é a sua assinatura nos testes.
// ============================================================

const MEU_EMAIL  = 'meu@.com'           // ← troque pelo seu RA
const MEU_NOME = 'Seu Nome Completo'  // ← troque pelo seu nome completo

// ============================================================
//  Comando cy.identificar()
//
//  Registra o aluno no painel lateral do Cypress (cy.log) e
//  salva os dados no localStorage. Deve ser chamado no
//  beforeEach do seu arquivo de testes.
//
//  Uso:
//    beforeEach(() => {
//      cy.identificar()
//      cy.visit('/')
//    })
// ============================================================

Cypress.Commands.add('identificar', () => {
  cy.log(`👤 Aluno: ${MEU_NOME} | Email: ${MEU_EMAIL}`)
  cy.window().then((win) => {
    win.localStorage.setItem('_email_aluno', MEU_EMAIL)
    win.localStorage.setItem('_nome_aluno', MEU_NOME)
  })
})
