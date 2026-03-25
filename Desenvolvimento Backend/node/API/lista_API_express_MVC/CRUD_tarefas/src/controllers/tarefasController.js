import * as model from '../models/tarefasModel.js';

export function listarTarefas(req, res){
    const listaTarefas = model.listarTarefasDB()
    return res.status(200).json(listaTarefas)
}

export function criarTarefa(req, res){
    const {titulo, concluida} = req.body;
    
    if(!titulo || !concluida){
        return res.status(404).json({mensagem: "Dados obrigatórios não informados!"})
    }
    
    const novaTarefa = model.criarTarefaDB(titulo, concluida);
    return res.status(201).json(novaTarefa)
}