import 'dotenv/config';
import express from 'express';

const app = express();
app.use(express.json());

app.use('/usuarios', );


const port = process.env.PORT
app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
})