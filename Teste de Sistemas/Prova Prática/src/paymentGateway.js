// Simula uma chamada real a uma API externa de pagamento.
// Em produção isso faria uma requisição HTTP — por isso precisa ser mockado nos testes.
export const paymentGateway = {
  async charge(amount) {
    await new Promise((resolve) => setTimeout(resolve, 25))

    if (typeof amount !== 'number' || Number.isNaN(amount) || amount <= 0) {
      return {
        success: false,
        statusCode: 400,
        code: 'INVALID_AMOUNT',
        message: 'Valor do pagamento inválido',
        amount,
      }
    }

    return {
      success: true,
      statusCode: 201,
      provider: 'MockPay',
      transactionId: `pay_${Date.now()}_${Math.random().toString(16).slice(2, 10)}`,
      amount,
      currency: 'BRL',
      capturedAt: new Date().toISOString(),
      message: 'Pagamento aprovado com sucesso',
    }
  },
}
