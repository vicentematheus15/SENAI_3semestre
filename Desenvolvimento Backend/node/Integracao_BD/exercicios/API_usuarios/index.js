import 'dotenv/config';
import express from 'express';

const app = express();
app.use(express.json());

app.use('/usuarios', );

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})