// Exercício 3.2 - Recebendo dados da API
// Você recebeu a seguinte resposta em texto de um servidor externo:
// const jsonRecebido = '{"cidade": "São Paulo", "temperatura": 25, "chovendo": false}';
// Converta essa String JSON de volta para um Objeto JavaScript.
// Acesse a propriedade temperatura do novo objeto e exiba a frase no console: "A temperatura em São Paulo é de 25 graus."

const jsonRecebido = '{"cidade": "São Paulo", "temperatura": 25, "chovendo": false}';
console.log(jsonRecebido);


const objRecebido = JSON.parse(jsonRecebido);
console.log(objRecebido);

console.log(objRecebido.temperatura = `A temperatura em São Paulo é de ${objRecebido.temperatura} graus`)
