import * as model from '../model/modelProdutos.js'

export function listarProdutos(req, res){
    const {categoria} = req.query;
    let listaProdutos = model.listarProdutosDB()
    if(!listaProdutos){
        return res.status(404).json({mensagem:"Requisição não pode ser processada!"})
    }

//filtra por categoria (se existir)
    if(categoria){
        listaProdutos = listaProdutos.filter(produto => produto.categoria.toLowerCase() === categoria.toLowerCase())
    }

//se nao existir produto na categoria
    if(categoria && listaProdutos.length === 0){
        return res.status(404).json({ mensagem: "Nenhum produto encontrado para essa categoria!" });
    }

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