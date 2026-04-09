import * as model from '../models/usuario.model.js'

export async function cadastrar(req, res){
    try {
        const {nome, email, senha} = req.body;
        if(!nome || !email || !senha){
            res.status(422).json({mensagem: "Dados incompletos!"})
        }else{
            const novoUsuario = await model.criarUsuario(nome, email, senha);
            res.status(201).json(novoUsuario)
        }
    } catch (error) {
        res.status(404).json({mensagem: "Ocorreu um erro!"})
    }
}

