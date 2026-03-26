import * as medicoModel from '../models/medico.model.js'

export function listarMedicos(req, res){
    const {especialidade} = req.query;
    let listaMedicos = medicoModel.listarMedicosDB();
    if(!listaMedicos){
        return res.status(404).json({mensagem: "Requisição não pode ser processada!"})
    }

    if(especialidade){
        listaMedicos = listaMedicos.filter(medico => medico.especialidade.toLowerCase() == especialidade.toLowerCase())
    }

    if(especialidade && listaMedicos.length === 0){
        return res.status(404).json({mensagem: "Não há nenhum médico com essa especialidade"})
    }

    return res.status(200).json(listaMedicos)
}