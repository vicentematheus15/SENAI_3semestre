import * as model from '../models/produto.model.js';

export async function buscarTodos(req, res){
    try {
        const todosProdutos = await model.buscarTodos();
        res.status(200).json(todosProdutos)
    } catch (error) {
        console.error("Ocorreu um erro: ", error);
    }

}

export async function buscarPorId(req, res){
    try {
        const {id} = req.params;
        const produtoAlvo = await model.buscarPorId(id);
        if(!produtoAlvo){
            return res.status(404).json({mensagem: "Produto não encontrado!"})
        }
        return res.status(200).json(produtoAlvo)
    } catch (error) {
         console.error("Ocorreu um erro: ", error);
    }
}