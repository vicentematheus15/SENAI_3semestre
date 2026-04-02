import pool from '../database/db.js'

export function listarContatos(){
    const listaContatos = pool.query('SELECT * FROM contatos;');
    return listaContatos;
}

export function buscarContatoID(id){
    const resultBusca = contatos.find(cont => cont.id == id);
    return resultBusca;
}

export function cadastrarContato(nome, telefone, email){
    const novoContato = {
        id: contatos.length + 1,
        nome: nome,
        telefone: telefone,
        email: email
    }
    contatos.push(novoContato);
    return novoContato;
}