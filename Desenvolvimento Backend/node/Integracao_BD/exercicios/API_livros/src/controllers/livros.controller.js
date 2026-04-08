import * as model from '../models/livro.model.js'

export async function listar(req, res) {
    try{
        const todosLivros = await model.listarDB();
        res.status(200).json(todosLivros)
    }catch(error){
        res.status(500).json({mensagem: "Erro ao buscar livros"});
    }
}