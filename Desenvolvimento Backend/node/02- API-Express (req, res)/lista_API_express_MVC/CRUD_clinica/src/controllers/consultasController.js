import * as consultasModel from '../models/consultasModel.js'

export function listarConsultas(req, res){
    const listaConsultas = consultasModel.listarConsultasDB();
    if(!listaConsultas || listaConsultas.length === 0){
        return res.status().json(listaConsultas)
    }
    return res.status(200).json(listaConsultas)
}

export function agendarConsulta(req, res){
    const {pacienteId, medicoId, data, hora} = req.body;
    if(!pacienteId || !medicoId || !data || !hora){
    return res.status(404).json({mensagem: "Campos obrigatórios não preenchidos"})      
    }

    const novaConsulta = consultasModel.agendarConsultaDB(pacienteId, medicoId, data, hora);
    if(!novaConsulta){
        return res.status(400).json({mensagem: "Médico ou paciente não existem!"})
    }
    return res.status(201).json({
        mensagem: "Consulta agendada com sucesso",
        data: novaConsulta
    });
}

export function cancelarConsulta(req, res){
    const {id} = req.params;
    const consultaParaCancelar = consultasModel.cancelarConsultaDB(id);
    if(!consultaParaCancelar){
        return res.status(404).json({mensagem: "Consulta não encontrada!"})
    }
    return res.status(200).json({mensagem: "Consulta cancelada com sucesso!"})
}