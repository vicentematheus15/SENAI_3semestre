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
        delete novoCliente.senha

        return res.status(201).json({
            mensagem: 'Cliente criado com sucesso', 
            cliente: novoCliente
        })
        console.log(novoCliente);
        

    } catch (error) {
         res.status(500).json({ error: error.message });
    }
}