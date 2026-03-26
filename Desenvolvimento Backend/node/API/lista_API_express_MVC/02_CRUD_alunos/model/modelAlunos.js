import {alunos} from './exemploDB.js'

export function listarAlunosDB(){
    //simula um select *, pega o array de alunos e retorna
    return alunos
}

export function criarAlunoDB(nome, nota){
    const novoAluno = {id: alunos.length+1, nome: nome, nota: nota};
    alunos.push(novoAluno);
    return novoAluno
}