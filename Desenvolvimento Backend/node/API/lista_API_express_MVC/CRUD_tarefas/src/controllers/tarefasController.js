import * as model from '../models/tarefasModel.js';

export function listarTarefas(req, res){
    const listaTarefas = model.listarTarefasDB()
    return res.status(200).json(listaTarefas)
}

export function criarTarefa(req, res){
    const {titulo, concluida} = req.body;
    const novaTarefa = model.criarTarefaDB(titulo, concluida);

    if(!novaTarefa){
        res.status(404).json({mensagem: "Requisição não pode ser processada!"})
    }

    return res.status(201).json(novaTarefa)
}