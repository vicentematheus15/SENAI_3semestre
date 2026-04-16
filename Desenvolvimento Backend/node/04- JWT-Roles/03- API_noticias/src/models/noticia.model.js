import pool from '../database/db.js';
import bcrypt from 'bcryptjs';


export async function buscarTodos(){
    try {
        const result = await pool.query(`SELECT * FROM noticias`)
        return result.rows
    } catch (error) {
        console.log(error);
        return (error)
    }
}

export async function criar(titulo, conteudo){
    
}