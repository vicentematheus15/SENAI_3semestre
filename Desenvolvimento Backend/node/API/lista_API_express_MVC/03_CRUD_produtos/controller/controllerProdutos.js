import * as model from '../model/modelProdutos.js'

export function listarProdutos(req, res){
    const listaProdutos = model.listarProdutosDB()
    return res.status(200).json(listaProdutos)
}