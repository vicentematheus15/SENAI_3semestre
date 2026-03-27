import { pacientes } from "./pacientesModel.js";
import { medicos } from "./medicosModel.js";

export function listarConsultasDB(){
    return consultas.map(consulta => {
        const paciente = pacientes.find(paciente => paciente.id === consulta.pacienteId);
        const medico = medicos.find(medico => medico.id === consulta.medicoId);
        return {
            ...consulta,
            nomePaciente: paciente ? paciente.nome : "Paciente não encontrado",
            nomeMedico: medico ? medico.nome : "Médico não encontrado" 
        }
    });
}

export function agendarConsultaDB(pacienteId, medicoId, data, hora){
  const pacienteExiste = pacientes.find(paciente => paciente.id === pacienteId)
  const medicoExiste = medicos.find(medico => medico.id === medicoId)
  if(!pacienteExiste || !medicoExiste){
    return null
  }

  const novaConsulta = {id: consultas.length+1, pacienteId: pacienteId, medicoId: medicoId, data: data, hora: hora, status: "agendada"}
  consultas.push(novaConsulta);
  return novaConsulta
}



// 3. Consultas (5 registros) com Data, Hora e Status separados
export const consultas = [
  { 
    id: 1, 
    pacienteId: 3, 
    medicoId: 1, 
    data: "2026-03-27", 
    hora: "10:00", 
    status: "agendada" 
  },
  { 
    id: 2, 
    pacienteId: 1, 
    medicoId: 4, 
    data: "2026-03-27", 
    hora: "14:30", 
    status: "agendada" 
  },
  { 
    id: 3, 
    pacienteId: 8, 
    medicoId: 2, 
    data: "2026-03-25", 
    hora: "09:00", 
    status: "cancelada" 
  },
  { 
    id: 4, 
    pacienteId: 5, 
    medicoId: 6, 
    data: "2026-03-20", 
    hora: "11:15", 
    status: "realizada" 
  },
  { 
    id: 5, 
    pacienteId: 2, 
    medicoId: 3, 
    data: "2026-03-30", 
    hora: "16:00", 
    status: "agendada" 
  }
];