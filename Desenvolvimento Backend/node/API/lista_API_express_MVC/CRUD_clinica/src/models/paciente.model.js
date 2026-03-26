import { pacientes } from "./exemploDB.js";

export function listarPacientesDB(){
    //select * para pegar todos ospacientes do banco
    return pacientes
}

export function cadastrarPacienteDB(nome, telefone){
    const novoPaciente = {id: pacientes.length+1, nome: nome, telefone: telefone};
    pacientes.push(novoPaciente);
    return novoPaciente
}