import pool from '../database/db.js'

export async function listarContatos(){
    try{
        const listaContatos =  await pool.query('SELECT * FROM contatos;');
        return listaContatos.rows;
    }catch(erro){
        console.log("DEU ERRO: ", erro);
    }
}

export function buscarContatoID(id){
    return 'Em construcao';
}

export function cadastrarContato(nome, telefone, email){
    return 'Em construcao';
}