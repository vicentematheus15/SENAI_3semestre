/**
 * coreMath.test.js
 * Testes Unitários — Motor Matemático
 *
 * Escreva os testes para cada função de coreMath.js.
 * Mínimo exigido: 12 testes.
 *
 * Cenários que devem ser cobertos obrigatoriamente:
 *  - add()      : valores positivos, negativos, zero
 *  - subtract() : valores positivos, resultado negativo, zero
 *  - multiply() : valores positivos, multiplicação por zero, negativo
 *  - divide()   : divisão exata, resultado decimal, divisão por zero (toThrow)
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
import { add, subtract, multiply, divide } from '../src/coreMath.js';

// escreva seus testes aqui
describe('add()', () => {
    it('Retornar a soma de dois valores positivos', () => {
        expect(add(5, 4)).toBe(9)
    })

    it('Retornar a soma com um parâmetro negativo', () => {
        expect(add(6, -8)).toBe(-2)
    })

    it('Rtornar a soma com uma parâmetro sendo 0', () => {
        expect(add(0, 2)).toBe(2)
    })
})

describe('subtract()', () => {
    it('Retornar a subtração de dois valores', () => {
        expect(subtract(9, 3)).toBe(6)
    })

    it('Retornar um resultado negaivo (subtraendo maior que minuendo)', () => {
        expect(subtract(12, 16)).toBe(-4)
    })

    it('Retornar uma subtração com um parâmetro sendo 0', () => {
        expect(subtract(7, 0)).toBe(7)
    })
})

describe('multply()', () => {
    it('Retorna a multiiplicação de dois valores positivos', () => {
        expect(multiply(2, 5)).toBe(10)
    })

    it('Retorna uma multiplicação com um valor sendo 0', () => {
        expect(multiply(6, 0)).toBe(0)
    })

    it('Retorna um resultado negativo', () => {
        expect(multiply(-3, 5)).toBe(-15)
    })
})

describe('divide()', () => {
    it('Retorna um divisão exata', () => {
        expect(divide(100, 20)).toBe(5)
    })

    it('Retorna um resultado decimal', () => {
        expect(divide(60, 5)).toBe(12.5)
    })

    it('Deve retornar um erro ao tentar dividir por 0', () => {
        expect(divide(18, 0)).toThrow("Não é possível dividir por 0!")
    })
})
