# 🧪 PROJETO 4 — Testes Avançados com Vitest — Hooks, Mocks, Spies e Async

---

## 🎯 Objetivo da Aula

Dominar os recursos avançados de testes unitários que tornam possível testar código do mundo real: funções que dependem de serviços externos, operações assíncronas e estado compartilhado entre testes.

Ao final da aula, vocês terão escrito testes que:

- controlam o ambiente antes e depois de cada execução com **hooks**
- simulam dependências externas com **mocks**
- monitoram chamadas de função sem alterar seu comportamento com **spies**
- aguardam e verificam operações **assíncronas**

---

## 🧠 Conceitos da Aula

### 1. Hooks — Preparar e limpar o ambiente

Hooks são funções que rodam automaticamente antes ou depois dos testes. Eles evitam repetição e garantem que cada teste começa com um estado limpo.

```
beforeAll   → roda UMA VEZ antes de todos os testes do describe
afterAll    → roda UMA VEZ depois de todos os testes do describe
beforeEach  → roda antes de CADA teste
afterEach   → roda depois de CADA teste
```

**Quando usar cada um:**

| Hook | Caso de uso típico |
|---|---|
| `beforeAll` | conectar a um banco, inicializar servidor |
| `afterAll` | fechar conexão, apagar dados de seed |
| `beforeEach` | resetar estado, recriar objeto limpo |
| `afterEach` | limpar mocks, desfazer side effects |

---

### 2. Mocks — Substituir dependências

Um mock substitui uma função ou módulo inteiro por uma versão controlada. Isso isola o código que você quer testar de suas dependências externas (APIs, banco de dados, envio de e-mail...).

```javascript
// Criar um mock de função
const mockFn = vi.fn()
mockFn.mockReturnValue('valor fixo')
mockFn.mockResolvedValue('valor async')
mockFn.mockRejectedValue(new Error('falhou'))

// Verificar se foi chamada
expect(mockFn).toHaveBeenCalled()
expect(mockFn).toHaveBeenCalledWith('argumento')
expect(mockFn).toHaveBeenCalledTimes(2)
```

---

### 3. Spies — Observar sem substituir

Um spy monitora chamadas a uma função existente sem mudar seu comportamento. É útil quando você quer verificar SE uma função foi chamada, mas ainda quer que ela execute normalmente.

```javascript
// Espionar um método existente
const spy = vi.spyOn(objeto, 'nomeDoMetodo')

// Verificar a chamada
expect(spy).toHaveBeenCalled()

// Restaurar o comportamento original
spy.mockRestore()
```

**Diferença entre mock e spy:**

| | Mock | Spy |
|---|---|---|
| Substitui a função? | ✅ Sim | ❌ Não (por padrão) |
| Registra chamadas? | ✅ Sim | ✅ Sim |
| Quando usar | dependência externa | verificar interação interna |

---

### 4. Testes Assíncronos

Funções que retornam Promises precisam que o teste aguarde sua resolução. Existem **4 formas** de fazer isso — todas válidas, mas com contextos diferentes:

---

**Forma 1 — `async/await`**

A mais legível e recomendada hoje em dia. Lê como código síncrono normal.

```javascript
it('deve buscar usuário', async () => {
  const user = await getUser(1)
  expect(user.name).toBe('Ana')
})
```

---

**Forma 2 — retornar a Promise**

Funciona, mas o `.then()` aninhado fica verboso em casos mais complexos.
⚠️ Sem o `return`, o teste passa mesmo se a Promise rejeitar.

```javascript
it('deve buscar usuário', () => {
  return getUser(1).then(user => {
    expect(user.name).toBe('Ana')
  })
})
```

---

**Forma 3 — `done` callback**

Estilo mais antigo, do Jest/Jasmine clássico. Você vai encontrar em código legado.
⚠️ O Vitest **deprecou** o `done()` — funciona, mas gera warning. No Jest puro ainda é suportado normalmente.

A regra de ouro: **sempre** chame `done()` — inclusive no `catch` — ou o teste trava indefinidamente.

```javascript
it('deve buscar usuário', (done) => {
  getUser(1)
    .then(user => {
      expect(user.name).toBe('Ana')
      done()
    })
    .catch(err => {
      done(err)
    })
})
```

Variação com `try/catch` dentro do `then` — garante que um `expect()` que falha não engole o erro silenciosamente:

```javascript
it('deve buscar usuário', (done) => {
  getUser(1).then(user => {
    try {
      expect(user.name).toBe('Ana')
      done()
    } catch (e) {
      done(e)
    }
  })
})
```

---

**Forma 4 — `.resolves` / `.rejects`**

`.resolves` e `.rejects` deixam você encadear o `expect` direto na Promise, sem precisar guardar o resultado em uma variável:

```javascript
// forma tradicional — await, guarda, verifica
const user = await getUser(1)
expect(user.name).toBe('Ana')

// com .resolves — a mesma coisa em uma linha
await expect(getUser(1)).resolves.toBe('Ana')
```

Para testar rejeição:

```javascript
await expect(getUser(999)).rejects.toThrow('Usuário não encontrado')
```

⚠️ Precisa do `await` ou `return`, senão o teste passa sem verificar nada.

---

**Resumo comparativo:**

| Forma | Suporte | Quando usar |
|---|---|---|
| `async/await` | ✅ Todos | Padrão — use sempre que puder |
| `return Promise` | ✅ Todos | Quando não quer `async` na assinatura |
| `done` callback | ⚠️ Jest (deprecado no Vitest) | Código legado |
| `.resolves/.rejects` | ✅ Todos | Assertions declarativas e concisas |

