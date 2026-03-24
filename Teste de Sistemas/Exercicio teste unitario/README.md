# unit-testing-lab-js


# 🧪 Testes Unitários em JavaScript 

---

# 🎯 Objetivo da Aula

Aplicar na prática os conceitos de **testes unitários em JavaScript** utilizando **Vitest ou Jest**, passando por três cenários diferentes:

1️⃣ Testar código já funcional

2️⃣ Desenvolver código usando **TDD**

3️⃣ Usar testes para encontrar bugs

# 🧠 O que vamos praticar

Durante a aula vocês irão:

- criar **test suites**
- escrever **test cases**
- aplicar o padrão **AAA**
- identificar **bugs usando testes**
- desenvolver código usando **Test Driven Development**

---

# 📦 Setup do Projeto

Instale o Vitest:

```bash
npm install --save-dev vitest
```

Rodar os testes:

```bash
npx vitest
```

---

# 📁 Estrutura do Repositório

```
javascript-testing-lab

01-unit-test-basic
02-tdd-project
03-bug-hunting
```

Cada pasta contém **um projeto independente**.

---

# 🧪 PROJETO 1 — Testando Código Existente

---

## 🎯 Objetivo da Aula

Aprender a **escrever testes unitários para funções já implementadas**, dominando os fundamentos do testing em JavaScript.

Ao final desta aula, vocês terão criado uma suíte completa de testes para validar funções de um sistema de e-commerce — e mais importante, terão internalizado **como pensar em cenários de teste e cobrir edge cases.**

---

## 🧠 O que são Testes Unitários?

Testes unitários validam **unidades isoladas de código** (geralmente funções) para garantir que elas se comportam conforme esperado.

Cada teste segue o padrão **AAA**:

```
📝 ARRANGE  →  prepare os dados de entrada
⚡ ACT      →  execute a função sendo testada
✅ ASSERT   →  verifique se o resultado está correto
```

**Conceitos fundamentais:**

- **`describe()`** — agrupa testes relacionados (test suite)
- **`test()` ou `it()`** — define um caso de teste individual
- **`expect()`** — faz asserções sobre o resultado
- **Matchers** — `.toBe()`, `.toThrow()`, `.toEqual()`, etc.

> **Regra de ouro:** cada teste deve validar **um único comportamento** e ser **independente** dos demais.

---

## 🏢 O Cenário: Sistema de E-commerce

Vocês foram contratados para garantir a qualidade do código de um sistema de e-commerce. O time de desenvolvimento já implementou as funções principais, mas **nenhum teste foi escrito ainda.**

Sua missão é criar uma suíte completa de testes unitários para validar:

1. **`price.js`** — cálculo de preço total (preço × quantidade)
2. **`discount.js`** — aplicação de descontos percentuais
3. **`shipping.js`** — cálculo de frete baseado no peso
4. **`product.js`** — validação de dados de produtos

O código está funcionando, mas **sem testes, não há garantia de que continuará funcionando após mudanças.**

---

## 📦 Setup do Projeto

```bash
cd 01-unit-test-basic
npm install
npx vitest
```

Iniciando os testes pela primeira vez, você verá:

```
No test files found
```

**Isso é esperado.** Você vai criar os arquivos de teste do zero.

---

## 📁 Estrutura do Projeto

```
01-unit-test-basic/
├── src/
│   ├── price.js         ← já implementado
│   ├── discount.js      ← já implementado
│   ├── shipping.js      ← já implementado
│   └── product.js       ← já implementado
├── tests/
│   ├── price.test.js    ← você vai criar
│   ├── discount.test.js ← você vai criar
│   ├── shipping.test.js ← você vai criar
│   └── product.test.js  ← você vai criar
└── package.json
```

> ⚠️ **Os arquivos de `src/` não devem ser modificados.** Seu trabalho é criar testes que validem o comportamento atual do código.

---

