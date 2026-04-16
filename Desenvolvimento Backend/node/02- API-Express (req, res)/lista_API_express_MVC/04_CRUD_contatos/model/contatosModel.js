//CAMADA MODEL - 
import {contatos} from './exemploDB.js'


export function listarUser(){
//emulando uma consulata (SELECT * from usuarios) com banco de dados
    return contatos
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

export function atualizarUserDB(id, dadosAtualizados){
    //usando find e alterando diretamente o objeto (mais simples e menos profissional)
    // const contato = contatos.find(contato => contato.id == id)
    // if (!contato){
    //     return null
    // }
    
    // Object.assign(contato, dadosAtualizados)
    // return dadosAtualizados

    const index = contatos.findIndex(contato => contato.id == id);

    if(index === -1){
        return null;
    }

    const contatoParaAtualizar = contatos[index];
    const contatoAtualizado = {...contatoParaAtualizar, ...dadosAtualizados};

    contatos[index] = contatoAtualizado;
    return contatoAtualizado
}

export function deletarUserDB(id){
    const index = contatos.findIndex(contato => contato.id == id);

    if(index === -1){
        return null
    }

    const deletedUser = contatos[index]
    contatos.splice(index, 1)
    return deletedUser
}