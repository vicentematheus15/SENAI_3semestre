import pool from '../database/db.js';
import bcrypt from 'bcryptjs';

export async function buscarPorUsuario(usuarioId) {
    try {
        const result = await pool.query(`
            SELECT * FROM tarefas
            WHERE usuario_id = $1
            ORDER BY id ASC`, 
            [usuarioId])
        if(result.rows.length === 0){
            return ({message: "Esse usuário ainda não cadastrou nenhuma tarefa"})
        }
        return result.rows;
    } catch (error) {
        console.log(error);
        return (error) 
    }
}

export async function criar(descricao, usuarioId) {
    try {
        const result = await pool.query(`
            INSERT INTO tarefas (descricao, usuario_id)
            VALUES ($1, $2)
            RETURNING *`, 
            [descricao, usuarioId])
        
        return result.rows[0]
    } catch (error) {
        console.log(error);
        return (error)
    }
}

export async function name(id, usuarioId) {
    
}