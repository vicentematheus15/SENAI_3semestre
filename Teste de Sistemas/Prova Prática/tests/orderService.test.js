/**
 * orderService.test.js
 * Testes — Sistema de Pedidos
 *
 * Escreva os testes para o `OrderService`.
 * Mínimo exigido: 10 testes.
 *
 * Cenários que devem ser cobertos obrigatoriamente:
 *  - processOrder() : pedido válido retorna recibo com `id` e `timestamp`
 *  - processOrder() : chama `paymentGateway.charge` com o valor correto
 *  - processOrder() : chama `logger.log` durante o processamento
 *  - validate()     : lança erro para pedido sem itens
 *  - validate()     : lança erro para total zero ou negativo
 *  - processOrder() : rejeita quando o gateway falha
 *  - processOrder() : não chama `logger.log` quando o pedido é inválido
 *  - beforeEach     : estado do mock é resetado entre testes
 *
 * Estrutura sugerida:
 *
 *  
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { OrderService } from '../src/orderService.js'
import { logger } from '../src/logger.js'

// escreva seus testes aqui