## 🧪 Funções a Serem Testadas

### 📦 `price.js` — `calculateTotal(price, quantity)`

```javascript
export function calculateTotal(price, quantity) {
  if (price <= 0) {
    throw new Error("Preço inválido")
  }
  if (quantity <= 0) {
    throw new Error("Quantidade inválida")
  }
  return price * quantity
}
```

**Comportamentos esperados:**

- Retorna o total correto para valores válidos
- Retorna o total correto para valores decimais
- 🚨 Lança erro quando o preço é zero ou negativo
- 🚨 Lança erro quando a quantidade é zero ou negativa

---

### 📦 `discount.js` — `applyDiscount(price, percentage)`

```javascript
export function applyDiscount(price, percentage) {
  if (percentage < 0 || percentage > 100) {
    throw new Error("Desconto inválido")
  }
  const discount = price * (percentage / 100)
  return price - discount
}
```

**Comportamentos esperados:**

- Retorna o preço com desconto aplicado corretamente
- Retorna o preço original quando o desconto é 0%
- Retorna zero quando o desconto é 100%
- 🚨 Lança erro quando o desconto é negativo
- 🚨 Lança erro quando o desconto é maior que 100%

---

### 📦 `shipping.js` — `calculateShipping(weight)`

```javascript
export function calculateShipping(weight) {
  if (weight <= 0) {
    throw new Error("Peso inválido")
  }
  if (weight <= 1) {
    return 10
  }
  if (weight <= 5) {
    return 20
  }
  return 40
}
```

**Comportamentos esperados:**

- Retorna 10 para peso até 1kg
- Retorna 20 para peso entre 1kg e 5kg
- Retorna 40 para peso acima de 5kg
- Testa os limites (boundary values: 1kg, 5kg)
- 🚨 Lança erro quando o peso é zero ou negativo

---

### 📦 `product.js` — `validateProduct(product)`

```javascript
export function validateProduct(product) {
  if (!product.name) {
    throw new Error("Nome obrigatório")
  }
  if (product.price <= 0) {
    throw new Error("Preço inválido")
  }
  if (product.stock < 0) {
    throw new Error("Estoque inválido")
  }
  return true
}
```

**Comportamentos esperados:**

- Retorna `true` para produto válido
- 🚨 Lança erro quando o nome está ausente ou vazio
- 🚨 Lança erro quando o preço é zero ou negativo
- 🚨 Lança erro quando o estoque é negativo
- Aceita estoque zero (produto esgotado é válido)

---

## � Contagem de Testes

| Arquivo de Teste | Função | Testes Mínimos | Tipo |
| --- | --- | --- | --- |
| `price.test.js` | `calculateTotal()` | 4 | Unitário |
| `discount.test.js` | `applyDiscount()` | 5 | Unitário |
| `shipping.test.js` | `calculateShipping()` | 5 | Unitário |
| `product.test.js` | `validateProduct()` | 5 | Unitário |
| **Total** | **4 funções** | **19+** |  |

---

## ✅ Critério de Aceite

A atividade está completa quando o terminal mostrar:

```
 ✓ tests/price.test.js (4+)
 ✓ tests/discount.test.js (5+)
 ✓ tests/shipping.test.js (5+)
 ✓ tests/product.test.js (5+)

 Test Files  4 passed (4)
      Tests  19+ passed
```

---

## 📦 Entregáveis

### 1. Link do repositório ou zip do projeto

O repositório deve conter os 4 arquivos de teste criados em `tests/`. Os arquivos de `src/` devem estar **idênticos** aos originais.

### 2. Print do terminal com todos os testes passando

O print deve mostrar todos os testes verdes conforme o modelo acima.

### 3. Reflexão escrita (mínimo 8 linhas)

Responda em texto livre:

- Qual foi o teste mais difícil de escrever? Por quê?
- Você descobriu algum comportamento inesperado ao testar as funções?
- Como você decidiu quais cenários testar?
- Qual a importância de testar casos de erro (`toThrow`)?

