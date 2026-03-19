//CAMADA CONTROLLER - Lógica de rotas - trata a requisição
import * as model from '../model/contatosModel.js'

export function listarUserController(req, res){
    const resultadoListar = model.listarUser();

    res.status(200).json(resultadoListar)
}

export function listarUserIdController(req, res){
    const {id} = req.params;
    if(!id){
        res.status(404).json({mensagem: "Requisição não pode ser processada!"});
    }

    const resultListId = model.listarUserId(id)
    if(!resultListId){
        res.status(404).json({mensagem: "Requisição não pode ser processada!"});
    }

    res.status(200).json(resultListId);
}

export function criarUser(req, res){
    const {nome, telefone, email} = req.body;
    if(!nome || !telefone || !email){
        res.status(404).json({mensagem: "Requisição não pode ser processada!"});
    }
    const novoUser = model.criarUserDB(nome, telefone, email);
    res.status(201).json(novoUser);
}