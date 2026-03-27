// import { pacientes } from "./exemploDB.js";

export function listarPacientesDB(){
    //select * para pegar todos ospacientes do banco
    return pacientes
}

export function cadastrarPacienteDB(nome, telefone){
    const novoId = pacientes.length > 0
    ? pacientes[pacientes.length - 1].id + 1 
    : 1;
    const novoPaciente = {id: novoId, nome: nome, telefone: telefone};
    pacientes.push(novoPaciente);
    return novoPaciente
}


// 1. Pacientes (8 registros)
export const pacientes = [
  { id: 1, nome: "Ana Souza", telefone: "(48) 99123-4567" },
  { id: 2, nome: "Bruno Oliveira", telefone: "(48) 99876-5432" },
  { id: 3, nome: "Carla Mendes", telefone: "(48) 98765-1234" },
  { id: 4, nome: "Diego Santos", telefone: "(48) 97654-3210" },
  { id: 5, nome: "Elena Pereira", telefone: "(48) 96543-0987" },
  { id: 6, nome: "Fabio Lima", telefone: "(48) 95432-1098" },
  { id: 7, nome: "Gisele Rocha", telefone: "(48) 94321-0123" },
  { id: 8, nome: "Hugo Ferreira", telefone: "(48) 93210-9876" }
];