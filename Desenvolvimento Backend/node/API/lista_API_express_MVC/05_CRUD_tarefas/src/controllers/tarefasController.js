import { json } from 'express';
import * as model from '../models/tarefasModel.js';

export function listarTarefas(req, res){
    const listaTarefas = model.listarTarefasDB()
    return res.status(200).json(listaTarefas)
}

export function criarTarefa(req, res){
    const {titulo, concluida} = req.body;
    
    if(!titulo || concluida == undefined){
        return res.status(400).json({mensagem: "Dados obrigatórios não informados!"})
    }
    
    const novaTarefa = model.criarTarefaDB(titulo, concluida);
    return res.status(201).json(novaTarefa)
}

export function atualizarTarefa(req, res){
    const {id} = req.params;
    const {concluida} = req.body;
    if(!concluida){
        return res.status(400).json({mensagem: "O campo 'concluida' é obrigatório!"})
    }

    if(typeof concluida !== 'boolean'){
        return res.status(400).json({mensagem: "O campo 'concluida' deve ser true ou false!"})
    }

    const tarefaAtualizada = model.atualizarTarefaDB(id, concluida);
    if(!tarefaAtualizada){
        return res.status(404).json({mensagem: "Tarefa não encontrada"})
    }
    return res.status(200).json(tarefaAtualizada)
}

export function deletarTarefa(req, res){
    const {id} = req.params;
    const tarefaDeletada = model.deletarTarefaDB(id);

    if(!tarefaDeletada){
        return res.status(404).json({mensagem: "Tarefa não encontrada"})
    }

    return res.status(204).json()
}