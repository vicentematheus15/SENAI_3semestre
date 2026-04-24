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

export async function getUserById(req, res){
    try {
        const userId = await User.findByPk(req.params.id)
        if(!userId){
            return res.status(404).json({erro: "Usuário não encontrado!"});
        }
        const userResponse = userId.toJSON();
        delete userResponse.senha;
        return res.status(201).json(userResponse);
        
    } catch (error) {
        return res.status(500).json(error);
    }
} 

export async function updateUser(req, res){
    try {
        const user = await User.findByPk(req.params.id);
        if(!user){
            return res.status(404).json({erro: "Usuário não enontrado!"})
        }
        await user.update(req.body); //altera o objeto que recebu os dados do usuário no banco
        //deleta a senha DA RESPOSTA NA REQUISIÇÃO
        const userResponse = user.toJSON();
        delete userResponse.senha;
        return res.status(200).json(userResponse)
    } catch (error) {
        return res.status(500).json(error);
    }
}

export async function deleteUser(req, res){
    try {
        const user = await User.findByPk(req.params.id);
        if(!user){
            return res.status(404).json({erro: "Usuário não encontrado!"})
        }
        await user.destroy(); //deleta o objeto que recebeu a linha do banco com os dados do usuario
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json(error);
    }
}

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