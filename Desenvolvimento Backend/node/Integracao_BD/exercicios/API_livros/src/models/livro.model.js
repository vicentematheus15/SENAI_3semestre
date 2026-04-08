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

export async function buscarLivroDB(id){
    try{
        const livro = await pool.query(`
            SELECT * FROM livros WHERE id = ${id}`);
        return livro.rows
    }catch(error){
        console.error("Erro ao buscar livro", error);
        throw error
    }
} 

export async function criarLivroDB(titulo, autor, ano, disponivel){
    try{
        const novoLivro = await pool.query(`
            INSERT INTO livros (titulo, autor, ano, disponivel)
                VALUES ($1, $2, $3, $4) RETURNING *`, [titulo, autor, ano, disponivel]);
                return novoLivro.rows
    }catch(error){
        console.error("Ocorreu um erro: ", error);
        throw error
    }
}