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

describe('OrderService', () => {
    let service
    let mockGateway
    let mockLogger

    // roda antes de cada teste
    beforeEach(() => {
        mockGateway = {
        charge: vi.fn()
        }

        mockLogger = {
        log: vi.fn()
        }

        service = new OrderService(mockGateway, mockLogger)
    })


// 1-Processa pedido válido com sucesso
    it('Processa pedido válido com sucesso', async () => {
        mockGateway.charge.mockResolvedValue({ success: true })

        const order = {
        items: ['item1'],
        total: 100
        }

        const receipt = await service.processOrder(order)

        expect(receipt).toBeDefined()
    });

// 2-Retorna recibo com id e timestamp
    it('Retorna recibo com `id` e `timestamp`', async () => {
        mockGateway.charge.mockResolvedValue({ success: true })

        const order = {
        items: ['item1'],
        total: 50
        }

        const receipt = await service.processOrder(order)

        expect(receipt).toHaveProperty('id')
        expect(receipt).toHaveProperty('timestamp')
    });

// 3-Chama gateway com valor correto
    it('Chama `paymentGateway.charge` com o valor correto', async () => {
        mockGateway.charge.mockResolvedValue({ success: true })

    

        await service.processOrder({
            items: ['item1'],
            total: 30
        })

        expect(mockGateway.charge).toHaveBeenCalledWith(30)
    })

// 4-Spy no logger
    it('Chama `logger.log` ao processar', async () => {
        mockGateway.charge.mockResolvedValue({ success: true })

        const spy = vi.spyOn(mockLogger, 'log');

        await service.processOrder({
            items: ['item1'],
            total: 30
        });

        expect(spy).toHaveBeenCalled()
    });

// 5-Pedido sem item
    it('Lança erro para pedido sem itens', () => {
        expect(() => 
            service.processOrder({items: [], total: 100})
        ).rejects.toThrow('Pedido deve conter ao menos um item')
    })

// 6-Total inválido
    it('Lança erro para valor total zero ou negativo', () => {
        expect(() => 
            service.processOrder({items: ['item1'], total: 0})
    ).rejects.toThrow('Valor total do pedido deve ser maior que zero')
    })

// 7-Falha de pagamento
    it('Rejeita quando o pagamento falha', async () => {
        mockGateway.charge.mockRejectedValue(new Error(' Pagamento falhou'))

        await expect(
            service.processOrder({
                items: ['item1'],
                total: 30
            })
        ).rejects.toThrow('Pagamento falhou')
    })

// 8-Não chama logger se pedido inválido
    it('não deve chamar logger.log se pedido for inválido', async () => {

        const spy = vi.spyOn(mockLogger, 'log')

        try {
            await service.processOrder({
                items: [],
                total: 30
            });
        } catch (error) {
            expect(spy).not.toHaveBeenCalled()
        }
    })

// 9-Mock resetado entre testes
    it('Estado do mock é resetado entre testes', async () => {
        expect(mockGateway.charge).not.toHaveBeenCalled()
        expect(mockLogger.log).not.toHaveBeenCalled()
    })


})