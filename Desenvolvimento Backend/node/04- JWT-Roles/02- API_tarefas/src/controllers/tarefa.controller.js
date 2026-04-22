import * as model from '../models/tarefa.model.js';
import bcrypt from  'bcryptjs';
import jwt from 'jsonwebtoken';

export async function listar(req, res) {
    const usuarioId = req.usuario.id
    try {
        const listaTarefas = await model.buscarPorUsuario(usuarioId)
        return res.status(200).json(listaTarefas)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function criar(req, res) {
    const {descricao} = req.body;
    const usuarioId = req.usuario.id;
    try {
        const novaTarefa = await model.criar(descricao, usuarioId);
        return res.status(201).json({
            mensagem: 'Tarefa criada com sucesso!',
            tarefa: novaTarefa
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function concluir(req, res) {
    const {id} = req.params;
    const usuarioId = req.usuario.id
    try {
        const tarefa = await model.concluir(id, usuarioId);
        if(!tarefa){
            return res.status(404).json({mensagem: 'Não foi possível alterar a tarefa!'})
        }
        return res.status(200).json({
            mensagem: 'Tarefa Concluída!!',
            tarefa: tarefa
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}