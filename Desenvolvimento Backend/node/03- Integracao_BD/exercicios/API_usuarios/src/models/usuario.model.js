import pool from "../database/db.js";
import bcrypt from 'bcryptjs'

export async function criarUsuario(nome, email, senha){
    try {
        //Convertendo a senha em hash
        const senhaHash = await bcrypt.hash(senha, 10);

        const query = await pool.query(`
            INSERT INTO usuarios (nome, email, senha)
            VALUES ($1, $2, $3) RETURNING *`, [nome, email, senhaHash]);
        return query.rows[0];

    } catch (error) {
        console.error("Ocorreu um erro: ", error);
    }
}

export async function buscarPorEmail(email, senha){
    try {
        const resultado = await pool.query(`
            SELECT * FROM usuarios 
            WHERE email = $1`,
            [email]);
        return resultado.rows[0];
        
    } catch (error) {
        console.error("Ocorreu um erro: ", error);
    }
}

export async function buscarPorId(id){
    try {
        const resultado = await pool.query(`
            SELECT * FROM usuarios 
            WHERE id = $1`, 
            [id])
        return resultado.rows[0];
        
    } catch (error) {
        console.error("Ocorreu um erro: ", error);
    }
}

export async function atualizarUsuario(id, nome, email, senha){
    try {
        const novaSenhaHash = await bcrypt.hash(senha, 10)
        const resultado = await pool.query(`
            UPDATE usuarios 
            SET nome = $2, 
                email = $3, 
                senha = $4
            WHERE id = $1
            RETURNING *`, 
        [id, nome, email, novaSenhaHash]);

        if(resultado.rows.length === 0){
            return {mensagem: 'Usuário não encontrado'}
        }
        delete resultado.rows[0].senha
        return resultado.rows[0]
    } catch (error) {
        console.error("Ocorreu um erro: ", error);
    }
}