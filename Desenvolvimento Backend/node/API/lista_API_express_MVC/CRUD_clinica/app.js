import express from 'express';
import * as pacienteController from './src/controllers/paciente.controller.js'


const app = express();
app.use(express.json());

app.get('/pacientes', pacienteController.listarPacientes);
app.post('/pacientes', pacienteController.cadastrarPaciente)




app.listen(3000, () => {
    console.log("Servido rodando em http://localhost:3000");
});