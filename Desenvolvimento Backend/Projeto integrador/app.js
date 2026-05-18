import 'dotenv/config';
import sequelize from './src/database/database.js';
import express from 'express';
import authRoutes from './src/routes/auth.routes.js';
import usuarioRoutes from './src/routes/user.routes.js';
import classRoutes from './src/routes/class.routes.js';
import studentRoutes from './src/routes/student.routes.js';
import cors from 'cors';
import { limitadorGlobal } from './src/config/rateLimit.js';
import { helmetConfig } from './src/config/helmet.js';
import { corsConfig } from './src/config/cors.js';

//importa o model para garantir registro no sequelize
import './src/models/user.model.js';
import './src/models/class.model.js';
import './src/models/student.model.js'

const app = express();

app.use(cors(corsConfig)); //variavel com todas as configurações de segurança do cors
app.use(helmetConfig); //variavel com todas as configurações de segurança do helmet
app.use(limitadorGlobal); //limitador global de requisições

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/aluno', studentRoutes)
app.use('/turma', classRoutes);

sequelize.sync({alter: true}).then(() => {
    app.listen(process.env.API_PORT, () => 
        console.log(`Servidor rodando em http://localhost:${process.env.API_PORT}`)
    );
});