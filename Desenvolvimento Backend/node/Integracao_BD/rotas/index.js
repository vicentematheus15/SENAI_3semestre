import express from 'express';
import {routerContatos} from './router/contatosRouter.js'

const app = express();
app.use(express.json());

app.use('/contatos', routerContatos);


app.listen(3000, () => {
    console.log('Aplicação rodando em: http://localhost:3000');
});