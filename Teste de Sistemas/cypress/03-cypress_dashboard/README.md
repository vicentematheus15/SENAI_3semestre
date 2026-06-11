# 🧪 PROJETO 8 — Cypress E2E: Dashboard TechStore

---

## 🎯 Objetivo

Aprender os **fundamentos do Cypress** para testes end-to-end (E2E) em uma aplicação React real, dominando:

- Comandos básicos de navegação, seleção e asserção
- **Hooks** (`before`, `beforeEach`, `after`, `afterEach`) para preparar e limpar o ambiente
- **Spies** (`cy.spy`) — observar chamadas de funções sem alterar comportamento
- **Stubs** (`cy.stub`) — substituir funções por versões controladas
- **Fixtures** e **Custom Commands**

Ao final, você será capaz de testar qualquer aplicação web com confiança, isolando o frontend de dependências externas.

---

## 📚 Conceitos da Aula

### 1. Cypress — O que é?

Cypress é um framework de testes end-to-end moderno que roda **dentro do browser**. Diferente de ferramentas como Selenium, ele tem acesso total ao DOM, à rede e até ao `window` da aplicação — o que permite testes rápidos, estáveis e poderosos.

| Vantagem | Explicação |
|---|---|
| **Rápido** | Roda no mesmo event loop da aplicação |
| **Debuggável** | Veja o estado do DOM em cada etapa do teste |
| **Confiável** | Espera automática (retry) até o elemento estar pronto |
| **Acesso total** | Pode espiar e substituir funções do `window` |

---

### 2. Fundamentos — Comandos essenciais

```javascript
// Navegação
cy.visit('/')                    // carrega a URL base
cy.url().should('include', '/dashboard')

// Seleção
cy.get('[data-testid="stat-revenue"]')   // por atributo de teste
cy.contains('TechStore Dashboard')         // por texto visível

// Interação
cy.get('input').type('Monitor')          // digita texto
cy.get('button').click()                  // clica
cy.get('select').select('completed')      // seleciona option

// Asserção (should)
cy.get('.value').should('have.text', 'R$ 0,00')
cy.get('.badge').should('be.visible')
cy.get('tbody tr').should('have.length', 3)
```

> 📌 **Boas práticas:** Use sempre `data-testid` para selecionar elementos. Evite selecionar por classes CSS ou texto, pois esses mudam com mais frequência.

---

### 3. Hooks — Preparar e limpar o ambiente

Hooks no Cypress funcionam exatamente como no Vitest/Jest, mas rodam **dentro do browser**:

```javascript
before      → roda UMA VEZ antes de todos os testes do describe
beforeEach  → roda antes de CADA teste
afterEach   → roda depois de CADA teste
after       → roda UMA VEZ depois de todos os testes
```

**Quando usar cada um:**

| Hook | Caso de uso típico no E2E |
|---|---|
| `before` | Carregar fixtures, fazer login único |
| `beforeEach` | Limpar localStorage, resetar estado, visitar URL base |
| `afterEach` | Tirar screenshot de falha, limpar dados de teste |
| `after` | Fechar conexões, limpar banco de teste |

**Exemplo real deste projeto:**

```javascript
describe('Dashboard', () => {
  beforeEach(() => {
    cy.clearOrders()          // limpa localStorage
    cy.visit('/')              // carrega a aplicação
  })

  afterEach(() => {
    cy.clearOrders()          // garante estado limpo
  })

  it('deve carregar...', () => { ... })
})
```

---

### 4. Fixtures — Dados de teste reutilizáveis

Fixtures são arquivos JSON (ou outros formatos) que armazenam dados estáticos para seus testes.

```javascript
// cypress/fixtures/orders.json
[
  { "id": 1, "customer": "Ana Silva", "amount": 4500, "status": "completed" }
]

// No teste
cy.fixture('orders.json').then((orders) => {
  cy.seedOrders(orders)
})
```

No Cypress moderno, você também pode carregar uma fixture como alias no hook `before`:

```javascript
before(() => {
  cy.fixture('orders.json').as('ordersFixture')
})
```

