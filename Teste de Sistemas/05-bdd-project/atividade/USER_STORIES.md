# 📝 User Stories — Atividade

## Contexto

Você faz parte do time de desenvolvimento de uma plataforma de e-commerce.
O Product Owner escreveu as User Stories abaixo.

**Sua missão — repita o fluxo completo visto na demo:**

```
1. Leia cada User Story
2. Escreva o Gherkin (Feature + Scenarios com Given/When/Then)
3. Traduza cada Scenario em um it() em tests/productService.test.js
4. Rode npx vitest → todos devem estar RED 🔴
5. Implemente src/productService.js até tudo ficar GREEN ✅
```

---

## User Stories

---

### US-01 — Adicionar produto ao catálogo

```
Como administrador da plataforma
Quero adicionar produtos ao catálogo informando nome e preço
Para disponibilizá-los para os clientes
```

**Critérios de aceitação:**
- Produto com nome e preço válidos é adicionado com sucesso
- O catálogo reflete o produto adicionado
- Preço zero ou negativo não é permitido
- Nome vazio não é permitido

---

### US-02 — Buscar produto por nome

```
Como administrador da plataforma
Quero buscar um produto pelo nome
Para encontrar rapidamente um item específico no catálogo
```

**Critérios de aceitação:**
- Busca por nome existente retorna o produto
- Busca por nome inexistente retorna null

---

### US-03 — Calcular preço com desconto

```
Como sistema de promoções
Quero calcular o preço final de um produto após aplicar um desconto percentual
Para exibir o valor correto ao cliente durante campanhas
```

**Critérios de aceitação:**
- Desconto entre 0% e 100% é aplicado corretamente
- Desconto negativo não é permitido
- Desconto acima de 100% não é permitido
