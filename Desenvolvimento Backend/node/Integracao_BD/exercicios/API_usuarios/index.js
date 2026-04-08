import 'dotenv/config';
import express from 'express';
import usuariosRoutes from './src/routes/usuarios.routes.js'

const app = express();
app.use(express.json());

app.use('/usuarios', usuariosRoutes);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})