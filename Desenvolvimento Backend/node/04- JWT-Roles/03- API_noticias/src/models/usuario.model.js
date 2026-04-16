import pool from '../database/db.js';
import bcrypt from 'bcryptjs';


export async function buscarPorEmail(email) {
    try {
        const result = await pool.query(`
            SELECT * FROM usuarios
            WHERE email = $1`, 
            [email]);
        
        return result.rows[0]
    } catch (error) {
        console.log(error);
        return (error)
    }
}


export async function criar(nome, email, senha, perfil) {
    try {
        const senhaHash = await bcrypt.hash(senha, 10);

        const result = await pool.query(`
            INSERT INTO usuarios (nome, email, senha_hash, perfil)
            VALUES ($1, $2, $3, $4)
            RETUNING id, email, perfil`,
            [nome, email, senhaHash, perfil]);

        return result.rows[0];
    } catch (error) {
        console.log(error);
        return (error)
    }
}