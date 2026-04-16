// 4. Desafio Integrador - Opcional
// Vamos juntar tudo! Siga os passos abaixo:
// Crie uma lista (array) vazia chamada turma.
// Crie dois dicionários (objetos) representando alunos. Cada aluno deve ter nome e nota. Exemplo: { nome: "Lucas", nota: 8.5 }.
// Utilize o método correto para adicionar esses dois alunos para dentro da lista turma.
// Converta a lista turma inteira para o formato JSON.
// Exiba o JSON final no console.

const turma = [];

const aluno1 = {
    nome: "Lucas",
    nota: 8.5
};

const aluno2 = {
    nome: "Carlos",
    nota: 9
};

turma.push(aluno1, aluno2);
console.log(turma);

const turmaJson = JSON.stringify(turma);

console.log(turmaJson);

