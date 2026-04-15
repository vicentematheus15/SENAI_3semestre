import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as model from '../models/usuario.model.js'

export async function cadastrar(req, res){
    const {nome, email, senha} = req.body;
    try {
        if(!nome || !email || !senha){
            return res.status(422).json({mensagem: "Dados incompletos!"})
        }
        
        const usuarioExistente = await model.buscarPorEmail(email)
        if (usuarioExistente) {
            return res.status(400).json({mensagem: 'Email já existe!'});
        }

        const novoUsuario = await model.criarUsuario(nome, email, senha);
        delete novoUsuario.senha

        return res.status(201).json({
            mensagem: "Usuário criado com sucesso", novoUsuario
        })

    } catch (error) {
        res.status(404).json({mensagem: "Ocorreu um erro!"})
    }
}

export async function login(req, res){
    const {email, senha} = req.body;
    
    try {
        const usuario = await model.buscarPorEmail(email, senha);
        const comparandoHash = bcrypt.compare(senha, usuario.senha);
        
        if(!comparandoHash){
            return res.status(401).json({mensagem: "Credenciais inválidas!"});
        }
        delete usuario.senha

        //Assinando o token
        const userToken = jwt.sign(
            usuario,
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN},
        );
        return res.json({token: userToken, usuario: usuario})
    } catch (error) {
        res.status(404).json({mensagem: "Ocorreu um erro: ", error})
    }
}

export async function atualizar(req, res){
    try {
        const {id} = req.params;
        const {nome, email, senha} = req.body;
        const usuarioExiste = await model.buscarPorId(id);
        if(!usuarioExiste){
            return res.status(400).json({mensagem: "Usuário não existe!"})
        }else{
            const usuarioAtualizado = await model.atualizarUsuario(id, nome, email, senha);
            res.status(200).json({mensagem: "Dados atualizados!", usuarioAtualizado})
        }
    } catch (error) {
        res.status(404).json({mensagem: "Ocorreu um erro: ", error})
    }
}