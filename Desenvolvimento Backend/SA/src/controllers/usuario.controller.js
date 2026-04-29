import { Usuario } from "../models/usuario.model.js";
import jwt from 'jsonwebtoken';


export async function perfil(req, res){
    try {
        //busca o usuário logado pela id que está na requisição e exclui o atributo senha da resposta
        const usuario = await Usuario.findByPk(req.usuario.id, { attributes: { exclude: ['senha'] } });
        //responde com os dados do usuario, menos a senha
        return res.status(200).json(usuario)
    
    } catch (error) {
        return res.status(500).json(error);
    }
}

export async function desativarConta(req, res) {
    try {
        const 
    } catch (error) {
        return res.status(500).json(error);
    }
}