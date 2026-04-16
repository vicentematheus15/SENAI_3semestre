// Exercício 2.3 - Atualização de Estoque
// Considere o produto: const produto = { nome: "Mouse", preco: 50, desconto: 5 };.
// A promoção acabou. Utilize o operador delete para remover a propriedade desconto do objeto.
// Ocorreu um reajuste de preço. Altere a propriedade preco para 55.
// Exiba o objeto atualizado no console.

const produto = {
    nome: "Mouse",
    preco: 50,
    desconto: 5
};

console.log(produto);


delete produto.desconto
produto.preco = 55

console.log(produto);