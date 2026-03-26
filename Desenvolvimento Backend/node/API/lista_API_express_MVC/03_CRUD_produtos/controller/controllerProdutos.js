import * as model from '../model/modelProdutos.js'

export function listarProdutos(req, res){
    const listaProdutos = model.listarProdutosDB()
    return res.status(200).json(listaProdutos)
}


export function mostrarProduto(req, res){
    const {id} = req.params;
    const produto = model.mostrarProduto(id)

    if(!produto){
        return res.status(404).json({mensagem: "Produto não encontrado!"})
    }

    return res.status(200).json(produto)
}