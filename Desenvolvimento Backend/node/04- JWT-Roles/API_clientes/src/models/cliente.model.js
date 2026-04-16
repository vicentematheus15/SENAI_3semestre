import pool from '../database/db.js';
import bcrypt from 'bcryptjs';

export async function buscaPorEmail(email){
    try {
        const result = await pool.query(
            `SELECT * FROM clientes
            WHERE email = $1`, 
            [email]);

        return result.rows[0]

    } catch (error) {
        console.log(error);
        return (error)  
    }
}

export async function criar(nome, email, senha) {
    try {
        //Criptografando senha
        const senhaHash = await bcrypt.hash(senha, 10);
    
        const result = await pool.query(`
            INSERT INTO clientes (nome, email, senhaHash)
            VALUES ($1, $2, $3) 
            RETURNING *`, 
            [nome, email, senhaHash]);

        return result.rows[0]
        
    } catch (error) {
        console.log(error);
        return (error) 
    }
}