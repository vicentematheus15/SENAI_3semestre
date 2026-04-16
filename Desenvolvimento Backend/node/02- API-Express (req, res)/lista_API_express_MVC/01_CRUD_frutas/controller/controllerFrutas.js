import * as model from '../model/modelFrutas.js';

export function listarFrutas(req, res){
    const listaFrutas = model.listarFrutasDB();
    if (!listaFrutas){
        return res.status(404).json({mensagem: "Requisição não pode ser processada!"});
    }
    return res.status(200).json(listaFrutas);
}

export function mostrarFruta(req, res){
    const {id} = req.params;
    const fruta = model.mostrarFrutaDB(id);
    if(!fruta){
        return res.status(404).json({mensagem: "Fruta não encontrada!"});
    }
    return res.status(200).json(fruta);
}