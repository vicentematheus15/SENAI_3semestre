import { pacientes } from "./paciente.model.js";
import { medicos } from "./medico.model.js";

export function listarConsultasDB(){
    const listaConsultaComNomes = () => {
        return consultas.map(consulta => {
            const paciente = pacientes.find(paciente => paciente.id === consulta.pacienteId);
            const medico = medicos.find(medico => medico.id === consulta.medicoId);
            return {
                ...consulta,
                nomePaciente: paciente ? paciente.nome : "Paciente não encontrado",
                nomeMedico: medico ? medico.nome : "Médico não encontrado" 
            }
        })
    }

    return listaConsultaComNomes
}



// 3. Consultas (5 registros) com Data, Hora e Status separados
export const consultas = [
  { 
    id: 1, 
    pacienteId: 3, 
    medicoId: 1, 
    data: "2026-03-27", 
    hora: "10:00", 
    status: "agendado" 
  },
  { 
    id: 2, 
    pacienteId: 1, 
    medicoId: 4, 
    data: "2026-03-27", 
    hora: "14:30", 
    status: "agendado" 
  },
  { 
    id: 3, 
    pacienteId: 8, 
    medicoId: 2, 
    data: "2026-03-25", 
    hora: "09:00", 
    status: "cancelado" 
  },
  { 
    id: 4, 
    pacienteId: 5, 
    medicoId: 6, 
    data: "2026-03-20", 
    hora: "11:15", 
    status: "realizado" 
  },
  { 
    id: 5, 
    pacienteId: 2, 
    medicoId: 3, 
    data: "2026-03-30", 
    hora: "16:00", 
    status: "agendado" 
  }
];