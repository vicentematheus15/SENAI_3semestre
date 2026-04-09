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

export async function criarProduto(req, res){
    try {
        const {nome, categoria, preco, quantidade} = req.body;
        if(!nome || !categoria || preco == null || quantidade == null){
            return res.status(422).json({mensagem: "Dados incompletos!"})
        }
        const novoProduto = await model.criarProduto(nome, categoria, preco, quantidade);
        
        return res.status(201).json({
            mensagem: "Produto criado com sucesso!",
            produto: novoProduto
        })
        
    } catch (error) {
        console.error("Ocorreu um erro: ", error);
        return res.status(500).json({mensagem: "Erro ao criar produto!"})
    }
}

export async function atualizarProduto(req, res){
    try {
        const {id} = req.params;
        const {nome, categoria, preco, quantidade} = req.body;
        const produtoAlvo = await model.buscarPorId(id);
        if(!produtoAlvo){
            return res.status(404).json({mensagem: "Produto não encontrado!"})
        }
        const produtoAtualizado = await model.atualizarProduto(id, nome, categoria, preco, quantidade)
        return res.status(200).json({
            mensagem: "Produto atualizado com sucesso!",
            produto: produtoAtualizado
        })
    } catch (error) {
        console.error("Ocorreu um erro: ", error);
        return res.status(500).json({mensagem: "Erro ao atualizar produto!"})

    }
}