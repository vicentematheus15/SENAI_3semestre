import { describe, it, expect } from 'vitest'
import { calculateShipping, estimateDeliveryDays } from '../src/shipping.js'

describe('calculateShipping()', () => {
  it('calcula frete com base no peso', () => {
    expect(calculateShipping(2, 50)).toBe(25) // 15 + 2*5
  })

  it('oferece frete grátis acima de R$ 300', () => {
    expect(calculateShipping(5, 300)).toBe(0)
    expect(calculateShipping(10, 500)).toBe(0)
  })

  it('rejeita peso negativo', () => {
    expect(() => calculateShipping(-1, 50)).toThrow('Peso inválido')
  })
})

describe('estimateDeliveryDays()', () => {
  it('retorna o prazo correto por região', () => {
    expect(estimateDeliveryDays('sudeste')).toBe(2)
    expect(estimateDeliveryDays('norte')).toBe(7)
  })

  it('é case-insensitive', () => {
    expect(estimateDeliveryDays('SUDESTE')).toBe(2)
  })

  it('rejeita região desconhecida', () => {
    expect(() => estimateDeliveryDays('antartica')).toThrow('Região desconhecida')
  })
})
