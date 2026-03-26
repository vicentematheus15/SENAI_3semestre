import express from 'express';
import * as controller from './controller/controllerProdutos.js'

const app = express();
app.use(express.json());

app.get('/produtos', controller.listarProdutos)

app.get('/produtos/:id', controller.mostrarProduto)

app.listen(3000, () =>{
    console.log("Servidor rodando em http://localhost:3000");
})