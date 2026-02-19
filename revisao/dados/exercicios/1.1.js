// Exercício 1.1 - Fila de Atendimento
// Você foi encarregado de criar um sistema de fila para um banco.
// Crie um array chamado fila contendo os nomes: "Ana", "Carlos" e "João".
// Adicione o nome "Maria" ao final da fila utilizando o método adequado.
// O primeiro cliente foi atendido. Remova-o do início da fila e exiba o nome dele no console.
// Exiba como a fila ficou após essas operações.

const fila = ["Ana", "Carlos", "João"]

fila.push("Maria")

console.log(fila.shift());

console.log(fila);
