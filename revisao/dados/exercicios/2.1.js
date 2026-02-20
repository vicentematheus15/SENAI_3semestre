// Exercício 2.1 - Cadastro de Veículo
// Crie um dicionário (Objeto Literal) chamado carro que contenha as seguintes propriedades e valores:
// marca: "Toyota"
// modelo: "Corolla"
// ano: 2022
// Após criar o objeto:
// Adicione uma nova propriedade chamada cor com o valor "Prata".
// Atualize o valor do ano para 2023.
// Exiba o objeto completo no console.

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
}

console.log(carro);

carro.cor = "Prata"
carro.ano = 2023
console.log(carro);
