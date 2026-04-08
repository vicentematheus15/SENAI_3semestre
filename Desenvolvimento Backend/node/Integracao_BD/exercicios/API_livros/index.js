import 'dotenv/config';
import express from 'express';
import livrosRoutes from './src/routes/livros.js';

const app = express();
app.use(express.json());


app.use('/livros', livrosRoutes);

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);    
});