/**
 * businessLogic.test.js
 * Testes de Integração — Regras de Negócio
 *
 * Escreva os testes para cada função de businessLogic.js.
 * Mínimo exigido: 8 testes.
 *
 * Cenários que devem ser cobertos obrigatoriamente:
 *
 *  calculateAverage():
 *   - média de array com múltiplos valores
 *   - array com um único elemento
 *   - erro para array vazio
 *   - erro para entrada inválida (null, string, etc.)
 *
 *  calculateDiscountedPrice():
 *   - preço com desconto válido
 *   - desconto 0% retorna preço original
 *   - desconto 100% retorna zero
 *   - erro para desconto > 100
 *   - erro para preço zero ou negativo
 *
 * Estrutura sugerida:
 *
 *   describe('nome da função', () => {
 *     it('deve fazer algo', () => {
 *       expect(funcao(args)).toBe(resultado)
 *     })
 *   })
 */

import { describe, it, expect } from 'vitest';
import { calculateAverage, calculateDiscountedPrice } from '../src/businessLogic.js';

// escreva seus testes aqui

describe('calculateAverage()', () => {
    it('Calcular a média de um array com múltiplos valores', () => {
        expect(calculateAverage([25, 30, 35, 50, 10])).toBe(30)
    })

    it('Calcular a média d euam array com um único elemento', () => {
        expect(calculateAverage([50])).toBe(50)
    })

    it('Deve lançar um erro ao receber um array vazio', () => {
        expect(() => (calculateAverage([]))).toThrow("A entrada deve ser um array não vazio")
    })

    it('Deve retornar um erro ao receber uma entrada inválida (null, string)', () => {
        expect(() => (calculateAverage(["50"]))).toThrow("A entrada deve ser um número")
    })
})

describe('calculateDiscountedPrice()', () => {
    it('', () => {
        expect(calculateDiscountedPrice()).toBe()
    })

    it('', () => {
        expect(calculateDiscountedPrice()).toBe()
    })

    it('', () => {
        expect(calculateDiscountedPrice()).toBe()
    })

    it('', () => {
        expect(() => (calculateDiscountedPrice())).toThrow()
    })

    it('', () => {
        expect(() => (calculateDiscountedPrice())).toThrow()
    })
})