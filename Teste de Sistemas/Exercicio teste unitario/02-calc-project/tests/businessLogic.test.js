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
