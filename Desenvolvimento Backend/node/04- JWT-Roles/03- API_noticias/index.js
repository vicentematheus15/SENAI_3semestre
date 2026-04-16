import 'dotenv/config';
import expres from 'express';
import noticiaRoutes from './src/routes/noticia.routes.js';
import usuarioRoutes from './src/routes/usuario.routes.js';


const app = expres();
app.use(expres.json());

app.use('/usuarios', usuarioRoutes);
app.use('/noticias', noticiaRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})