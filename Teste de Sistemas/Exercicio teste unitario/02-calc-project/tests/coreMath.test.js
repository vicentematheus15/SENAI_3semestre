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
