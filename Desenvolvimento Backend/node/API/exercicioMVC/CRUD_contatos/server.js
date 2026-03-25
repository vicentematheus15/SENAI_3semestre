import express from 'express';
import * as controller from './controller/contatosController.js'

const app = express();
app.use(express.json());


app.get('/contatos', controller.listarUserController);
app.get('/contatos/:id', controller.listarUserIdController);

app.post('/contatos', controller.criarUser);

app.put('/contatos/:id', controller.atualizarUser);

app.delete('/contatos/:id', controller.deletarUser);



app.listen(3000, ()=>{
    console.log("Servidor iniciado em http//localhost:3000")
});