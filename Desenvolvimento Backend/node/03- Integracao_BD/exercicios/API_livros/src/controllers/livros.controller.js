import * as model from '../models/livro.model.js'

export async function listar(req, res) {
    try{
        const todosLivros = await model.listarDB();
        res.status(200).json(todosLivros)
    }catch(error){
        res.status(500).json({mensagem: "Erro ao buscar livros"});
    }
}

export async function buscarLivro(req, res){
    try{
        const {id} = req.params;
        const livro = await model.buscarLivroDB(id);
        res.status(200).json(livro)
    }catch(error){
        res.status(404).json({mensagem: "Erro ao buscar! Livro não existe!"})
    }
}

export async function criarLivro(req, res){
    try{
        const {titulo, autor, ano, disponivel} = req.body;

        if(!titulo || !autor || !ano || !disponivel){
            res.status(422).json({mensagem: "Dados incomplestos!"})
        }else{
            const novoLivro = await model.criarLivroDB(titulo, autor, ano, disponivel);
            res.status(201).json(novoLivro)
        }
    }catch(error){
        res.status(404).json({mensagem: "Erro ao criar livro!"})
    }
}