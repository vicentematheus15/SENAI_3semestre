/**
 * leaderboard.test.js
 * Testes de Integração — Ranking de Jogadores
 *
 * ⚠️  Estes testes já estão escritos.
 * ❌  Rode agora: npx vitest → tudo deve estar VERMELHO.
 * ✅  Seu trabalho é implementar leaderboard.js até tudo ficar VERDE.
 *     Lembre-se: você só pode usar funções de playerUtils.js na implementação.
 *
 * Não altere este arquivo.
 */

import { describe, it, expect } from 'vitest'
import { createPlayer, getTopPlayer, filterByRank, getLeaderboardSummary } from '../src/leaderboard.js'

// -------------------------------------------------------------------
// createPlayer()
// -------------------------------------------------------------------
describe('createPlayer()', () => {
  it('deve criar um jogador com nome, vitórias, partidas, winRate e rank corretos', () => {
    expect(createPlayer('Ana', 8, 10)).toEqual({
      name: 'Ana',
      wins: 8,
      totalGames: 10,
      winRate: 80,
      rank: 'Lendário',
    })
  })

  it('deve atribuir rank "Bronze" para jogador com baixo winRate', () => {
    const player = createPlayer('Bob', 1, 10)
    expect(player.winRate).toBe(10)
    expect(player.rank).toBe('Bronze')
  })

  it('deve atribuir rank "Ouro" para winRate entre 40 e 54', () => {
    const player = createPlayer('Carol', 4, 10)
    expect(player.winRate).toBe(40)
    expect(player.rank).toBe('Ouro')
  })

  it('deve lançar erro se o nome estiver vazio', () => {
    expect(() => createPlayer('', 8, 10)).toThrow()
  })

  it('deve lançar erro se wins for maior que totalGames', () => {
    expect(() => createPlayer('Ana', 11, 10)).toThrow()
  })

  it('deve lançar erro se totalGames for zero', () => {
    expect(() => createPlayer('Ana', 0, 0)).toThrow()
  })
})

// -------------------------------------------------------------------
// getTopPlayer()
// -------------------------------------------------------------------
describe('getTopPlayer()', () => {
  const players = [
    { name: 'Ana', winRate: 80, rank: 'Lendário' },
    { name: 'Bob', winRate: 45, rank: 'Ouro' },
    { name: 'Carlos', winRate: 60, rank: 'Diamante' },
  ]

  it('deve retornar o jogador com o maior winRate', () => {
    expect(getTopPlayer(players).name).toBe('Ana')
  })

  it('deve retornar o único jogador se o array tiver apenas um elemento', () => {
    expect(getTopPlayer([players[0]]).name).toBe('Ana')
  })

  it('deve retornar o primeiro jogador em caso de empate', () => {
    const tied = [
      { name: 'Ana', winRate: 80, rank: 'Lendário' },
      { name: 'Bob', winRate: 80, rank: 'Lendário' },
    ]
    expect(getTopPlayer(tied).name).toBe('Ana')
  })

  it('deve lançar erro se o array estiver vazio', () => {
    expect(() => getTopPlayer([])).toThrow()
  })
})

// -------------------------------------------------------------------
// filterByRank()
// -------------------------------------------------------------------
describe('filterByRank()', () => {
  const players = [
    { name: 'Ana', winRate: 80, rank: 'Lendário' },
    { name: 'Bob', winRate: 45, rank: 'Ouro' },
    { name: 'Carol', winRate: 10, rank: 'Bronze' },
    { name: 'Diego', winRate: 76, rank: 'Lendário' },
  ]

  it('deve retornar apenas os jogadores com rank "Lendário"', () => {
    const result = filterByRank(players, 'Lendário')
    expect(result).toHaveLength(2)
    expect(result.every(p => p.rank === 'Lendário')).toBe(true)
  })

  it('deve retornar apenas os jogadores com rank "Bronze"', () => {
    const result = filterByRank(players, 'Bronze')
    expect(result).toHaveLength(1)
    expect(result[0].name).toBe('Carol')
  })

  it('deve retornar array vazio se nenhum jogador tiver o rank especificado', () => {
    const result = filterByRank(players, 'Prata')
    expect(result).toHaveLength(0)
  })

  it('deve lançar erro se o rank for inválido', () => {
    expect(() => filterByRank(players, 'Mestre')).toThrow()
  })
})

// -------------------------------------------------------------------
// getLeaderboardSummary()
// -------------------------------------------------------------------
describe('getLeaderboardSummary()', () => {
  const players = [
    { name: 'Ana', winRate: 80, rank: 'Lendário' },
    { name: 'Bob', winRate: 60, rank: 'Diamante' },
    { name: 'Carol', winRate: 42, rank: 'Ouro' },
    { name: 'Diego', winRate: 30, rank: 'Prata' },
    { name: 'Eva', winRate: 10, rank: 'Bronze' },
  ]

  it('deve retornar o total correto de jogadores', () => {
    expect(getLeaderboardSummary(players).total).toBe(5)
  })

  it('deve retornar a contagem correta por rank', () => {
    const summary = getLeaderboardSummary(players)
    expect(summary.legendary).toBe(1)
    expect(summary.diamond).toBe(1)
    expect(summary.gold).toBe(1)
    expect(summary.silver).toBe(1)
    expect(summary.bronze).toBe(1)
  })

  it('deve lançar erro se o array de jogadores estiver vazio', () => {
    expect(() => getLeaderboardSummary([])).toThrow()
  })
})
