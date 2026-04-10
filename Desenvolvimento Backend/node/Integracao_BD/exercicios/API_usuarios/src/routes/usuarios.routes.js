import { Router } from "express";
import * as controller from '../controllers/usuarios.controller.js'
import * as middleware from '../middleware/auth.middleware.js'

const router = Router();

router.post('/register', controller.cadastrar);
router.post('/login', controller.login);
router.put('/:id', middleware.autenticarJWT, controller.atualizar);

export default router