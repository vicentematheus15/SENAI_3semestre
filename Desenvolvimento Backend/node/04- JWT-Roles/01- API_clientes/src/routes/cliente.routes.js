import { Router } from 'express';
import { autenticar } from '../middlewares/auth.middleware.js';
import * as controller from '../controllers/cliente.controller.js';

const router = Router();

router.post('/cadastro', controller.cadastro);
router.post('/login', controller.login);

router.get('/perfil', autenticar, controller.perfil); //rota privada

export default router;