E acessar no teste via `this.ordersFixture` (função tradicional, não arrow).

---

### 5. Spies — Observar sem substituir (`cy.spy`)

Um **spy** espiona uma função real e registra quantas vezes ela foi chamada e com quais argumentos — mas **deixa a função executar normalmente**.

```javascript
cy.window().then((win) => {
  const spy = cy.spy(win.orderService, 'notify')

  cy.get('button').click()     // ação que dispara notify()

  expect(spy).to.be.calledOnce
  expect(spy.getCall(0).args[0]).to.equal('order:created')
})
```

**Quando usar spies:**
- Verificar se uma função interna foi chamada após uma interação do usuário
- Validar os argumentos passados para event emitters
- Confirmar que logs foram registrados

---

### 6. Stubs — Substituir comportamento (`cy.stub`)

Um **stub** substitui uma função por uma versão controlada. É como um mock, mas no Cypress.

```javascript
cy.window().then((win) => {
  // Stub que retorna um valor fixo
  const stub = cy.stub(win.orderService, 'notify').returns(true)

  // Stub que lança erro
  cy.stub(win.orderService, 'validateOrder').throws(new Error('Falha!'))
})
```

**Diferença entre Spy e Stub:**

| | Spy | Stub |
|---|---|---|
| Executa a função original? | ✅ Sim | ❌ Não |
| Registra chamadas? | ✅ Sim | ✅ Sim |
| Quando usar | Verificar interação | Isolar de APIs/erros |

**Cenários reais para stubs no E2E:**
- Simular falha de API sem depender do backend
- Forçar validações a passar ou falhar
- Controlar respostas de serviços de terceiros (ex: pagamento, geolocalização)

---

### 7. Custom Commands

Commands são extensões do Cypress que você cria para reutilizar ações comuns:

```javascript
// cypress/support/commands.js
Cypress.Commands.add('fillOrderForm', (customer, product, amount) => {
  cy.get('[data-testid="input-customer"]').clear().type(customer)
  cy.get('[data-testid="input-product"]').clear().type(product)
  cy.get('[data-testid="input-amount"]').clear().type(amount)
})

// No teste
cy.fillOrderForm('João', 'Mouse', '99')
```

---

## 🎬 O Cenário: Dashboard TechStore

Uma loja virtual de tecnologia precisa de um dashboard para gerenciar pedidos. A aplicação foi construída com **React + JavaScript puro** e possui:

1. **Dashboard** — estatísticas de receita, pedidos pendentes, cancelados e lista de pedidos recentes
2. **Gerenciamento de Pedidos** — formulário para adicionar, tabela para listar, filtros por status e ações para concluir/cancelar

A persistência é feita via `localStorage`, e o módulo `orderService` é exposto no `window` para permitir spies e stubs nos testes.

---

## 📁 Estrutura do Projeto

```
08-cypress-e2e/
├── cypress/
│   ├── e2e/
│   │   ├── dashboard.cy.js      ← testes do Dashboard (fundamentos + hooks)
│   │   └── orders.cy.js          ← testes de Pedidos (spies + stubs + fluxo)
│   ├── fixtures/
│   │   └── orders.json           ← dados mock de pedidos
│   └── support/
│       ├── commands.js           ← comandos customizados do Cypress
│       └── e2e.js                ← configuração de suporte E2E
├── src/
│   ├── components/               ← componentes React
│   ├── pages/                    ← páginas Dashboard e Orders
│   ├── hooks/                    ← hook useOrders (localStorage)
│   ├── lib/
│   │   └── orderService.js       ← funções de negócio expostas no window
│   ├── main.jsx                  ← entry point React
│   ├── App.jsx                   ← componente raiz com navegação
│   └── styles.css                ← estilos da aplicação
├── index.html                    ← HTML principal
├── vite.config.js                ← configuração do Vite
├── cypress.config.js             ← configuração do Cypress
├── package.json
└── README.md
```

---

## 📦 Setup do Projeto

```bash
cd 08-cypress-e2e
npm install
```

### Rodar a aplicação (em um terminal)

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

