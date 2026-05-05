import { paymentGateway } from './paymentGateway.js'
import { logger } from './logger.js'

export class OrderService {
  constructor(gateway = paymentGateway, log = logger) {
    this.gateway = gateway
    this.log = log
  }

  validate(order) {
    if (!order.items || order.items.length === 0) {
      throw new Error('Pedido deve conter ao menos um item')
    }
    if (!order.total || order.total <= 0) {
      throw new Error('Valor total do pedido deve ser maior que zero')
    }
  }

  async processOrder(order) {
    this.validate(order)

    this.log.log(`Iniciando processamento do pedido — total: R$ ${order.total}`)

    await this.gateway.charge(order.total)

    this.log.log(`Pagamento aprovado — emitindo recibo`)

    const receipt = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
    }

    this.log.log(`Recibo emitido: ${receipt.id}`)

    return receipt
  }
}
