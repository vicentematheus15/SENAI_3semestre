import 'dotenv/config';
import sequelize from './database/database.js';
import express from 'express';
import authRoutes from './routes/auth.routes.js';
import usuarioRoutes from './routes/usuario.routes.js';
import './models/usuario.model.js';
import { helmetconfig } from './config/helmet.js';
import { corsConfig } from './config/cors.js';



const app = express();


app.use(helmetconfig); //variavel com todas as configurações de segurança do helmet
app.use(corsConfig); //variavel com todas as configurações de segurança do cors

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/usuario', usuarioRoutes);

sequelize.sync({alter: true}).then(() => {
    app.listen(process.env.API_PORT, () => 
        console.log(`Servidor rodando em http://localhost:${process.env.API_PORT}`)
    );
});