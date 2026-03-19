//CAMADA MODEL - 
import {contatos} from './exemploDB.js'


export function listarUser(){
//emulando uma consulata (SELECT * from usuarios) com banco de dados
    return (contatos)
}

export function listarUserId(id){
    const resultId = contatos.find(contato => contato.id == id);
    return resultId;
}

export function criarUserDB(nome, telefone, email){
    const novoUser = {id: contatos.length+1, nome: nome, telefone: telefone, email: email}
    contatos.push(novoUser)
    return novoUser
}