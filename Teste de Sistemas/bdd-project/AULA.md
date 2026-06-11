# 🧠 BDD — Behaviour Driven Development

## 🎯 Objetivo da Aula

Entender como o **BDD** transforma requisitos de negócio em testes automatizados — e como a **linguagem Gherkin** serve de ponte entre o que o cliente quer e o que o desenvolvedor testa.

Ao final da aula, vocês serão capazes de:

- Escrever **User Stories** no formato correto
- Traduzir User Stories em **cenários Gherkin** (Given / When / Then)
- Converter cenários Gherkin em **testes unitários** com Vitest/Jest
- Implementar o código-fonte **guiado pelos testes** (ciclo BDD completo)

---

## 🧠 Conceitos da Aula

### 1. O que é BDD?

BDD é uma evolução do TDD. Enquanto o TDD foca em **como o código funciona internamente**, o BDD foca em **como o sistema se comporta do ponto de vista do usuário**.

> 💬 A pergunta central do TDD é: *"Este código funciona?"*
> A pergunta central do BDD é: *"Este sistema faz o que o usuário precisa?"*

|                            | TDD                 | BDD                       |
| -------------------------- | ------------------- | ------------------------- |
| **Foco**             | Unidades de código | Comportamento observável |
| **Escrito por**      | Desenvolvedores     | Dev + QA + Product Owner  |
| **Linguagem**        | Técnica (código)  | Próxima do negócio      |
| **Ponto de partida** | Função / método  | User Story                |

> O BDD não substitui o TDD — ele **começa antes** dele.

---

### 2. User Stories — A origem de tudo

Antes de qualquer teste, existe uma **User Story**: uma descrição de necessidade do usuário escrita em linguagem natural.

**Formato padrão:**

```
Como [tipo de usuário]
Quero [realizar uma ação]
Para [atingir um objetivo]
```

**Exemplo:**

```
Como usuário não cadastrado
Quero me registrar no sistema com email e senha
Para ter acesso às funcionalidades da plataforma
```

> ✅ Uma boa User Story descreve **quem**, **o quê** e **por quê** — sem dizer **como** implementar.

---

### 3. Critérios de Aceitação

Toda User Story precisa de **critérios de aceitação**: as condições que devem ser verdadeiras para que a story seja considerada concluída.

**Exemplo:**

```
✅ Usuário pode se cadastrar com email e senha válidos
✅ O sistema rejeita emails com formato inválido
✅ O sistema rejeita senhas com menos de 6 caracteres
✅ Não é possível cadastrar dois usuários com o mesmo email
```

> 💡 Os critérios de aceitação são a **lista de testes** que precisam passar.

---

### 4. Linguagem Gherkin

Gherkin é uma linguagem de especificação legível por humanos, usada para descrever critérios de aceitação em formato estruturado.

**Palavras-chave:**

| Palavra-chave | Papel                                                  |
| ------------- | ------------------------------------------------------ |
| `Feature`   | Descreve a funcionalidade sendo especificada           |
| `Scenario`  | Um caso de uso específico (= um teste)                |
| `Given`     | **Estado inicial** — o contexto antes da ação |
| `When`      | **Ação** — o que o usuário faz               |
| `Then`      | **Resultado esperado** — o que deve acontecer   |
| `And`       | Encadeia múltiplos Given / When / Then                |

**Exemplo completo:**

```gherkin
Feature: Cadastro de usuário

  Scenario: Cadastro com dados válidos
    Given que tenho o email "maria@email.com" e a senha "Senha123"
    When  eu me cadastro no sistema
    Then  minha conta é criada com sucesso
    And   o resultado contém meu email

  Scenario: Cadastro com email inválido
    Given que tenho o email "email-invalido" e a senha "Senha123"
    When  eu tento me cadastrar
    Then  o sistema lança erro "Email inválido"
```

---

### 5. De Gherkin para Código — A Tradução

Cada `Scenario` do Gherkin vira um `it()` no arquivo de testes.

| Gherkin      | Vitest / Jest                                     |
| ------------ | ------------------------------------------------- |
| `Feature`  | `describe()`                                    |
| `Scenario` | `it()` / `test()`                             |
| `Given`    | Comentário + configuração de variáveis        |
| `When`     | Comentário + chamada da função                 |
| `Then`     | Comentário +`expect(resultado).toBe(esperado)` |

**Exemplo de tradução:**

```gherkin
Scenario: Cadastro com dados válidos
  Given que tenho o email "maria@email.com" e a senha "Senha123"
  When  eu me cadastro no sistema
  Then  minha conta é criada com sucesso
  And   o resultado contém meu email
```

↓ vira ↓

```javascript
it('Scenario: deve criar conta com dados válidos', () => {
  // Given
  const email = 'maria@email.com'
  const senha = 'Senha123'

  // When
  const resultado = authService.register(email, senha)

  // Then
  expect(resultado.success).toBe(true)
  expect(resultado.user.email).toBe(email)
})
```

> 🔑 **Regra de ouro:** os comentários `// Given`, `// When`, `// Then` devem aparecer **sempre** nos seus testes BDD.

---

### 6. O Fluxo BDD Completo

```
User Story
    ↓
Critérios de Aceitação
    ↓
Cenários Gherkin  (Given / When / Then)
    ↓
Testes            (RED 🔴)
    ↓
Implementação     (GREEN 🟢)
    ↓
Refatoração       (REFACTOR ♻️)
```

A diferença para o TDD puro: o fluxo **começa no negócio**, não no código.

## ✏️ Atividade Final — Sistema de Produtos

### Sua missão

Repita sozinho o mesmo fluxo que o professor fez na demo, mas em um domínio diferente.

**Ponto de partida:** `atividade/USER_STORIES.md`
**Entregável:** `tests/productService.test.js` + `src/productService.js` funcionando

### Fluxo

```
1. Leia as User Stories em USER_STORIES.md

2. Escreva o Gherkin
   → Feature + um Scenario por critério de aceitação
   → Use Given / When / Then

3. Escreva os testes
   → Crie tests/productService.test.js do zero
   → Cada Scenario → um it()
   → Use sempre // Given / // When / // Then

4. Rode npx vitest → todos devem estar RED 🔴

5. Implemente src/productService.js
   → Faça um teste passar por vez
   → Não pule para o próximo antes do anterior estar verde
```

### Setup

```bash
cd atividade
npm install
npx vitest
```

### Critério de conclusão

Todos os testes passando ✅ — sem alterar os testes depois de escritos.

---

## 📚 Referência Rápida

```
User Story  →  "Como X, Quero Y, Para Z"
Feature     →  describe()
Scenario    →  it()
Given       →  // Given  +  configuração de variáveis
When        →  // When   +  chamada da função testada
Then        →  // Then   +  expect(resultado).toBe(esperado)
```
