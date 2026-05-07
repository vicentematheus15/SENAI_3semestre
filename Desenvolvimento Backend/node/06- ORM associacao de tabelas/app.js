import 'dotenv/config';
import express from 'express';
import sequelize from './src/database/database.js';

const app = express();

app.use(express.json());

sequelize.sync({alter: true}).then(() => {
    app.listen(process.env.API_PORT, () => 
        console.log(`Servidor rodando em http://localhost:${process.env.API_PORT}`)
    );
});