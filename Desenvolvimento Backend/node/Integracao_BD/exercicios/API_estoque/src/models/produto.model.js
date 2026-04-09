import pool from '../database/db.js'

export async function buscarTodos(){
    try {
        const todosProdutos = await pool.query(`SELECT * FROM produtos`)
        return todosProdutos.rows
    } catch (error) {
        console.error("Ocorreu um erro: ", error);
        throw error
    }
}