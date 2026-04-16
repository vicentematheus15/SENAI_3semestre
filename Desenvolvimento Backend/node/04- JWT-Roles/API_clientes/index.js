import 'dotenv/config';
import express from 'express';
import authRoutes from './src/routes/cliente.routes.js';

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})