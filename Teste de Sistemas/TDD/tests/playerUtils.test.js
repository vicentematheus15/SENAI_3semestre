/**
 * playerUtils.test.js
 * Testes Unitários — Utilitários de Jogador
 *
 * ⚠️  Estes testes já estão escritos.
 * ❌  Rode agora: npx vitest → tudo deve estar VERMELHO.
 * ✅  Seu trabalho é implementar playerUtils.js até tudo ficar VERDE.
 *
 * Cada teste segue o padrão AAA:
 *   Arrange  → prepara os dados de entrada
 *   Act      → chama a função sendo testada
 *   Assert   → verifica o resultado esperado
 *
 * Quando o teste espera um erro, Act e Assert são combinados em "Act & Assert".
 *
 * Não altere este arquivo.
 */

import { describe, it, expect } from 'vitest'
import { calcWinRate, getRank, isElite, calcKDA } from '../src/playerUtils.js'

// -------------------------------------------------------------------
// calcWinRate()
// -------------------------------------------------------------------
describe('calcWinRate()', () => {
  it('deve calcular o winRate de 8 vitórias em 10 partidas', () => {
    // Arrange
    const wins = 8
    const totalGames = 10

    // Act
    const result = calcWinRate(wins, totalGames)

    // Assert
    expect(result).toBe(80)
  })

  it('deve calcular o winRate de 1 vitória em 4 partidas', () => {
    // Arrange
    const wins = 1
    const totalGames = 4

    // Act
    const result = calcWinRate(wins, totalGames)

    // Assert
    expect(result).toBe(25)
  })

  it('deve retornar 0 quando não há vitórias', () => {
    // Arrange
    const wins = 0
    const totalGames = 5

    // Act
    const result = calcWinRate(wins, totalGames)

    // Assert
    expect(result).toBe(0)
  })

  it('deve retornar 100 quando todas as partidas foram vencidas', () => {
    // Arrange
    const wins = 5
    const totalGames = 5

    // Act
    const result = calcWinRate(wins, totalGames)

    // Assert
    expect(result).toBe(100)
  })

  it('deve lançar erro se totalGames for zero', () => {
    // Arrange
    const wins = 0
    const totalGames = 0

    // Act & Assert
    expect(() => calcWinRate(wins, totalGames)).toThrow()
  })

  it('deve lançar erro se wins for maior que totalGames', () => {
    // Arrange
    const wins = 6
    const totalGames = 5

    // Act & Assert
    expect(() => calcWinRate(wins, totalGames)).toThrow()
  })

  it('deve lançar erro se wins for negativo', () => {
    // Arrange
    const wins = -1
    const totalGames = 10

    // Act & Assert
    expect(() => calcWinRate(wins, totalGames)).toThrow()
  })
})

// -------------------------------------------------------------------
// getRank()
// -------------------------------------------------------------------
describe('getRank()', () => {
  it('deve retornar "Lendário" para winRate igual a 75', () => {
    // Arrange
    const winRate = 75

    // Act
    const result = getRank(winRate)

    // Assert
    expect(result).toBe('Lendário')
  })

  it('deve retornar "Lendário" para winRate igual a 100', () => {
    // Arrange
    const winRate = 100

    // Act
    const result = getRank(winRate)

    // Assert
    expect(result).toBe('Lendário')
  })

  it('deve retornar "Diamante" para winRate igual a 55', () => {
    // Arrange
    const winRate = 55

    // Act
    const result = getRank(winRate)

    // Assert
    expect(result).toBe('Diamante')
  })

  it('deve retornar "Diamante" para winRate igual a 74', () => {
    // Arrange
    const winRate = 74

    // Act
    const result = getRank(winRate)

    // Assert
    expect(result).toBe('Diamante')
  })

  it('deve retornar "Ouro" para winRate igual a 40', () => {
    // Arrange
    const winRate = 40

    // Act
    const result = getRank(winRate)

    // Assert
    expect(result).toBe('Ouro')
  })

  it('deve retornar "Prata" para winRate igual a 25', () => {
    // Arrange
    const winRate = 25

    // Act
    const result = getRank(winRate)

    // Assert
    expect(result).toBe('Prata')
  })

  it('deve retornar "Bronze" para winRate igual a 24', () => {
    // Arrange
    const winRate = 24

    // Act
    const result = getRank(winRate)

    // Assert
    expect(result).toBe('Bronze')
  })

  it('deve retornar "Bronze" para winRate igual a 0', () => {
    // Arrange
    const winRate = 0

    // Act
    const result = getRank(winRate)

    // Assert
    expect(result).toBe('Bronze')
  })

  it('deve lançar erro se winRate não for um número', () => {
    // Arrange
    const invalidInput = 'Lendário'

    // Act & Assert
    expect(() => getRank(invalidInput)).toThrow()
  })
})

// -------------------------------------------------------------------
// isElite()
// -------------------------------------------------------------------
describe('isElite()', () => {
  it('deve retornar true para winRate igual a 75', () => {
    // Arrange
    const winRate = 75

    // Act
    const result = isElite(winRate)

    // Assert
    expect(result).toBe(true)
  })

  it('deve retornar true para winRate acima de 75', () => {
    // Arrange
    const winRate = 90

    // Act
    const result = isElite(winRate)

    // Assert
    expect(result).toBe(true)
  })

  it('deve retornar false para winRate abaixo de 75', () => {
    // Arrange
    const winRate = 74

    // Act
    const result = isElite(winRate)

    // Assert
    expect(result).toBe(false)
  })

  it('deve lançar erro se winRate não for um número', () => {
    // Arrange
    const invalidInput = 'elite'

    // Act & Assert
    expect(() => isElite(invalidInput)).toThrow()
  })
})

// -------------------------------------------------------------------
// calcKDA()
// -------------------------------------------------------------------
describe('calcKDA()', () => {
  it('deve calcular o KDA corretamente', () => {
    // Arrange
    const kills = 10
    const deaths = 2
    const assists = 5

    // Act
    const result = calcKDA(kills, deaths, assists)

    // Assert
    expect(result).toBe(7.5)
  })

  it('deve retornar kills + assists quando deaths for zero', () => {
    // Arrange
    const kills = 5
    const deaths = 0
    const assists = 3

    // Act
    const result = calcKDA(kills, deaths, assists)

    // Assert
    expect(result).toBe(8)
  })

  it('deve retornar 0 se kills e assists forem zero', () => {
    // Arrange
    const kills = 0
    const deaths = 5
    const assists = 0

    // Act
    const result = calcKDA(kills, deaths, assists)

    // Assert
    expect(result).toBe(0)
  })

  it('deve lançar erro se kills for negativo', () => {
    // Arrange
    const kills = -1
    const deaths = 2
    const assists = 3

    // Act & Assert
    expect(() => calcKDA(kills, deaths, assists)).toThrow()
  })

  it('deve lançar erro se deaths for negativo', () => {
    // Arrange
    const kills = 5
    const deaths = -1
    const assists = 3

    // Act & Assert
    expect(() => calcKDA(kills, deaths, assists)).toThrow()
  })
})
