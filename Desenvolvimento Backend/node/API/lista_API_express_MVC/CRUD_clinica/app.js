import express from 'express';
import {medicosRoutes} from './src/routes/medicosRoutes.js';
import {pacientesRoutes} from './src/routes/pacientesRoutes.js';
import {consultasRoutes} from './src/routes/consultasRoutes.js';


const app = express();
app.use(express.json());


app.use('/pacientes', pacientesRoutes);
app.use('/medicos', medicosRoutes);
app.use('/consultas', consultasRoutes);



app.listen(3000, () => {
    console.log("Servido rodando em http://localhost:3000");
});