> A reflexão demonstra sua compreensão sobre o processo de testing e pensamento crítico.

---

## 💡 Dicas para a Aula

| Situação | O que fazer |
| --- | --- |
| Não sei como começar um teste | Use o padrão AAA: Arrange (prepare dados) → Act (execute função) → Assert (verifique resultado). |
| Como testar erros? | Use `expect(() => funcao()).toThrow("mensagem esperada")` |
| Quantos testes criar? | No mínimo um para cada comportamento descrito. Pense em: casos válidos, inválidos, limites e erros. |
| Os testes estão passando mas sinto que falta algo | Teste os boundary values (valores limite) e edge cases (casos extremos). |

---

## 📊 Matriz de Rastreabilidade de Testes

> Esta matriz mapeia cada teste ao comportamento que ele valida. Use-a como guia para garantir cobertura completa.

| ID | Módulo | Função | Cenário Testado | Dados de Entrada | Resultado Esperado | Tipo |
| --- | --- | --- | --- | --- | --- | --- |
| PR-01 | `price` | `calculateTotal()` | Cálculo válido básico | `(10, 2)` | `20` | Unitário |
|  |  |  |  |  |  |  |

---

## 📝 Plano de Testes

**Projeto:** Sistema de E-commerce — Testes Unitários
**Autor:** *(seu nome)*
**Data:** *(data de entrega)*

---

### 1. Objetivo do Plano

*(Descreva em 2 a 3 frases o que este plano de testes pretende validar e por quê.)*

---

### 2. Escopo

**Dentro do escopo:**

- *(liste o que será testado)*

**Fora do escopo:**

- *(liste o que não será testado e por quê)*

---

### 3. Ferramentas Utilizadas

| Ferramenta | Versão | Finalidade |
| --- | --- | --- |
| *(nome)* | *(versão)* | *(para que serve)* |

---

### 4. Estratégia de Testes

*(Explique como você organizou os testes: quais são unitários, quais são de integração, e qual a ordem de execução. Descreva também como o ciclo RED → GREEN foi aplicado em cada fase.)*

---

### 5. Critérios de Aceite

| Critério | Condição |
| --- | --- |
| *(o que precisa estar correto)* | *(como verificar)* |

---

# 🧪 PROJETO 2 — Introdução ao TDD — Test-Driven Development


---

## 🎯 Objetivo da Aula

Vivenciar na prática o ciclo do **Test-Driven Development (TDD)**: escrever o teste antes do código, ver ele falhar, implementar o mínimo necessário para ele passar, e repetir.

Ao final da aula, vocês terão desenvolvido o motor de cálculos de um sistema de e-commerce — mas, mais importante do que o código pronto, terão internalizado **por que escrever o teste primeiro muda a forma de pensar sobre o problema.**

---

## 🧠 O que é TDD?

TDD é uma metodologia de desenvolvimento onde **o teste define o comportamento esperado antes de qualquer implementação existir.**

O ciclo tem três etapas, sempre nessa ordem:

```
🔴 RED    →   escreva um teste que descreve o comportamento esperado
              rode os testes — ele deve FALHAR (o código ainda não existe)

🟢 GREEN  →   implemente o mínimo de código necessário para o teste passar
              rode os testes — ele deve PASSAR

🔵 REFACTOR →  melhore o código sem quebrar os testes
               rode os testes — tudo ainda deve PASSAR
```

> **Regra de ouro:** nunca escreva uma linha de implementação sem antes ter um teste falhando que a justifique.
> 

---

## 🏢 O Cenário: O Desafio da TechStore

Vocês acabaram de ser contratados como Desenvolvedores Júnior na **TechStore**, uma plataforma de e-commerce em rápido crescimento. O sistema antigo de carrinho de compras estava cheio de bugs na hora de calcular totais e descontos, causando prejuízo para a empresa.

