const alunos = {
    nome: "Ana",
    idade: 18,
    notas: [10,8,5,8],
    curso: "Desenvolvimento de Sistemas",
    ativo: true
};

console.log(alunos.curso, alunos.idade);

//cria um atributo e define ele ou altera um ja existente
alunos.email = "ana@.edu.com.br"
alunos.idade = 19


console.log("instituição" in alunos); //Verifica se há chave no dicionario chamada "instituição" e retorna tru ou false
console.log(alunos.hasOwnProperty("ativo")); //Verifica se há chave no dicionario chamada "ativo" e retorna tru ou false

const ChavesDict = Object.keys(alunos); //extraindo as chaves do dicionario
const ValoresDict = Object.values(alunos); //extraindo os valores do dicionario

