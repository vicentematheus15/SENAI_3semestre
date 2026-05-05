# 🧪 PROJETO 5 — Atividade: Sistema de Pedidos

---

## 🎯 Objetivo

Aplicar de forma independente os recursos avançados de testes unitários vistos no Projeto 4: hooks, mocks, spies e testes assíncronos — em um novo contexto de negócio.

O código já está implementado. Sua missão é escrever os testes.

---

## 📦 Setup do Projeto

```bash
cd 05-order-service-project
npm install
npx vitest
```

---

## 🏪 O Cenário

Uma loja online tem um `OrderService` que processa pedidos. O serviço:

- valida o pedido antes de processar
- chama um `paymentGateway` externo (assíncrono)
- registra cada etapa no `logger`
- retorna um recibo com ID e timestamp

O código já está implementado em `src/`. Sua missão é escrever os testes em `tests/orderService.test.js`.

---

### 📁 Estrutura da Atividade

```
05-order-service-project/
├── src/
│   ├── logger.js           ← não altere
│   ├── paymentGateway.js   ← não altere
│   └── orderService.js     ← não altere
├── tests/
│   └── orderService.test.js ← você vai criar
└── package.json
```

> ⚠️ **Os arquivos de `src/` não devem ser modificados.** Sua missão é criar os testes que validam o comportamento atual do código.

---

## 🧩 O que você deve implementar nos testes

**Usando `beforeEach`:**

- Recriar o `OrderService` com dependências mockadas antes de cada teste

**Usando `vi.fn()` (mock):**

- Mockar `paymentGateway.charge` para retornar sucesso
- Mockar `paymentGateway.charge` para simular falha de pagamento

**Usando `vi.spyOn()` (spy):**

- Verificar se `logger.log` foi chamado durante o processamento

**Testes assíncronos:**

- Usar `async/await` para aguardar `processOrder()`
- Usar `rejects.toThrow` para testar o caminho de erro

---

## ✅ Critério de Aceite

```
✓ tests/orderService.test.js (10+)

Test Files  1 passed (1)
     Tests  10 passed (10)
```

Os testes devem cobrir:

| # | O que testar | Recurso usado |
| --- | --- | --- |
| 1 | Processa pedido válido com sucesso | async/await |
| 2 | Retorna recibo com `id` e `timestamp` | async/await |
| 3 | Chama `paymentGateway.charge` com o valor correto | mock + `toHaveBeenCalledWith` |
| 4 | Chama `logger.log` ao processar | spy |
| 5 | Lança erro para pedido sem itens | síncrono |
| 6 | Lança erro para valor total zero ou negativo | síncrono |
| 7 | Rejeita quando o pagamento falha | mock de rejeição + `rejects.toThrow` |
| 8 | Não chama `logger.log` quando pedido é inválido | spy + `not.toHaveBeenCalled` |
| 9 | Estado do mock é resetado entre testes | beforeEach |
| 10 | Chama `charge` exatamente uma vez por pedido | `toHaveBeenCalledTimes` |

---

## 📦 Entregáveis

1. **Arquivo `tests/orderService.test.js`** com todos os testes implementados
2. **Print do terminal** com os 10+ testes verdes
3. **Matriz de Rastreabilidade de Testes** preenchida (abaixo)
4. **Reflexão escrita (mínimo 8 linhas):**
    - Qual a diferença prática entre usar um mock e um spy? Em qual teste você percebeu essa diferença?
    - O que aconteceu quando você esqueceu o `await`? Como identificou o problema?
    - Por que o `beforeEach` é importante quando usamos mocks?
    - Você consegue pensar em um cenário do seu dia a dia onde cada um desses recursos seria útil?

---

## 📊 Matriz de Rastreabilidade de Testes

> Esta matriz mapeia cada teste ao requisito de negócio que ele valida. Preencha com os seus 10 testes implementados.

| ID | Módulo | Função | Cenário Testado | Dados de Entrada | Resultado Esperado | Tipo | Screenshot (nome do arquivo) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| OS-01 | `orderService` | `validate()` | | | | | |
| OS-02 | `orderService` | `validate()` | | | | | |
| OS-03 | `orderService` | `processOrder()` | | | | | |
| OS-04 | `orderService` | `processOrder()` | | | | | |
| OS-05 | `orderService` | `processOrder()` | | | | | |
| OS-06 | `orderService` | `processOrder()` | | | | | |
| OS-07 | `orderService` | `processOrder()` | | | | | |
| OS-08 | `orderService` | `processOrder()` | | | | | |
| OS-09 | `orderService` | `processOrder()` | | | | | |
| OS-10 | `orderService` | `processOrder()` | | | | | |

---

## 💡 Dicas