A missão é reescrever o motor de cálculos do zero — **mas dessa vez com TDD.**

A liderança técnica definiu dois módulos:

1. **`coreMath.js`** — operações matemáticas puras (soma, subtração, multiplicação, divisão).
2. **`businessLogic.js`** — regras de negócio (ticket médio, preço com desconto), que **obrigatoriamente** usa as funções do módulo matemático.

Os **testes já foram escritos pela equipe sênior.** O trabalho de vocês é fazer todos eles passarem.

---

## 📦 Setup do Projeto

```bash
npm install
npx vitest
```

Ao rodar os testes pela primeira vez, vocês vão ver isso:

```
❯ tests/coreMath.test.js
  ✗ add() > deve somar dois números positivos
  ✗ add() > deve somar corretamente quando um valor é negativo
  ✗ subtract() > deve subtrair dois números corretamente
  ...

Tests  0 passed | 24 failed
```

**Isso é esperado. Isso é o RED. É aqui que o TDD começa.**

---

## 📁 Estrutura do Projeto

```
ecommerce-calc-lab/
├── src/
│   ├── coreMath.js         ← você vai implementar este
│   └── businessLogic.js    ← e este
├── tests/
│   ├── coreMath.test.js    ← não altere
│   └── businessLogic.test.js ← não altere
└── package.json
```

> ⚠️ **Os arquivos de teste não devem ser modificados.** Eles representam o contrato do sistema — os requisitos escritos como código. Sua implementação precisa satisfazê-los.
> 

---

## 🧪 FASE 1 — Motor Matemático (`coreMath.js`)

### Comportamentos esperados (descritos nos testes)

**`add(a, b)`**

- Retorna a soma de dois números positivos
- Retorna o resultado correto quando um dos valores é negativo
- Retorna o próprio número ao somar com zero

**`subtract(a, b)`**

- Retorna a diferença entre dois números
- Retorna valor negativo quando o subtraendo é maior
- Retorna o próprio número ao subtrair zero

**`multiply(a, b)`**

- Retorna o produto de dois números positivos
- Retorna zero ao multiplicar por zero
- Retorna valor negativo ao multiplicar por número negativo

**`divide(a, b)`**

- Retorna o quociente da divisão
- Retorna valor decimal em divisão não exata
- 🚨 **Lança um `Error` com mensagem clara ao tentar dividir por zero**

### Como avançar

Siga o ciclo RED → GREEN para **cada função individualmente:**

1. Rode os testes — veja as falhas de `add()` em vermelho
2. Implemente `add()` — rode novamente — veja verde
3. Passe para `subtract()` — repita
4. Continue até todos os 12 testes passarem

---

## 🧪 FASE 2 — Regras de Negócio (`businessLogic.js`)

> 🚨 **Regra crítica:** este módulo **não pode usar os operadores nativos** `+`, `-`, `*`, `/` diretamente. Toda aritmética deve passar pelas funções de `coreMath.js`.
> 

### Comportamentos esperados (descritos nos testes)

**`calculateAverage(purchases)`**

Recebe um array de valores de compras e retorna a média.

- Calcula a média corretamente para um array válido
- Retorna o próprio valor quando o array tem um único elemento
- Calcula corretamente para valores variados
- 🚨 Lança erro se o array estiver vazio
- 🚨 Lança erro se a entrada não for um array

**`calculateDiscountedPrice(price, discountPercent)`**

Recebe o preço original e a porcentagem de desconto, retorna o valor final.

- Retorna o preço correto com desconto de 10%
- Retorna o preço original quando o desconto é 0%
- Retorna zero quando o desconto é 100%
- 🚨 Lança erro se o desconto for maior que 100%
- 🚨 Lança erro se o desconto for negativo
- 🚨 Lança erro se o preço for zero ou negativo

### Como avançar

