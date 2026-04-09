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

export async function login(req, res){
    try {
        const {email, senha} = req.body;
        const loginRealizado = await model.buscarPorEmail(email, senha);
        if(loginRealizado === true){
            res.status(200).json({mensagem: "Usuário autenticado!"})
        }else{
            res.status(401).json({mensagem: "Email ou senha incorretos!"})
        }
    } catch (error) {
        res.status(404).json({mensagem: "Ocorreu um erro: ", error})
    }
}

export async function atualizar(req, res){
    try {
        const {id} = req.params;
        const {nome, email, senha} = req.body;
        const usuarioExiste = await model.buscarPorId(id);
        if(usuarioExiste === false){
            return res.status(400).json({mensagem: "Usuário não existe!"})
        }else{
            const usuarioAtualizado = await model.atualizarUsuario(id, nome, email, senha);
            res.status(200).json({mensagem: "Dados atualizados!"})
        }
    } catch (error) {
        res.status(404).json({mensagem: "Ocorreu um erro: ", error})
    }
}