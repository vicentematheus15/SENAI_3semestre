import 'dotenv/config';
import express from 'express';
import sequelize from './database/db.js'

const app = express();
app.use(express.json());

const port = process.env.API_PORT || 3000

sequelize.sync({ alter: true }).then(() => {
    app.listen(port, () =>{
        console.log(`Servidor rodando em http://localhost:${port}`);
    })
});