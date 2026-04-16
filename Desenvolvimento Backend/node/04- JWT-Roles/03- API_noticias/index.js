import 'dotenv/config';
import expres from 'express';
import authRoutes from './src/routes/noticia.routes.js';
import authRoutes from './src/routes/usuario.routes.js';


const app = expres();
app.use(expres.json());

app.use('/noticias', authRoutes);
app.use('/usuarios', authRoutes);

const port = process.env.DB_PORT;

app.use(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
    
})