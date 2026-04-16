import * as model from '../models/noticia.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function buscar(req, res){
    try {
        const noticias = await model.buscarTodos();
        return res.status(200).json(noticias)
    } catch (error) {
        res.json({ error: error.message });
    }
}

export async function criar(req, res){
    const {titulo, conteudo} = req.body;
    try {
        const noticia = await model.criar(titulo, conteudo);
        return res.status(201).json({
            mensagem: 'Notícia criada com sucesso!',
            noticia: noticia
        })

    } catch (error) {
        res.json({ error: error.message });
    }
}