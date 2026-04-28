# 🧪 PROJETO 6 — TDD: Sistema de Ranking de Jogadores

---

## 🎯 Objetivo

Praticar o ciclo TDD implementando um sistema de ranking para um jogo online. Os testes já estão escritos — sua missão é implementar o código que os faz passar.

---

## 📦 Setup do Projeto

```bash
cd 06-tdd-activity
npm install
npx vitest
```

Ao rodar pela primeira vez, todos os testes devem estar **VERMELHOS**. Isso é esperado — é o ponto de partida do TDD.

---

## 🏪 O Cenário

Uma plataforma de jogos online precisa calcular e exibir o ranking dos jogadores. A lógica está dividida em dois módulos:

1. **`playerUtils.js`** — cálculos e classificações individuais do jogador.
2. **`leaderboard.js`** — regras de negócio que **obrigatoriamente** usam as funções de `playerUtils.js`.

---

## 📁 Estrutura do Projeto

```
06-tdd-activity/
├── src/
│   ├── playerUtils.js   ← você vai implementar este
│   └── leaderboard.js   ← e este
├── tests/
│   ├── playerUtils.test.js   ← não altere
│   └── leaderboard.test.js   ← não altere
└── package.json
```

> ⚠️ **Os arquivos de teste não devem ser modificados.** Eles representam o contrato do sistema — os requisitos escritos como código.

---

## 🔨 FASE 1 — Utilitários do Jogador (`playerUtils.js`)

### Comportamentos esperados (descritos nos testes)

**`calcWinRate(wins, totalGames)`**

- Recebe a quantidade de vitórias e o total de partidas
- Retorna o percentual de vitórias de `0` a `100`
- Exemplo: `calcWinRate(8, 10)` → `80`
- 🚨 Lança erro se `totalGames` for zero
- 🚨 Lança erro se `wins` for maior que `totalGames`
- 🚨 Lança erro se `wins` for negativo

**`getRank(winRate)`**

- Converte a taxa de vitória em um rank textual
- `'Lendário'` → winRate >= 75
- `'Diamante'` → winRate >= 55
- `'Ouro'`     → winRate >= 40
- `'Prata'`    → winRate >= 25
- `'Bronze'`   → winRate < 25
- Exemplo: `55` → `Diamante`
- 🚨 Lança erro se `winRate` não for um número

**`isElite(winRate)`**

- Verifica se o jogador está no topo da tabela
- Retorna `true` se winRate >= 75
- Retorna `false` se winRate < 75
- 🚨 Lança erro se `winRate` não for um número

**`calcKDA(kills, deaths, assists)`**

- Calcula a performance do jogador em combate
- Retorna `(kills + assists) / deaths`
- Se `deaths === 0`, retorna `kills + assists` (KDA perfeito)
- Exemplo: `calcKDA(10, 2, 5)` → `7.5`
- 🚨 Lança erro se qualquer valor for negativo

### Como avançar

1. Rode os testes — veja quais falham
2. Implemente `calcWinRate()` — rode novamente — veja verde
3. Passe para `getRank()`, `isElite()` e `calcKDA()` — repita

---

## 🔨 FASE 2 — Leaderboard (`leaderboard.js`)

> 🚨 **Regra crítica:** este módulo **não deve recalcular winRate ou rank diretamente**. Toda lógica deve passar pelas funções de `playerUtils.js`.

### Comportamentos esperados (descritos nos testes)

**`createPlayer(name, wins, totalGames)`**

- Cria um objeto de jogador já calculado
- Retorna `{ name, wins, totalGames, winRate, rank }`
- Exemplo: `createPlayer('Ana', 8, 10)` → `{ name: 'Ana', wins: 8, totalGames: 10, winRate: 80, rank: 'Lendário' }`
- 🚨 Lança erro se o nome estiver vazio
- 🚨 Lança erro se os valores forem inválidos

**`getTopPlayer(players)`**

- Recebe uma lista de jogadores já montados
- Retorna o jogador com o maior `winRate`
- Em caso de empate, retorna o primeiro da lista
- Exemplo: se dois jogadores têm `80`, retorna o primeiro
- 🚨 Lança erro se o array estiver vazio

**`filterByRank(players, rank)`**

- Filtra a lista e retorna apenas os jogadores que têm o rank informado
- Ranks válidos: `'Lendário'`, `'Diamante'`, `'Ouro'`, `'Prata'`, `'Bronze'`
- Exemplo: `filterByRank(lista, 'Bronze')` → somente jogadores bronze
- 🚨 Lança erro se o rank for inválido

**`getLeaderboardSummary(players)`**

- Retorna um resumo com a quantidade de jogadores por rank
- Retorna `{ total, legendary, diamond, gold, silver, bronze }`
- Exemplo: 5 jogadores distribuídos igualmente → `{ total: 5, legendary: 1, diamond: 1, gold: 1, silver: 1, bronze: 1 }`
- 🚨 Lança erro se o array estiver vazio

### Como avançar

1. Importe as funções de `playerUtils.js` em `leaderboard.js`
2. Implemente `createPlayer()` — rode os testes
3. Implemente `getTopPlayer()`, `filterByRank()` e `getLeaderboardSummary()` — repita

---

## ✅ Critério de Aceite

```
 ✓ tests/playerUtils.test.js
 ✓ tests/leaderboard.test.js

 Test Files  2 passed (2)
      Tests  X passed (X)
```

---

## 📦 Entregáveis

### 1. Link do repositório ou zip do projeto

Os arquivos de `src/` devem estar implementados. Os arquivos de `tests/` devem estar **idênticos** aos originais.

### 2. Print do terminal com todos os testes passando

O print deve mostrar todos os testes verdes.

### 3. Reflexão escrita (mínimo 8 linhas)

- Em qual função você teve mais dificuldade? O que o teste te revelou sobre ela?
- O que aconteceu quando você tentou implementar `leaderboard.js` antes de terminar `playerUtils.js`?
- Por que `leaderboard.js` não deve calcular o rank diretamente? Qual benefício isso traz?
- Se você fosse adicionar uma nova faixa de rank (ex: `'Mestre'`), em qual arquivo você alteraria? Por quê?

---

## 💡 Dicas

| Situação | O que fazer |
| --- | --- |
| Não sei por onde começar | Rode os testes, leia a mensagem de erro do primeiro que falhou |
| `calcWinRate` retorna valor errado | Verifique se está usando divisão correta: `wins / totalGames * 100` |
| `leaderboard` falha com "is not a function" | Verifique se importou corretamente de `./playerUtils.js` |
| Quero usar `if` com número mágico em `leaderboard.js` | Não. Chame `getRank()` de `playerUtils.js` — esse é o ponto do exercício |
| `calcKDA` com deaths zero não funciona | Trate o caso `deaths === 0` separadamente com um `if` antes do cálculo |
