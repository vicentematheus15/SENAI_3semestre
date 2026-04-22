import 'dotenv/config';
import express from 'express';
import router from './src/routes/usuario.routes';

const app = express();
app.use(express.json());

app.use('/usuarios',  );
app.use('/tarefas', );



const port = process.env.PORT
app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
})