> ⚠️ **Armadilha comum:** se você esquecer o `await` ou o `return`, o teste passa mesmo quando deveria falhar — porque a Promise nunca foi aguardada.

---

## 🎬 O Cenário: Sistema de Notificações

Durante a aula, vamos construir ao vivo os testes de um sistema de notificações que:

- envia e-mails via um serviço externo
- registra logs de cada operação
- formata mensagens a partir do nome do usuário e do evento

O código já existe. Vamos escrever os testes juntos, um conceito por vez.

---

## 📁 Estrutura do Projeto

```
04-advanced-project/
├── src/
│   ├── logger.js              ← logs (alvo dos spies)
│   ├── emailService.js        ← envio de e-mail (alvo dos mocks)
│   └── notificationService.js ← orquestra tudo (alvo principal)
├── tests/
│   └── notificationService.test.js  ← escreveremos ao vivo
└── package.json
```

---

## 🔴→🟢 Roteiro da Demonstração ao Vivo

### Passo 1 — Teste síncrono simples (aquecimento)
Testar `formatMessage()` sem nenhum recurso avançado. Mostrar que funciona igual ao que já conhecem.

### Passo 2 — `beforeEach`
Mostrar o problema: repetir `const service = new NotificationService()` em cada teste.
Extrair para `beforeEach`, mostrar que os testes continuam passando.

### Passo 3 — Mock de função (`vi.fn`)
`emailService.send` faz uma chamada real a uma API externa. Mostrar o que acontece sem mock (lento/falha).
Substituir por `vi.fn().mockResolvedValue(...)`. Mostrar `toHaveBeenCalledWith`.

### Passo 4 — Spy no logger
Não queremos substituir o `logger`, só verificar se ele foi chamado.
Usar `vi.spyOn(logger, 'log')`. Mostrar a diferença: função ainda executa.

### Passo 5 — Teste assíncrono
Mostrar o que acontece sem `await` (teste passa errado).
Adicionar `await`, mostrar que agora o comportamento correto é validado.

### Passo 6 — `afterEach`
Mostrar que spies e mocks acumulam estado entre testes.
Adicionar `afterEach(() => vi.restoreAllMocks())`.

---

## 📝 Atividade Final — Sistema de Notificações

Agora é a vez de vocês. Apliquem os mesmos conceitos em um novo contexto.

### 🏪 O Cenário

O `NotificationService` do projeto:

- valida o usuário antes de enviar a notificação
- chama um `emailService` externo assíncrono
- registra cada etapa no `logger`
- retorna um objeto com `success` e `message`

O código já está implementado em `src/`. Sua missão é escrever os testes em `tests/notificationService.test.js`.

---

### 📁 Estrutura da Atividade

```
04-advanced-project/
├── src/
│   ├── logger.js           ← não altere
│   ├── emailService.js     ← não altere
│   └── notificationService.js ← não altere
├── tests/
│   └── notificationService.test.js ← você vai criar
└── package.json
```

---

### 🧩 O que você deve implementar nos testes

**Usando `beforeEach`:**

- Recriar o `NotificationService` com dependências mockadas antes de cada teste

**Usando `vi.fn()` (mock):**

- Mockar `emailService.send` para retornar sucesso
- Mockar `emailService.send` para simular falha no envio

**Usando `vi.spyOn()` (spy):**

- Verificar se `logger.log` foi chamado durante o processamento

**Testes assíncronos:**

- Usar `async/await` para aguardar `notify()` e `notifyMany()`
- Usar `rejects.toThrow` para testar o caminho de erro

---

### ✅ Critério de Aceite

```
✓ tests/notificationService.test.js (10+)

Test Files  1 passed (1)
     Tests  10 passed (10)
```

Os testes devem cobrir:

| # | O que testar | Recurso usado |
|---|---|---|
| 1 | Formata mensagem corretamente | síncrono |
| 2 | Envia notificação com sucesso | async/await |
| 3 | Chama `emailService.send` com os argumentos corretos | mock + `toHaveBeenCalledWith` |
| 4 | Chama `logger.log` ao enviar | spy |
| 5 | Lança erro para usuário inválido sem nome | síncrono |
| 6 | Lança erro para usuário inválido sem e-mail | síncrono |
| 7 | Rejeita quando o serviço de e-mail falha | mock de rejeição + `rejects.toThrow` |
| 8 | Não chama `logger.log` quando o usuário é inválido | spy + `not.toHaveBeenCalled` |
| 9 | Estado do mock é resetado entre testes | beforeEach |
| 10 | `notifyMany` chama notificações para vários usuários | `toHaveBeenCalledTimes` |

---

### 📦 Entregáveis

1. **Arquivo `tests/notificationService.test.js`** com todos os testes implementados
2. **Print do terminal** com os 10+ testes verdes
3. **Reflexão escrita (mínimo 8 linhas):**
   - Qual a diferença prática entre usar um mock e um spy? Em qual teste você percebeu essa diferença?
   - O que aconteceu quando você esqueceu o `await`? Como identificou o problema?
   - Por que o `beforeEach` é importante quando usamos mocks?
   - Você consegue pensar em um cenário do seu dia a dia onde cada um desses recursos seria útil?

---

## 💡 Dicas

| Situação | O que fazer |
|---|---|
| Mock não está sendo resetado | Use `beforeEach(() => vi.clearAllMocks())` |
| Teste assíncrono passa mas não deveria | Verifique se esqueceu o `await` |
| Spy está interferindo no comportamento | Use `vi.spyOn` sem `.mockImplementation` para só observar |
| Quero que o mock falhe | Use `.mockRejectedValue(new Error('...'))` |
| Não sei como verificar chamadas | `expect(mockFn).toHaveBeenCalledWith(valor)` |
