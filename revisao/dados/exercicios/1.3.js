// Você possui uma lista de tarefas a fazer: let tarefas = ["Lavar louça", "Varrer sala"];.
// Surgiu uma tarefa urgente. Adicione "Estudar JavaScript" no início da lista.
// Exiba a lista atualizada no console para garantir que a tarefa urgente é a primeira.
// Em seguida, conclua essa tarefa urgente removendo-a do início e exibindo a mensagem: "Tarefa concluída: Estudar JavaScript".

let tarefas = ["Lavar louça", "Varrer sala"];
console.log(tarefas);


tarefas.unshift("Estudar JavaScript")
console.log(tarefas)

tarefas.shift()
console.log("Tarefa concluiuda: Estudar JavaScript", tarefas);
