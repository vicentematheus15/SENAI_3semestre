const convidados = [
  { id: 1, nome: "Lucas", sobrenome: "Silva", idade: 20 },
  { id: 2, nome: "Maria", sobrenome: "Oliveira", idade: 17 },
  { id: 3, nome: "João", sobrenome: "Santos", idade: 25 },
  { id: 4, nome: "Ana", sobrenome: "Souza", idade: 16 }
];

console.log("===== LISTA ORIGINAL =====");
console.log(convidados);

// MAP: transforma a lista de objetos em lista de nomes
const nomes = convidados.map((convidado) => {
  return convidado.nome;
});

console.log("\n===== MAP: Pegando apenas os nomes =====");
console.log(nomes);

// FILTER: seleciona apenas maiores de idade
const maioresDeIdade = convidados.filter((convidado) => {
  return convidado.idade >= 18;
});

console.log("\n===== FILTER: Convidados maiores de idade =====");
console.log(maioresDeIdade);

// FIND: busca apenas um convidado pelo ID
const convidadoEncontrado = convidados.find((convidado) => {
  return convidado.id === 3;
});

console.log("\n===== FIND: Buscando convidado com ID 3 =====");
console.log(convidadoEncontrado);

// REDUCE: soma todas as idades
const somaIdades = convidados.reduce((total, convidado) => {
  return total + convidado.idade;
}, 0);

console.log("\n===== REDUCE: Somando todas as idades =====");
console.log("Soma das idades:", somaIdades);

// Calculando média
const mediaIdade = somaIdades / convidados.length;

console.log("\n===== REDUCE: Calculando média de idade =====");
console.log("Média de idade:", mediaIdade);

// Encadeamento: primeiro filtra, depois transforma
const nomesDosMaiores = convidados.filter((convidado) => {
    return convidado.idade >= 18;
  }).map((convidado) => {
    return convidado.nome;
  });

console.log("\n===== FILTER + MAP =====");
console.log("Nomes dos maiores de idade:", nomesDosMaiores);

//============================
// Adicionar mais 3 convidados na lista.
const novosConvidados = [
    {id: 5, nome: "José", sobrenome: "Oliveira", idade: 29},
    {id: 6, nome: "Camila", sobrenome: "Freitas", idade: 16},
    {id: 7, nome: "Diana", sobrenome: "Moreira", idade: 21}
]

novosConvidados.forEach((convidado) => {
    convidados.push(convidado)
})

console.log('\n==========  Nova lista de convidados ==========\n'
, convidados);


// Criar um filter para listar apenas menores de idade.
const menoresIdade = convidados.filter((convidado) => {
    return convidado.idade < 18
})

console.log('\n ======== Menores de idade: ======== \n', menoresIdade);





// Adicionar o campo confirmado: true/false e filtrar apenas convidados confirmados.
