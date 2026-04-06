import pool from '../database/db.js'

export async function listarContatos(){
    try{
        const listaContatos =  await pool.query('SELECT * FROM contatos;');
        return listaContatos.rows;
    }catch(erro){
        console.log("DEU ERRO: ", erro);
    }
}

export async function buscarContatoID(id){
    try{
        const contatoId = await pool.query(`SELECT * FROM contatos WHERE id=${id}`)
        return contatoId.rows;
    }catch(erro){
        console.log("DEU ERRO: ", erro);
    }
}

export async function cadastrarContato(nome, telefone, email){
    try{
        const novoContato = await pool.query(
            `INSERT INTO contatos (nome, telefone, email) VALUES ($1, $2, $3) RETURNING *`, [nome, telefone, email])
        return novoContato.rows;
    }catch(erro){
        console.log("DEU ERRO: ", erro);
    }
}