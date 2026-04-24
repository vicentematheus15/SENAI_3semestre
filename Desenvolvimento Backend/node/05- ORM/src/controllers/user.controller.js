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
    try {
        const {nome, email, senha} = req.body;
        const senhaHash = await bcrypt.hash(senha, 10)
        const createdUser = await User.create({
            nome: nome,
            email: email,
            senha: senhaHash
        });

        //Deletar a senha DA RESPOSTA DA REQUISIÇÃO
        const userResponse = createdUser.toJSON();
        delete userResponse.senha;

        return res.status(201).json({
            mensagem: "Usuário criado!",
            user: userResponse
        })

    } catch (error) {
        return res.status(500).json(error);
    }
};

export async function login(req, res){
    try {
        const {email, senha} = req.body;
        
        const user = await findUserByEmail(email);
        if(!user){
            res.status(401).json({mensagem: "Usuário não encontrado"})
        }

        const comparandoHash = await bcrypt.compare(senha, user.senha);
        if(!comparandoHash){
            return res.status(401).json({mensagem: "Credenciais inválidas!"})
        }
        //FAZER LOGIN POR ULTIMO
        return res.status()
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

export async function findUserByEmail(email){
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        return user
    
    } catch (error) {
        console.error(error);
        throw error;
    }
} 

export async function getUserById(req, res){
    try {
        const userId = await User.findByPk(req.params.id)
        return res.status(201).json(userId)
    
    } catch (error) {
        return res.status(500).json(error);
    }
} 

