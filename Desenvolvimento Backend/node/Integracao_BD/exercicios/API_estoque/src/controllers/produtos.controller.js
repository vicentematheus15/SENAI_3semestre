import * as model from '../models/produto.model.js';

export async function buscarTodos(req, res){
    try {
        const todosProdutos = await model.buscarTodos();
        res.status(200).json(todosProdutos)
    } catch (error) {
        console.error("Ocorreu um erro: ", error);
    }

}