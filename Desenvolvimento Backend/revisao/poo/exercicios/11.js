// Crie uma função processarPagamento(metodo, valor) que receba um objeto genérico. Esse objeto pode ser uma instância de CartaoCredito, Boleto ou PayPal. O polimorfismo deve garantir que o método correto de cobrança seja chamado sem que a função precise saber qual é a classe exata.

class CartaoCredito {
  cobrar(valor) {
    console.log(`Pagamento de R$ ${valor} no Cartão de Crédito`);
  }
}

class Boleto {
  cobrar(valor) {
    console.log(`Boleto gerado no valor de R$ ${valor}`);
  }
}

class PayPal {
  cobrar(valor) {
    console.log(`Pagamento de R$ ${valor} via PayPal`);
  }
}

function processarPagamento(metodo, valor) {
  metodo.cobrar(valor);
}

// Teste
const cartao = new CartaoCredito();
const boleto = new Boleto();
const paypal = new PayPal();

processarPagamento(cartao, 100);
processarPagamento(boleto, 200);
processarPagamento(paypal, 300);