import { Usuario } from "../models/usuario.model.js";
import bcrypt from 'bcryptjs';

export async function cadastrar(req, res){
    try {
        const {nome, email, senha} = req.body;
        if(!nome || !email || !senha){
            return res.status(400).json({erro: 'Dados incompletos!'})
        }

        const emailExiste = await Usuario.findOne({where: { email } });
        if(emailExiste){
            return res.status(409).json({erro: 'E-mail já cadastrado'})
        }

        const senhaHash = await bcrypt.hash(senha, 10);

        const novoUsuario = await Usuario.create({
            nome: nome,
            email: email,
            senha: senhaHash
        });

        return res.status(201).json({
            id: novoUsuario.id,
            nome: novoUsuario.nome,
            email: novoUsuario.email,
            createdAt: novoUsuario.createdAt    
        })
        
    } catch (error) {
        return res.status(500).json(error);
    }
}