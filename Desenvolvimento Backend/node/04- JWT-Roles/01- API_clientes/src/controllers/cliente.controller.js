import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as model from '../models/cliente.model.js'

export async function cadastro(req, res) {
    const {nome, email, senha} = req.body;
    try {
        //Confere se o email ja existe
        const emailExiste = await model.buscaPorEmail(email);
        if(emailExiste){
             return res.status(400).json({ message: 'Email já existe'})
        }
        
        const novoCliente = await model.criar(nome, email, senha);

        return res.status(201).json({
            mensagem: 'Cliente criado com sucesso', 
            cliente: novoCliente
        })
        console.log(novoCliente);
        

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function login(req, res){
    const {email, senha} = req.body;
    try {
        const usuario = await model.buscaPorEmail(email);
        if(!usuario){
            return res.status(401).json({ message: 'Impossivel fazer login' });
        }
        //Comparando a senha que o usuario digitou (senha) com a que retorna do banco caso encontre o usuario(usuario.senha)
        const comparandoHash = await bcrypt.compare(senha, usuario.senha_hash);
        if(!comparandoHash){
            return res.status(401).json({message: 'Credenciais inválidas' });
        }
        delete usuario.senha_hash //apagando senha do usuario que vem da busca, por segurança

        //Assinando token
        const tokenUsuario = jwt.sign(
            {id: usuario.id, nome: usuario.nome},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN},
        );
        return res.json({token: tokenUsuario, usuario: usuario});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function perfil(req, res){
    return res.json(req.usuario);
}