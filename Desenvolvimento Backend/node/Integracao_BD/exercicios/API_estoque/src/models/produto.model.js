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

export async function buscarPorId(id){
    try {
        const produtoAlvo = await pool.query(`
            SELECT * FROM produtos
            WHERE id = $1`, [id])
        if(produtoAlvo.rows.length === 0){
            return false
        }
        return produtoAlvo.rows[0]
    } catch (error) {
        console.error("Ocorreu um erro: ", error);
        throw error
    }
}

export async function criarProduto(nome, categoria, preco, quantidade){
    try {
        const result = await pool.query(`
            INSERT INTO produtos (nome, categoria, preco, quantidade)
            VALUES ($1, $2, $3, $4)
            RETURNING *`, 
            [nome, categoria, preco, quantidade]
        );
        return result.rows[0];
        
    } catch (error) {
        console.error("Ocorreu um erro: ", error);
        throw error;
    }
}

export async function atualizarProduto(id, nome, categoria, preco, quantidade){
    try {
        const result = await pool.query(`
            UPDATE produtos
            SET nome = $2,
                categoria = $3,
                preco = $4,
                quantidade = $5
            WHERE id = $1 
            RETURNING *`, 
            [id, nome, categoria, preco, quantidade]
        );
        return result.rows[0]
    } catch (error) {
        console.error("Ocorreu um erro: ", error);
        throw error
    }
}