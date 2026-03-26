import express from 'express';
import * as controller from './controller/controllerAlunos.js'

const app = express();
app.use(express.json());


app.get('/alunos', controller.listarAlunos);
app.post('/alunos', controller.criarAluno);


app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
})