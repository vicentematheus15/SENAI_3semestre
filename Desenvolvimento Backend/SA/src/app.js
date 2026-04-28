import 'dotenv/config';
import sequelize from './database/database.js';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import './models/usuario.model.js';

const app = express();

// Permite qualquer origem em desenvolvimento
// Em produção, substitua '*' pela URL do front-end
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['contentType', 'Authorization']
}));

app.use(express.json());

app.use('/auth', authRoutes);

sequelize.sync({alter: true}).then(() => {
    app.listen(process.env.API_PORT, () => 
        console.log(`Servidor rodando em http://localhost:${process.env.API_PORT}`)
    );
});