import * as consultaModel from '../models/consulta.model.js'

export function listarConsultas(req, res){
    const listaConsultas = consultaModel.listarConsultasDB();
    if(!listaConsultas || listaConsultas.length === 0){
        return res.status(404).json({mensagem: "Nenhuma consulta encontrada!"})
    }
    return res.status(200).json(listaConsultas)
}