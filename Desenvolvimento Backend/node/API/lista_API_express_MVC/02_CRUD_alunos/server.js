import express from 'express';
import * as controller from './controller/controllerAlunos.js'

const app = express();
app.use(express.json());





app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
})