import express from 'express';
import * as pacienteController from './src/controllers/pacienteController.js';
import * as medicoController from './src/controllers/medicoController.js';
import * as consultaController from './src/controllers/consultaController.js';


const app = express();
app.use(express.json());

app.get('/pacientes', pacienteController.listarPacientes);
app.post('/pacientes', pacienteController.cadastrarPaciente);

app.get('/medicos', medicoController.listarMedicos);

app.get('/consultas', consultaController.listarConsultas);
app.post('/consultas', consultaController.agendarConsulta);



app.listen(3000, () => {
    console.log("Servido rodando em http://localhost:3000");
});