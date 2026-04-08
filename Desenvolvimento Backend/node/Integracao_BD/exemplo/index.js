import express from 'express';
import {routerContatos} from './router/contatosRouter.js'
import 'dotenv/config';

const app = express();
app.use(express.json());

app.use('/contatos', routerContatos);

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
    console.log('Aplicação rodando em: http://localhost:', PORT);
});