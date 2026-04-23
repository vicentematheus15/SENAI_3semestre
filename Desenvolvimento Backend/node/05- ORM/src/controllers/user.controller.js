import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export async function getAllUsers(req, res) {
    try {
        //puxando todos os dados da tabela
        const allUser = await User.findAll();
        return res.status(201).json(allUser)

    } catch (error) {
        return res.status(500).json(error);
    }
}

export async function createUser(req, res) {
    const {nome, email, senha} = req.body;
    try {
        const senhaHash = bcrypt.hash(senha, 10)
        const createdUser = await User.create({
            nome: nome,
            email: email,
            senha: senhaHash
        })
        delete createUser.senhaHash
        return res.status(201).json({
            mensagem: "Usuário criado!",
            user: createdUser
        })

    } catch (error) {
        return res.status(500).json(error);
    }
}