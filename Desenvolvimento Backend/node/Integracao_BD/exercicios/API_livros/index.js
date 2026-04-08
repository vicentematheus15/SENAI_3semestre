import 'dotenv/config';
import express from 'express';
import routerLivros from './src/routes/routerLivros.js';

const app = express();
app.use(express.json());


app.use('/livros', routerLivros);

const PORT = process.env.PORT_DB

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost', PORT);    
});