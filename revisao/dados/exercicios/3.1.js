// Exercício 3.1 - Preparando dados para a API
// Você possui o seguinte objeto JavaScript:
// const pedido = { id: 501, produto: "Notebook", quantidade: 1, pago: true };
// Converta este objeto para uma String JSON para que possa ser enviado a um servidor.
// Exiba a string gerada no console e verifique seu tipo usando typeof.

const pedido = { 
    id: 501, 
    produto: "Notebook", 
    quantidade: 1, 
    pago: true 
};
console.log(pedido);

const pedidoJson = JSON.stringify(pedido);
console.log(pedidoJson, typeof(pedidoJson));
