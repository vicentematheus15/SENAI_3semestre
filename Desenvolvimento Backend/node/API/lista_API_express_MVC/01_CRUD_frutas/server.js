import express from 'express';
import * as controller from './controller/controllerFrutas.js'

const app = express();
app.use(express.json());

app.get('/frutas', controller.listarFrutas);
app.get('/frutas/:id', controller.mostrarFruta);


app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
})