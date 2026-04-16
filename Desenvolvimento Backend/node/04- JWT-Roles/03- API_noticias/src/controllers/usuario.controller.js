import * as model from '../models/usuario.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function cadastro(req, res){
    const {nome, email, senha, perfil} = req.body;
    try {
        const usuarioExiste = await model.buscarPorEmail(email);
        if(usuarioExiste){
            return res.status(400).json({ message: 'Email já existe' });
        }
        const usuario = await model.criar(nome, email, senha, perfil);
        
        res.status(201).json({
            mensagem: 'Usuário criado com sucesso!',
            usuario: usuario
        })
    } catch (error) {
         res.status(500).json({ error: error.message });
    }
} 