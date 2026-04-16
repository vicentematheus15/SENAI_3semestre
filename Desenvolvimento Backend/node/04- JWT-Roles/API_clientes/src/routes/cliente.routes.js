import { Router } from 'express';
//import autenticarJWT from '../middlewares/auth.middleware.js';
import * as controller from '../controllers/cliente.controller.js';

const router = Router();

router.post('/clientes/cadastro', controller.cadastro);

export default router;