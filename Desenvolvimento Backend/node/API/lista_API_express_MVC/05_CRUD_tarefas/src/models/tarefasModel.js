import {tarefas} from '././exemploDB.js';

export function listarTarefasDB(){
    //faria um select no banco de dados
    return tarefas
}

export function criarTarefaDB(titulo, concluida){
    const novaTarefa = {id: tarefas.length+1, titulo: titulo, concluida: concluida};
    tarefas.push(novaTarefa);
    return novaTarefa
}



export function deletarTarefaDB(id){
    const index = tarefas.findIndex(tarefa => tarefa.id == id);
    if(index === -1){
        return null
    }
    
    const tarefaDeletada = tarefas.splice(index, 1);
    return tarefaDeletada
}