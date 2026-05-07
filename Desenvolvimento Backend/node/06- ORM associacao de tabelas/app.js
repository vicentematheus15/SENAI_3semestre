import 'dotenv/config';
import express from 'express';
import sequelize from './src/database/database.js';
import alunoRoutes from './src/routes/aluno.routes.js';

//importa o model para garantir registro no sequelize
import './src/models/aluno.model.js'

const app = express();

app.use(express.json());

app.use('/aluno', alunoRoutes);

sequelize.sync({alter: true}).then(() => {
    app.listen(process.env.API_PORT, () => 
        console.log(`Servidor rodando em http://localhost:${process.env.API_PORT}`)
    );
});