import 'dotenv/config';
import express from 'express';
import sequelize from './database/db.js'
import router from './routes/user.routes.js';
//Importar model para garantir registro no sequelize;
import './models/user.model.js'

const app = express();
app.use(express.json());

app.use('/users', router);

const port = process.env.API_PORT || 3000

sequelize.sync({ alter: true }).then(() => {
    app.listen(port, () =>{
        console.log(`Servidor rodando em http://localhost:${port}`);
    })
});