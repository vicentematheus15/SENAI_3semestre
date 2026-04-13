// Simula uma chamada real a uma API externa de e-mail.
// Em produção isso faria uma requisição HTTP — por isso precisa ser mockado nos testes.
export const emailService = {
  async send(to, subject, body) {
    // chamada real a API externa (não rode isso nos testes!)
    throw new Error('Sem conexão com servidor de e-mail em ambiente de teste')

    //return {sucess: true}
  },
}
