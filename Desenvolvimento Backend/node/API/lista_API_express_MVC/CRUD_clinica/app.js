import express from 'express';
import * as pacienteController from './src/controllers/paciente.controller.js'
import * as medicoController from './src/controllers/medico.controller.js'
import * as consultaController from './src/controllers/consulta.controller.js'


const app = express();
app.use(express.json());

app.get('/pacientes', pacienteController.listarPacientes);
app.post('/pacientes', pacienteController.cadastrarPaciente);

app.get('/medicos', medicoController.listarMedicos);




app.listen(3000, () => {
    console.log("Servido rodando em http://localhost:3000");
});