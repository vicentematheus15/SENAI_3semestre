import pool from '../database/db.js';
import bcrypt from 'bcryptjs';

export async function criar(nome, email, senha) {
    try {
        const senha_hash = bcrypt.hash(senha, 10);

        const result = await pool.query(`
            INSERT INTO usuario (nome, email, senha_hash)
            VALUES ($1, $2, $3)
            RETURNING id, nome, email`, 
            [nome, email, senha_hash])

        return result.rows[0];
    } catch (error) {
        console.log(error);
        return (error)
    }
}

export async function buscaPorEmail(email) {
    try {
        const result = await pool.query(`
            SELECT * from usuarios
            WHERE email = $1`, [email])

        return result.rows[0]
    } catch (error) {
        console.log(error);
        return (error)
    }
}