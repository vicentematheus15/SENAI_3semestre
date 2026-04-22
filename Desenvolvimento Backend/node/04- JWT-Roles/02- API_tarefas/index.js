import 'dotenv/config';
import express from 'express';
import usuarioRoutes from './src/routes/usuario.routes';
import tarefaRoutes from './src/routes/tarefa.routes';

const app = express();
app.use(express.json());

app.use('/usuarios',  usuarioRoutes);
app.use('/tarefas', tarefaRoutes);



const port = process.env.PORT
app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
})