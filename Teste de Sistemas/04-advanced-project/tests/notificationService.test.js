import {describe, test, expect, beforeEach, vi, afterEach, afterEach} from 'vitest';
import {NotificationService} from '../src/notificationService.js'
import {logger} from '../src/logger.js'

describe('formatMessage()', () => {
  test('Deve formatar a mensagem com nome do usuario e evento', () => {

    //Arrange
    const service = new NotificationService();

    //Act
    const result = service.formatMessage('Ana', "Seu pedido foi enviado")
    
    //Assert
    expect(result).toBe('Olá, Ana! Seu pedido foi enviado')

    })
    
})

describe('notify()', () => {
    let service
    let mockEmail
    let user
    
    beforeEach(() => {
        mockEmail = {send: vi.fn().mockResolvedValue(true)}
        service = new NotificationService(mockEmail)
        user = {name: 'Ana', email: 'ana@gmail.com'}

    })

    afterEach(() => {
        vi.restoreAllMocks()

    })

    test("Deve retornar sucess true ao notificar usuario valido", async () => {
        //Arrange

        //Act
        const result = await service.notify(user, 'Seu pedido chegou!')

        //Assert
        expect(result.success).toBe(true)
    })

    test("Deve chamar logger.log apos enviar a notificacao", async () => {
        //Arrange
        const spy = vi.spyOn(logger, 'log')
        const serviceComLogger = new NotificationService(mockEmail, logger)

        //Act
        await serviceComLogger.notify(user, 'Evento X');

        //Assert
        expect(spy).toHaveBeenCalledOnce()
        expect(spy).toHaveBeenCalledWith('Notificação enviada para ana@gmail.com')
        expect(spy).toHaveBeenCalledTimes(1)
    })


})