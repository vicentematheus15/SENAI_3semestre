import pool from '../database/db.js'

export async function listarDB() {
    try{
        const todosLivros = await pool.query('SELECT * FROM livros')
        return todosLivros.rows
    }catch(error){
        console.error('Erro no banco de dados:', error);
        throw error;
    }
}