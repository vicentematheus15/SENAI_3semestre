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

// 2. Médicos (6 registros)
export const medicos = [
  { id: 1, nome: "Dr. Roberto Arantes", especialidade: "Cardiologia" },
  { id: 2, nome: "Dra. Juliana Costa", especialidade: "Ortopedia" },
  { id: 3, nome: "Dr. Marcos Vinícius", especialidade: "Ortopedia" },
  { id: 4, nome: "Dra. Beatriz Silva", especialidade: "Dermatologia" },
  { id: 5, nome: "Dr. Samuel Luz", especialidade: "Cardiologia" },
  { id: 6, nome: "Dra. Fernanda Mel", especialidade: "Neurologia" }
];

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