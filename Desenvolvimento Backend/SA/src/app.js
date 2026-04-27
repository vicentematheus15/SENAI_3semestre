import 'dotenv/config';
import sequelize, { Sequelize } from './database/database.js';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';

const app = express();

// Permite qualquer origem em desenvolvimento
// Em produção, substitua '*' pela URL do front-end
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['contentType', 'Authorization']
}));

app.use(express.json());

app.use('/auth', authRoutes)

const port = process.env.API_PORT;

sequelize.sync({alter: true}, () =>{
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    })
})