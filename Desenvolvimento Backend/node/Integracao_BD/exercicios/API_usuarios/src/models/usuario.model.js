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

export async function buscarPorEmail(email, senha){
    try {
        const resultado = await pool.query(`
            SELECT * FROM usuarios 
            WHERE email = $1`,
            [email]);
        if(resultado.rows.length === 0){
            return false
        }

        const usuario = resultado.rows[0];
        if(usuario.senha === senha){
            return true
        }else{
            return false
        }
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
        if(resultado.rows.length === 0){
            return false
        }else{
        return resultado.rows[0];
        }
    } catch (error) {
        console.error("Ocorreu um erro: ", error);
    }
}

export async function atualizarUsuario(id, nome, email, senha){
    try {
        const resultado = await pool.query(`
            UPDATE usuarios 
            SET nome = $2, 
                email = $3, 
                senha = $4
            WHERE id = $1
            RETURNING *`, 
        [id, nome, email, senha]);
        return resultado.rows[0]
    } catch (error) {
        console.error("Ocorreu um erro: ", error);
    }
}