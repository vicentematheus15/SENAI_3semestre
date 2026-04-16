// Exercício 3.3 - Lista de Objetos em JSON
// Uma API retornou múltiplos usuários no formato de um Array contendo Objetos em uma String JSON:
// const jsonUsuarios = '[{"id": 1, "nome": "Alice"}, {"id": 2, "nome": "Bob"}]';
// Transforme a string jsonUsuarios em uma lista (array) de objetos reais do JavaScript.
// Acesse o segundo objeto do array gerado e exiba apenas o nome do usuário (neste caso, "Bob") no console.

const jsonUsuarios = '[{"id": 1, "nome": "Alice"}, {"id": 2, "nome": "Bob"}]';

const listaUsuarios = JSON.parse(jsonUsuarios);
console.log(listaUsuarios);

console.log(listaUsuarios[1].nome);