### Rodar os testes Cypress (em outro terminal)

**Modo interativo (UI):**
```bash
npx cypress open
```

**Modo headless (CI):**
```bash
npm run test:e2e
```

---

## 🗺️ Roteiro dos Testes

### `dashboard.cy.js` — Fundamentos e Hooks

| # | Teste | Conceito |
|---|---|---|
| 1 | Carrega título da aplicação | `cy.visit`, `cy.contains`, `cy.get` |
| 2 | Estatísticas zeradas sem pedidos | `should('have.text')` |
| 3 | Mensagem de vazio sem pedidos | `cy.get` + `.should('contain')` |
| 4 | Navegação para página de Pedidos | `cy.click`, `cy.url()` |
| 5 | Receita total com fixture | `beforeEach` + `cy.fixture` + `cy.seedOrders` |
| 6 | Contadores corretos com dados | `beforeEach` + fixture |
| 7 | Lista de pedidos recentes | `cy.get` + `.should('have.length')` |

### `orders.cy.js` — Spies, Stubs e Fluxo Completo

| # | Teste | Conceito |
|---|---|---|
| 1 | Adicionar novo pedido via formulário | `cy.type`, `cy.click`, asserção de DOM |
| 2 | Badge "Pendente" para pedidos novos | `cy.find` + `.should('have.text')` |
| 3 | Filtrar pedidos por status | `cy.select` |
| 4 | Mostrar todos ao selecionar "Todos" | interação com select |
| 5 | Concluir pedido pendente | `cy.click` + verificação de badge |
| 6 | Cancelar pedido pendente | `cy.click` + verificação de badge |
| 7 | **Spy** em `notify` ao criar pedido | `cy.spy` + `.calledOnce` |
| 8 | **Spy** em `notify` ao concluir pedido | `cy.spy` + validação de argumentos |
| 9 | **Stub** em `notify` (substituição) | `cy.stub` + `.returns` |
| 10 | **Stub** em `validateOrder` (erro simulado) | `cy.stub` + `.throws` |
| 11 | Fluxo completo: add → filtrar → concluir | combinação de todos os conceitos |

---

## 📝 Atividade para o Aluno

Todos os testes já estão implementados e passando (green). Para praticar:

1. **Execute o modo interativo** (`npx cypress open`) e observe o "time travel" — clique em cada linha do teste para ver o estado do DOM naquele momento.

2. **Quebre propositalmente** um teste (ex: mude um valor esperado no `should`) e veja como o Cypress reporta o erro com screenshot e mensagem clara.

3. **Adicione um novo teste** que verifica se, ao cancelar um pedido, o contador de cancelados no Dashboard é atualizado. Dica: use `cy.navigateTo('dashboard')` após cancelar.

4. **Crie um novo stub** que simula uma resposta lenta da "API" usando `cy.stub(...).callsFake((...args) => new Promise(resolve => setTimeout(() => resolve(true), 500)))`.

---

## ✅ Checklist de Aprendizado

Antes de passar para o próximo projeto, verifique se você consegue:

- [ ] Explicar a diferença entre `cy.get` e `cy.contains`
- [ ] Usar `beforeEach` para garantir estado limpo entre testes
- [ ] Carregar e usar uma fixture no teste
- [ ] Criar um `cy.spy` e verificar que uma função foi chamada
- [ ] Criar um `cy.stub` para simular erro de validação
- [ ] Explicar quando usar spy vs. stub
- [ ] Rodar os testes tanto no modo interativo quanto headless

---

## 🛠️ Stack

- **Runtime:** Node.js
- **Frontend:** React 18 + JavaScript (JSX)
- **Bundler:** Vite
- **Testes E2E:** Cypress 13
- **Persistência:** localStorage

---

## 🚀 Comandos Úteis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia a aplicação em dev mode |
| `npm run preview` | Pré-visualiza o build de produção |
| `npx cypress open` | Abre o Cypress em modo interativo |
| `npm run cypress:run` | Roda todos os testes em modo headless |
| `npm run test:e2e` | Alias para `cypress:run` |
