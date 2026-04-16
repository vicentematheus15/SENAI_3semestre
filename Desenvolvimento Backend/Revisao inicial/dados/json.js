const alunos = {
    nome: "Ana",
    idade: 18,
    notas: [10,8,5,8],
    curso: "Desenvolvimento de Sistemas",
    ativo: true
};

const jsonAlunos = JSON.stringify(alunos); //converteu o Objeto/dicionario para JSON

const objetoAluno = JSON.parse(jsonAlunos);// converteu o JSON para Objeto/dicionario

console.log(jsonAlunos);
console.log(objetoAluno);

