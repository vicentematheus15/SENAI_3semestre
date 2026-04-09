import pool from "../database/db.js";

export async function criarUsuario(nome, email, senha){
    try {
        const novoUsuario = await pool.query(`
            INSERT INTO usuarios (nome, email, senha)
            VALUES ($1, $2, $3) RETURNING *`, [nome, email, senha]);
        return novoUsuario.rows
    } catch (error) {
        console.error("Ocorreu um erro: ", error);
    }
}

