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