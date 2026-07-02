import { describe, it, expect } from 'vitest'
import { applyDiscount, tierDiscount, calculateFinalPrice } from '../src/discount.js'

describe('applyDiscount()', () => {
  it('aplica desconto percentual corretamente', () => {
    expect(applyDiscount(100, 10)).toBe(90)
    expect(applyDiscount(200, 50)).toBe(100)
  })

  it('retorna o preço original quando o desconto é zero', () => {
    expect(applyDiscount(99.9, 0)).toBe(99.9)
  })

  it('arredonda para 2 casas decimais', () => {
    expect(applyDiscount(33.33, 7)).toBe(31)
  })

  it('rejeita preço negativo', () => {
    expect(() => applyDiscount(-10, 10)).toThrow('Preço inválido')
  })

  it('rejeita percentual fora do intervalo', () => {
    expect(() => applyDiscount(100, 150)).toThrow('entre 0 e 100')
    expect(() => applyDiscount(100, -5)).toThrow('entre 0 e 100')
  })
})

describe('tierDiscount()', () => {
  it('retorna 0 para subtotais abaixo de R$ 100', () => {
    expect(tierDiscount(50)).toBe(0)
  })

  it('retorna 5 para subtotais entre R$ 100 e R$ 199', () => {
    expect(tierDiscount(100)).toBe(5)
    expect(tierDiscount(199)).toBe(5)
  })

  it('retorna 10 para subtotais entre R$ 200 e R$ 499', () => {
    expect(tierDiscount(200)).toBe(10)
    expect(tierDiscount(499)).toBe(10)
  })

  it('retorna 15 para subtotais acima de R$ 500', () => {
    expect(tierDiscount(500)).toBe(15)
    expect(tierDiscount(1000)).toBe(15)
  })
})

describe('calculateFinalPrice()', () => {
  it('soma desconto da faixa + cupom', () => {
    // subtotal 250 → faixa 10% + cupom 5% = 15% → 250 - 37.5 = 212.5
    expect(calculateFinalPrice(250, 5)).toBe(212.5)
  })

  it('limita o desconto total a 100%', () => {
    expect(calculateFinalPrice(100, 99)).toBe(0)
  })
})
