import 'dotenv/config';
import express from 'express';
import produtosRoutes from './src/routes/produtos.routes.js'

const app = express();
app.use(express.json());

app.use('/produtos', produtosRoutes)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);    
})