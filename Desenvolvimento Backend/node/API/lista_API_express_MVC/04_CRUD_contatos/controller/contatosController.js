//CAMADA CONTROLLER - Lógica de rotas - trata a requisição
import * as model from '../model/contatosModel.js'

export function listarUserController(req, res){
    const resultadoListar = model.listarUser();

    return res.status(200).json(resultadoListar)
}

export function listarUserIdController(req, res){
    const {id} = req.params;
    const resultListId = model.listarUserId(id)
    
    if(!resultListId){
        return res.status(404).json({mensagem: "Usuário não encontrado!"});
    }

    return res.status(200).json(resultListId);
}

export function criarUser(req, res){
    const {nome, telefone, email} = req.body;
    
    if(!nome || !telefone || !email){
        res.status(400).json({mensagem: "Dados obrigatórios não informados!"});
    }
    
    const novoUser = model.criarUserDB(nome, telefone, email);

    return res.status(201).json(novoUser);
}

export function atualizarUser(req, res){
    const {id} = req.params;
    const dadosAtualizados = req.body;

    const atualizadoUser = model.atualizarUserDB(id, dadosAtualizados);

    if(!atualizadoUser){
        return res.status(404).json({mensagem: "Usuário não encontrado!"});
    }
    return res.status(200).json(atualizadoUser);
}

export function deletarUser(req, res){
    const {id} = req.params;
    
    const deletedUser = model.deletarUserDB(id)

    if(!deletedUser){
        return res.status(404).json({mensagem: "Usuário não encontrado!"});
    }
    return res.status(200).json({
        mensagem: "Usuário deletado com sucesso!", 
        usuario: deletedUser
    });
}