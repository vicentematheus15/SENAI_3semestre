import * as model from '../models/usuario.model.js';
import bcrypt from  bcrypt;
import jwt from 'jsonwebtoken';

export async function cadastrar(req, res) {
    const {nome, email, senha}
    try {
        const usuarioExiste = await model.buscaPorEmail(email);
        if(usuarioExiste){
            return res.status(400).json({ message: 'Email já existe' });
        }
        const novoUsuario = await model.criar(nome, email, senha)
        return res.status(201).json({
            mensagem: 'Usuário criado com sucesso!',
            usuario: usuario
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function login(req, res) {
    
}