Os testes de `businessLogic` dependem de `coreMath` funcionar. **Complete a Fase 1 antes de iniciar a Fase 2.** Isso demonstra na prática como o TDD revela dependências entre módulos.

---

## 📊 Contagem de Testes

| Arquivo de Teste | Testes | Tipo |
| --- | --- | --- |
| `coreMath.test.js` | 12 | Unitário |
| `businessLogic.test.js` | 12 | Integração |
| **Total** | **24** |  |

---

## ✅ Critério de Aceite

A atividade está completa quando o terminal mostrar:

```
 ✓ tests/coreMath.test.js (12)
 ✓ tests/businessLogic.test.js (12)

 Test Files  2 passed (2)
      Tests  24 passed (24)
```

---

## 📦 Entregáveis

### 1. Link do repositório ou zip do projeto

O repositório deve conter apenas os arquivos de `src/` implementados. Os arquivos de `tests/` devem estar **idênticos** aos originais.

### 2. Print do terminal com todos os testes passando

O print deve mostrar os 24 testes verdes conforme o modelo acima.

### 3. Reflexão escrita (mínimo 10 linhas)

Responda em texto livre:

- Em algum momento o teste te forçou a **repensar** como ia implementar a função? Descreva.
- Qual foi o primeiro teste que você fez passar? Como foi a sensação de ver o RED virar GREEN?
- Houve algum teste de erro (`toThrow`) que revelou algo que você não teria pensado sem ele?
- Se você fosse escrever os testes do zero, escreveria diferente? Por quê?

> A reflexão vale tanto quanto o código. TDD é uma mudança de mentalidade — queremos saber se essa mudança aconteceu.
> 

---

## 💡 Dicas para a Aula

| Situação | O que fazer |
| --- | --- |
| Não sei por onde começar | Rode os testes, leia a mensagem de erro do primeiro que falhou. Ela te diz exatamente o que implementar. |
| Minha função passa em alguns testes mas falha em outros | Leia os casos que ainda falham — eles revelam um comportamento que você não cobriu. |
| Terminei a Fase 1 mas a Fase 2 ainda falha | Verifique se está importando corretamente as funções de `coreMath.js` em `businessLogic.js`. |
| Quero usar `+` diretamente em `businessLogic.js` | Não. Esse é o ponto — a restrição existe para que você pratique composição de funções. |

---

## 📊 Matriz de Rastreabilidade de Testes

> Esta matriz mapeia cada teste ao requisito de negócio que ele valida. Em TDD, os testes **são** os requisitos — esta tabela torna isso explícito.
> 

| ID | Módulo | Função | Cenário Testado | Dados de Entrada | Resultado Esperado | Tipo |
| --- | --- | --- | --- | --- | --- | --- |
| CM-01 | `coreMath` | `add()` | Soma de dois positivos | `add(2, 3)` | `5` | Unitário |
|  |  |  |  |  |  |  |

---

## 📝 Plano de Testes

**Projeto:** Motor de Cálculos — TechStore E-commerce
**Autor:** *(seu nome)***Data:** *(data de entrega)*

---

### 1. Objetivo do Plano

*(Descreva em 2 a 3 frases o que este plano de testes pretende validar e por que.)*

---

### 2. Escopo

**Dentro do escopo:**

- *(liste o que será testado)*

**Fora do escopo:**

- *(liste o que não será testado e por quê)*

---

### 3. Ferramentas Utilizadas

| Ferramenta | Versão | Finalidade |
| --- | --- | --- |
| *(nome)* | *(versão)* | *(para que serve)* |

---

### 4. Estratégia de Testes

*(Explique como você organizou os testes: quais são unitários, quais são de integração, e qual a ordem de execução. Descreva também como o ciclo RED → GREEN foi aplicado em cada fase.)*

---

### 5. Critérios de Aceite

| Critério | Condição |
| --- | --- |
| *(o que precisa estar correto)* | *(como verificar)* |