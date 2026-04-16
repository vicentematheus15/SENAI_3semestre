import express from 'express';
import * as controller from './src/controllers/tarefasController.js'

const app = express();
app.use(express.json());

app.get('/tarefas', controller.listarTarefas);
app.post('/tarefas', controller.criarTarefa);
app.put('/tarefas/:id', controller.atualizarTarefa);
app.delete('/tarefas/:id', controller.deletarTarefa);



app.listen(3000, () => {
    console.log("Servidor rodando em http//localhost:3000")

})