import * as model from '../models/usuario.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function cadastrar(req, res){
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

export async function login(req, res) {
    const {email, senha} = req.body;
    try {
        const usuario = await model.buscarPorEmail(email);
        if(!usuario){
            return res.status(400).json({ mensagem: 'Não foi possível realizar o login' });
        }

        const comparandoHash = bcrypt.compare(senha, usuario.senha_hash);
        if(!comparandoHash){
            res.stats(400).json({mensagem: 'Credenciais inválidas!'})
        }
        delete usuario.senha_hash;

        const tokenUsuario = jwt.sign(
            {id: usuario.id, nome: usuario.nome, perfil: usuario.perfil},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN},
        )

        return res.json({token: tokenUsuario, usuario: usuario})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}