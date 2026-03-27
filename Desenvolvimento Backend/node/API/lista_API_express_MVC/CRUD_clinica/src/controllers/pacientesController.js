import * as pacientesModel from '../models/pacientesModel.js'

export function listarPacientes(req, res){
    const listaPacientes = pacientesModel.listarPacientesDB()
    if(!listaPacientes){
        return res.status(404).json({mensagem: "Requisição não pode ser processada"})
    }
    return res.status(200).json(listaPacientes)
}

export function cadastrarPaciente(req, res){
    const {nome, telefone} = req.body;

    if(!nome){
        return res.status(400).json({mensagem: "O nome do paciente é obrigatório"})
    }

    const novoPaciente = pacientesModel.cadastrarPacienteDB(nome, telefone);
    return res.status(200).json(novoPaciente)
}