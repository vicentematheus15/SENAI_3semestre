import pool from '../database/db.js';
import bcrypt from 'bcryptjs';


export async function buscarTodos(){
    try {
        const result = await pool.query(`
            SELECT * FROM noticias
            ORDER BY criado_em DESC`)
        return result.rows
    } catch (error) {
        console.log(error);
        return (error)
    }
}

export async function criar(titulo, conteudo){
    try {
        const result = await pool.query(`
            INSERT INTO noticias (titulo, conteudo)
            VALUES ($1, $2)
            RETURNING *`,
            [titulo, conteudo]);

        return result.rows

    } catch (error) {
        console.log(error);
        return (error)
    }
}

export async function remover(id){
    try {
        const result = await pool.query(`
            DELETE FROM noticias
            WHERE id = $1
            RETURNING *`,
            [id]);
        
        if(result.rowCount === 0){
            return false
        }
        return result.rows[0];
        
    } catch (error) {
        console.log(error);
        return (error)
    }
}